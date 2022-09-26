/*
  Warnings:

  - Made the column `createdAt` on table `NameSpace` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `NameSpace` MODIFY `createdAt` DATETIME(0) NOT NULL;
