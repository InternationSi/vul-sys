/*
  Warnings:

  - The primary key for the `Module` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Module` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - A unique constraint covering the columns `[id]` on the table `Field` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Module` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Module` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `Record` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `moduleName` VARCHAR(255) NULL,
    `values` JSON NULL,
    `createUser` VARCHAR(255) NULL,

    UNIQUE INDEX `Record_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Field_id_key` ON `Field`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Module_id_key` ON `Module`(`id`);
