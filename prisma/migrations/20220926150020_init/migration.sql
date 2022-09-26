-- CreateTable
CREATE TABLE `Field` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `field_name` VARCHAR(255) NULL,
    `label` VARCHAR(255) NULL,
    `self_type` VARCHAR(255) NULL,
    `moduleId` INTEGER UNSIGNED NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Module` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `moduleName` VARCHAR(255) NULL,
    `label` VARCHAR(255) NULL,
    `category` VARCHAR(255) NULL,
    `updateUser` VARCHAR(255) NULL,
    `namespaces_name` VARCHAR(255) NULL,

    UNIQUE INDEX `Module_moduleName_key`(`moduleName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NameSpace` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(0) NULL,
    `namespacesName` VARCHAR(255) NULL,
    `label` VARCHAR(255) NULL,
    `describe` VARCHAR(255) NULL,

    UNIQUE INDEX `NameSpace_namespacesName_key`(`namespacesName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Field` ADD CONSTRAINT `Field_moduleId_fkey` FOREIGN KEY (`moduleId`) REFERENCES `Module`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
