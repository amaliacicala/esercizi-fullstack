/*
  Warnings:

  - You are about to drop the column `createBy` on the `Watchlist` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Watchlist" DROP COLUMN "createBy",
ADD COLUMN     "createdBy" VARCHAR(250);
