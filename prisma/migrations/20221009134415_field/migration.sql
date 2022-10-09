/*
  Warnings:

  - You are about to drop the column `moduleId` on the `Field` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Field` DROP FOREIGN KEY `Field_moduleId_fkey`;

-- AlterTable
ALTER TABLE `Field` DROP COLUMN `moduleId`,
    ADD COLUMN `moduleName` VARCHAR(255) NULL;

-- AddForeignKey
ALTER TABLE `Field` ADD CONSTRAINT `Field_fieldName_fkey` FOREIGN KEY (`fieldName`) REFERENCES `Module`(`moduleName`) ON DELETE SET NULL ON UPDATE CASCADE;
