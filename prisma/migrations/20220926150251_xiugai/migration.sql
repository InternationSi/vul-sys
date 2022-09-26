/*
  Warnings:

  - You are about to drop the column `field_name` on the `Field` table. All the data in the column will be lost.
  - You are about to drop the column `self_type` on the `Field` table. All the data in the column will be lost.
  - You are about to drop the column `namespaces_name` on the `Module` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Field` DROP COLUMN `field_name`,
    DROP COLUMN `self_type`,
    ADD COLUMN `fieldName` VARCHAR(255) NULL,
    ADD COLUMN `selfType` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `Module` DROP COLUMN `namespaces_name`,
    ADD COLUMN `namespacesName` VARCHAR(255) NULL;
