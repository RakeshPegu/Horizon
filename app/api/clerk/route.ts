import { prisma } from '@/prisma/seed'
import {WebhookEvent} from '@clerk/nextjs/server'
export async function POST(request:Request) {
    const payload: WebhookEvent = await request.json()
    console.log('this is the payload', payload)
    await prisma.user.create({
        data:{
            clerk_userId:payload?.data?.id! ,
            email:payload?.data.id!,       
          
        }
    })

    return Response.json({message:""})
    
}
export async function GET() {
    return Response.json({message:"Hello world"})
    
}