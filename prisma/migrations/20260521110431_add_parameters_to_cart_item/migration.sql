/*
  Warnings:

  - Added the required column `categoria` to the `CartItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `disponibilidad` to the `CartItem` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CartItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "precio" INTEGER NOT NULL,
    "imagen" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "categoria" TEXT NOT NULL,
    "disponibilidad" TEXT NOT NULL
);
INSERT INTO "new_CartItem" ("descripcion", "id", "imagen", "precio", "quantity", "titulo") SELECT "descripcion", "id", "imagen", "precio", "quantity", "titulo" FROM "CartItem";
DROP TABLE "CartItem";
ALTER TABLE "new_CartItem" RENAME TO "CartItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
