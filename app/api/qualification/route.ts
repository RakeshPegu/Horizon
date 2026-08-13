import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    try {
        const body = await request.json()
        const userInfo = await prisma.qualification.create({
            data: body.formDetail
        })    
        const userId = userInfo.id
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