-- MySQL dump 10.13  Distrib 5.7.20, for Linux (x86_64)
--
-- Host: localhost    Database: api-oauth
-- ------------------------------------------------------
-- Server version	5.7.20-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `access_tokens`
--

DROP TABLE IF EXISTS `access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `access_tokens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `access_token` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `access_tokens`
--

LOCK TABLES `access_tokens` WRITE;
/*!40000 ALTER TABLE `access_tokens` DISABLE KEYS */;
INSERT INTO `access_tokens` VALUES (1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0aGlzZGVtbyIsImV4cCI6MTUxNjM4MzcyMzk5MiwidXNlcklkIjoyLCJpYXQiOjE1MTYzODAxMjN9.B3FV8Rc-BehrDrRwr9LX9Nhi8Ti-NXlPARxhtZOcGZI',2),(2,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0aGlzZGVtbyIsImV4cCI6MTUxNjQzNjM5NjQ2MiwidXNlcklkIjoyLCJpYXQiOjE1MTY0MzI3OTZ9.jN1XfBhgj1b9QfX9M86pctKUUCpLOcYWRfb65cnve6I',2),(3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0aGlzZGVtbyIsImV4cCI6MTUxNjQ3Mjg0ODgwOCwidXNlcklkIjoyLCJpYXQiOjE1MTY0NjkyNDh9.x1rpp6GNLAseT7iLsTSop09VPuVBH8t5J3HCOdwdblo',2),(4,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0aGlzZGVtbyIsImV4cCI6MTUxNjQ3NzA3MjgyMCwidXNlcklkIjoyLCJpYXQiOjE1MTY0NzM0NzJ9.BZtsr2Ac7S73SJZBkwHVSZk5iw33aSFJFa8MaAYK5Ig',2),(5,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0aGlzZGVtbyIsImV4cCI6MTUxNjQ3NzgyMTE5NywidXNlcklkIjoyLCJpYXQiOjE1MTY0NzQyMjF9.9-QbLaiu64rMx6N25MYDVBuG9HeIuz6iNeZupCfw1-g',2);
/*!40000 ALTER TABLE `access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_handle_order`
--

DROP TABLE IF EXISTS `tbl_handle_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_handle_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_order` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `deskripsi_penyelesaian` varchar(45) DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  `finished_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_handle_order`
--

LOCK TABLES `tbl_handle_order` WRITE;
/*!40000 ALTER TABLE `tbl_handle_order` DISABLE KEYS */;
INSERT INTO `tbl_handle_order` VALUES (1,1,2,'cuma restart modem',1,'2018-01-21 19:05:00'),(2,2,2,'cuma restart modem',1,'2018-01-21 19:05:00'),(3,3,2,'cuma restart modem',1,'2018-01-21 19:05:00');
/*!40000 ALTER TABLE `tbl_handle_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_order`
--

DROP TABLE IF EXISTS `tbl_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_user_id` int(11) NOT NULL,
  `deskripsi` text NOT NULL,
  `created_date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_order`
--

LOCK TABLES `tbl_order` WRITE;
/*!40000 ALTER TABLE `tbl_order` DISABLE KEYS */;
INSERT INTO `tbl_order` VALUES (1,3,'sudah 3 bulan internet saya mati saya tidak tau permasalahan apa yang terjadi mohon di cek ya','2018-01-20 19:05:00'),(2,4,'sudah 3 bulan internet saya mati saya tidak tau permasalahan apa yang terjadi mohon di cek ya','2018-01-20 19:05:00'),(3,5,'sudah 3 bulan internet saya mati saya tidak tau permasalahan apa yang terjadi mohon di cek ya','2018-01-20 19:05:00');
/*!40000 ALTER TABLE `tbl_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_payroll`
--

DROP TABLE IF EXISTS `tbl_payroll`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_payroll` (
  `id` int(11) NOT NULL,
  `gaji_pokok` int(11) NOT NULL,
  `gaji_harian` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_payroll`
--

LOCK TABLES `tbl_payroll` WRITE;
/*!40000 ALTER TABLE `tbl_payroll` DISABLE KEYS */;
INSERT INTO `tbl_payroll` VALUES (1,2700000,75000);
/*!40000 ALTER TABLE `tbl_payroll` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_presensi`
--

DROP TABLE IF EXISTS `tbl_presensi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_presensi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jam_masuk` time(6) DEFAULT NULL,
  `jam_pulang` time(6) DEFAULT NULL,
  `tanggal` datetime DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_presensi`
--

LOCK TABLES `tbl_presensi` WRITE;
/*!40000 ALTER TABLE `tbl_presensi` DISABLE KEYS */;
INSERT INTO `tbl_presensi` VALUES (1,'08:00:00.000000','17:00:00.000000','2018-01-21 08:30:00',2),(2,'08:00:00.000000','17:00:00.000000','2018-01-22 08:30:00',2),(3,'08:00:00.000000','17:00:00.000000','2018-01-23 08:30:00',2);
/*!40000 ALTER TABLE `tbl_presensi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_target`
--

DROP TABLE IF EXISTS `tbl_target`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_target` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `max_target` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_target`
--

LOCK TABLES `tbl_target` WRITE;
/*!40000 ALTER TABLE `tbl_target` DISABLE KEYS */;
INSERT INTO `tbl_target` VALUES (1,20);
/*!40000 ALTER TABLE `tbl_target` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_user_group`
--

DROP TABLE IF EXISTS `tbl_user_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_user_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `alias` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_user_group`
--

LOCK TABLES `tbl_user_group` WRITE;
/*!40000 ALTER TABLE `tbl_user_group` DISABLE KEYS */;
INSERT INTO `tbl_user_group` VALUES (1,'admin','admin'),(2,'hr','hr'),(3,'resolver','resolver'),(4,'handler','handler');
/*!40000 ALTER TABLE `tbl_user_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_users`
--

DROP TABLE IF EXISTS `tbl_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_users` (
  `id` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(60) NOT NULL,
  `user_group_id` int(11) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `name` varchar(45) NOT NULL,
  `target_id` int(11) DEFAULT NULL,
  `payroll_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tbl_user_group_idx` (`user_group_id`),
  CONSTRAINT `fk_tbl_user_group` FOREIGN KEY (`user_group_id`) REFERENCES `tbl_user_group` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_users`
--

LOCK TABLES `tbl_users` WRITE;
/*!40000 ALTER TABLE `tbl_users` DISABLE KEYS */;
INSERT INTO `tbl_users` VALUES (1,'humanresource','7c4a8d09ca3762af61e59520943dc26494f8941b',2,1,'human resource',NULL,1),(2,'riansaputra','7c4a8d09ca3762af61e59520943dc26494f8941b',3,1,'rian saputra',1,1),(3,'fernandarachmadini','7c4a8d09ca3762af61e59520943dc26494f8941b',4,1,'fernanda rachmadini',NULL,1),(4,'zahraasriseptia','7c4a8d09ca3762af61e59520943dc26494f8941b',4,1,'zahra asri septia',NULL,1),(5,'azharprabudi','7c4a8d09ca3762af61e59520943dc26494f8941b',4,1,'azharprabudi',NULL,1);
/*!40000 ALTER TABLE `tbl_users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-01-21  2:40:30
