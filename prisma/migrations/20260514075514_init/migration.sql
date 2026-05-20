-- CreateTable
CREATE TABLE "CartItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "texto" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1
);
