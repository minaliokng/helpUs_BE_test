-- AlterTable
ALTER TABLE `Post` MODIFY `isDeadLine` INTEGER NULL DEFAULT 0,
    MODIFY `updated` INTEGER NOT NULL DEFAULT 0;
