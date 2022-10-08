/*
  Warnings:

  - You are about to drop the column `namespacesName` on the `Module` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Module` DROP COLUMN `namespacesName`,
    ADD COLUMN `namespaceName` VARCHAR(255) NULL;
