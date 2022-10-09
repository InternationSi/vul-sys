/*
  Warnings:

  - The primary key for the `Field` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Field` table. All the data in the column will be lost.
  - The primary key for the `Module` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Module` table. All the data in the column will be lost.
  - The primary key for the `NameSpace` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `NameSpace` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nameSpaceId]` on the table `NameSpace` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fieldId` to the `Field` table without a default value. This is not possible if the table is not empty.
  - Added the required column `moduleId` to the `Module` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameSpaceId` to the `NameSpace` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Field_fieldName_fkey` ON `Field`;

-- DropIndex
DROP INDEX `NameSpace_id_key` ON `NameSpace`;

-- AlterTable
ALTER TABLE `Field` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `fieldId` BIGINT NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`fieldId`);

-- AlterTable
ALTER TABLE `Module` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `moduleId` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`moduleId`);

-- AlterTable
ALTER TABLE `NameSpace` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `nameSpaceId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`nameSpaceId`);

-- CreateIndex
CREATE UNIQUE INDEX `NameSpace_nameSpaceId_key` ON `NameSpace`(`nameSpaceId`);
