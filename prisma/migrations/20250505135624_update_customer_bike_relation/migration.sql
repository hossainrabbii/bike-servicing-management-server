/*
  Warnings:

  - Added the required column `customerId` to the `bikes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "bikes" DROP CONSTRAINT "bikes_bikeId_fkey";

-- AlterTable
ALTER TABLE "bikes" ADD COLUMN     "customerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "bikes" ADD CONSTRAINT "bikes_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("customerId") ON DELETE RESTRICT ON UPDATE CASCADE;
