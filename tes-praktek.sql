/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE IF NOT EXISTS `tes_praktek` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `tes_praktek`;

CREATE TABLE IF NOT EXISTS `customer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `level` int DEFAULT '0',
  `favorite_menu` int DEFAULT '0',
  `total_transaction` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `level` (`level`),
  KEY `favorite_menu` (`favorite_menu`),
  CONSTRAINT `favorite_menu` FOREIGN KEY (`favorite_menu`) REFERENCES `menu` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `level` FOREIGN KEY (`level`) REFERENCES `customer_level` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `customer` (`id`, `name`, `level`, `favorite_menu`, `total_transaction`) VALUES
	(3, 'Odis Rhinehart', 1, 1, 194700),
	(4, 'Kris Roher', 1, 2, 632200),
	(5, 'Serenity Fisher', 3, 3, 1040920),
	(6, 'Brooklyn Warren', 2, 2, 730500),
	(8, 'Franco Delort', 3, 1, 96000),
	(9, 'Saul Geoghegan', 3, 2, 256000),
	(10, 'Alfredo Vetrovs', 3, 4, 590080),
	(11, 'Cristofer Vetrovs', 4, 5, 782600),
	(12, 'Calvin Steward', 4, 6, 467500),
	(19, 'Yanda', 4, 1, 120000);

CREATE TABLE IF NOT EXISTS `customer_level` (
  `id` int NOT NULL AUTO_INCREMENT,
  `level` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `customer_level` (`id`, `level`) VALUES
	(1, 'warga'),
	(2, 'sultan'),
	(3, 'juragan'),
	(4, 'konglomerat');

CREATE TABLE IF NOT EXISTS `menu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `menu` (`id`, `name`) VALUES
	(1, 'Chicken & Ribs Combo'),
	(2, 'Surf & Turf Gift Basket'),
	(3, 'Fried Chicken Dinne'),
	(4, 'Dark & Stormy'),
	(5, 'Shaking Beef Tri-Tip'),
	(6, 'BBQ Rib Dinner');

CREATE TABLE IF NOT EXISTS `top_menu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `top_menu` (`id`, `name`) VALUES
	(1, 'Nasi Goreng Jamur Special Resto Pak Min'),
	(2, 'Tongseng Sapi Gurih'),
	(3, 'Nasi Gudeg Telur Ceker'),
	(4, 'Nasi Ayam Serundeng'),
	(5, 'Nasi Goreng Seafood');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
