-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: localhost    Database: vuexdocker
-- ------------------------------------------------------
-- Server version	8.0.25-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `activity_log`
--

DROP TABLE IF EXISTS `activity_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activity_log` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `log_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `event` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subject_id` bigint unsigned DEFAULT NULL,
  `causer_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `causer_id` bigint unsigned DEFAULT NULL,
  `properties` json DEFAULT NULL,
  `batch_uuid` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `subject` (`subject_type`,`subject_id`),
  KEY `causer` (`causer_type`,`causer_id`),
  KEY `activity_log_log_name_index` (`log_name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activity_log`
--

LOCK TABLES `activity_log` WRITE;
/*!40000 ALTER TABLE `activity_log` DISABLE KEYS */;
INSERT INTO `activity_log` VALUES (1,'default','Federico Cosseddu ha aperto una prova per il paziente COGNOME121 CLIENTE121','App\\Models\\Prova',NULL,1,'App\\Models\\User',2,'[{\"customProperty\": \"prova\"}, {\"nomeSoggetto\": \"Federico Cosseddu\"}]',NULL,'2021-08-25 17:50:15','2021-08-25 17:50:15');
/*!40000 ALTER TABLE `activity_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `agendas`
--

DROP TABLE IF EXISTS `agendas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `agendas` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint NOT NULL,
  `settimana` int NOT NULL,
  `lun` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mer` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gio` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ven` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agendas`
--

LOCK TABLES `agendas` WRITE;
/*!40000 ALTER TABLE `agendas` DISABLE KEYS */;
/*!40000 ALTER TABLE `agendas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `appuntamentos`
--

