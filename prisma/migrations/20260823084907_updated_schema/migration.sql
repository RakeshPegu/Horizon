/*
  Warnings:

  - You are about to drop the column `scheduleTime` on the `ScheduledMeeting` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `ScheduledMeeting` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[qualificationId]` on the table `ScheduledMeeting` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `ScheduledMeeting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `ScheduledMeeting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qualificationId` to the `ScheduledMeeting` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ScheduledMeeting" DROP CONSTRAINT "ScheduledMeeting_userId_fkey";

-- DropIndex
DROP INDEX "ScheduledMeeting_userId_key";

-- AlterTable
ALTER TABLE "ScheduledMeeting" DROP COLUMN "scheduleTime",
DROP COLUMN "userId",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "qualificationId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ScheduledMeeting_qualificationId_key" ON "ScheduledMeeting"("qualificationId");

-- AddForeignKey
ALTER TABLE "ScheduledMeeting" ADD CONSTRAINT "ScheduledMeeting_qualificationId_fkey" FOREIGN KEY ("qualificationId") REFERENCES "Qualification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
