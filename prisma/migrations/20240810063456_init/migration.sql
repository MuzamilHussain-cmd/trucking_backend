-- CreateTable
CREATE TABLE `TruckingUser` (
    `userId` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `role` ENUM('ADMIN', 'BROKER', 'FACTORYOWNER') NOT NULL,

    UNIQUE INDEX `TruckingUser_email_key`(`email`),
    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Admin` (
    `adminId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `Admin_userId_key`(`userId`),
    PRIMARY KEY (`adminId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Broker` (
    `brokerId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `region` ENUM('ISLAMABAD', 'KARACHI', 'LAHORE', 'PESHAWAR', 'QUETTA', 'KASHMIR') NOT NULL,

    UNIQUE INDEX `Broker_userId_key`(`userId`),
    PRIMARY KEY (`brokerId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FactoryOwner` (
    `factoryOwnerId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `factoryName` VARCHAR(191) NOT NULL,
    `tonnage` INTEGER NOT NULL,
    `factoryAddress` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `FactoryOwner_userId_key`(`userId`),
    PRIMARY KEY (`factoryOwnerId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TruckRequest` (
    `truckRequestId` INTEGER NOT NULL AUTO_INCREMENT,
    `pickUpTime` INTEGER NOT NULL,
    `bidEndTime` INTEGER NOT NULL,
    `tonnage` INTEGER NOT NULL,
    `isActive` BOOLEAN NOT NULL,
    `truckType` ENUM('SMALL', 'MEDIUM', 'LARGE') NOT NULL,
    `factoryOwnerId` INTEGER NULL,

    PRIMARY KEY (`truckRequestId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Location` (
    `locationId` INTEGER NOT NULL AUTO_INCREMENT,
    `latitude` DECIMAL(65, 30) NOT NULL,
    `longitude` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`locationId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Bid` (
    `bidId` INTEGER NOT NULL AUTO_INCREMENT,
    `bidAmount` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `truckRequestId` INTEGER NULL,
    `brokerId` INTEGER NULL,

    PRIMARY KEY (`bidId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LoadType` (
    `loadTypeId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `factoryOwnerId` INTEGER NULL,

    PRIMARY KEY (`loadTypeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Truck` (
    `truckId` INTEGER NOT NULL AUTO_INCREMENT,
    `truckName` VARCHAR(191) NOT NULL,
    `truckType` ENUM('SMALL', 'MEDIUM', 'LARGE') NOT NULL,
    `registrationNumber` VARCHAR(191) NOT NULL,
    `dimension` VARCHAR(191) NOT NULL,
    `brokerId` INTEGER NULL,

    PRIMARY KEY (`truckId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_FactoryPickupLocations` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_FactoryPickupLocations_AB_unique`(`A`, `B`),
    INDEX `_FactoryPickupLocations_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_FactoryDropoffLocations` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_FactoryDropoffLocations_AB_unique`(`A`, `B`),
    INDEX `_FactoryDropoffLocations_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_TruckPickupLocations` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_TruckPickupLocations_AB_unique`(`A`, `B`),
    INDEX `_TruckPickupLocations_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_TruckDropoffLocations` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_TruckDropoffLocations_AB_unique`(`A`, `B`),
    INDEX `_TruckDropoffLocations_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Admin` ADD CONSTRAINT `Admin_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `TruckingUser`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Broker` ADD CONSTRAINT `Broker_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `TruckingUser`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FactoryOwner` ADD CONSTRAINT `FactoryOwner_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `TruckingUser`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TruckRequest` ADD CONSTRAINT `TruckRequest_factoryOwnerId_fkey` FOREIGN KEY (`factoryOwnerId`) REFERENCES `FactoryOwner`(`factoryOwnerId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bid` ADD CONSTRAINT `Bid_truckRequestId_fkey` FOREIGN KEY (`truckRequestId`) REFERENCES `TruckRequest`(`truckRequestId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bid` ADD CONSTRAINT `Bid_brokerId_fkey` FOREIGN KEY (`brokerId`) REFERENCES `Broker`(`brokerId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LoadType` ADD CONSTRAINT `LoadType_factoryOwnerId_fkey` FOREIGN KEY (`factoryOwnerId`) REFERENCES `FactoryOwner`(`factoryOwnerId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Truck` ADD CONSTRAINT `Truck_brokerId_fkey` FOREIGN KEY (`brokerId`) REFERENCES `Broker`(`brokerId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FactoryPickupLocations` ADD CONSTRAINT `_FactoryPickupLocations_A_fkey` FOREIGN KEY (`A`) REFERENCES `FactoryOwner`(`factoryOwnerId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FactoryPickupLocations` ADD CONSTRAINT `_FactoryPickupLocations_B_fkey` FOREIGN KEY (`B`) REFERENCES `Location`(`locationId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FactoryDropoffLocations` ADD CONSTRAINT `_FactoryDropoffLocations_A_fkey` FOREIGN KEY (`A`) REFERENCES `FactoryOwner`(`factoryOwnerId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FactoryDropoffLocations` ADD CONSTRAINT `_FactoryDropoffLocations_B_fkey` FOREIGN KEY (`B`) REFERENCES `Location`(`locationId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_TruckPickupLocations` ADD CONSTRAINT `_TruckPickupLocations_A_fkey` FOREIGN KEY (`A`) REFERENCES `Location`(`locationId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_TruckPickupLocations` ADD CONSTRAINT `_TruckPickupLocations_B_fkey` FOREIGN KEY (`B`) REFERENCES `TruckRequest`(`truckRequestId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_TruckDropoffLocations` ADD CONSTRAINT `_TruckDropoffLocations_A_fkey` FOREIGN KEY (`A`) REFERENCES `Location`(`locationId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_TruckDropoffLocations` ADD CONSTRAINT `_TruckDropoffLocations_B_fkey` FOREIGN KEY (`B`) REFERENCES `TruckRequest`(`truckRequestId`) ON DELETE CASCADE ON UPDATE CASCADE;
