/*
  Warnings:

  - The primary key for the `NameSpace` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `NameSpace` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - A unique constraint covering the columns `[id]` on the table `NameSpace` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Field` ADD COLUMN `isPrimary` BOOLEAN NULL DEFAULT false,
    ADD COLUMN `isUnique` BOOLEAN NULL DEFAULT false;

-- AlterTable
ALTER TABLE `NameSpace` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `creatTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userName` VARCHAR(255) NULL,
    `phone` VARCHAR(255) NULL,
    `password` VARCHAR(255) NULL,

    UNIQUE INDEX `user_userName_key`(`userName`),
    UNIQUE INDEX `user_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `NameSpace_id_key` ON `NameSpace`(`id`);
