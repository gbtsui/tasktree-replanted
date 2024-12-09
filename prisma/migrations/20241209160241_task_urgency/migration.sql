-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "urgency" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT NOT NULL DEFAULT '';
