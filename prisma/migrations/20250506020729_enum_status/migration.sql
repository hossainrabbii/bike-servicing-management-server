/*
  Warnings:

  - The `status` column on the `services` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "ServiceStatus" AS ENUM ('pending', 'in-progress', 'done');

-- AlterTable
ALTER TABLE "services" DROP COLUMN "status",
ADD COLUMN     "status" "ServiceStatus" NOT NULL DEFAULT 'pending';
