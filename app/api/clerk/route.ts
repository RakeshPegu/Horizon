import { WebhookEvent } from "@clerk/nextjs/server";
import type { UserJSON } from "@clerk/backend";
import prisma from "@/lib/prisma";
import {Webhook} from 'svix'
import { headers } from "next/headers";
import { slidingWindowRateLimiter } from "@/proxy";
import { NextRequest, NextResponse } from "next/server";
const webhookSecret = process.env.CLERK_WEBHOOK_SECRET || ``
async function validateRequest(request:NextRequest) {
  const payloadString = await request.text()
  const headerPayload = await headers()
  const svixHeaders = {
    'svix-id': headerPayload.get('svix-id')!,
    'svix-timestamp': headerPayload.get('svix-timestamp')!,
    'svix-signature': headerPayload.get('svix-signature')!,
  }
  const wh = new Webhook(webhookSecret)
  return wh.verify(payloadString, svixHeaders) as WebhookEvent
  
}
export async function POST(request: NextRequest) {
  try {
      await slidingWindowRateLimiter(request)
      const payload = await validateRequest(request)
      if (payload.type === "user.created") {
      const data = payload.data as UserJSON;
      const primaryEmail = data.email_addresses.find(
        (email) => email.id === data.primary_email_address_id
      )?.email_address;

      await prisma.user.create({
        data: {
          clerk_userId: data.id,
          email: primaryEmail!,
        },
      });
    }
    return NextResponse.json({ message: 'Received' });    
  } catch (error) {
    console.log('error occured during data sync', error)
    return NextResponse.error()
    
  }

}



