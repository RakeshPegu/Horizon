import { prisma } from "@/prisma/seed";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    try {
        const body = await request.json()
        const userInfo = await prisma.qualification.create({
            data: body.formDetail
        })    
        console.log('this is the userInfo', userInfo)
        const userId = userInfo.id
        console.log('this is userId', userId)
        return NextResponse.json({
            success:true,
            userId:userId,        
            message:"Qualification received"

        })
        
    } catch (error) {
        console.log('error occured', error)
        return NextResponse.json({
            success:false,
            message:"Something went wrong"
        },{
            status:500  
        })
        
    }
    
}