import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import crypto from 'node:crypto'

export async function POST(request:NextRequest){
    try {
        const signature = request.headers.get('x-cal-signature-256')
        console.log('this is the signatue')
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
        const payload = JSON.parse(rawBody)
        const {userId: clerkUserId} = await auth()
        if(!clerkUserId){
            return NextResponse.json({
                success:false,
                message:"Unauthorized"
            },{
                status:401
            })
        }
        console.log('this is the payload', payload)
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
        const scheduledMeetings = await prisma.scheduledMeeting.findMany({where:{userId:clerkUserId}})
        
        return NextResponse.json({
            success:true,
            scheduledMeetings            
        })
        
    } catch (error) {

        return NextResponse.json({
            success:false,
            message:error instanceof Error ? error.message : 'Something went wrong'
        },{
            status: 500
        })
        
    }
    
}