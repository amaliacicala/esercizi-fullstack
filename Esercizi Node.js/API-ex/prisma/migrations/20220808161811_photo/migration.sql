/*
  Warnings:

  - You are about to drop the column `photoFilename` on the `Watchlist` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Watchlist" DROP COLUMN "photoFilename",
ADD COLUMN     "posterFilename" VARCHAR(250);
