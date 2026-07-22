import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {CircleCheck} from 'lucide-react'

export default function BookingConfirmation(){
    const options = [
        {name:"Google Meet"},
        {name:"Email confirmation "},
        {name :"WhatsApp reminder"}
    ]
    return(
        <section className="flex justify-center overflow-y-hidden h-[85vh] ">
            <Card className="flex flex-col  gap-10 items-center w-[96%]">
                <span className="pt-10"><CircleCheck className="text-accent "/></span>
                <CardHeader className="flex flex-col  w-full items-center gap-4"> 
                    <CardTitle className="text-4xl">Consultation booked!</CardTitle>
                    <CardDescription className="text-lg">tue, 23 jul. 7:00 PM IST</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-6">
                    <p className="text-xl">You'll recieve a confirmation email with the Google Meet link and a short checklist so we can make the most of the call</p>
                    <div className="flex gap-4 justify-center">
                       {options.map((option, index)=>(
                        <span className="rounded-2xl border px-3 py-1 cursor-pointer hover:bg-foreground/20 transition-colors duration-300 ease-in-out ">{option.name}</span>
                       ))}
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}