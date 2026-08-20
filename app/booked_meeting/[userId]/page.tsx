import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  Clock3,
  Video,
  CheckCircle2,
} from "lucide-react";

export default function BookedMeeting() {
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