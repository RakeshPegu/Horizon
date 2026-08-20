import { clerkMiddleware} from '@clerk/nextjs/server'

import {Redis} from '@upstash/redis'
import {Ratelimit} from '@upstash/ratelimit'
import { NextRequest, NextResponse } from 'next/server'
const redis = new Redis({
    url:process.env.UPSTASH_REDIS_REST_URL,
    token:process.env.UPSTASH_REDIS_REST_TOKEN
})
const ratelimit = new Ratelimit({
    redis,
    limiter:Ratelimit.slidingWindow(100, "1 m"),
    analytics:true,
    prefix: "@upstash/ratelimit"
})
export async function slidingWindowRateLimiter(request:NextRequest) {
    const ip = request.headers.get('x-forwarded-for')?.split(", ")[0]?.trim() || 'unknown'

    if(ip === 'unknown'){
      return NextResponse.json({
        success:false,
        message:"IP address is required"
      },{
        status:400
      })
    }
    const {success} = await ratelimit.limit(ip)
    if(!success){
      return NextResponse.json({
        success:false,
        message:"Too many requests"
      },{
        status:429
      })
      
    }
    return NextResponse.next()
    
}

export default clerkMiddleware()
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
    // Always run for Clerk-specific frontend API routes
    '/__clerk/(.*)',
  ],
}