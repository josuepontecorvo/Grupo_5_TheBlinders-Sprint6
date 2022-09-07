
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema new_schema
-- -----------------------------------------------------
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Brands`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Brands` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Brands` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Categories`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Categories` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) ,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Types`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Types` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Types` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) ,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Colors`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Colors` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Colors` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) ,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Sizes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Sizes` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Sizes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) ,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Shifts`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Shifts` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Shifts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `number` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) ,
  UNIQUE INDEX `number_UNIQUE` (`number` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Frames`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Frames` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Frames` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) ,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`WheelSizes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`WheelSizes` ;

CREATE TABLE IF NOT EXISTS `mydb`.`WheelSizes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `number` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) ,
  UNIQUE INDEX `number_UNIQUE` (`number` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Suspensions`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Suspensions` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Suspensions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) ,
  UNIQUE INDEX `type_UNIQUE` (`type` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Brakes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Brakes` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Brakes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) ,
  UNIQUE INDEX `type_UNIQUE` (`type` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Products`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Products` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `model` VARCHAR(45) NOT NULL,
  `price` DECIMAL NOT NULL,
  `discount` INT NULL,
  `info` LONGTEXT NULL,
  `description` VARCHAR(45) NOT NULL,
  `categoryId` INT NULL,
  `typeId` INT NULL,
  `stock` INT NULL,
  `stockMin` INT NULL,
  `stockMax` INT NULL,
  `colorId` INT NULL,
  `brandId` INT NOT NULL,
  `sizeId` INT NULL,
  `shiftId` INT NULL,
  `frameId` INT NULL,
  `wheelSizeId` INT NULL,
  `suspensionId` INT NULL,
  `brakeId` INT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) ,
  INDEX `fk_brand_idx` (`brandId` ASC) ,
  INDEX `fk_category_idx` (`categoryId` ASC) ,
  INDEX `fk_type_idx` (`typeId` ASC) ,
  INDEX `fk_color_idx` (`colorId` ASC) ,
  INDEX `fk_size_idx` (`sizeId` ASC) ,
  INDEX `fk_shift_idx` (`shiftId` ASC) ,
  INDEX `fk_frame_idx` (`frameId` ASC) ,
  INDEX `fk_wheelSize_idx` (`wheelSizeId` ASC) ,
  INDEX `fk_suspension_idx` (`suspensionId` ASC) ,
  INDEX `fk_brake_idx` (`brakeId` ASC) ,
  CONSTRAINT `fk_brand`
    FOREIGN KEY (`brandId`)
    REFERENCES `mydb`.`Brands` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_category`
    FOREIGN KEY (`categoryId`)
    REFERENCES `mydb`.`Categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_type`
    FOREIGN KEY (`typeId`)
    REFERENCES `mydb`.`Types` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_color`
    FOREIGN KEY (`colorId`)
    REFERENCES `mydb`.`Colors` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_size`
    FOREIGN KEY (`sizeId`)
    REFERENCES `mydb`.`Sizes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_shift`
    FOREIGN KEY (`shiftId`)
    REFERENCES `mydb`.`Shifts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_frame`
    FOREIGN KEY (`frameId`)
    REFERENCES `mydb`.`Frames` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_wheelSize`
    FOREIGN KEY (`wheelSizeId`)
    REFERENCES `mydb`.`WheelSizes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_suspension`
    FOREIGN KEY (`suspensionId`)
    REFERENCES `mydb`.`Suspensions` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_brake`
    FOREIGN KEY (`brakeId`)
    REFERENCES `mydb`.`Brakes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Images`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Images` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Images` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fileName` VARCHAR(45) NOT NULL,
  `productId` INT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) ,
  UNIQUE INDEX `fileName_UNIQUE` (`fileName` ASC) ,
  INDEX `fk_product_idx` (`productId` ASC) ,
  CONSTRAINT `fk_product`
    FOREIGN KEY (`productId`)
    REFERENCES `mydb`.`Products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Roles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Roles` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) ,
  UNIQUE INDEX `type_UNIQUE` (`type` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Users` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `birthdate` DATE NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `image` VARCHAR(45) NULL,
  `roleId` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) ,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) ,
  INDEX `fk_role_idx` (`roleId` ASC) ,
  CONSTRAINT `fk_role`
    FOREIGN KEY (`roleId`)
    REFERENCES `mydb`.`Roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
