/*
  Warnings:

  - Made the column `fieldName` on table `Field` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Field` DROP FOREIGN KEY `Field_fieldName_fkey`;

-- AlterTable
ALTER TABLE `Field` MODIFY `fieldName` VARCHAR(255) NOT NULL;

-- AddForeignKey
ALTER TABLE `Field` ADD CONSTRAINT `Field_fieldName_fkey` FOREIGN KEY (`fieldName`) REFERENCES `Module`(`moduleName`) ON DELETE RESTRICT ON UPDATE CASCADE;
