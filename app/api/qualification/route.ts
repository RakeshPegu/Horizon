import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    try {
        const body = await request.json()
        console.log('this is request body', body)
        return NextResponse.json({
            success:true,
            message:"Qualification received"

        })
        
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:"Something went wrong"
        },{
            status:500  
        })
        
    }
    
}