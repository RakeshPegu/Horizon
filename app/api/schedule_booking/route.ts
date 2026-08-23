
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import crypto from 'node:crypto'

export async function POST(request:NextRequest){
    try {        
        const signature = request.headers.get('x-cal-signature-256')
        const secret = process.env.CALCOM_WEBHOOK_SECRET
        if (!signature || !secret) {
         return NextResponse.json({ error: 'Missing signature or secret configuration' }, { status: 401 });
        }
        const rawBody = await request.text()
        const computedSignature = crypto.createHmac('sha256', secret)
                                        .update(rawBody)
                                        .digest('hex')
        const isVerified =crypto.timingSafeEqual(
            Buffer.from(signature, 'hex'),
            Buffer.from(computedSignature, 'hex')
         )
        if(!isVerified){
            return NextResponse.json({
                success:false,
                message:"Invalid signature"
            },{
                status:401
            })
        }
        const webhookData = JSON.parse(rawBody)
        console.log('this is the payload', webhookData)
        const metadata = webhookData?.payload.metadata
        const scheduleData = webhookData?.payload.organizer
        const existingQualfication = await prisma.qualification.findFirst({
            where:{id:metadata.qualificationId}
        })
        if(!existingQualfication){
            return NextResponse.json({
                success:false,
                message:"Qualication not found"
            },{
                status:404
            })
        }
        const newScheduledMeeting = await prisma.scheduledMeeting.create({
            data:{
                meetingLink:metadata.videoCallUrl,
                status:"SCHEDULED",
                email:scheduleData.email,
                name: scheduleData.name,
                scheduledDate:webhookData.payload.startTime,
                qualificationId:existingQualfication.id

            }

        })
        return NextResponse.json({
            success:true,
            message:"New meeting has been scheduled"
        },
        {
            status:201
        }
        )    
        
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:error instanceof Error ? error.message :"Something went wrong"
        },{
            status:500
        })
        
    }
    
}
export  async function GET() {
    try {
        const {userId: clerkUserId} = await auth()
        if(!clerkUserId){
            return NextResponse.json({
                success:false,
                message:"Unauthorized"
            },{
                status:401
            })

        }
        const user = await prisma.user.findUnique({where:{clerk_userId:clerkUserId}})
        if(!user){
            return NextResponse.json({
                success:false,
                message:"Not found"
            },
            {
                status:404
            }
        )
        }
        const existingQualfication = await prisma.qualification.findUnique({where:{userId:user.id}})
        if(!existingQualfication){
            return NextResponse.json({
                success:false,
                message:"Qualification not found"
            })
        }
        const scheduledMeetings = await prisma.scheduledMeeting.findMany({where:{qualificationId:existingQualfication.id}})
        return NextResponse.json({
            success:true,
            scheduledMeetings            
        })
        
    } catch (error) {
        console.log()

        return NextResponse.json({
            success:false,
            message:error instanceof Error ? error.message : 'Something went wrong'
        },{
            status: 500
        })
        
    }
    
}