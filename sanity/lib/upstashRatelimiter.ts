import {Redis} from '@upstash/redis'
import {Ratelimit} from '@upstash/ratelimit'
import {headers} from 'next/headers'
const redis = new Redis({
    url:process.env.UPSTASH_REDIS_REST_URL,
    token:process.env.UPSTASH_REDIS_REST_TOKEN
})
const ratelimit = new Ratelimit({
    redis,
    limiter:Ratelimit.slidingWindow(1, "1 m"),
    analytics:true,
    prefix: "@upstash/ratelimit"
})
export async function slidingWindowRateLimiter() {
    const headerList = await headers()
    const formwardedFor = headerList.get('x-forwarded-for')
    const ip = formwardedFor ? formwardedFor.split(', ')[0]: '' 
    const {success} = await ratelimit.limit(ip)
    if(!success){
        return false
    }
    return true


    
}

