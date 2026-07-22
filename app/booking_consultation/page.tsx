import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {Clock, Video, MessageCircle} from 'lucide-react'

export default function BookingConsultation(){
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
    return(
        <section className="flex justify-center pt-6">
            <Card className="flex justify-center  w-[80%] gap-12 py-14 ">
                <CardHeader className="flex flex-col items-center gap-2">
                    <CardTitle className="text-3xl"> Book a free 20-minute consultation  </CardTitle>
                    <CardContent className="text-lg">Tell me about your project and pick a time that works for you</CardContent>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                    <div className="flex gap-4">
                       {options.map((option, index)=>(
                        <div className="rounded-2xl flex flex-col gap-2 items-center md:px-14 ring-1 p-4">
                            <span><option.icon className="text-blue-600"/> </span>
                            <h3 className="text-xl font-bold">{option.time}</h3>
                            <p>{option.description}</p>
                        </div>
                       ))}
                    </div>
                  <Button className="h-12 w-[45%] mt-6 rounded-xl text-base font-medium bg-zinc-900  text-white hover:bg-zinc-800 transition ">  Book a consultation →   </Button>
                    <div className="flex justify-center items-center gap-4 text-lg"><MessageCircle className="text-accent"/><p>Prefer WhatsApp first? <strong className="hover:underline pl-2 cursor-pointer "> Chat before booking </strong></p></div>
                </CardContent>
            </Card>


        </section>
    )
}