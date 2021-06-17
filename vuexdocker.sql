-- MariaDB dump 10.18  Distrib 10.4.17-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: vuexdocker
-- ------------------------------------------------------
-- Server version	8.0.23-0ubuntu0.20.04.1

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
-- Table structure for table `appuntamentos`
--

DROP TABLE IF EXISTS `appuntamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `appuntamentos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `giorno` date NOT NULL,
  `orario` time NOT NULL,
  `nota` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `client_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  `filiale_id` bigint DEFAULT NULL,
  `recapito_id` bigint DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appuntamentos`
--

LOCK TABLES `appuntamentos` WRITE;
/*!40000 ALTER TABLE `appuntamentos` DISABLE KEYS */;
/*!40000 ALTER TABLE `appuntamentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `audiometrias`
--

DROP TABLE IF EXISTS `audiometrias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `audiometrias` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `client_id` bigint unsigned NOT NULL,
  `_125d` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_250d` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_500d` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_1000d` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_1500d` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_2000d` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_3000d` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_4000d` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_6000d` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_8000d` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_125s` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_250s` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_500s` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_1000s` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_1500s` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_2000s` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_3000s` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_4000s` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_6000s` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_8000s` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `audiometrias`
--

LOCK TABLES `audiometrias` WRITE;
/*!40000 ALTER TABLE `audiometrias` DISABLE KEYS */;
/*!40000 ALTER TABLE `audiometrias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `budgets`
--

DROP TABLE IF EXISTS `budgets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `budgets` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint NOT NULL,
  `budgetAnno` int NOT NULL,
  `premio` int DEFAULT NULL,
  `stipendio` int DEFAULT NULL,
  `provvigione` int DEFAULT NULL,
  `gennaio` int NOT NULL,
  `febbraio` int NOT NULL,
  `marzo` int NOT NULL,
  `aprile` int NOT NULL,
  `maggio` int NOT NULL,
  `giugno` int NOT NULL,
  `luglio` int NOT NULL,
  `agosto` int NOT NULL,
  `settembre` int NOT NULL,
  `ottobre` int NOT NULL,
  `novembre` int NOT NULL,
  `dicembre` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `budgets`
--

LOCK TABLES `budgets` WRITE;
/*!40000 ALTER TABLE `budgets` DISABLE KEYS */;
INSERT INTO `budgets` VALUES (1,'Budget',2,100000,NULL,1000,10,8000,10000,8000,10000,8000,8000,8000,8000,8000,8000,8000,8000,NULL,NULL),(2,'Budget',3,120000,NULL,1200,10,8000,10000,8000,10000,8000,8000,8000,8000,8000,8000,8000,8000,NULL,NULL),(3,'Budget',4,110000,NULL,1100,10,8000,10000,8000,10000,8000,8000,8000,8000,8000,8000,8000,8000,NULL,NULL);
/*!40000 ALTER TABLE `budgets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categorias` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'APA',NULL,NULL),(2,'ACC',NULL,NULL),(3,'SERV',NULL,NULL);
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clients` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cognome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `codfisc` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `indirizzo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `citta` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cap` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `provincia` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tipologia_id` bigint NOT NULL,
  `mail` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `recall` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `datarecall` date DEFAULT NULL,
  `datanascita` date DEFAULT NULL,
  `meseNascita` int DEFAULT NULL,
  `giornoNascita` int DEFAULT NULL,
  `marketing_id` bigint unsigned NOT NULL,
  `user_id` bigint unsigned NOT NULL,
  `filiale_id` bigint unsigned NOT NULL,
  `recapito_id` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `clients_codfisc_unique` (`codfisc`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` VALUES (1,'CLIENTE121','COGNOME121','hoZo4Qdonyf','M3QVY5D5CGAJHKL6YPBI','JDKXAWFNVF','61816','YL','321615612',3,NULL,NULL,NULL,NULL,NULL,NULL,1,2,1,NULL,'2021-06-16 15:32:31','2021-06-16 15:32:31'),(2,'CLIENTE221','COGNOME221','dhcpruflzTY','3MINARWG2APNICZJS4Z6','J3W0QZVRUM','56566','WY','321615612',1,NULL,NULL,NULL,NULL,NULL,NULL,1,2,1,NULL,'2021-06-16 15:32:31','2021-06-16 15:32:31'),(3,'CLIENTE321','COGNOME321','I5aWQBeovHn','3WL2M5YZTTC1U7FCF0NE','XETYZHM8OQ','33472','SL','321615612',1,NULL,NULL,NULL,NULL,NULL,NULL,3,2,1,NULL,'2021-06-16 15:32:31','2021-06-16 15:32:31'),(4,'CLIENTE421','COGNOME421','BlIiho9kqHi','AA3DXPDQREAOIFACN8OW','OOQXEAF6UA','68875','D3','321615612',2,NULL,NULL,NULL,NULL,NULL,NULL,1,2,1,NULL,'2021-06-16 15:32:32','2021-06-16 15:32:32'),(5,'CLIENTE521','COGNOME521','wjOzgztaACp','Y7AHHAHLZPOKGSGIILI4','NH5HMKFW9G','93375','VN','321615612',3,NULL,NULL,NULL,NULL,NULL,NULL,1,2,1,NULL,'2021-06-16 15:32:32','2021-06-16 15:32:32'),(6,'CLIENTE621','COGNOME621','rCWfBBc76es','HSDBIGDLKAAJQ47ARJM5','IF5O6JRONU','43218','8W','321615612',2,NULL,NULL,NULL,NULL,NULL,NULL,1,2,1,NULL,'2021-06-16 15:32:32','2021-06-16 15:32:32'),(7,'CLIENTE721','COGNOME721','7CKJlmTkbd6','ETLQCR2PH8ZBFBQ7TNKP','NJU6JDW15J','63438','SH','321615612',3,NULL,NULL,NULL,NULL,NULL,NULL,2,2,1,NULL,'2021-06-16 15:32:32','2021-06-16 15:32:32'),(8,'CLIENTE821','COGNOME821','HowBhZjRcf7','YGDJOJJOW3PXUIOIWYAP','85CDZFN1IF','51363','QX','321615612',3,NULL,NULL,NULL,NULL,NULL,NULL,3,2,1,NULL,'2021-06-16 15:32:32','2021-06-16 15:32:32'),(9,'CLIENTE921','COGNOME921','TSyhIoK7XOS','PRTYWCPK7DKXTWGY7IP5','MFLSQPG7HB','58874','YH','321615612',2,NULL,NULL,NULL,NULL,NULL,NULL,2,2,1,NULL,'2021-06-16 15:32:32','2021-06-16 15:32:32'),(10,'CLIENTE122','COGNOME122','LacYzyyUMSn','ZJOICCDVYGXCLS8HLPMT','NQTGTEQCUS','32572','GP','321615612',3,NULL,NULL,NULL,NULL,NULL,NULL,2,3,2,NULL,'2021-06-16 15:32:32','2021-06-16 15:32:32'),(11,'CLIENTE222','COGNOME222','7J020t7D2Ff','XHW7YZUVN9UMPWM85NZ0','HXHOSHIRIQ','16847','AY','321615612',3,NULL,NULL,NULL,NULL,NULL,NULL,3,3,2,NULL,'2021-06-16 15:32:32','2021-06-16 15:32:32'),(12,'CLIENTE322','COGNOME322','Ex8p8hqtZ1p','4T6D0IPKFGMI74I55PZV','BMRK8FGSMU','37893','SW','321615612',3,NULL,NULL,NULL,NULL,NULL,NULL,3,3,2,NULL,'2021-06-16 15:32:32','2021-06-16 15:32:32'),(13,'CLIENTE422','COGNOME422','gTCKTtAjL6m','1YWOWK8FYT5PMJTLTFVE','VFSCR36C3B','85521','1I','321615612',1,NULL,NULL,NULL,NULL,NULL,NULL,2,3,2,NULL,'2021-06-16 15:32:32','2021-06-16 15:32:32'),(14,'CLIENTE522','COGNOME522','vbrZbVymtre','19NYUXC5Y77PEQ0O42EH','A9J3NIWSHN','52181','6G','321615612',3,NULL,NULL,NULL,NULL,NULL,NULL,3,3,2,NULL,'2021-06-16 15:32:33','2021-06-16 15:32:33'),(15,'CLIENTE622','COGNOME622','ZOgWMa9V6e6','K2UZMEG0CWMRTCQROVD9','UVUSKZERU1','85339','K2','321615612',3,NULL,NULL,NULL,NULL,NULL,NULL,3,3,2,NULL,'2021-06-16 15:32:33','2021-06-16 15:32:33'),(16,'CLIENTE722','COGNOME722','DcFyz9HsGDo','C4KEN4AX10UFYV9BCM7Q','3RVV3XS3NV','74388','QP','321615612',3,NULL,NULL,NULL,NULL,NULL,NULL,2,3,2,NULL,'2021-06-16 15:32:33','2021-06-16 15:32:33'),(17,'CLIENTE822','COGNOME822','znZjMAeHu8T','03NRZBYOZ27HIFCCGWNK','Q4LEHF6QIH','76414','PK','321615612',3,NULL,NULL,NULL,NULL,NULL,NULL,3,3,2,NULL,'2021-06-16 15:32:33','2021-06-16 15:32:33'),(18,'CLIENTE922','COGNOME922','3b6EKZSXsWK','X7VHGPR0L0BIMAYIEWHJ','ZDVEIA0DSH','25827','VG','321615612',2,NULL,NULL,NULL,NULL,NULL,NULL,2,3,2,NULL,'2021-06-16 15:32:33','2021-06-16 15:32:33'),(19,'CLIENTE123','COGNOME123','pyOW93HSyxJ','LNSECCL4UBSJHHZGJCLH','1ADUYY8ASH','66716','XC','321615612',1,NULL,NULL,NULL,NULL,NULL,NULL,3,4,3,NULL,'2021-06-16 15:32:33','2021-06-16 15:32:33'),(20,'CLIENTE223','COGNOME223','bOepO6tXIMC','MZAF0JYR7N9XU0JQYADU','MJFE4LKNP1','72122','0U','321615612',2,NULL,NULL,NULL,NULL,NULL,NULL,2,4,3,NULL,'2021-06-16 15:32:33','2021-06-16 15:32:33'),(21,'CLIENTE323','COGNOME323','bb06hdpmTzi','DBI72WCFDMP3WK1MCKEZ','CEF5LTT92F','57168','CN','321615612',1,NULL,NULL,NULL,NULL,NULL,NULL,2,4,3,NULL,'2021-06-16 15:32:33','2021-06-16 15:32:33'),(22,'CLIENTE423','COGNOME423','fy6pJeroZfa','6PJZJHLNC6Z9QD95DYHY','U1RJFGUVAV','61496','AZ','321615612',2,NULL,NULL,NULL,NULL,NULL,NULL,2,4,3,NULL,'2021-06-16 15:32:33','2021-06-16 15:32:33'),(23,'CLIENTE523','COGNOME523','dvHtQ9a1kkC','GSFFGCBNDOVMBCR1ZGY6','KAPCKYSKWL','47765','T2','321615612',3,NULL,NULL,NULL,NULL,NULL,NULL,3,4,3,NULL,'2021-06-16 15:32:34','2021-06-16 15:32:34'),(24,'CLIENTE623','COGNOME623','0v6TArMEqOF','OMYQWONXMDLEWHI4FSLK','1K1TO732I3','34238','FR','321615612',1,NULL,NULL,NULL,NULL,NULL,NULL,1,4,3,NULL,'2021-06-16 15:32:34','2021-06-16 15:32:34'),(25,'CLIENTE723','COGNOME723','9UwPdXfxhoC','1ZIHOST1RLGJVTUHXENB','FSYFJGHQVC','82749','DN','321615612',3,NULL,NULL,NULL,NULL,NULL,NULL,3,4,3,NULL,'2021-06-16 15:32:34','2021-06-16 15:32:34'),(26,'CLIENTE823','COGNOME823','DZbpYqp2N9W','UB9U7MMNRNNZROT8FKMD','RW4YQ9OJYP','36738','UU','321615612',2,NULL,NULL,NULL,NULL,NULL,NULL,1,4,3,NULL,'2021-06-16 15:32:34','2021-06-16 15:32:34'),(27,'CLIENTE923','COGNOME923','GVAyl7N9cje','DFXIKVLZW1MOKNFU5STC','H8OCGA7OBI','64277','LU','321615612',1,NULL,NULL,NULL,NULL,NULL,NULL,2,4,3,NULL,'2021-06-16 15:32:34','2021-06-16 15:32:34');
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ddts`
--

DROP TABLE IF EXISTS `ddts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ddts` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `filiale_id` bigint unsigned NOT NULL,
  `prova_id` bigint unsigned NOT NULL,
  `nome_destinazione` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `indirizzo_destinazione` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `citta_destinazione` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cap_destinazione` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `provincia_destinazione` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ddts`
--

LOCK TABLES `ddts` WRITE;
/*!40000 ALTER TABLE `ddts` DISABLE KEYS */;
/*!40000 ALTER TABLE `ddts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `deltas`
--

DROP TABLE IF EXISTS `deltas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `deltas` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `budgetAnno` double(8,2) DEFAULT NULL,
  `premio` double(8,2) DEFAULT NULL,
  `stipendio` double(8,2) DEFAULT NULL,
  `provvigione` double(8,2) DEFAULT NULL,
  `gennaio` double(8,2) DEFAULT NULL,
  `febbraio` double(8,2) DEFAULT NULL,
  `marzo` double(8,2) DEFAULT NULL,
  `aprile` double(8,2) DEFAULT NULL,
  `maggio` double(8,2) DEFAULT NULL,
  `giugno` double(8,2) DEFAULT NULL,
  `luglio` double(8,2) DEFAULT NULL,
  `agosto` double(8,2) DEFAULT NULL,
  `settembre` double(8,2) DEFAULT NULL,
  `ottobre` double(8,2) DEFAULT NULL,
  `novembre` double(8,2) DEFAULT NULL,
  `dicembre` double(8,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2000 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deltas`
--

LOCK TABLES `deltas` WRITE;
/*!40000 ALTER TABLE `deltas` DISABLE KEYS */;
/*!40000 ALTER TABLE `deltas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fatturas`
--

DROP TABLE IF EXISTS `fatturas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fatturas` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `prova_id` bigint DEFAULT NULL,
  `data_fattura` date DEFAULT NULL,
  `acconto` int DEFAULT NULL,
  `nr_rate` int DEFAULT NULL,
  `tot_fattura` int DEFAULT NULL,
  `al_saldo` int DEFAULT NULL,
  `tot_fattura_scontato` int DEFAULT NULL,
  `sconto` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fatturas`
--

LOCK TABLES `fatturas` WRITE;
/*!40000 ALTER TABLE `fatturas` DISABLE KEYS */;
INSERT INTO `fatturas` VALUES (1,1,'2021-05-19',NULL,NULL,2400,NULL,NULL,NULL,NULL,NULL),(2,2,'2021-05-19',NULL,NULL,4000,NULL,NULL,NULL,NULL,NULL),(3,3,'2021-04-19',NULL,NULL,4000,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `fatturas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fatturatis`
--

DROP TABLE IF EXISTS `fatturatis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fatturatis` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `budgetAnno` int DEFAULT NULL,
  `premio` int DEFAULT NULL,
  `stipendio` int DEFAULT NULL,
  `provvigione` int DEFAULT NULL,
  `gennaio` int DEFAULT NULL,
  `febbraio` int DEFAULT NULL,
  `marzo` int DEFAULT NULL,
  `aprile` int DEFAULT NULL,
  `maggio` int DEFAULT NULL,
  `giugno` int DEFAULT NULL,
  `luglio` int DEFAULT NULL,
  `agosto` int DEFAULT NULL,
  `settembre` int DEFAULT NULL,
  `ottobre` int DEFAULT NULL,
  `novembre` int DEFAULT NULL,
  `dicembre` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1000 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fatturatis`
--

LOCK TABLES `fatturatis` WRITE;
/*!40000 ALTER TABLE `fatturatis` DISABLE KEYS */;
/*!40000 ALTER TABLE `fatturatis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `filiale_user`
--

DROP TABLE IF EXISTS `filiale_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `filiale_user` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `filiale_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `filiale_user_user_id_filiale_id_unique` (`user_id`,`filiale_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filiale_user`
--

LOCK TABLES `filiale_user` WRITE;
/*!40000 ALTER TABLE `filiale_user` DISABLE KEYS */;
INSERT INTO `filiale_user` VALUES (1,2,1,NULL,NULL),(2,3,2,NULL,NULL),(3,4,3,NULL,NULL),(4,5,1,NULL,NULL),(5,5,2,NULL,NULL);
/*!40000 ALTER TABLE `filiale_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `filiales`
--

DROP TABLE IF EXISTS `filiales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `filiales` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `indirizzo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `citta` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cap` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `provincia` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filiales`
--

LOCK TABLES `filiales` WRITE;
/*!40000 ALTER TABLE `filiales` DISABLE KEYS */;
INSERT INTO `filiales` VALUES (1,'PISA','VIA ROSSI 23','PISA','0559583503','520226','PI',NULL,NULL),(2,'LUCCA','VIA VICOLO STRETTO 23','GARFAGNANA DI BARGA','08554545','584652','LU',NULL,NULL),(3,'AREZZO','VIA VAI 3','AREZZO','08554545','584652','AR',NULL,NULL);
/*!40000 ALTER TABLE `filiales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fornitores`
--

DROP TABLE IF EXISTS `fornitores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fornitores` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `indirizzo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `citta` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cap` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provincia` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telefono` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pec` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `univoco` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fornitores`
--

LOCK TABLES `fornitores` WRITE;
/*!40000 ALTER TABLE `fornitores` DISABLE KEYS */;
INSERT INTO `fornitores` VALUES (1,'PHONAK','REALKDA òLKDA FLòKDKL','MILANO','6546','MI','654645665',NULL,NULL,NULL,NULL,NULL),(2,'STARKEY','REALKDA òLKDA FLòKDKL','ROMA','6546','RM','3454353454334',NULL,NULL,NULL,NULL,NULL),(3,'OTICON','REALKDA òLKDA FLòKDKL','FIRENZE','6546','FI','3454354343',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `fornitores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `listinos`
--

DROP TABLE IF EXISTS `listinos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `listinos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fornitore_id` bigint DEFAULT NULL,
  `categoria_id` bigint DEFAULT NULL,
  `costo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `prezzolistino` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `iva` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `giorniTempoDiReso` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `listinos`
--

LOCK TABLES `listinos` WRITE;
/*!40000 ALTER TABLE `listinos` DISABLE KEYS */;
INSERT INTO `listinos` VALUES (1,'M90',1,1,'1000','4000','4','90',NULL,NULL),(2,'M70',1,1,'800','3500','4','90',NULL,NULL),(3,'SILVER',2,1,'300','1500','4','120',NULL,NULL),(4,'GET',3,1,'150','1200','4','60',NULL,NULL),(5,'TV LINK',2,2,'200','400','22','90',NULL,NULL);
/*!40000 ALTER TABLE `listinos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marketings`
--

DROP TABLE IF EXISTS `marketings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `marketings` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marketings`
--

LOCK TABLES `marketings` WRITE;
/*!40000 ALTER TABLE `marketings` DISABLE KEYS */;
INSERT INTO `marketings` VALUES (1,'GIORNALE',NULL,NULL),(2,'SCREENING',NULL,NULL),(3,'LETTERA',NULL,NULL);
/*!40000 ALTER TABLE `marketings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2019_08_19_000000_create_failed_jobs_table',1),(4,'2019_12_14_000001_create_personal_access_tokens_table',1),(5,'2021_04_24_164643_create_clients_table',1),(6,'2021_04_24_165036_create_products_table',1),(7,'2021_04_24_165244_create_audiometrias_table',1),(8,'2021_04_24_165423_create_fornitores_table',1),(9,'2021_04_24_165450_create_fatturas_table',1),(10,'2021_04_24_165510_create_filiales_table',1),(11,'2021_04_24_165541_create_listinos_table',1),(12,'2021_04_24_165607_create_provas_table',1),(13,'2021_04_24_171609_create_ddts_table',1),(14,'2021_04_25_141135_create_notes_table',1),(15,'2021_04_25_143334_productprova',1),(16,'2021_04_26_145129_create_marketings_table',1),(17,'2021_04_27_190723_create_recapitos_table',1),(18,'2021_04_28_110757_create_filiale_user_table',1),(19,'2021_04_30_180747_create_appuntamentos_table',1),(20,'2021_05_05_093241_create_budgets_table',1),(21,'2021_05_06_170255_create_ratefatturas_table',1),(22,'2021_05_07_130923_create_tipologias_table',1),(23,'2021_05_24_200526_create_ruolos_table',1),(24,'2021_05_24_201303_create_categorias_table',1),(25,'2021_05_24_201638_create_stato_apas_table',1),(26,'2021_06_10_071906_create_fatturatis_table',1),(27,'2021_06_10_121617_create_deltas_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notes`
--

DROP TABLE IF EXISTS `notes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notes` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `testo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `client_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notes`
--

LOCK TABLES `notes` WRITE;
/*!40000 ALTER TABLE `notes` DISABLE KEYS */;
/*!40000 ALTER TABLE `notes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
INSERT INTO `personal_access_tokens` VALUES (1,'App\\Models\\User',5,'my-app-token','40edb6046f42d20d145fd89e772a8c25f1d9836968e16cc5bc2a590068928b60','[\"*\"]',NULL,'2021-06-16 16:19:59','2021-06-16 16:19:59'),(2,'App\\Models\\User',5,'my-app-token','bbf2499f6e310e666ce19ab004488fa112114d485d533b2ab56172ffe767fd3f','[\"*\"]',NULL,'2021-06-16 16:24:48','2021-06-16 16:24:48');
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_prova`
--

DROP TABLE IF EXISTS `product_prova`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_prova` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `prova_id` bigint unsigned NOT NULL,
  `product_id` bigint unsigned NOT NULL,
  `orecchio` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `prezzo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_prova`
--

LOCK TABLES `product_prova` WRITE;
/*!40000 ALTER TABLE `product_prova` DISABLE KEYS */;
INSERT INTO `product_prova` VALUES (1,1,5,'sx','1200',NULL,NULL),(2,1,6,'dx','1200',NULL,NULL),(3,2,7,'sx','2000',NULL,NULL),(4,2,8,'dx','2000',NULL,NULL),(5,3,9,'sx','2000',NULL,NULL),(6,3,10,'dx','2000',NULL,NULL);
/*!40000 ALTER TABLE `product_prova` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `matricola` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `stato_id` bigint DEFAULT NULL,
  `filiale_id` bigint DEFAULT NULL,
  `listino_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `client_id` bigint DEFAULT NULL,
  `fornitore_id` bigint DEFAULT NULL,
  `ddt_id` bigint DEFAULT NULL,
  `fattura_id` bigint DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'123',5,2,4,NULL,NULL,3,1,NULL,'2021-03-02 00:00:00','2021-03-02 00:00:00'),(2,'234',5,2,4,NULL,NULL,3,1,NULL,'2021-03-02 00:00:00','2021-03-02 00:00:00'),(3,'456',5,2,4,NULL,NULL,3,1,NULL,'2021-03-20 00:00:00','2021-03-20 00:00:00'),(4,'567',5,2,4,NULL,NULL,3,1,NULL,'2021-03-20 00:00:00','2021-03-20 00:00:00'),(5,'sadf',4,1,4,2,4,3,2,1,'2021-03-02 00:00:00','2021-03-02 00:00:00'),(6,'sghggfadf',4,1,4,2,4,3,2,1,'2021-03-02 00:00:00','2021-03-02 00:00:00'),(7,'jjjjj',4,1,4,2,3,3,2,2,'2021-03-20 00:00:00','2021-03-20 00:00:00'),(8,'ssdghrrr',4,1,4,2,3,3,2,2,'2021-03-20 00:00:00','2021-03-20 00:00:00'),(9,'jjhggfhdfgjjj',4,1,4,2,3,3,2,3,'2021-03-20 00:00:00','2021-03-20 00:00:00'),(10,'ssdjhkhjkkghrrr',4,1,4,2,3,3,2,3,'2021-03-20 00:00:00','2021-03-20 00:00:00'),(11,'jj555jjj',5,1,4,NULL,NULL,3,2,NULL,'2021-03-20 00:00:00','2021-03-20 00:00:00'),(12,'ffhghrrr',5,1,4,NULL,NULL,3,2,NULL,'2021-03-20 00:00:00','2021-03-20 00:00:00'),(13,'ffhghddddddrrr',5,3,4,NULL,NULL,3,2,NULL,'2021-03-20 00:00:00','2021-03-20 00:00:00'),(14,'55r',5,3,4,NULL,NULL,3,2,NULL,'2021-03-20 00:00:00','2021-03-20 00:00:00'),(15,'55545r',5,3,3,NULL,NULL,2,2,NULL,'2021-03-20 00:00:00','2021-03-20 00:00:00'),(16,NULL,6,3,3,NULL,NULL,2,2,NULL,'2021-03-20 00:00:00','2021-03-20 00:00:00'),(17,NULL,6,3,3,NULL,NULL,2,2,NULL,'2021-03-20 00:00:00','2021-03-20 00:00:00'),(18,NULL,6,2,3,NULL,NULL,2,2,NULL,'2021-03-20 00:00:00','2021-03-20 00:00:00'),(19,NULL,6,2,3,NULL,NULL,2,2,NULL,'2021-03-20 00:00:00','2021-03-20 00:00:00');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `provas`
--

DROP TABLE IF EXISTS `provas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `provas` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint DEFAULT NULL,
  `client_id` bigint DEFAULT NULL,
  `filiale_id` bigint DEFAULT NULL,
  `tot` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `stato_id` bigint DEFAULT NULL,
  `inizio_prova` date DEFAULT NULL,
  `fine_prova` date DEFAULT NULL,
  `mese_fine` int DEFAULT NULL,
  `anno_fine` int DEFAULT NULL,
  `mese_inizio` int DEFAULT NULL,
  `anno_inizio` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provas`
--

LOCK TABLES `provas` WRITE;
/*!40000 ALTER TABLE `provas` DISABLE KEYS */;
INSERT INTO `provas` VALUES (1,2,4,1,'2400',4,'2021-05-19','2021-05-19',5,2021,5,2021,NULL,NULL),(2,2,3,1,'4000',4,'2021-05-19','2021-05-19',5,2021,5,2021,NULL,NULL),(3,2,3,1,'4000',4,'2021-04-19','2021-04-19',4,2021,4,2021,NULL,NULL);
/*!40000 ALTER TABLE `provas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ratefatturas`
--

DROP TABLE IF EXISTS `ratefatturas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ratefatturas` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `importo` int NOT NULL,
  `fattura_id` bigint unsigned NOT NULL,
  `note` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ratefatturas`
--

LOCK TABLES `ratefatturas` WRITE;
/*!40000 ALTER TABLE `ratefatturas` DISABLE KEYS */;
/*!40000 ALTER TABLE `ratefatturas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recapitos`
--

DROP TABLE IF EXISTS `recapitos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recapitos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `indirizzo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `citta` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provincia` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recapitos`
--

LOCK TABLES `recapitos` WRITE;
/*!40000 ALTER TABLE `recapitos` DISABLE KEYS */;
INSERT INTO `recapitos` VALUES (1,'FARMACIA ROSSI','FDSALKF JòDLFJ òLADSKJ','MILANO','MI',2,NULL,NULL),(2,'FARMACIA BIANCHI','DSFDSA ASDFDS ','MILANO','MI',3,NULL,NULL),(3,'FARMACIA BAMBI','AS FGHGHJGHGFH','FIRENZE','FI',3,NULL,NULL),(4,'FARMACIA PIPPO','ASFASHJGJHD FGFGF','PISA','PI',3,NULL,NULL),(5,'FARMACIA NERI','ASFD DSF DSHGFHGFHGHGFHG','PISA','PI',2,NULL,NULL),(6,'FARMACIA BUBU','ASDFADS DFGFDGFDS','LUCCA','LU',2,NULL,NULL),(7,'FARMACIA GIGI','ASF DS DHGHDGHFG','LUCCA','LU',2,NULL,NULL),(8,'FARMACIA RIGHI','ASDFA DSFADSFAS F','AREZZO','AR',2,NULL,NULL),(9,'FARMACIA CAT','ASDF DSFDFDDDDDDD','AREZZO','AR',2,NULL,NULL),(10,'FARMACIA VERDI','A SF FDS DFSDSF ASFDS','PISA','PI',2,NULL,NULL);
/*!40000 ALTER TABLE `recapitos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ruolos`
--

DROP TABLE IF EXISTS `ruolos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ruolos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ruolos`
--

LOCK TABLES `ruolos` WRITE;
/*!40000 ALTER TABLE `ruolos` DISABLE KEYS */;
INSERT INTO `ruolos` VALUES (1,'admin',NULL,NULL),(2,'audio',NULL,NULL),(3,'amministrazione',NULL,NULL);
/*!40000 ALTER TABLE `ruolos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stato_apas`
--

DROP TABLE IF EXISTS `stato_apas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stato_apas` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stato_apas`
--

LOCK TABLES `stato_apas` WRITE;
/*!40000 ALTER TABLE `stato_apas` DISABLE KEYS */;
INSERT INTO `stato_apas` VALUES (1,'DDT',NULL,NULL),(2,'RESO',NULL,NULL),(3,'PROVA',NULL,NULL),(4,'FATTURA',NULL,NULL),(5,'FILIALE',NULL,NULL),(6,'RICHIESTO',NULL,NULL),(7,'NUOVO',NULL,NULL);
/*!40000 ALTER TABLE `stato_apas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipologias`
--

DROP TABLE IF EXISTS `tipologias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipologias` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `recall` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipologias`
--

LOCK TABLES `tipologias` WRITE;
/*!40000 ALTER TABLE `tipologias` DISABLE KEYS */;
INSERT INTO `tipologias` VALUES (1,'PC',1,NULL,NULL),(2,'CL',10,NULL,NULL),(3,'CLC',20,NULL,NULL),(4,'DEC',NULL,NULL,NULL);
/*!40000 ALTER TABLE `tipologias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ruolo_id` bigint unsigned NOT NULL,
  `budget_id` bigint DEFAULT NULL,
  `fatturati_id` bigint DEFAULT NULL,
  `delta_id` bigint DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'CACAO','cacao@cacao.it',1,NULL,NULL,NULL,'2021-06-16 15:32:28','$2y$10$769CG71IRQ1gJoRY32aKQuGyznPfuOVJKO41.0a0BcJGDh4oKrA.6',NULL,'2021-06-16 15:32:28','2021-06-16 15:32:28'),(2,'Davide Coltrioli','audio@audio.it',2,1,NULL,NULL,'2021-06-16 15:32:29','$2y$10$a13UYGK5Box6Tir1gjCHRu8Wa6B6IRAQe/DQx4rVevTZchDermBTG',NULL,'2021-06-16 15:32:29','2021-06-16 15:32:29'),(3,'Cecchi Massimiliano','audio2@audio.it',2,2,NULL,NULL,'2021-06-16 15:32:29','$2y$10$dH2bDEBlVOmQkIG/y2K26eJOgBW6xO4soY6MHV/EYAnClqtcDpBy.',NULL,'2021-06-16 15:32:29','2021-06-16 15:32:29'),(4,'audio3','audio3@audio.it',2,3,NULL,NULL,'2021-06-16 15:32:29','$2y$10$IOqMeosZZS7xGE4IW/zk7edMBiwPs/rbYnZQXO7tksehK43s8Dzq.',NULL,'2021-06-16 15:32:29','2021-06-16 15:32:29'),(5,'amministrativo','amm@amm.it',3,NULL,NULL,NULL,'2021-06-16 15:32:29','$2y$10$B5M4Fwg7b6UvwJfDNzJWyOjwITn1JdsDePqWeWxx.6paaOtInAWgS',NULL,'2021-06-16 15:32:29','2021-06-16 15:32:29');
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

-- Dump completed on 2021-06-16 19:25:50
