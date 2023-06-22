/*
  Warnings:

  - The primary key for the `Page` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `archived` on the `Page` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Label" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "shortid" TEXT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_LabelToPage" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_LabelToPage_A_fkey" FOREIGN KEY ("A") REFERENCES "Label" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_LabelToPage_B_fkey" FOREIGN KEY ("B") REFERENCES "Page" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Page" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "shortid" TEXT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Page" ("content", "createdAt", "deleted", "id", "shortid", "title", "updatedAt") SELECT "content", "createdAt", "deleted", "id", "shortid", "title", "updatedAt" FROM "Page";
DROP TABLE "Page";
ALTER TABLE "new_Page" RENAME TO "Page";
CREATE UNIQUE INDEX "Page_shortid_key" ON "Page"("shortid");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Label_shortid_key" ON "Label"("shortid");

-- CreateIndex
CREATE UNIQUE INDEX "Label_name_key" ON "Label"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_LabelToPage_AB_unique" ON "_LabelToPage"("A", "B");

-- CreateIndex
CREATE INDEX "_LabelToPage_B_index" ON "_LabelToPage"("B");
