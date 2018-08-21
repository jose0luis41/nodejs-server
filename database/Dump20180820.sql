-- MySQL dump 10.13  Distrib 8.0.12, for macos10.13 (x86_64)
--
-- Host: 127.0.0.1    Database: takumDB
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Products`
--

DROP TABLE IF EXISTS `Products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Products` (
  `idProducts` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(60) DEFAULT NULL,
  `Description` varchar(100) DEFAULT NULL,
  `Cost` int(11) DEFAULT NULL,
  `Type` varchar(45) DEFAULT NULL,
  `Topic` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idProducts`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Products`
--

LOCK TABLES `Products` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */;
INSERT INTO `Products` VALUES (5,'Minnie','Minnies description',5000,'Employee','Toys'),(6,'Batman','Batman toys description',10000,'Employee','Toys'),(7,'SpiderMan','Spider toys description',150000,'Employee','Toys'),(8,'Lego','Legos description',23000,'Chief','Toys'),(10,'Pant','Pants description',10000,'Chief','Clothes'),(11,'Top','Descriptions top',7000,'Chief','Clothes'),(12,'Sports shoes ','Descriptions shoes',10000,'Employee','Clothes'),(13,'Heels shoes','Heel shoes description',100000,'Employee','Clothes'),(14,'Women hat','Hat description',19000,'Employee','Clothes'),(15,'Ben 10','Ben description',17000,'Employee','Toys'),(16,'Sport hat','Sport hat description',10000,'Chief','Clothes'),(17,'Panties','Pantie description',60000,'Chief','Clothes'),(24,'Minnie mouse','Minnie description',18900,'Chief','Toys'),(25,'Bob builder','Bob description',14000,'Chief','Toys'),(26,'Barnie','Barnie description',18000,'Chief','Toys'),(40,'Towel','Towel description',10000,'Chief','Clothes'),(41,'Prueba','prueba',1234,'Chief','Toys'),(43,'Soccer shoes','Soccer description',120000,'Chief','Clothes'),(44,'asdwad','asdasd',1234,'Chief','Toys');
/*!40000 ALTER TABLE `Products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Users` (
  `idUsers` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(60) DEFAULT NULL,
  `LastName` varchar(60) DEFAULT NULL,
  `Password` varchar(60) DEFAULT NULL,
  `Type` varchar(60) DEFAULT NULL,
  `Email` varchar(60) DEFAULT NULL,
  `Gender` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`idUsers`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'Jose Luis','Sacanamboy','123jose','Chief','jose0luis41@gmail.com',0),(2,'Gloria','Rozo','123gloria','Employee','stella.rozo@gmail.com',1),(5,'Jose Luis','Sacanamboy Rozo','12345','Employee','jose@peewah.co',0),(6,'Paola Andrea','Buitrago Chavez','12345','Chief','paobuitrago_@hotmail.com',1),(7,'Ilse','Hinestroza Cuero','12345','Employee','ilse@gmail.com',1);
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-08-20 22:18:38
