/*
  Warnings:

  - You are about to drop the column `email` on the `HotelInfo` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `HotelInfo` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_HotelInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "address" TEXT NOT NULL DEFAULT '',
    "check_in_time" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "check_out_time" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "no_of_rooms" TEXT NOT NULL DEFAULT '10',
    "tel" TEXT NOT NULL DEFAULT '',
    "fax" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_HotelInfo" ("id") SELECT "id" FROM "HotelInfo";
DROP TABLE "HotelInfo";
ALTER TABLE "new_HotelInfo" RENAME TO "HotelInfo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
