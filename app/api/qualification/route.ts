import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

interface QualificationInput {
    formDetail: {
    name: string;
    email: string;
    budget: string;
    company: string;
    description:string
    }
}

export async function POST(request: NextRequest) {
    try {
        const { userId: clerkUserId } = await auth();
        console.log("this is the clerkUserId", clerkUserId)

        if (!clerkUserId) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Unauthorized",
                },
                {
                    status: 401,
                }
            );
        }

        const body: QualificationInput = await request.json();

        const user = await prisma.user.findUnique({
            where: {
                clerk_userId: clerkUserId,
            },
        });
     
        if (!user) {
            return NextResponse.json(
                {
                    success: false,
                    message: "User not found",
                },
                {
                    status: 404,
                }
            );
        }

        const qualification = await prisma.qualification.upsert({
            where:{userId:user.id},
            update:{                
                name: body.formDetail.name,
                email: body.formDetail.email,
                budget: body.formDetail.budget,
                company: body.formDetail.company,
                description:body.formDetail.description,
                userId:user.id
            },
            create: {
                name: body.formDetail.name,
                email: body.formDetail.email,
                budget: body.formDetail.budget,
                company: body.formDetail.company,
                description:body.formDetail.description,
                userId:user.id



            },
        });

        return NextResponse.json({
            success: true,
            message: "Qualification received",
            qualificationId: qualification.id,
        });

    } catch (error) {
        console.error("Error occurred:", error);

        return NextResponse.json(
            {
                success: false,
                message: error instanceof Error ? error.message : "Something went wrong",
            },
            {
                status: 500,
            }
        );
    }
}
export  async function GET(){
    try {
        const {userId: clerkUserId} = await auth()
        console.log('this is userId', clerkUserId)
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
            return NextResponse.json({success:false})
        }
        const existingQualfication = await prisma.qualification.findUnique({where:{userId:user.id}})
        if(!existingQualfication){
            return NextResponse.json({
                success:false,
                message:"Not found"
            },
            {
                status:404
            }
        )
        }
        return NextResponse.json({success:true, qualificationId:existingQualfication.id })
        
    } catch (error) {
        return NextResponse.json({success:false, message:error instanceof Error ? error.message : 'Something went wrong'})

        
    }
}