"use client";

import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  Image,
  Mail,
  MessageCircle,
  Target,
} from "lucide-react";
import {useAuth, useClerk} from '@clerk/nextjs'

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Spinner } from "@/components/ui/spinner";

export default function TrackProject() {
  const {isLoaded, isSignedIn} = useAuth()
  const {openSignIn} =  useClerk()
  const router = useRouter()
  useEffect(()=>{
    if(isLoaded && !isSignedIn){
      openSignIn()
    }

  }, [isLoaded, isSignedIn, openSignIn])
  if(!isLoaded){
    return <div className="h-[80vh] flex justify-center items-center">
      <Spinner/>
    </div>
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

  return (
    <main className="min-h-screen bg-muted/30 py-10">
      <div className="mx-auto max-w-6xl space-y-8 px-6">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold">Track Project</h1>
          <p className="mt-2 text-muted/80">
            Stay updated with your project's progress and upcoming milestones.
          </p>
        </div>

        {/* =================== Project Overview =================== */}

        <Card>
          <CardHeader>
            <CardTitle>Project Overview</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <p className="text-sm text-muted-foreground">Status</p>

                <Badge className="mt-2 bg-green-600 hover:bg-green-600">
                  In Progress
                </Badge>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Progress</p>

                  <span className="text-sm font-medium">65%</span>
                </div>

                <Progress value={65} className="mt-3" />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Expected Delivery
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />

                  <span>20 August 2026</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* =================== Timeline =================== */}

        <Card>
          <CardHeader>
            <CardTitle>Timeline</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="space-y-5">
              <TimelineItem status="done" title="Discovery" />
              <TimelineItem status="done" title="Planning" />
              <TimelineItem status="done" title="Design" />
              <TimelineItem status="current" title="Development" />
              <TimelineItem status="pending" title="Testing" />
              <TimelineItem status="pending" title="Launch" />
            </div>
          </CardContent>
        </Card>

        {/* =================== Two Column =================== */}

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Current Update */}

          <Card>
            <CardHeader>
              <CardTitle>Current Update</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-muted-foreground leading-7">
                We're currently integrating the booking system, improving mobile
                responsiveness, and optimizing the overall user experience.
              </p>

              <p className="mt-5 text-sm text-muted-foreground">
                Last Updated: Today
              </p>
            </CardContent>
          </Card>

          {/* Upcoming Milestone */}

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Milestone</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="flex items-center gap-3">
                <Target className="h-6 w-6 text-primary" />

                <div>
                  <h3 className="font-semibold">SEO Optimization</h3>

                  <p className="text-sm text-muted-foreground">
                    Expected by 31 July
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* =================== Files =================== */}

        <Card>
          <CardHeader>
            <CardTitle>Files</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <FileCard
                icon={<FileText className="h-5 w-5" />}
                title="Proposal"
              />

              <FileCard
                icon={<Image className="h-5 w-5" />}
                title="Logo Assets"
              />

              <FileCard
                icon={<Image className="h-5 w-5" />}
                title="Project Images"
              />
            </div>
          </CardContent>
        </Card>

        {/* =================== Meeting =================== */}

        <Card>
          <CardHeader>
            <CardTitle>Meeting</CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-semibold">Next Meeting</h3>

              <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                <Clock3 className="h-4 w-4" />

                Monday • 4:00 PM IST
              </div>
            </div>

            <Button>Join Google Meet</Button>
          </CardContent>
        </Card>

        {/* =================== Help =================== */}

        <Card>
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
          </CardHeader>

          <CardContent className="flex flex-wrap  gap-4">
            <Button className={ 'bg-green-500 px-4 cursor-pointer'}>
              <a href="https://wa.me/919387356020?text=Hi%20Rakesh,%20I%20want%20to%20book%20a%20consultation" 
                target="_blank"
               rel="noopener noreferrer"         
                className="flex items-center gap-2"
                >
              <MessageCircle className=" h-4 w-4" />
              WhatsApp
              </a>
            </Button>
            {/* 
            <a
            href="mailto:rpegu0651@gmail.com?subject=Booking%20Consultation&body=Hi,%20I%27d%20like%20to%20book%20a%20consultation."   
            className="flex flex-row gap-3 border px-4 rounded-2xl items-center"         
            >
            <Mail className="h-4 w-4" />
            Email
           </a> */}
            
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

type TimelineProps = {
  title: string;
  status: "done" | "current" | "pending";
};

function TimelineItem({ title, status }: TimelineProps) {
  const icon =
    status === "done" ? (
      <CheckCircle2 className="h-5 w-5 text-green-600" />
    ) : status === "current" ? (
      <Clock3 className="h-5 w-5 text-amber-500" />
    ) : (
      <div className="h-5 w-5 rounded-full border-2 border-muted-foreground" />
    );

  return (
    <div className="flex items-center gap-4">
      {icon}

      <span
        className={
          status === "pending" ? "text-muted-foreground" : "font-medium"
        }
      >
        {title}
      </span>
    </div>
  );
}

function FileCard({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <Card className="cursor-pointer transition hover:shadow-md">
      <CardContent className="flex items-center gap-4 p-5">
        {icon}

        <div>
          <h3 className="font-medium">{title}</h3>

          <p className="text-sm text-muted-foreground">Click to download</p>
        </div>
      </CardContent>
    </Card>
  );
}