/*
  Warnings:

  - The primary key for the `Field` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `fieldId` on the `Field` table. All the data in the column will be lost.
  - The primary key for the `Module` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `moduleId` on the `Module` table. All the data in the column will be lost.
  - The primary key for the `NameSpace` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `nameSpaceId` on the `NameSpace` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `NameSpace` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id` to the `Field` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Module` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `NameSpace` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `NameSpace_nameSpaceId_key` ON `NameSpace`;

-- AlterTable
ALTER TABLE `Field` DROP PRIMARY KEY,
    DROP COLUMN `fieldId`,
    ADD COLUMN `id` BIGINT NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Module` DROP PRIMARY KEY,
    DROP COLUMN `moduleId`,
    ADD COLUMN `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `NameSpace` DROP PRIMARY KEY,
    DROP COLUMN `nameSpaceId`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `NameSpace_id_key` ON `NameSpace`(`id`);
