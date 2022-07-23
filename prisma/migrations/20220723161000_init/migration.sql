-- CreateTable
CREATE TABLE `User` (
    `checkLocationOnLogin` BOOLEAN NOT NULL DEFAULT false,
    `countryCode` VARCHAR(191) NOT NULL DEFAULT 'us',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `gender` ENUM('MALE', 'FEMALE', 'NONBINARY', 'UNKNOWN') NOT NULL DEFAULT 'UNKNOWN',
    `id` INT NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `notificationEmail` ENUM('ACCOUNT', 'UPDATES', 'PROMOTIONS') NOT NULL DEFAULT 'ACCOUNT',
    `password` VARCHAR(191),
    `prefersLanguage` VARCHAR(191) NOT NULL DEFAULT 'en-us',
    `prefersColorScheme` ENUM('NO_PREFERENCE', 'LIGHT', 'DARK') NOT NULL DEFAULT 'NO_PREFERENCE',
    `prefersReducedMotion` ENUM('NO_PREFERENCE', 'REDUCE') NOT NULL DEFAULT 'NO_PREFERENCE',
    `prefersEmailId` INT,
    `profilePictureUrl` VARCHAR(191) NOT NULL DEFAULT 'https://unavatar.now.sh/fallback.png',
    `role` ENUM('SUDO', 'USER') NOT NULL DEFAULT 'USER',
    `timezone` VARCHAR(191) NOT NULL DEFAULT 'America/Los_Angeles',
    `twoFactorMethod` ENUM('NONE', 'SMS', 'TOTP', 'EMAIL') NOT NULL DEFAULT 'NONE',
    `twoFactorPhone` VARCHAR(191),
    `twoFactorSecret` VARCHAR(191),
    `attributes` Json,
    `updatedAt` DATETIME(3) NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
INDEX `prefersEmailId`(`prefersEmailId`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Group` (
    `autoJoinDomain` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `forceTwoFactor` BOOLEAN NOT NULL DEFAULT false,
    `id` INT NOT NULL,
    `ipRestrictions` VARCHAR(191),
    `name` VARCHAR(191) NOT NULL,
    `onlyAllowDomain` BOOLEAN NOT NULL DEFAULT false,
    `profilePictureUrl` VARCHAR(191) NOT NULL DEFAULT 'https://unavatar.now.sh/fallback.png',
    `attributes` Json,
    `updatedAt` DATETIME(3) NOT NULL,
    `parentId` INT,
INDEX `parentId`(`parentId`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Email` (
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `email` VARCHAR(191) NOT NULL,
    `emailSafe` VARCHAR(191) NOT NULL,
    `id` INT NOT NULL AUTO_INCREMENT,
    `isVerified` BOOLEAN NOT NULL DEFAULT false,
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` INT NOT NULL,
UNIQUE INDEX `Email.email_unique`(`email`),
UNIQUE INDEX `Email.emailSafe_unique`(`emailSafe`),
INDEX `userId`(`userId`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ApiKey` (
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `description` VARCHAR(191),
    `id` INT NOT NULL AUTO_INCREMENT,
    `ipRestrictions` Json,
    `apiKey` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191),
    `groupId` INT,
    `referrerRestrictions` Json,
    `scopes` Json,
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` INT,
UNIQUE INDEX `ApiKey.apiKey_unique`(`apiKey`),
INDEX `groupId`(`groupId`),
INDEX `userId`(`userId`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ApprovedSubnet` (
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `id` INT NOT NULL AUTO_INCREMENT,
    `subnet` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191),
    `region` VARCHAR(191),
    `timezone` VARCHAR(191),
    `countryCode` VARCHAR(191),
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` INT NOT NULL,
INDEX `userId`(`userId`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BackupCode` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `isUsed` BOOLEAN NOT NULL DEFAULT false,
    `userId` INT NOT NULL,
INDEX `userId`(`userId`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CouponCode` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `expiresAt` DATETIME(3),
    `maxUses` INT NOT NULL DEFAULT 1000,
    `usedCount` INT NOT NULL DEFAULT 0,
    `teamRestrictions` VARCHAR(191),
    `amount` DECIMAL(65,30) NOT NULL DEFAULT 0.00,
    `currency` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Domain` (
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `domain` VARCHAR(191) NOT NULL,
    `id` INT NOT NULL AUTO_INCREMENT,
    `isVerified` BOOLEAN NOT NULL DEFAULT false,
    `groupId` INT NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `verificationCode` VARCHAR(191) NOT NULL,
INDEX `groupId`(`groupId`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Identity` (
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `id` INT NOT NULL AUTO_INCREMENT,
    `loginName` VARCHAR(191) NOT NULL,
    `type` ENUM('GOOGLE', 'APPLE', 'SLACK') NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` INT NOT NULL,
INDEX `userId`(`userId`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Membership` (
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `id` INT NOT NULL AUTO_INCREMENT,
    `groupId` INT NOT NULL,
    `role` ENUM('OWNER', 'ADMIN', 'MEMBER') NOT NULL DEFAULT 'MEMBER',
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` INT NOT NULL,
INDEX `groupId`(`groupId`),
INDEX `userId`(`userId`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Session` (
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `id` INT NOT NULL AUTO_INCREMENT,
    `ipAddress` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `userAgent` VARCHAR(191),
    `city` VARCHAR(191),
    `region` VARCHAR(191),
    `timezone` VARCHAR(191),
    `countryCode` VARCHAR(191),
    `browser` VARCHAR(191),
    `operatingSystem` VARCHAR(191),
    `userId` INT NOT NULL,
INDEX `userId`(`userId`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Webhook` (
    `contentType` VARCHAR(191) NOT NULL DEFAULT 'application/json',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `event` VARCHAR(191) NOT NULL,
    `id` INT NOT NULL AUTO_INCREMENT,
    `isActive` BOOLEAN NOT NULL DEFAULT false,
    `lastFiredAt` DATETIME(3),
    `groupId` INT NOT NULL,
    `secret` VARCHAR(191),
    `updatedAt` DATETIME(3) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
INDEX `groupId`(`groupId`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AuditLog` (
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `event` VARCHAR(191) NOT NULL,
    `rawEvent` VARCHAR(191) NOT NULL,
    `id` INT NOT NULL AUTO_INCREMENT,
    `groupId` INT,
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` INT,
    `apiKeyId` INT,
    `ipAddress` VARCHAR(191),
    `userAgent` VARCHAR(191),
    `city` VARCHAR(191),
    `region` VARCHAR(191),
    `timezone` VARCHAR(191),
    `countryCode` VARCHAR(191),
    `browser` VARCHAR(191),
    `operatingSystem` VARCHAR(191),
INDEX `apiKeyId`(`apiKeyId`),
INDEX `groupId`(`groupId`),
INDEX `userId`(`userId`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD FOREIGN KEY (`prefersEmailId`) REFERENCES `Email`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Group` ADD FOREIGN KEY (`parentId`) REFERENCES `Group`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Email` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ApiKey` ADD FOREIGN KEY (`groupId`) REFERENCES `Group`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ApiKey` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ApprovedSubnet` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BackupCode` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Domain` ADD FOREIGN KEY (`groupId`) REFERENCES `Group`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Identity` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Membership` ADD FOREIGN KEY (`groupId`) REFERENCES `Group`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Membership` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Session` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Webhook` ADD FOREIGN KEY (`groupId`) REFERENCES `Group`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AuditLog` ADD FOREIGN KEY (`groupId`) REFERENCES `Group`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AuditLog` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AuditLog` ADD FOREIGN KEY (`apiKeyId`) REFERENCES `ApiKey`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
