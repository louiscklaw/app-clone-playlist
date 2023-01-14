-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_HotelInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "address" TEXT NOT NULL DEFAULT '',
    "check_in_time" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "check_out_time" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "no_of_rooms" TEXT NOT NULL DEFAULT '10',
    "tel" TEXT NOT NULL DEFAULT '',
    "fax" TEXT NOT NULL DEFAULT '',
    "enabled" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_HotelInfo" ("address", "check_in_time", "check_out_time", "email", "fax", "id", "name", "no_of_rooms", "tel") SELECT "address", "check_in_time", "check_out_time", "email", "fax", "id", "name", "no_of_rooms", "tel" FROM "HotelInfo";
DROP TABLE "HotelInfo";
ALTER TABLE "new_HotelInfo" RENAME TO "HotelInfo";
CREATE UNIQUE INDEX "HotelInfo_email_key" ON "HotelInfo"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
