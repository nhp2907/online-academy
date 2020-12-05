-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: online-academy-db
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `caption_language`
--

DROP TABLE IF EXISTS `caption_language`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `caption_language` (
  `id` int NOT NULL AUTO_INCREMENT,
  `language` varchar(45) DEFAULT NULL,
  `course_id` int NOT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_course_caption_idx` (`course_id`),
  CONSTRAINT `FK_course_caption` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `caption_language`
--

LOCK TABLES `caption_language` WRITE;
/*!40000 ALTER TABLE `caption_language` DISABLE KEYS */;
/*!40000 ALTER TABLE `caption_language` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Web Development','2020-12-05 15:34:54','2020-12-05 15:35:09'),(2,'Data Science','2020-12-05 15:34:54','2020-12-05 15:35:09'),(3,'Mobile Development','2020-12-05 15:34:54','2020-12-05 15:35:09'),(4,'Programming Languages','2020-12-05 15:34:54','2020-12-05 15:35:09'),(5,'Game Development','2020-12-05 15:34:54','2020-12-05 15:35:09'),(6,'Database Design & Development','2020-12-05 15:34:54','2020-12-05 15:35:09'),(7,'Software Testing','2020-12-05 15:34:54','2020-12-05 15:35:09'),(8,'Software Engineering','2020-12-05 15:34:54','2020-12-05 15:35:09'),(9,'Development Tools','2020-12-05 15:34:54','2020-12-05 15:35:09'),(10,'No-Code Development','2020-12-05 15:34:54','2020-12-05 15:35:09');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_link`
--

DROP TABLE IF EXISTS `category_link`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category_link` (
  `id` int NOT NULL,
  `category_id` int NOT NULL,
  `sub_category_id` int NOT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_category_idx` (`category_id`),
  KEY `FK_sub_category_idx` (`sub_category_id`),
  CONSTRAINT `FK_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `FK_sub_category` FOREIGN KEY (`sub_category_id`) REFERENCES `sub_category` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_link`
--

LOCK TABLES `category_link` WRITE;
/*!40000 ALTER TABLE `category_link` DISABLE KEYS */;
INSERT INTO `category_link` VALUES (1,1,1,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(2,1,2,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(3,1,3,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(4,1,4,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(5,1,5,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(6,1,6,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(7,1,7,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(8,1,8,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(9,2,8,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(10,2,9,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(11,2,10,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(12,2,11,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(13,2,12,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(14,2,13,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(15,2,1,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(16,2,15,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(17,3,16,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(18,3,17,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(19,3,18,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(20,3,19,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(21,3,20,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(22,3,21,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(23,3,22,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(24,3,23,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(25,4,24,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(26,4,25,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(27,4,26,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(28,4,27,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(29,4,28,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(30,4,29,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(31,4,2,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(32,4,3,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(33,4,8,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(34,5,30,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(35,5,31,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(36,5,32,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(37,5,33,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(38,5,34,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(39,5,35,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(40,5,36,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(41,5,25,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(42,5,27,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(43,6,37,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(44,6,38,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(45,6,39,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(46,6,40,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(47,6,41,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(48,6,42,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(49,6,43,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(50,6,44,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(51,6,45,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(52,7,46,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(53,7,47,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(54,7,48,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(55,7,49,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(56,7,50,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(57,7,51,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(58,7,52,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(59,7,24,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(60,8,53,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(61,8,54,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(62,8,55,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(63,8,56,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(64,8,57,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(65,8,58,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(66,8,8,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(67,9,59,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(68,9,60,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(69,9,61,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(70,9,62,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(71,9,63,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(72,9,64,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(73,9,65,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(74,9,66,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(75,10,67,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(76,10,68,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(77,10,69,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(78,10,70,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(79,10,71,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(80,10,72,'2020-12-05 15:49:36','2020-12-05 15:49:46'),(81,10,73,'2020-12-05 15:49:36','2020-12-05 15:49:46');
/*!40000 ALTER TABLE `category_link` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coupon`
--

DROP TABLE IF EXISTS `coupon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coupon` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `percent_discount` int DEFAULT NULL,
  `amount_discount` int DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coupon`
--

LOCK TABLES `coupon` WRITE;
/*!40000 ALTER TABLE `coupon` DISABLE KEYS */;
/*!40000 ALTER TABLE `coupon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `headline` varchar(255) DEFAULT NULL,
  `image` varchar(45) DEFAULT NULL,
  `concurrency` varchar(45) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `discount` int DEFAULT NULL,
  `language` varchar(45) DEFAULT NULL,
  `rating` float DEFAULT NULL,
  `num_review` int DEFAULT NULL,
  `num_lecture` int DEFAULT NULL,
  `estimate_content_length` varchar(45) DEFAULT NULL,
  `num_student_enroll` int DEFAULT NULL,
  `category_link_id` int NOT NULL,
  `author_id` int NOT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_category_idx` (`category_link_id`),
  KEY `FK_author_idx` (`author_id`),
  CONSTRAINT `FK_author` FOREIGN KEY (`author_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_category_link` FOREIGN KEY (`category_link_id`) REFERENCES `category_link` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enrolled_course`
--

DROP TABLE IF EXISTS `enrolled_course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enrolled_course` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `course_id` int NOT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_course_enroll_idx` (`course_id`),
  KEY `FK_user_enroll_idx` (`user_id`),
  CONSTRAINT `FK_course_enroll` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`),
  CONSTRAINT `FK_user_enroll` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enrolled_course`
--

LOCK TABLES `enrolled_course` WRITE;
/*!40000 ALTER TABLE `enrolled_course` DISABLE KEYS */;
/*!40000 ALTER TABLE `enrolled_course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `incentive`
--

DROP TABLE IF EXISTS `incentive`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `incentive` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(45) DEFAULT NULL,
  `course_id` int NOT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_course_incentive_idx` (`course_id`),
  CONSTRAINT `FK_course_incentive` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `incentive`
--

LOCK TABLES `incentive` WRITE;
/*!40000 ALTER TABLE `incentive` DISABLE KEYS */;
/*!40000 ALTER TABLE `incentive` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoice`
--

DROP TABLE IF EXISTS `invoice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoice` (
  `id` int NOT NULL AUTO_INCREMENT,
  `total_price` varchar(45) DEFAULT NULL,
  `order_date` datetime DEFAULT NULL,
  `paid_date` datetime DEFAULT NULL,
  `refund_date` datetime DEFAULT NULL,
  `invoice_status_id` int NOT NULL,
  `user_id` int NOT NULL,
  `payment_type_id` int NOT NULL,
  `coupon_id` int NOT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_invoice_user_idx` (`user_id`),
  KEY `FK_invoice_coupon_idx` (`coupon_id`),
  KEY `FK_invoice_payment_type_idx` (`payment_type_id`),
  KEY `FK_invoice_invoice_status_idx` (`invoice_status_id`),
  CONSTRAINT `FK_invoice_coupon` FOREIGN KEY (`coupon_id`) REFERENCES `coupon` (`id`),
  CONSTRAINT `FK_invoice_invoice_status` FOREIGN KEY (`invoice_status_id`) REFERENCES `invoice_status` (`id`),
  CONSTRAINT `FK_invoice_payment_type` FOREIGN KEY (`payment_type_id`) REFERENCES `payment_type` (`id`),
  CONSTRAINT `FK_invoice_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice`
--

LOCK TABLES `invoice` WRITE;
/*!40000 ALTER TABLE `invoice` DISABLE KEYS */;
/*!40000 ALTER TABLE `invoice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoice_course`
--

DROP TABLE IF EXISTS `invoice_course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoice_course` (
  `id` int NOT NULL AUTO_INCREMENT,
  `invoice_id` int NOT NULL,
  `course_id` int NOT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_invoice_course_idx` (`course_id`),
  KEY `FK_specify_invoice_idx` (`invoice_id`),
  CONSTRAINT `FK_specify_course` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`),
  CONSTRAINT `FK_specify_invoice` FOREIGN KEY (`invoice_id`) REFERENCES `invoice` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice_course`
--

LOCK TABLES `invoice_course` WRITE;
/*!40000 ALTER TABLE `invoice_course` DISABLE KEYS */;
/*!40000 ALTER TABLE `invoice_course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoice_status`
--

DROP TABLE IF EXISTS `invoice_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoice_status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` varchar(45) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice_status`
--

LOCK TABLES `invoice_status` WRITE;
/*!40000 ALTER TABLE `invoice_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `invoice_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `length` varchar(45) DEFAULT NULL,
  `can_be_preview` int DEFAULT NULL,
  `section_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_section_idx` (`section_id`),
  CONSTRAINT `FK_section` FOREIGN KEY (`section_id`) REFERENCES `section` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `objective`
--

DROP TABLE IF EXISTS `objective`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `objective` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(45) DEFAULT NULL,
  `course_id` int NOT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_course_objective_idx` (`course_id`),
  CONSTRAINT `FK_course_objective` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `objective`
--

LOCK TABLES `objective` WRITE;
/*!40000 ALTER TABLE `objective` DISABLE KEYS */;
/*!40000 ALTER TABLE `objective` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_type`
--

DROP TABLE IF EXISTS `payment_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(45) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_type`
--

LOCK TABLES `payment_type` WRITE;
/*!40000 ALTER TABLE `payment_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `requiment`
--

DROP TABLE IF EXISTS `requiment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `requiment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(45) DEFAULT NULL,
  `course_id` int NOT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_course_requiment_idx` (`course_id`),
  CONSTRAINT `FK_course_requiment` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `requiment`
--

LOCK TABLES `requiment` WRITE;
/*!40000 ALTER TABLE `requiment` DISABLE KEYS */;
/*!40000 ALTER TABLE `requiment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `course_id` int NOT NULL,
  `content` varchar(1000) DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_course_review_idx` (`course_id`),
  KEY `FK_user_review_idx` (`user_id`),
  CONSTRAINT `FK_course_review` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`),
  CONSTRAINT `FK_user_review` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(45) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `section`
--

DROP TABLE IF EXISTS `section`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `section` (
  `id` int NOT NULL AUTO_INCREMENT,
  `count` int DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `length` varchar(45) DEFAULT NULL,
  `course_id` int NOT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_course_section_idx` (`course_id`),
  CONSTRAINT `FK_course_section` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `section`
--

LOCK TABLES `section` WRITE;
/*!40000 ALTER TABLE `section` DISABLE KEYS */;
/*!40000 ALTER TABLE `section` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_category`
--

DROP TABLE IF EXISTS `sub_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_category` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_category`
--

LOCK TABLES `sub_category` WRITE;
/*!40000 ALTER TABLE `sub_category` DISABLE KEYS */;
INSERT INTO `sub_category` VALUES (1,'JavaScript','2020-12-05 15:36:23','2020-12-05 15:36:31'),(2,'React','2020-12-05 15:36:23','2020-12-05 15:36:31'),(3,'Angular','2020-12-05 15:36:23','2020-12-05 15:36:31'),(4,'CSS','2020-12-05 15:36:23','2020-12-05 15:36:31'),(5,'PHP','2020-12-05 15:36:23','2020-12-05 15:36:31'),(6,'Node,js','2020-12-05 15:36:23','2020-12-05 15:36:31'),(7,'WordPress','2020-12-05 15:36:23','2020-12-05 15:36:31'),(8,'Python','2020-12-05 15:36:23','2020-12-05 15:36:31'),(9,'Machine Learning','2020-12-05 15:36:23','2020-12-05 15:36:31'),(10,'Deep Learning','2020-12-05 15:36:23','2020-12-05 15:36:31'),(11,'Data Analyst','2020-12-05 15:36:23','2020-12-05 15:36:31'),(12,'Atificial Itelligence','2020-12-05 15:36:23','2020-12-05 15:36:31'),(13,'R','2020-12-05 15:36:23','2020-12-05 15:36:31'),(14,'Tensor Flow','2020-12-05 15:36:23','2020-12-05 15:36:31'),(15,'Neural Network','2020-12-05 15:36:23','2020-12-05 15:36:31'),(16,'Google Flutter','2020-12-05 15:36:23','2020-12-05 15:36:31'),(17,'Android Development','2020-12-05 15:36:23','2020-12-05 15:36:31'),(18,'IOS Development','2020-12-05 15:36:23','2020-12-05 15:36:31'),(19,'Swift','2020-12-05 15:36:23','2020-12-05 15:36:31'),(20,'React Native','2020-12-05 15:36:23','2020-12-05 15:36:31'),(21,'Dart Programing Language','2020-12-05 15:36:23','2020-12-05 15:36:31'),(22,'Kortlin','2020-12-05 15:36:23','2020-12-05 15:36:31'),(23,'Redux Framework','2020-12-05 15:36:23','2020-12-05 15:36:31'),(24,'Java','2020-12-05 15:36:23','2020-12-05 15:36:31'),(25,'C#','2020-12-05 15:36:23','2020-12-05 15:36:31'),(26,'C++','2020-12-05 15:36:23','2020-12-05 15:36:31'),(27,'C','2020-12-05 15:36:23','2020-12-05 15:36:31'),(28,'Go Programming Language','2020-12-05 15:36:23','2020-12-05 15:36:31'),(29,'Spring Framework','2020-12-05 15:36:23','2020-12-05 15:36:31'),(30,'Unity','2020-12-05 15:36:23','2020-12-05 15:36:31'),(31,'Game Development Fundamental','2020-12-05 15:36:23','2020-12-05 15:36:31'),(32,'Unreal Engine','2020-12-05 15:36:23','2020-12-05 15:36:31'),(33,'3D Game Development','2020-12-05 15:36:23','2020-12-05 15:36:31'),(34,'2D Game Development','2020-12-05 15:36:23','2020-12-05 15:36:31'),(35,'Unreal Engine Blueprint','2020-12-05 15:36:23','2020-12-05 15:36:31'),(36,'Blender','2020-12-05 15:36:23','2020-12-05 15:36:31'),(37,'SQL','2020-12-05 15:36:23','2020-12-05 15:36:31'),(38,'MySQL','2020-12-05 15:36:23','2020-12-05 15:36:31'),(39,'Oracle SQL','2020-12-05 15:36:23','2020-12-05 15:36:31'),(40,'MongoDB','2020-12-05 15:36:23','2020-12-05 15:36:31'),(41,'Oracle Certification','2020-12-05 15:36:23','2020-12-05 15:36:31'),(42,'SQL Server','2020-12-05 15:36:23','2020-12-05 15:36:31'),(43,'Apache Kafka','2020-12-05 15:36:23','2020-12-05 15:36:31'),(44,'PostgreSQL','2020-12-05 15:36:23','2020-12-05 15:36:31'),(45,'Database Programming','2020-12-05 15:36:23','2020-12-05 15:36:31'),(46,'Selenium Webdriver','2020-12-05 15:36:23','2020-12-05 15:36:31'),(47,'Automation Testing','2020-12-05 15:36:23','2020-12-05 15:36:31'),(48,'Selenium Testing Framework','2020-12-05 15:36:23','2020-12-05 15:36:31'),(49,'API Testing','2020-12-05 15:36:23','2020-12-05 15:36:31'),(50,'Cypress.io','2020-12-05 15:36:23','2020-12-05 15:36:31'),(51,'RESS Arused','2020-12-05 15:36:23','2020-12-05 15:36:31'),(52,'Appium','2020-12-05 15:36:23','2020-12-05 15:36:31'),(53,'Coding Interview','2020-12-05 15:36:23','2020-12-05 15:36:31'),(54,'Kubernetes','2020-12-05 15:36:23','2020-12-05 15:36:31'),(55,'Certified Kubernetes Application Developer Ckad','2020-12-05 15:36:23','2020-12-05 15:36:31'),(56,'Data Structures','2020-12-05 15:36:23','2020-12-05 15:36:31'),(57,'Microservices','2020-12-05 15:36:23','2020-12-05 15:36:31'),(58,'Agile','2020-12-05 15:36:23','2020-12-05 15:36:31'),(59,'Docker','2020-12-05 15:36:23','2020-12-05 15:36:31'),(60,'Git','2020-12-05 15:36:23','2020-12-05 15:36:31'),(61,'DevOps','2020-12-05 15:36:23','2020-12-05 15:36:31'),(62,'Jetkins','2020-12-05 15:36:23','2020-12-05 15:36:31'),(63,'JIRA','2020-12-05 15:36:23','2020-12-05 15:36:31'),(64,'Aws Certified Solutions Architect Associate','2020-12-05 15:36:23','2020-12-05 15:36:31'),(65,'Continuous Integration','2020-12-05 15:36:23','2020-12-05 15:36:31'),(66,'Confluence','2020-12-05 15:36:23','2020-12-05 15:36:31'),(67,'Elementor','2020-12-05 15:36:23','2020-12-05 15:36:31'),(68,'Wix','2020-12-05 15:36:23','2020-12-05 15:36:31'),(69,'Bubble Visual Programming','2020-12-05 15:36:23','2020-12-05 15:36:31'),(70,'Microsoft Powerapps','2020-12-05 15:36:23','2020-12-05 15:36:31'),(71,'Microsoft Flow','2020-12-05 15:36:23','2020-12-05 15:36:31'),(72,'Web Design','2020-12-05 15:36:23','2020-12-05 15:36:31'),(73,'Startup','2020-12-05 15:36:23','2020-12-05 15:36:31');
/*!40000 ALTER TABLE `sub_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `job` varchar(255) DEFAULT NULL,
  `info` varchar(255) DEFAULT NULL,
  `gender` tinyint DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `birthday` datetime DEFAULT NULL,
  `address_line` varchar(255) DEFAULT NULL,
  `district` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `role_id` int NOT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_role_idx` (`role_id`),
  CONSTRAINT `FK_role` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-05 16:55:38
