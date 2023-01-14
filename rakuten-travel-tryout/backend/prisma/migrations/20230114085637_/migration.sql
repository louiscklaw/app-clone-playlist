-- CreateTable
CREATE TABLE "HotelInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "HotelInfo_email_key" ON "HotelInfo"("email");
