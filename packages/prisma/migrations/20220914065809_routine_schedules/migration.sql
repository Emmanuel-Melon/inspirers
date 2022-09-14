-- CreateEnum
CREATE TYPE "RoutineSchedule" AS ENUM ('Standard', 'Flexible');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "RoutineType" ADD VALUE 'Morning';
ALTER TYPE "RoutineType" ADD VALUE 'Evening';

-- AlterTable
ALTER TABLE "Routine" ADD COLUMN     "scheduleType" "RoutineSchedule" NOT NULL DEFAULT 'Standard';

-- CreateTable
CREATE TABLE "RoutineItem" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "routineId" TEXT NOT NULL,

    CONSTRAINT "RoutineItem_pkey" PRIMARY KEY ("id")
);
