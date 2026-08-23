"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  Clock3,
  Video,
  CheckCircle2,
} from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { QualificationFormContext } from "@/app/card/QualificationProvider";
import { useAuth, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";


export default function BookedMeeting() {
  const [bookings, setBooking] = useState([])
  const [error, setError] = useState<string | undefined>()
  const {openSignIn} = useClerk()
  const {isLoaded, isSignedIn} = useAuth()
  const {isOpen,handleFormState} = useContext(QualificationFormContext)
  const router = useRouter()
    useEffect(()=>{
    if(isLoaded && !isSignedIn){
      openSignIn()
    }
    
  },[ isSignedIn, isLoaded, openSignIn])
  useEffect(()=>{
    try {
      async function getBooking() {      
      const response = await fetch('/api/schedule_booking')
      const data = await response.json()
      setBooking(data.scheduledMeetings)
      }
      getBooking()
        
      } catch (error) {
        if(error instanceof Error){
          setError(error.message!)
        }
        
        
      }


  }, [])
  console.log('this is booking', bookings)
  if(!isLoaded){
    return(
    <div className="h-[80vh] flex justify-center items-center">
         <Spinner/>

    </div>
    )
  }
  if(!isSignedIn){
        <section className="flex relative  h-[90vh] flex-col items-center justify-center gap-4 py-20 text-center">
        <p className="text-lg">Please sign in to book your consultation.</p>
        <div className="flex gap-4">
          <button
            onClick={() => openSignIn()}
            className="rounded-full bg-blue-500 text-white px-6 py-2"
          >
            Sign in
          </button>
            <button onClick={() => router.push('/')}
            className="rounded-full ring-1 px-6 py-2"
          >
            Cancel
          </button>
        </div>
      </section>

  }

  if (bookings.length === 0) {
    return (
      <section className="min-h-[90vh] flex items-center justify-center px-4">
        <Card className="w-full max-w-2xl overflow-hidden">
          <CardContent className="flex flex-col items-center justify-center px-6 py-16 text-center sm:px-10">
            
            {/* Icon */}
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <CalendarDays className="h-7 w-7 text-primary" />
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-semibold tracking-tight">
              No consultation booked yet
            </h2>

            {/* Description */}
            <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
              Ready to discuss your project? Book a consultation with us to
              talk about your goals, requirements, and how we can help bring
              your ideas to life.
            </p>

            {/* CTA */}
            <Button className="mt-8 px-6" onClick={handleFormState}>
              Book a Consultation
            </Button>

            {/* Supporting text */}
            <p className="mt-4 text-xs text-muted-foreground">
              Choose a convenient date and time that works for you.
            </p>
          </CardContent>
        </Card>
      </section>
    );
  }


  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4">
      <Card className="w-full max-w-2xl overflow-hidden">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">Upcoming Meeting</CardTitle>
              <p className="mt-1 text-sm text-muted-foreground">
                Your consultation has been scheduled.
              </p>
            </div>

            <div className="flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              <CheckCircle2 className="h-4 w-4" />
              Confirmed
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-8 pt-6">
          {/* Meeting details */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CalendarDays className="h-4 w-4" />
                <span className="text-sm">Date</span>
              </div>

              <p className="mt-2 font-semibold">
                Monday, August 24
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock3 className="h-4 w-4" />
                <span className="text-sm">Time</span>
              </div>

              <p className="mt-2 font-semibold">
                4:00 PM IST
              </p>
            </div>
          </div>

          {/* Discussion */}
          <div>
            <h3 className="font-semibold">What we'll discuss</h3>

            <p className="mt-2 leading-relaxed text-muted-foreground">
              We'll discuss your requirements, understand your goals, and
              explore how we can build the right solution for your business.
            </p>
          </div>

          {/* Join button */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Please join a few minutes before the meeting.
            </p>

            <Button className="gap-2">
              <Video className="h-4 w-4" />
              Join Google Meet
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}