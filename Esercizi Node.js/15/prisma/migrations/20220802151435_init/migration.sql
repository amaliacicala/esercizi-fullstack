-- CreateTable
CREATE TABLE "Watchlist" (
    "id" SERIAL NOT NULL,
    "filmTitle" VARCHAR(50) NOT NULL,
    "plot" VARCHAR(250),
    "year" INTEGER NOT NULL,
    "director" VARCHAR(30) NOT NULL,
    "genres" VARCHAR(250) NOT NULL,
    "watched" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Watchlist_pkey" PRIMARY KEY ("id")
);
