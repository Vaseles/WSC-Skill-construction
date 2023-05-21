-- MariaDB dump 10.19  Distrib 10.11.2-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: wscSkillConstruction
-- ------------------------------------------------------
-- Server version	10.11.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `elements`
--

DROP TABLE IF EXISTS `elements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `elements` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `width` varchar(255) NOT NULL,
  `height` varchar(255) NOT NULL,
  `is_basis` varchar(255) NOT NULL,
  `svg` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `elements`
--

LOCK TABLES `elements` WRITE;
/*!40000 ALTER TABLE `elements` DISABLE KEYS */;
INSERT INTO `elements` VALUES
(1,'Table','200','70','true','Table.svg',NULL,'2023-05-18 21:47:06'),
(2,'Laptop','50','40','false','Laptop.svg',NULL,'2023-05-18 23:31:30'),
(3,'Sofa','220','70','true','Sofa.svg',NULL,'2023-05-18 21:48:01'),
(4,'Closet','200','60','false','Closet.svg',NULL,'2023-05-18 21:48:36');
/*!40000 ALTER TABLE `elements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES
(1,'2014_10_12_000000_create_users_table',1),
(2,'2019_12_14_000001_create_personal_access_tokens_table',1),
(3,'2023_05_17_173227_create_elements_table',2),
(4,'2023_05_17_173239_create_projects_table',2);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
INSERT INTO `personal_access_tokens` VALUES
(1,'App\\Models\\User',1,'vaseles','0e547c10018db8ed1ced39015689d494e4f100f18bb0ff091c8cd44d81068f03','[\"*\"]',NULL,NULL,'2023-05-17 08:34:28','2023-05-17 08:34:28'),
(2,'App\\Models\\User',1,'vaseles','05deb4aaecfd2c3d129bb06fe76614b920bba361c71e4f6d23acab33060de10a','[\"*\"]','2023-05-18 07:27:57',NULL,'2023-05-17 08:36:53','2023-05-18 07:27:57'),
(3,'App\\Models\\User',1,'vaseles','ab170f1ca78d7728d525e731812708d370797a038a8c45efac45b33d793fad9b','[\"*\"]',NULL,NULL,'2023-05-17 10:20:33','2023-05-17 10:20:33'),
(4,'App\\Models\\User',1,'vaseles','bb3b06a2205cdb2ba04fa7b6eb0e59714b4bae5dd4b77594350c83dc504597a2','[\"*\"]',NULL,NULL,'2023-05-17 10:45:08','2023-05-17 10:45:08'),
(5,'App\\Models\\User',1,'vaseles','5d24c3363b1e6d4408f3e78703fcd05eec9c7de09a4cfbb84312d6da74b6e5d9','[\"*\"]',NULL,NULL,'2023-05-17 10:58:02','2023-05-17 10:58:02'),
(6,'App\\Models\\User',1,'vaseles','8250d7abe504d8e224e9e70ddaef866a77822444ef2ea82aa393458a32a2483c','[\"*\"]',NULL,NULL,'2023-05-17 10:58:48','2023-05-17 10:58:48'),
(7,'App\\Models\\User',1,'vaseles','4120edd2c1b86e885e77938ebe8aa7e2f1c2ab1b6a2dcfaec782f003e4aa3dc9','[\"*\"]','2023-05-17 11:20:24',NULL,'2023-05-17 10:59:22','2023-05-17 11:20:24'),
(8,'App\\Models\\User',1,'vaseles','6ab150c10d4bce2b9d5ce2a50157fcbf70845d02df6389852c13ca810c1b3a2a','[\"*\"]','2023-05-18 20:39:31',NULL,'2023-05-17 20:41:47','2023-05-18 20:39:31'),
(9,'App\\Models\\User',1,'vaseles','d82fbb279cfb67a8fb6852f31e44f10c505fef07a5db4aea808d1010af4dcaa6','[\"*\"]','2023-05-18 23:31:30',NULL,'2023-05-18 07:29:41','2023-05-18 23:31:30'),
(10,'App\\Models\\User',1,'vaseles','a4ea088b35ec9e3c5958bfb6746d525187328c92483312d5553aeb81ac0bba8b','[\"*\"]',NULL,NULL,'2023-05-18 08:37:12','2023-05-18 08:37:12'),
(11,'App\\Models\\User',1,'vaseles','cb9db8618db8c41332539a380d917039aa1a8a2f09a0d6695cc2870ff93b2849','[\"*\"]','2023-05-18 21:50:53',NULL,'2023-05-18 20:40:23','2023-05-18 21:50:53'),
(12,'App\\Models\\User',1,'vaseles','b9c9c73bc80ea497b964f716821f9a7fc79446b0087c5b3f35951cf1d0b428a3','[\"*\"]','2023-05-20 07:13:17',NULL,'2023-05-18 21:51:10','2023-05-20 07:13:17'),
(13,'App\\Models\\User',1,'vaseles','05e3da5b459988504c9b24e914c834122400c305ee9f92e899e38b6263e6929c','[\"*\"]','2023-05-19 02:26:41',NULL,'2023-05-18 23:34:28','2023-05-19 02:26:41'),
(14,'App\\Models\\User',1,'vaseles','0349270a988d75c3133bfbced69526529317c0546584766327fe0b70da40a6dd','[\"*\"]','2023-05-20 07:26:11',NULL,'2023-05-20 07:23:25','2023-05-20 07:26:11'),
(15,'App\\Models\\User',1,'vaseles','57299cf722d8b9ead349928476599e4d8ca9fae4593092a78d97911b8525127b','[\"*\"]','2023-05-20 11:05:50',NULL,'2023-05-20 10:51:58','2023-05-20 11:05:50'),
(16,'App\\Models\\User',1,'vaseles','c11b510136c3f0c83670a48378430bb239eccfd66e8ea84c7680236da8f97e34','[\"*\"]','2023-05-21 08:02:22',NULL,'2023-05-21 07:49:33','2023-05-21 08:02:22'),
(17,'App\\Models\\User',1,'vaseles','64bd1e80f883992cef3a9ccd4970d53cc50ecda17412f81f31fd91b9b024eade','[\"*\"]','2023-05-21 08:04:02',NULL,'2023-05-21 08:04:02','2023-05-21 08:04:02'),
(18,'App\\Models\\User',1,'vaseles','2b3672ec8373689d74d2607ff38308d924c97e059d7561b67a70b736f6a3a468','[\"*\"]','2023-05-21 08:05:41',NULL,'2023-05-21 08:04:20','2023-05-21 08:05:41');
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `projects` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`content`)),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES
(1,'Cool Room',1,'[{\"id\":1,\"name\":\"Table\",\"width\":\"200\",\"height\":\"70\",\"is_basis\":\"true\",\"svg\":\"Table.png\"}]','2023-05-18 08:09:02','2023-05-18 21:37:26'),
(2,'Cool Room',1,'[{\"id\":3,\"name\":\"Sofa\",\"width\":\"220\",\"height\":\"70\",\"is_basis\":\"true\",\"svg\":\"\\/images\\/Sofa.svg\"}]','2023-05-18 08:16:54','2023-05-18 08:17:34'),
(3,'New Cool Room',1,'\"[{\\\"uni\\\":17026066,\\\"element\\\":{\\\"id\\\":1,\\\"name\\\":\\\"Table\\\",\\\"width\\\":\\\"200\\\",\\\"height\\\":\\\"70\\\",\\\"is_basis\\\":\\\"true\\\",\\\"svg\\\":\\\"\\/images\\/Table.svg\\\"},\\\"positionX\\\":0,\\\"positionY\\\":0,\\\"rotation\\\":0,\\\"light\\\":false},{\\\"uni\\\":86846540,\\\"element\\\":{\\\"id\\\":3,\\\"name\\\":\\\"Sofa\\\",\\\"width\\\":\\\"220\\\",\\\"height\\\":\\\"70\\\",\\\"is_basis\\\":\\\"true\\\",\\\"svg\\\":\\\"\\/images\\/Sofa.svg\\\"},\\\"positionX\\\":0,\\\"positionY\\\":0,\\\"rotation\\\":0,\\\"light\\\":false}]\"','2023-05-20 07:12:48','2023-05-20 07:12:48'),
(4,'some',1,'\"[{\\\"uni\\\":61039664,\\\"element\\\":{\\\"id\\\":3,\\\"name\\\":\\\"Sofa\\\",\\\"width\\\":\\\"220\\\",\\\"height\\\":\\\"70\\\",\\\"is_basis\\\":\\\"true\\\",\\\"svg\\\":\\\"\\/images\\/Sofa.svg\\\"},\\\"positionX\\\":0,\\\"positionY\\\":0,\\\"rotation\\\":0,\\\"light\\\":false}]\"','2023-05-21 08:05:36','2023-05-21 08:05:36');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `login` varchar(255) NOT NULL,
  `pin` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_login_unique` (`login`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
(1,'vaseles','1000',NULL,'2023-05-17 08:34:28','2023-05-17 08:34:28');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-21 20:10:30
