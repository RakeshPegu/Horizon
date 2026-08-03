/*
  Warnings:

  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Qualification` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[clerk_userId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Qualification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clerk_userId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('pending', 'booked', 'cancelled');

-- AlterTable
ALTER TABLE "Qualification" ADD COLUMN     "isAgreed" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "status" "BookingStatus" NOT NULL DEFAULT 'pending',
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "username",
ADD COLUMN     "clerk_userId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Qualification_userId_key" ON "Qualification"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_clerk_userId_key" ON "User"("clerk_userId");

-- AddForeignKey
ALTER TABLE "Qualification" ADD CONSTRAINT "Qualification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