DROP TABLE IF EXISTS `appuntamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appuntamentos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `giorno` date NOT NULL,
  `orario` time NOT NULL,
  `nota` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tipo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
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
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `budgets`
--

LOCK TABLES `budgets` WRITE;
/*!40000 ALTER TABLE `budgets` DISABLE KEYS */;
/*!40000 ALTER TABLE `budgets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clients` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cognome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `codfisc` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `indirizzo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `citta` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cap` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provincia` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telefono3` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tipologia_id` bigint NOT NULL,
  `mail` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `datanascita` date DEFAULT NULL,
  `meseNascita` int DEFAULT NULL,
  `giornoNascita` int DEFAULT NULL,
  `marketing_id` bigint unsigned DEFAULT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `filiale_id` bigint unsigned DEFAULT NULL,
  `recapito_id` bigint unsigned DEFAULT NULL,
  `medico_id` bigint unsigned DEFAULT NULL,
  `mese` int DEFAULT NULL,
  `anno` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `clients_codfisc_unique` (`codfisc`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` VALUES (1,'CLIENTE121','COGNOME121','tw1FQnfzzZv','XQH3TISKIZRWSUQSBXMP','PJZMH67KJ5','65659','JZ','321615612',NULL,NULL,6,NULL,NULL,NULL,NULL,3,2,1,2,NULL,3,2021,'2021-08-25 17:49:50','2021-08-25 17:49:50'),(2,'CLIENTE221','COGNOME221','2YDo1WlCaC9','LM78KBCTMPJSRPQMRHYJ','2HZYZBLAFK','73669','IS','321615612',NULL,NULL,6,NULL,NULL,NULL,NULL,2,2,1,2,NULL,4,2021,'2021-08-25 17:49:50','2021-08-25 17:49:50'),(3,'CLIENTE321','COGNOME321','FOjLsMtc3VV','8WVDB0V0BLTOO18WCFSS','ENSZR4NFFP','63722','RC','321615612',NULL,NULL,6,NULL,NULL,NULL,NULL,2,2,1,2,NULL,8,2021,'2021-08-25 17:49:50','2021-08-25 17:49:50'),(4,'CLIENTE421','COGNOME421','3uFdYpMViNc','LZSJJI6ZLHONM5DKJJTR','Y3UKAZAB64','81662','AK','321615612',NULL,NULL,6,NULL,NULL,NULL,NULL,3,2,1,1,NULL,6,2021,'2021-08-25 17:49:50','2021-08-25 17:49:50');
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ddts`
--

DROP TABLE IF EXISTS `ddts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ddts` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `filiale_id` bigint unsigned NOT NULL,
  `prova_id` bigint unsigned DEFAULT NULL,
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
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `deltas` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `budgetAnno` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `premio` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `stipendio` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provvigione` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gennaio` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `febbraio` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `marzo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `aprile` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `maggio` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `giugno` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `luglio` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `agosto` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `settembre` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ottobre` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `novembre` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dicembre` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
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
-- Table structure for table `documentos`
--

DROP TABLE IF EXISTS `documentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `documentos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `client_id` bigint NOT NULL,
  `prova_id` bigint DEFAULT NULL,
  `tipo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documentos`
--

LOCK TABLES `documentos` WRITE;
/*!40000 ALTER TABLE `documentos` DISABLE KEYS */;
INSERT INTO `documentos` VALUES (1,1,1,'copiaComm','/storage/documenti/1/CopiaComm2582021.pdf','2021-08-25 17:50:15','2021-08-25 17:50:15'),(2,1,1,'informativa','/storage/documenti/1/Informativa2582021.pdf','2021-08-25 17:50:15','2021-08-25 17:50:15');
/*!40000 ALTER TABLE `documentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fatturas` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `prova_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `data_fattura` date DEFAULT NULL,
  `ultima_rata` date DEFAULT NULL,
  `data_saldo` date DEFAULT NULL,
  `data_pagamentoAudio` date DEFAULT NULL,
  `mese_fattura` int DEFAULT NULL,
  `anno_fattura` int DEFAULT NULL,
  `acconto` int DEFAULT NULL,
  `nr_rate` int DEFAULT NULL,
  `tot_fattura` int DEFAULT NULL,
  `al_saldo` int DEFAULT NULL,
  `tot_fattura_scontato` int DEFAULT NULL,
  `sconto` int DEFAULT NULL,
  `saldata` tinyint(1) DEFAULT '0',
  `pagatoAudio` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fatturas`
--

LOCK TABLES `fatturas` WRITE;
/*!40000 ALTER TABLE `fatturas` DISABLE KEYS */;
/*!40000 ALTER TABLE `fatturas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fatturatis`
--

DROP TABLE IF EXISTS `fatturatis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fatturatis` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `budgetAnno` int DEFAULT NULL,
  `asl` int DEFAULT NULL,
  `binaurale` int DEFAULT NULL,
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
-- Table structure for table `filiale_listino`
--

DROP TABLE IF EXISTS `filiale_listino`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `filiale_listino` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `filiale_id` bigint NOT NULL,
  `listino_id` bigint NOT NULL,
  `soglia` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filiale_listino`
--

LOCK TABLES `filiale_listino` WRITE;
/*!40000 ALTER TABLE `filiale_listino` DISABLE KEYS */;
INSERT INTO `filiale_listino` VALUES (1,1,1,1,NULL,NULL),(2,1,2,1,NULL,NULL),(3,1,3,1,NULL,NULL),(4,1,4,1,NULL,NULL),(5,1,5,1,NULL,NULL),(6,1,6,1,NULL,NULL),(7,1,7,1,NULL,NULL),(8,1,8,1,NULL,NULL),(9,1,9,1,NULL,NULL),(10,1,10,1,NULL,NULL),(11,1,11,1,NULL,NULL),(12,1,12,1,NULL,NULL),(13,1,13,1,NULL,NULL),(14,1,14,1,NULL,NULL);
/*!40000 ALTER TABLE `filiale_listino` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `filiale_user`
--

DROP TABLE IF EXISTS `filiale_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `filiale_user` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `filiale_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `filiale_user_user_id_filiale_id_unique` (`user_id`,`filiale_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filiale_user`
--

LOCK TABLES `filiale_user` WRITE;
/*!40000 ALTER TABLE `filiale_user` DISABLE KEYS */;
INSERT INTO `filiale_user` VALUES (1,2,1,NULL,NULL);
/*!40000 ALTER TABLE `filiale_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `filiales`
--

DROP TABLE IF EXISTS `filiales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filiales`
--

LOCK TABLES `filiales` WRITE;
/*!40000 ALTER TABLE `filiales` DISABLE KEYS */;
INSERT INTO `filiales` VALUES (1,'PISA','VIA MARIO LALLI 10','PISA','0506206057','56127','PI',NULL,NULL);
/*!40000 ALTER TABLE `filiales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fornitores`
--

DROP TABLE IF EXISTS `fornitores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fornitores`
--

LOCK TABLES `fornitores` WRITE;
/*!40000 ALTER TABLE `fornitores` DISABLE KEYS */;
INSERT INTO `fornitores` VALUES (1,'SONOVA ITALIA SRL','VIA PRIVATA RAIMONDO MONTECUCCOLI, 30','MILANO','20147','MI','0269008182',NULL,NULL,NULL,NULL,NULL),(2,'STARKEY ITALY S.R.L.','VIA LOMBARDIA, 2A','PESCHIERA BORROMEO','20068','MI','029272181',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `fornitores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `listinos`
--

DROP TABLE IF EXISTS `listinos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `listinos`
--

LOCK TABLES `listinos` WRITE;
/*!40000 ALTER TABLE `listinos` DISABLE KEYS */;
INSERT INTO `listinos` VALUES (1,'M90',1,1,'1000','3200','4','90',NULL,NULL),(2,'M70',1,1,'800','3000','4','90',NULL,NULL),(3,'M50',1,1,'700','2800','4','90',NULL,NULL),(4,'M30',1,1,'500','2300','4','90',NULL,NULL),(5,'LIVIO 2400 AI',2,1,'664','2800','4','90',NULL,NULL),(6,'LIVIO 2000 AI',2,1,'469','2500','4','90',NULL,NULL),(7,'LIVIO 1600 AI',2,1,'359','2200','4','90',NULL,NULL),(8,'LIVIO 1200 AI',2,1,'265','1700','4','90',NULL,NULL),(9,'LIVIO 2400 EDGE AI LITHIUM',2,1,'729','3200','4','90',NULL,NULL),(10,'LIVIO AI 2000 LITHIUM',2,1,'509','2600','4','90',NULL,NULL),(11,'LIVIO AI 1600 LITHIUM',2,1,'399','2300','4','90',NULL,NULL),(12,'LIVIO AI 1200 LITHIUM',2,1,'306','1800','4','90',NULL,NULL),(13,'CHARGER RICARICABILE',2,2,'53','55','4','90',NULL,NULL),(14,'GARANZIA 3* ANNO',2,3,'60','70','4','90',NULL,NULL);
/*!40000 ALTER TABLE `listinos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marketings`
--

DROP TABLE IF EXISTS `marketings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marketings` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marketings`
--

LOCK TABLES `marketings` WRITE;
/*!40000 ALTER TABLE `marketings` DISABLE KEYS */;
INSERT INTO `marketings` VALUES (1,'GIORNALE',NULL,NULL),(2,'SCREENING',NULL,NULL),(3,'LETTERA',NULL,NULL),(4,'LISTA ESTERNA',NULL,NULL),(5,'MEDICO',NULL,NULL),(6,'PASSAPAROLA',NULL,NULL),(7,'VETRINA',NULL,NULL),(8,'SOCIAL/WEB',NULL,NULL);
/*!40000 ALTER TABLE `marketings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicos`
--

DROP TABLE IF EXISTS `medicos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medicos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicos`
--

LOCK TABLES `medicos` WRITE;
/*!40000 ALTER TABLE `medicos` DISABLE KEYS */;
/*!40000 ALTER TABLE `medicos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2019_08_19_000000_create_failed_jobs_table',1),(4,'2019_12_14_000001_create_personal_access_tokens_table',1),(5,'2021_04_24_164643_create_clients_table',1),(6,'2021_04_24_165036_create_products_table',1),(7,'2021_04_24_165244_create_audiometrias_table',1),(8,'2021_04_24_165423_create_fornitores_table',1),(9,'2021_04_24_165450_create_fatturas_table',1),(10,'2021_04_24_165510_create_filiales_table',1),(11,'2021_04_24_165541_create_listinos_table',1),(12,'2021_04_24_165607_create_provas_table',1),(13,'2021_04_24_171609_create_ddts_table',1),(14,'2021_04_25_141135_create_notes_table',1),(15,'2021_04_25_143334_productprova',1),(16,'2021_04_26_145129_create_marketings_table',1),(17,'2021_04_27_190723_create_recapitos_table',1),(18,'2021_04_28_110757_create_filiale_user_table',1),(19,'2021_04_30_180747_create_appuntamentos_table',1),(20,'2021_05_05_093241_create_budgets_table',1),(21,'2021_05_06_170255_create_ratefatturas_table',1),(22,'2021_05_07_130923_create_tipologias_table',1),(23,'2021_05_24_200526_create_ruolos_table',1),(24,'2021_05_24_201303_create_categorias_table',1),(25,'2021_05_24_201638_create_stato_apas_table',1),(26,'2021_06_10_071906_create_fatturatis_table',1),(27,'2021_06_10_121617_create_deltas_table',1),(28,'2021_07_08_085157_create_activity_log_table',1),(29,'2021_07_08_085158_add_event_column_to_activity_log_table',1),(30,'2021_07_08_085159_add_batch_uuid_column_to_activity_log_table',1),(31,'2021_07_08_205739_create_agendas_table',1),(32,'2021_07_27_085516_create_pezzis_table',1),(33,'2021_08_01_173705_create_documentos_table',1),(34,'2021_08_07_233237_create_ventaglios_table',1),(35,'2021_08_08_200610_create_medicos_table',1),(36,'2021_08_08_201125_create_orario_medicos_table',1),(37,'2021_08_13_223017_create_telefonatas_table',1),(38,'2021_08_20_103457_create_filiale_listino_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notes`
--

DROP TABLE IF EXISTS `notes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
-- Table structure for table `orario_medicos`
--

DROP TABLE IF EXISTS `orario_medicos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orario_medicos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `medico_id` bigint NOT NULL,
  `dove` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `giorno` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `orario` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orario_medicos`
--

LOCK TABLES `orario_medicos` WRITE;
/*!40000 ALTER TABLE `orario_medicos` DISABLE KEYS */;
/*!40000 ALTER TABLE `orario_medicos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
INSERT INTO `personal_access_tokens` VALUES (1,'App\\Models\\User',2,'my-app-token','d57fab18929ca443a3573ae5e6c0cd1a1d9c2069850748f7c14d28b29d91376f','[\"*\"]',NULL,'2021-08-25 19:34:12','2021-08-25 19:34:12');
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pezzis`
--

DROP TABLE IF EXISTS `pezzis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pezzis` (
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
) ENGINE=InnoDB AUTO_INCREMENT=3000 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pezzis`
--

LOCK TABLES `pezzis` WRITE;
/*!40000 ALTER TABLE `pezzis` DISABLE KEYS */;
/*!40000 ALTER TABLE `pezzis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_prova`
--

DROP TABLE IF EXISTS `product_prova`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_prova` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `prova_id` bigint unsigned NOT NULL,
  `product_id` bigint unsigned NOT NULL,
  `orecchio` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `prezzo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_prova`
--

LOCK TABLES `product_prova` WRITE;
/*!40000 ALTER TABLE `product_prova` DISABLE KEYS */;
INSERT INTO `product_prova` VALUES (1,1,1,'dx','2300','2021-08-25 17:50:13','2021-08-25 17:50:13');
/*!40000 ALTER TABLE `product_prova` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'123',3,1,4,2,1,1,1,NULL,'2021-03-02 00:00:00','2021-08-25 17:50:13'),(2,'234',5,1,4,NULL,NULL,1,1,NULL,'2021-03-02 00:00:00','2021-03-02 00:00:00');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `provas`
--

DROP TABLE IF EXISTS `provas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `provas` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint DEFAULT NULL,
  `client_id` bigint DEFAULT NULL,
  `filiale_id` bigint DEFAULT NULL,
  `marketing_id` bigint DEFAULT NULL,
  `tot` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `stato_id` bigint DEFAULT NULL,
  `inizio_prova` date DEFAULT NULL,
  `fine_prova` date DEFAULT NULL,
  `mese_fine` int DEFAULT NULL,
  `anno_fine` int DEFAULT NULL,
  `mese_inizio` int DEFAULT NULL,
  `anno_inizio` int DEFAULT NULL,
  `giorni_prova` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provas`
--

LOCK TABLES `provas` WRITE;
/*!40000 ALTER TABLE `provas` DISABLE KEYS */;
INSERT INTO `provas` VALUES (1,2,1,1,3,'2300',3,'2021-08-25',NULL,NULL,NULL,8,2021,0,'2021-08-25 17:50:08','2021-08-25 17:50:15');
/*!40000 ALTER TABLE `provas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ratefatturas`
--

DROP TABLE IF EXISTS `ratefatturas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recapitos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `indirizzo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `citta` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provincia` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telefono` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recapitos`
--

LOCK TABLES `recapitos` WRITE;
/*!40000 ALTER TABLE `recapitos` DISABLE KEYS */;
INSERT INTO `recapitos` VALUES (1,'IGEA SALUS','VIALE EUROPA 1','LAMMARI','LU','0583174896',3,NULL,NULL),(2,'OTTICA AOPOLLONI','PIAZZA G. MATTEOTTI 168','QUERCETA DI SERAVEZZA','LU','0584760689',3,NULL,NULL);
/*!40000 ALTER TABLE `recapitos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ruolos`
--

DROP TABLE IF EXISTS `ruolos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ruolos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ruolos`
--

LOCK TABLES `ruolos` WRITE;
/*!40000 ALTER TABLE `ruolos` DISABLE KEYS */;
INSERT INTO `ruolos` VALUES (1,'admin',NULL,NULL),(2,'audio',NULL,NULL),(3,'amministrazione',NULL,NULL),(4,'call',NULL,NULL);
/*!40000 ALTER TABLE `ruolos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stato_apas`
--

DROP TABLE IF EXISTS `stato_apas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stato_apas` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stato_apas`
--

LOCK TABLES `stato_apas` WRITE;
/*!40000 ALTER TABLE `stato_apas` DISABLE KEYS */;
INSERT INTO `stato_apas` VALUES (1,'DDT',NULL,NULL),(2,'RESO',NULL,NULL),(3,'PROVA',NULL,NULL),(4,'FATTURA',NULL,NULL),(5,'FILIALE',NULL,NULL),(6,'RICHIESTO',NULL,NULL),(7,'NUOVO',NULL,NULL),(8,'IMMATRICOLATO',NULL,NULL);
/*!40000 ALTER TABLE `stato_apas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `telefonatas`
--

DROP TABLE IF EXISTS `telefonatas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `telefonatas` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `client_id` bigint NOT NULL,
  `esito` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `note` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `effettuata` tinyint(1) NOT NULL,
  `datarecall` date NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `telefonatas`
--

LOCK TABLES `telefonatas` WRITE;
/*!40000 ALTER TABLE `telefonatas` DISABLE KEYS */;
/*!40000 ALTER TABLE `telefonatas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipologias`
--

DROP TABLE IF EXISTS `tipologias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipologias` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `recall` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipologias`
--

LOCK TABLES `tipologias` WRITE;
/*!40000 ALTER TABLE `tipologias` DISABLE KEYS */;
INSERT INTO `tipologias` VALUES (1,'PC',6,NULL,NULL),(2,'CL',12,NULL,NULL),(3,'CLC',12,NULL,NULL),(4,'NORMO',NULL,NULL,NULL),(5,'DEC',NULL,NULL,NULL),(6,'LE',NULL,NULL,NULL);
/*!40000 ALTER TABLE `tipologias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ruolo_id` bigint unsigned NOT NULL,
  `budget_id` bigint DEFAULT NULL,
  `fatturati_id` bigint DEFAULT NULL,
  `delta_id` bigint DEFAULT NULL,
  `pezzi_id` bigint DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cleanpassword` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'ADMIN','info@centroudito.eu',1,NULL,NULL,NULL,NULL,'2021-08-25 17:49:49','$2y$10$6thiN.kcdaahifQDLkOqj.dyqIVQI2Es8PbqXYuDoKFAF/TuVqX4S',NULL,NULL,'2021-08-25 17:49:49','2021-08-25 17:49:49'),(2,'Federico Cosseddu','cosseddu@centroudito.eu',2,NULL,NULL,NULL,NULL,'2021-08-25 17:49:50','$2y$10$q/DxaKm7YsQUJIhkBATad.GK6YBKJXH5nUfOxwJGhIxuBBgxLiToS',NULL,NULL,'2021-08-25 17:49:50','2021-08-25 17:49:50'),(3,'Selene Caracciolo','caracciolo@centroudito.eu',2,NULL,NULL,NULL,NULL,'2021-08-25 17:49:50','$2y$10$wuYh6OaGddWpNlMkgMND8.BeyFgOHH57JfI/gEp/sn5dKO9NM6REq',NULL,NULL,'2021-08-25 17:49:50','2021-08-25 17:49:50'),(4,'Matteo Serra','serra@centroudito.eu',2,NULL,NULL,NULL,NULL,'2021-08-25 17:49:50','$2y$10$sY0ShlccelplKll6GzpQQuonZg64Cq54qjr0IAsj74wPQPf8C3RbW',NULL,NULL,'2021-08-25 17:49:50','2021-08-25 17:49:50'),(5,'Alberto Parlagreco','parlagreco@centroudito.eu',2,NULL,NULL,NULL,NULL,'2021-08-25 17:49:50','$2y$10$brzl1QPXXWe7B2cOBw.vI.wuMAuVuRU6rdtO6a6vv7QSHXUnC3s9W',NULL,NULL,'2021-08-25 17:49:50','2021-08-25 17:49:50'),(6,'Athanasia Papatheodoru','papatheodoru@centroudito.eu',2,NULL,NULL,NULL,NULL,'2021-08-25 17:49:50','$2y$10$doyIFd5kAS78efy1xu9xmu1igE6P/CgL9JKjXXPVIZlYM6grJ/DJi',NULL,NULL,'2021-08-25 17:49:50','2021-08-25 17:49:50'),(7,'Amministrativa','amministrazione@centroudito.eu',3,NULL,NULL,NULL,NULL,'2021-08-25 17:49:50','$2y$10$o9Vb4riH8E36gTntLeZIIefo9lR9pVHUw.qjGzGEbgwJ32Z6SMEkG',NULL,NULL,'2021-08-25 17:49:50','2021-08-25 17:49:50'),(8,'call center','call@centroudito.eu',4,NULL,NULL,NULL,NULL,'2021-08-25 17:49:50','$2y$10$UHSr8LBUQy6wIMLTFu89dewhB1Qd2rinrHkTRRvKpu7CWk0ezKAXS',NULL,NULL,'2021-08-25 17:49:50','2021-08-25 17:49:50');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventaglios`
--

DROP TABLE IF EXISTS `ventaglios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventaglios` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `tot` int NOT NULL DEFAULT '0',
  `anno` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `M30` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `M50` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `M70` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `M90` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `LIVIO1200AI` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `LIVIO1600AI` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `LIVIO2000AI` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `LIVIO2400AI` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `LIVIO2400EDGEAILITHIUM` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `LIVIOAI1200LITHIUM` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `LIVIOAI1600LITHIUM` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `LIVIOAI2000LITHIUM` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventaglios`
--

LOCK TABLES `ventaglios` WRITE;
/*!40000 ALTER TABLE `ventaglios` DISABLE KEYS */;
/*!40000 ALTER TABLE `ventaglios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-25 18:02:58
