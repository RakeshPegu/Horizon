/*
  Warnings:

  - You are about to drop the `BookedMeeting` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "BookedMeeting";

-- CreateTable
CREATE TABLE "ScheduledMeeting" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "scheduledDate" TIMESTAMP(3) NOT NULL,
    "scheduleTime" TIMESTAMP(3) NOT NULL,
    "status" "MeetingStatus" NOT NULL DEFAULT 'SCHEDULED',
    "meetingLink" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ScheduledMeeting_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ScheduledMeeting_id_key" ON "ScheduledMeeting"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ScheduledMeeting_userId_key" ON "ScheduledMeeting"("userId");

-- AddForeignKey
ALTER TABLE "ScheduledMeeting" ADD CONSTRAINT "ScheduledMeeting_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
