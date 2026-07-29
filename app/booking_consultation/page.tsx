"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {useAuth, useClerk} from '@clerk/nextjs'
import {Clock, Video, MessageCircle} from 'lucide-react'
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {Spinner} from '@/components/ui/spinner'


export default function BookingConsultation(){
    const router = useRouter()
    const {isSignedIn, isLoaded}  = useAuth()
     const {openSignIn} = useClerk();
    const [showBtn, setShowBtn] = useState(false)
    const options = [
        {   icon: Clock,
            time:"20 minutes",
            description:"Free discovery call"
        },
        {   
            icon: Video,
            time: "Google Meet",
            description:"Join from any device"
        }
    ]
    useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"quick-chat"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
      cal("on", {
        action:"bookingSuccessful",
        callback: (e)=>{
            setShowBtn(true)
        }


      })

    })();
  }, [])
  useEffect(()=>{
    if(isLoaded && !isSignedIn){
        openSignIn()
    }

  }, [isSignedIn, openSignIn, isLoaded])
  if(!isLoaded){
    return(
    <div className="h-[80vh] flex justify-center items-center">
         <Spinner/>

    </div>
    )
  }
  if (!isSignedIn) {
    return (
      <section className="flex relative  h-[90vh] flex-col items-center justify-center gap-4 py-20 text-center">
        <p className="text-lg">Please sign in to book your consultation.</p>
        <div className="flex gap-4">
          <button
            onClick={() => openSignIn()}
            className="rounded-full bg-blue-500 text-white px-6 py-2"
          >
            Sign in
          </button>
          <button
            onClick={() => router.push('/')}
            className="rounded-full ring-1 px-6 py-2"
          >
            Cancel
          </button>
        </div>
      </section>
    )
  }
    return(
              
        <section className="relative  flex justify-center gap-4 "> 
 
           <Card className="hidden md:flex justify-center md:flex-1/3 py- gap-20 ">                
                <CardHeader className="flex flex-col items-center gap-2">
                    <CardTitle className="text-3xl"> Book a free 20-minute consultation  </CardTitle>
                    <CardContent className="text-lg">Tell me about your project and pick a time that works for you</CardContent>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-10">
                    <div className="flex gap-4">
                       {options.map((option, index)=>( 
                        <div className="rounded-2xl flex flex-col gap-2 items-center md:px-14 ring-1 p-4" key={index}>
                            <span><option.icon className="text-blue-600"/> </span>
                            <h3 className="text-xl font-bold">{option.time}</h3>
                            <p>{option.description}</p>
                        </div>
                       ))}
                    </div>                  
                    <div className="flex justify-center items-center gap-4 text-lg" ><MessageCircle className="text-accent"/><p>Prefer WhatsApp first? <strong className="hover:underline pl-2 cursor-pointer "> Chat before booking </strong></p></div>
                </CardContent>
            </Card>
            <Cal namespace="quick-chat"
              calLink="rakesh-pegu-rr1epu/quick-chat"
              style={{width:"100%",height:"100%",}}
              className="overflow-hidden bg-white md:flex md:flex-1/2 rounded-2xl"
              config={{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}}   
              />
              <div className="absolute top-6  right-4  text-3xl " >
                <a 
                    className={`cursor-pointer font-bold
                    bg-blue-400 rounded-full w-10 h-10
                    justify-center items-center
                    ${showBtn ? 'flex': 'hidden'}`} 
                    href="/"> ×</a>
              </div> 
        </section>
    
    )
}