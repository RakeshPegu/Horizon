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

        const qualification = await prisma.qualification.create({
            data: {
                name: body.formDetail.name,
                email: body.formDetail.email,
                budget: body.formDetail.budget,
                company: body.formDetail.company,
                description:body.formDetail.description,

                user: {
                    connect: {
                        id: user.id,
                    },
                },
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
                message: "Something went wrong",
            },
            {
                status: 500,
            }
        );
    }
}