-- Created at 10.11.2021 22:09 using David Grudl MySQL Dump Utility
-- Host: vuexdocker.test
-- MySQL Server: 8.0.25-0ubuntu0.20.04.1
-- Database: vuexdocker

SET NAMES utf8;
SET SQL_MODE='NO_AUTO_VALUE_ON_ZERO';
SET FOREIGN_KEY_CHECKS=0;
SET UNIQUE_CHECKS=0;
SET AUTOCOMMIT=0;
-- --------------------------------------------------------

DROP TABLE IF EXISTS `activity_log`;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `activity_log` DISABLE KEYS;

ALTER TABLE `activity_log` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `agendas`;

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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `agendas` DISABLE KEYS;

INSERT INTO `agendas` (`id`, `nome`, `user_id`, `settimana`, `lun`, `mar`, `mer`, `gio`, `ven`, `created_at`, `updated_at`) VALUES
(1,	'mattina',	9,	2,	NULL,	NULL,	'Blu Gallery',	NULL,	NULL,	NULL,	NULL),
(2,	'pomeriggio',	9,	2,	NULL,	NULL,	'Blu Gallery',	NULL,	NULL,	NULL,	NULL),
(3,	'mattina',	9,	4,	NULL,	NULL,	'Blu Gallery',	NULL,	NULL,	NULL,	NULL),
(4,	'pomeriggio',	9,	4,	NULL,	NULL,	'Blu Gallery',	NULL,	NULL,	NULL,	NULL),
(5,	'mattina',	5,	1,	'Firenze',	'Firenze',	'Firenze',	'Firenze',	'Firenze',	NULL,	NULL),
(6,	'pomeriggio',	5,	1,	'Firenze',	'Firenze',	'Firenze',	'Firenze',	'Firenze',	NULL,	NULL),
(7,	'mattina',	5,	2,	'Firenze',	'Firenze',	'Firenze',	'Firenze',	'Firenze',	NULL,	NULL),
(8,	'pomeriggio',	5,	2,	'Firenze',	'Firenze',	'Firenze',	'Firenze',	'Firenze',	NULL,	NULL),
(9,	'mattina',	5,	3,	'Firenze',	'Firenze',	'Firenze',	'Firenze',	'Firenze',	NULL,	NULL),
(10,	'pomeriggio',	5,	3,	'Firenze',	'Firenze',	'Firenze',	'Firenze',	'Firenze',	NULL,	NULL),
(11,	'mattina',	5,	4,	'Firenze',	'Firenze',	'Firenze',	'Firenze',	'Firenze',	NULL,	NULL),
(12,	'pomeriggio',	5,	4,	'Firenze',	'Firenze',	'Firenze',	'Firenze',	'Firenze',	NULL,	NULL);
ALTER TABLE `agendas` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `appuntamentos`;

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
  `mese` int DEFAULT NULL,
  `anno` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `appuntamentos` DISABLE KEYS;

ALTER TABLE `appuntamentos` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `audiometrias`;

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
  `_125ossd` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_250ossd` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_500ossd` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_1000ossd` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_1500ossd` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_2000ossd` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_3000ossd` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_4000ossd` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_6000ossd` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_8000ossd` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_125osss` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_250osss` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_500osss` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_1000osss` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_1500osss` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_2000osss` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_3000osss` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_4000osss` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_6000osss` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `_8000osss` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `audiometrias` DISABLE KEYS;

ALTER TABLE `audiometrias` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `budgets`;

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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `budgets` DISABLE KEYS;

INSERT INTO `budgets` (`id`, `nome`, `user_id`, `budgetAnno`, `premio`, `stipendio`, `provvigione`, `gennaio`, `febbraio`, `marzo`, `aprile`, `maggio`, `giugno`, `luglio`, `agosto`, `settembre`, `ottobre`, `novembre`, `dicembre`, `created_at`, `updated_at`) VALUES
(1,	'Budget',	2,	200000,	188000,	3000,	10,	12000,	16000,	20000,	20000,	20000,	20000,	12000,	12000,	16000,	20000,	20000,	12000,	NULL,	'2021-11-10 20:49:56'),
(2,	'Budget',	3,	150000,	141000,	3000,	10,	9000,	12000,	15000,	15000,	15000,	15000,	9000,	9000,	12000,	15000,	15000,	9000,	NULL,	'2021-11-10 20:49:56'),
(3,	'Budget',	5,	80000,	75200,	3000,	8,	4800,	6400,	8000,	8000,	8000,	8000,	4800,	4800,	6400,	8000,	8000,	4800,	NULL,	'2021-11-10 20:49:56'),
(4,	'Budget',	6,	100000,	94000,	1500,	20,	6000,	8000,	10000,	10000,	10000,	10000,	6000,	6000,	8000,	10000,	10000,	6000,	NULL,	'2021-11-10 20:49:56'),
(5,	'Budget',	9,	150000,	141000,	1500,	20,	9000,	12000,	15000,	15000,	15000,	15000,	9000,	9000,	12000,	15000,	15000,	9000,	NULL,	'2021-11-10 20:49:57'),
(6,	'Budget',	8,	80000,	75200,	3000,	8,	4800,	6400,	8000,	8000,	8000,	8000,	4800,	4800,	6400,	8000,	8000,	4800,	NULL,	'2021-11-10 20:49:57'),
(7,	'Budget',	4,	20000,	18800,	NULL,	NULL,	1200,	1600,	2000,	2000,	2000,	2000,	1200,	1200,	1600,	2000,	2000,	1200,	NULL,	'2021-11-10 20:49:56');
ALTER TABLE `budgets` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `categorias`;

CREATE TABLE `categorias` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `categorias` DISABLE KEYS;

INSERT INTO `categorias` (`id`, `nome`, `created_at`, `updated_at`) VALUES
(1,	'APA',	NULL,	NULL),
(2,	'ACC',	NULL,	NULL),
(3,	'SERV',	NULL,	NULL);
ALTER TABLE `categorias` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `clients`;

CREATE TABLE `clients` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cognome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `codfisc` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `indirizzo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `citta` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cap` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provincia` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telefono` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telefono2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telefono3` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tipologia_id` bigint DEFAULT NULL,
  `mail` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `datanascita` date DEFAULT NULL,
  `luogoNascita` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `clients` DISABLE KEYS;

ALTER TABLE `clients` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `ddts`;

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

ALTER TABLE `ddts` DISABLE KEYS;

ALTER TABLE `ddts` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `deltas`;

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
) ENGINE=InnoDB AUTO_INCREMENT=2007 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `deltas` DISABLE KEYS;

INSERT INTO `deltas` (`id`, `nome`, `user_id`, `budgetAnno`, `premio`, `stipendio`, `provvigione`, `gennaio`, `febbraio`, `marzo`, `aprile`, `maggio`, `giugno`, `luglio`, `agosto`, `settembre`, `ottobre`, `novembre`, `dicembre`, `created_at`, `updated_at`) VALUES
(2000,	'Delta',	2,	'-100.0%',	'0',	'0',	'0',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	NULL,	'2021-11-10 20:49:56',	'2021-11-10 20:49:56'),
(2001,	'Delta',	3,	'-100.0%',	'0',	'0',	'0',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	NULL,	'2021-11-10 20:49:56',	'2021-11-10 20:49:56'),
(2002,	'Delta',	4,	'-100.0%',	'0',	'0',	'0',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	NULL,	'2021-11-10 20:49:56',	'2021-11-10 20:49:56'),
(2003,	'Delta',	5,	'-100.0%',	'0',	'0',	'0',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	NULL,	'2021-11-10 20:49:56',	'2021-11-10 20:49:56'),
(2004,	'Delta',	6,	'-100.0%',	'0',	'0',	'0',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	NULL,	'2021-11-10 20:49:56',	'2021-11-10 20:49:56'),
(2005,	'Delta',	8,	'-100.0%',	'0',	'0',	'0',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	NULL,	'2021-11-10 20:49:57',	'2021-11-10 20:49:57'),
(2006,	'Delta',	9,	'-100.0%',	'0',	'0',	'0',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	'-100.0%',	NULL,	'2021-11-10 20:49:57',	'2021-11-10 20:49:57');
ALTER TABLE `deltas` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `documentos`;

CREATE TABLE `documentos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `client_id` bigint NOT NULL,
  `prova_id` bigint DEFAULT NULL,
  `tipo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `documentos` DISABLE KEYS;

ALTER TABLE `documentos` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `failed_jobs`;

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

ALTER TABLE `failed_jobs` DISABLE KEYS;

ALTER TABLE `failed_jobs` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `fatturas`;

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

ALTER TABLE `fatturas` DISABLE KEYS;

ALTER TABLE `fatturas` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `fatturatis`;

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
) ENGINE=InnoDB AUTO_INCREMENT=1007 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `fatturatis` DISABLE KEYS;

INSERT INTO `fatturatis` (`id`, `nome`, `user_id`, `budgetAnno`, `asl`, `binaurale`, `provvigione`, `gennaio`, `febbraio`, `marzo`, `aprile`, `maggio`, `giugno`, `luglio`, `agosto`, `settembre`, `ottobre`, `novembre`, `dicembre`, `created_at`, `updated_at`) VALUES
(1000,	'Fatturati',	2,	0,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	NULL,	'2021-11-10 20:49:56',	'2021-11-10 20:49:56'),
(1001,	'Fatturati',	3,	0,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	NULL,	'2021-11-10 20:49:56',	'2021-11-10 20:49:56'),
(1002,	'Fatturati',	4,	0,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	NULL,	'2021-11-10 20:49:56',	'2021-11-10 20:49:56'),
(1003,	'Fatturati',	5,	0,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	NULL,	'2021-11-10 20:49:56',	'2021-11-10 20:49:56'),
(1004,	'Fatturati',	6,	0,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	NULL,	'2021-11-10 20:49:56',	'2021-11-10 20:49:56'),
(1005,	'Fatturati',	8,	0,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	NULL,	'2021-11-10 20:49:57',	'2021-11-10 20:49:57'),
(1006,	'Fatturati',	9,	0,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	NULL,	'2021-11-10 20:49:57',	'2021-11-10 20:49:57');
ALTER TABLE `fatturatis` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `filiale_listino`;

CREATE TABLE `filiale_listino` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `filiale_id` bigint NOT NULL,
  `listino_id` bigint NOT NULL,
  `soglia` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=153 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `filiale_listino` DISABLE KEYS;

INSERT INTO `filiale_listino` (`id`, `filiale_id`, `listino_id`, `soglia`, `created_at`, `updated_at`) VALUES
(1,	1,	1,	1,	NULL,	NULL),
(2,	1,	2,	1,	NULL,	NULL),
(3,	1,	3,	1,	NULL,	NULL),
(4,	1,	4,	1,	NULL,	NULL),
(5,	1,	5,	1,	NULL,	NULL),
(6,	1,	6,	1,	NULL,	NULL),
(7,	1,	7,	1,	NULL,	NULL),
(8,	1,	8,	1,	NULL,	NULL),
(9,	1,	9,	1,	NULL,	NULL),
(10,	1,	10,	1,	NULL,	NULL),
(11,	1,	11,	1,	NULL,	NULL),
(12,	1,	12,	1,	NULL,	NULL),
(13,	1,	13,	1,	NULL,	NULL),
(14,	1,	14,	1,	NULL,	NULL),
(15,	1,	15,	1,	NULL,	NULL),
(16,	1,	16,	1,	NULL,	NULL),
(17,	1,	17,	1,	NULL,	NULL),
(18,	1,	18,	1,	NULL,	NULL),
(19,	1,	19,	1,	NULL,	NULL),
(20,	2,	1,	1,	NULL,	NULL),
(21,	2,	2,	1,	NULL,	NULL),
(22,	2,	3,	1,	NULL,	NULL),
(23,	2,	4,	1,	NULL,	NULL),
(24,	2,	5,	1,	NULL,	NULL),
(25,	2,	6,	1,	NULL,	NULL),
(26,	2,	7,	1,	NULL,	NULL),
(27,	2,	8,	1,	NULL,	NULL),
(28,	2,	9,	1,	NULL,	NULL),
(29,	2,	10,	1,	NULL,	NULL),
(30,	2,	11,	1,	NULL,	NULL),
(31,	2,	12,	1,	NULL,	NULL),
(32,	2,	13,	1,	NULL,	NULL),
(33,	2,	14,	1,	NULL,	NULL),
(34,	2,	15,	1,	NULL,	NULL),
(35,	2,	16,	1,	NULL,	NULL),
(36,	2,	17,	1,	NULL,	NULL),
(37,	2,	18,	1,	NULL,	NULL),
(38,	2,	19,	1,	NULL,	NULL),
(39,	3,	1,	1,	NULL,	NULL),
(40,	3,	2,	1,	NULL,	NULL),
(41,	3,	3,	1,	NULL,	NULL),
(42,	3,	4,	1,	NULL,	NULL),
(43,	3,	5,	1,	NULL,	NULL),
(44,	3,	6,	1,	NULL,	NULL),
(45,	3,	7,	1,	NULL,	NULL),
(46,	3,	8,	1,	NULL,	NULL),
(47,	3,	9,	1,	NULL,	NULL),
(48,	3,	10,	1,	NULL,	NULL),
(49,	3,	11,	1,	NULL,	NULL),
(50,	3,	12,	1,	NULL,	NULL),
(51,	3,	13,	1,	NULL,	NULL),
(52,	3,	14,	1,	NULL,	NULL),
(53,	3,	15,	1,	NULL,	NULL),
(54,	3,	16,	1,	NULL,	NULL),
(55,	3,	17,	1,	NULL,	NULL),
(56,	3,	18,	1,	NULL,	NULL),
(57,	3,	19,	1,	NULL,	NULL),
(58,	4,	1,	1,	NULL,	NULL),
(59,	4,	2,	1,	NULL,	NULL),
(60,	4,	3,	1,	NULL,	NULL),
(61,	4,	4,	1,	NULL,	NULL),
(62,	4,	5,	1,	NULL,	NULL),
(63,	4,	6,	1,	NULL,	NULL),
(64,	4,	7,	1,	NULL,	NULL),
(65,	4,	8,	1,	NULL,	NULL),
(66,	4,	9,	1,	NULL,	NULL),
(67,	4,	10,	1,	NULL,	NULL),
(68,	4,	11,	1,	NULL,	NULL),
(69,	4,	12,	1,	NULL,	NULL),
(70,	4,	13,	1,	NULL,	NULL),
(71,	4,	14,	1,	NULL,	NULL),
(72,	4,	15,	1,	NULL,	NULL),
(73,	4,	16,	1,	NULL,	NULL),
(74,	4,	17,	1,	NULL,	NULL),
(75,	4,	18,	1,	NULL,	NULL),
(76,	4,	19,	1,	NULL,	NULL),
(77,	5,	1,	1,	NULL,	NULL),
(78,	5,	2,	1,	NULL,	NULL),
(79,	5,	3,	1,	NULL,	NULL),
(80,	5,	4,	1,	NULL,	NULL),
(81,	5,	5,	1,	NULL,	NULL),
(82,	5,	6,	1,	NULL,	NULL),
(83,	5,	7,	1,	NULL,	NULL),
(84,	5,	8,	1,	NULL,	NULL),
(85,	5,	9,	1,	NULL,	NULL),
(86,	5,	10,	1,	NULL,	NULL),
(87,	5,	11,	1,	NULL,	NULL),
(88,	5,	12,	1,	NULL,	NULL),
(89,	5,	13,	1,	NULL,	NULL),
(90,	5,	14,	1,	NULL,	NULL),
(91,	5,	15,	1,	NULL,	NULL),
(92,	5,	16,	1,	NULL,	NULL),
(93,	5,	17,	1,	NULL,	NULL),
(94,	5,	18,	1,	NULL,	NULL),
(95,	5,	19,	1,	NULL,	NULL),
(96,	6,	1,	1,	NULL,	NULL),
(97,	6,	2,	1,	NULL,	NULL),
(98,	6,	3,	1,	NULL,	NULL),
(99,	6,	4,	1,	NULL,	NULL),
(100,	6,	5,	1,	NULL,	NULL),
(101,	6,	6,	1,	NULL,	NULL),
(102,	6,	7,	1,	NULL,	NULL),
(103,	6,	8,	1,	NULL,	NULL),
(104,	6,	9,	1,	NULL,	NULL),
(105,	6,	10,	1,	NULL,	NULL),
(106,	6,	11,	1,	NULL,	NULL),
(107,	6,	12,	1,	NULL,	NULL),
(108,	6,	13,	1,	NULL,	NULL),
(109,	6,	14,	1,	NULL,	NULL),
(110,	6,	15,	1,	NULL,	NULL),
(111,	6,	16,	1,	NULL,	NULL),
(112,	6,	17,	1,	NULL,	NULL),
(113,	6,	18,	1,	NULL,	NULL),
(114,	6,	19,	1,	NULL,	NULL),
(115,	7,	1,	1,	NULL,	NULL),
(116,	7,	2,	1,	NULL,	NULL),
(117,	7,	3,	1,	NULL,	NULL),
(118,	7,	4,	1,	NULL,	NULL),
(119,	7,	5,	1,	NULL,	NULL),
(120,	7,	6,	1,	NULL,	NULL),
(121,	7,	7,	1,	NULL,	NULL),
(122,	7,	8,	1,	NULL,	NULL),
(123,	7,	9,	1,	NULL,	NULL),
(124,	7,	10,	1,	NULL,	NULL),
(125,	7,	11,	1,	NULL,	NULL),
(126,	7,	12,	1,	NULL,	NULL),
(127,	7,	13,	1,	NULL,	NULL),
(128,	7,	14,	1,	NULL,	NULL),
(129,	7,	15,	1,	NULL,	NULL),
(130,	7,	16,	1,	NULL,	NULL),
(131,	7,	17,	1,	NULL,	NULL),
(132,	7,	18,	1,	NULL,	NULL),
(133,	7,	19,	1,	NULL,	NULL),
(134,	8,	1,	1,	NULL,	NULL),
(135,	8,	2,	1,	NULL,	NULL),
(136,	8,	3,	1,	NULL,	NULL),
(137,	8,	4,	1,	NULL,	NULL),
(138,	8,	5,	1,	NULL,	NULL),
(139,	8,	6,	1,	NULL,	NULL),
(140,	8,	7,	1,	NULL,	NULL),
(141,	8,	8,	1,	NULL,	NULL),
(142,	8,	9,	1,	NULL,	NULL),
(143,	8,	10,	1,	NULL,	NULL),
(144,	8,	11,	1,	NULL,	NULL),
(145,	8,	12,	1,	NULL,	NULL),
(146,	8,	13,	1,	NULL,	NULL),
(147,	8,	14,	1,	NULL,	NULL),
(148,	8,	15,	1,	NULL,	NULL),
(149,	8,	16,	1,	NULL,	NULL),
(150,	8,	17,	1,	NULL,	NULL),
(151,	8,	18,	1,	NULL,	NULL),
(152,	8,	19,	1,	NULL,	NULL);
ALTER TABLE `filiale_listino` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `filiale_user`;

CREATE TABLE `filiale_user` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `filiale_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `filiale_user_user_id_filiale_id_unique` (`user_id`,`filiale_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `filiale_user` DISABLE KEYS;

INSERT INTO `filiale_user` (`id`, `user_id`, `filiale_id`, `created_at`, `updated_at`) VALUES
(1,	2,	1,	NULL,	NULL),
(2,	2,	3,	NULL,	NULL),
(3,	2,	7,	NULL,	NULL),
(4,	9,	2,	NULL,	NULL),
(5,	8,	4,	NULL,	NULL),
(6,	6,	5,	NULL,	NULL),
(7,	5,	8,	NULL,	NULL),
(8,	3,	7,	NULL,	NULL),
(9,	7,	1,	NULL,	NULL),
(10,	7,	3,	NULL,	NULL),
(11,	11,	6,	NULL,	NULL),
(12,	7,	7,	NULL,	NULL),
(13,	11,	2,	NULL,	NULL),
(14,	11,	4,	NULL,	NULL),
(15,	11,	5,	NULL,	NULL),
(16,	7,	8,	NULL,	NULL);
ALTER TABLE `filiale_user` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `filiales`;

CREATE TABLE `filiales` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `codiceIdentificativo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `indirizzo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `citta` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telefono` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cap` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provincia` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `informazioni` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `filiales` DISABLE KEYS;

INSERT INTO `filiales` (`id`, `codiceIdentificativo`, `nome`, `indirizzo`, `citta`, `telefono`, `cap`, `provincia`, `informazioni`, `created_at`, `updated_at`) VALUES
(1,	'F1',	'PISA',	'VIA MARIO LALLI 10',	'PISA',	'0506206057',	'56127',	'PI',	'ACCANTO ALLA QUESTURA',	NULL,	NULL),
(2,	'F2',	'CIVITANOVA',	'........',	'CIVITANOVA',	'........',	'........',	'MC',	'..........',	NULL,	NULL),
(3,	'F3',	'LUCCA',	'........',	'LUCCA',	'........',	'........',	'LU',	'..........',	NULL,	NULL),
(4,	'F4',	'ANCONA',	'........',	'ANCONA',	'........',	'........',	'AN',	'..........',	NULL,	NULL),
(5,	'F5',	'MACERATA',	'........',	'MACERATA',	'........',	'........',	'MC',	'..........',	NULL,	NULL),
(6,	'F6',	'SAN BENEDETTO',	'........',	'SAN BENEDETTO DEL TRONTO',	'........',	'........',	'AP',	'..........',	NULL,	NULL),
(7,	'F7',	'VIAREGGIO',	'........',	'VIAREGGIO',	'........',	'........',	'LU',	'..........',	NULL,	NULL),
(8,	'F8',	'FIRENZE',	'........',	'FIRENZE',	'........',	'........',	'FI',	'..........',	NULL,	NULL);
ALTER TABLE `filiales` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `fornitores`;

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

ALTER TABLE `fornitores` DISABLE KEYS;

INSERT INTO `fornitores` (`id`, `nome`, `indirizzo`, `citta`, `cap`, `provincia`, `telefono`, `email`, `pec`, `univoco`, `created_at`, `updated_at`) VALUES
(1,	'SONOVA ITALIA SRL',	'VIA PRIVATA RAIMONDO MONTECUCCOLI, 30',	'MILANO',	'20147',	'MI',	'0269008182',	NULL,	NULL,	NULL,	NULL,	NULL),
(2,	'STARKEY ITALY S.R.L.',	'VIA LOMBARDIA, 2A',	'PESCHIERA BORROMEO',	'20068',	'MI',	'029272181',	NULL,	NULL,	NULL,	NULL,	NULL);
ALTER TABLE `fornitores` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `informaziones`;

CREATE TABLE `informaziones` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `client_id` bigint NOT NULL,
  `giorno` date DEFAULT NULL,
  `tipo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `note` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `informaziones` DISABLE KEYS;

ALTER TABLE `informaziones` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `listinos`;

CREATE TABLE `listinos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fornitore_id` bigint DEFAULT NULL,
  `categoria_id` bigint DEFAULT NULL,
  `costo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `prezzolistino` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scontoMax` int DEFAULT NULL,
  `iva` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `giorniTempoDiReso` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `listinos` DISABLE KEYS;

INSERT INTO `listinos` (`id`, `nome`, `fornitore_id`, `categoria_id`, `costo`, `prezzolistino`, `scontoMax`, `iva`, `giorniTempoDiReso`, `created_at`, `updated_at`) VALUES
(1,	'M90',	1,	1,	'945',	'4200',	10,	'4',	'90',	NULL,	NULL),
(2,	'M70',	1,	1,	'708',	'3200',	10,	'4',	'90',	NULL,	NULL),
(3,	'M50',	1,	1,	'573',	'2400',	10,	'4',	'90',	NULL,	NULL),
(4,	'M30',	1,	1,	'445',	'1700',	0,	'4',	'90',	NULL,	NULL),
(5,	'LIVIO 2400 AI',	2,	1,	'664',	'2800',	0,	'4',	'90',	NULL,	NULL),
(6,	'LIVIO 2000 AI',	2,	1,	'469',	'2500',	0,	'4',	'90',	NULL,	NULL),
(7,	'LIVIO 1600 AI',	2,	1,	'359',	'2200',	0,	'4',	'90',	NULL,	NULL),
(8,	'LIVIO 1200 AI',	2,	1,	'265',	'1700',	0,	'4',	'90',	NULL,	NULL),
(9,	'LIVIO 2400 EDGE AI LITHIUM',	2,	1,	'729',	'3200',	0,	'4',	'90',	NULL,	NULL),
(10,	'LIVIO AI 2000 LITHIUM',	2,	1,	'509',	'2600',	0,	'4',	'90',	NULL,	NULL),
(11,	'LIVIO AI 1600 LITHIUM',	2,	1,	'399',	'2300',	0,	'4',	'90',	NULL,	NULL),
(12,	'LIVIO AI 1200 LITHIUM',	2,	1,	'306',	'1800',	0,	'4',	'90',	NULL,	NULL),
(13,	'CHARGER RICARICABILE',	1,	2,	'53',	'55',	0,	'22',	'90',	NULL,	NULL),
(14,	'REMOTECONTROL',	1,	2,	'150',	'170',	0,	'22',	'90',	NULL,	NULL),
(15,	'RICEVITORE ESTERNO',	1,	2,	'35',	'36',	0,	'22',	'90',	NULL,	NULL),
(16,	'PARACERUME CERUSHIELD',	1,	2,	'2.5',	'3',	0,	'22',	'90',	NULL,	NULL),
(17,	'PARACERUME NOWAX',	1,	2,	'13',	'15',	0,	'22',	'90',	NULL,	NULL),
(18,	'TVLINK II',	1,	2,	'70',	'100',	0,	'22',	'90',	NULL,	NULL),
(19,	'GARANZIA 3* ANNO',	1,	3,	'60',	'70',	0,	'22',	'90',	NULL,	NULL);
ALTER TABLE `listinos` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `marketings`;

CREATE TABLE `marketings` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `marketings` DISABLE KEYS;

INSERT INTO `marketings` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1,	'GIORNALE',	NULL,	NULL),
(2,	'SCREENING',	NULL,	NULL),
(3,	'LETTERA',	NULL,	NULL),
(4,	'LISTA ESTERNA',	NULL,	NULL),
(5,	'MEDICO',	NULL,	NULL),
(6,	'PASSAPAROLA',	NULL,	NULL),
(7,	'VETRINA',	NULL,	NULL),
(8,	'SOCIAL/WEB',	NULL,	NULL),
(9,	'RIACQUISTO',	NULL,	NULL);
ALTER TABLE `marketings` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `medico_user`;

CREATE TABLE `medico_user` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `medico_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `medico_user` DISABLE KEYS;

INSERT INTO `medico_user` (`id`, `medico_id`, `user_id`, `created_at`, `updated_at`) VALUES
(1,	1,	2,	NULL,	NULL),
(2,	2,	2,	NULL,	NULL),
(3,	3,	2,	NULL,	NULL),
(4,	4,	2,	NULL,	NULL),
(5,	5,	2,	NULL,	NULL),
(6,	6,	2,	NULL,	NULL),
(7,	7,	2,	NULL,	NULL),
(8,	8,	9,	NULL,	NULL);
ALTER TABLE `medico_user` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `medicos`;

CREATE TABLE `medicos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `medicos` DISABLE KEYS;

INSERT INTO `medicos` (`id`, `nome`, `created_at`, `updated_at`) VALUES
(1,	'SCARAMUZZINO MANELA',	NULL,	NULL),
(2,	'FATTORI BRUNO',	NULL,	NULL),
(3,	'MAGGI DUILIO',	NULL,	NULL),
(4,	'FIACCHINI GIACOMO',	NULL,	NULL),
(5,	'SUGLIA MIMMO',	NULL,	NULL),
(6,	'NOTTOLI STEFANIA',	NULL,	NULL),
(7,	'MARSALLI GIULIA',	NULL,	NULL),
(8,	'DURSO DOMENICO',	NULL,	NULL);
ALTER TABLE `medicos` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `migrations`;

CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `migrations` DISABLE KEYS;

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1,	'2014_10_12_000000_create_users_table',	1),
(2,	'2014_10_12_100000_create_password_resets_table',	1),
(3,	'2019_08_19_000000_create_failed_jobs_table',	1),
(4,	'2019_12_14_000001_create_personal_access_tokens_table',	1),
(5,	'2021_04_24_164643_create_clients_table',	1),
(6,	'2021_04_24_165036_create_products_table',	1),
(7,	'2021_04_24_165244_create_audiometrias_table',	1),
(8,	'2021_04_24_165423_create_fornitores_table',	1),
(9,	'2021_04_24_165450_create_fatturas_table',	1),
(10,	'2021_04_24_165510_create_filiales_table',	1),
(11,	'2021_04_24_165541_create_listinos_table',	1),
(12,	'2021_04_24_165607_create_provas_table',	1),
(13,	'2021_04_24_171609_create_ddts_table',	1),
(14,	'2021_04_25_141135_create_notes_table',	1),
(15,	'2021_04_25_143334_productprova',	1),
(16,	'2021_04_26_145129_create_marketings_table',	1),
(17,	'2021_04_27_190723_create_recapitos_table',	1),
(18,	'2021_04_28_110757_create_filiale_user_table',	1),
(19,	'2021_04_30_180747_create_appuntamentos_table',	1),
(20,	'2021_05_05_093241_create_budgets_table',	1),
(21,	'2021_05_06_170255_create_ratefatturas_table',	1),
(22,	'2021_05_07_130923_create_tipologias_table',	1),
(23,	'2021_05_24_200526_create_ruolos_table',	1),
(24,	'2021_05_24_201303_create_categorias_table',	1),
(25,	'2021_05_24_201638_create_stato_apas_table',	1),
(26,	'2021_06_10_071906_create_fatturatis_table',	1),
(27,	'2021_06_10_121617_create_deltas_table',	1),
(28,	'2021_07_08_085157_create_activity_log_table',	1),
(29,	'2021_07_08_085158_add_event_column_to_activity_log_table',	1),
(30,	'2021_07_08_085159_add_batch_uuid_column_to_activity_log_table',	1),
(31,	'2021_07_08_205739_create_agendas_table',	1),
(32,	'2021_07_27_085516_create_pezzis_table',	1),
(33,	'2021_08_01_173705_create_documentos_table',	1),
(34,	'2021_08_07_233237_create_ventaglios_table',	1),
(35,	'2021_08_08_200610_create_medicos_table',	1),
(36,	'2021_08_08_201125_create_orario_medicos_table',	1),
(37,	'2021_08_13_223017_create_telefonatas_table',	1),
(38,	'2021_08_20_103457_create_filiale_listino_table',	1),
(39,	'2021_08_29_152244_create_medico_user_table',	1),
(40,	'2021_09_27_230936_create_risultatitels_table',	1),
(41,	'2021_09_28_224702_create_strumentaziones_table',	1),
(42,	'2021_10_02_162407_create_informaziones_table',	1);
ALTER TABLE `migrations` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `notes`;

CREATE TABLE `notes` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `testo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `client_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `notes` DISABLE KEYS;

ALTER TABLE `notes` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `orario_medicos`;

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

ALTER TABLE `orario_medicos` DISABLE KEYS;

ALTER TABLE `orario_medicos` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `password_resets`;

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `password_resets` DISABLE KEYS;

ALTER TABLE `password_resets` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `personal_access_tokens`;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `personal_access_tokens` DISABLE KEYS;

ALTER TABLE `personal_access_tokens` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `pezzis`;

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

ALTER TABLE `pezzis` DISABLE KEYS;

ALTER TABLE `pezzis` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `product_prova`;

CREATE TABLE `product_prova` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `product_id` bigint unsigned NOT NULL,
  `orecchio` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `prezzo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `prezzo_formattato` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `prova_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_prova_prova_id_foreign` (`prova_id`),
  CONSTRAINT `product_prova_prova_id_foreign` FOREIGN KEY (`prova_id`) REFERENCES `provas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `product_prova` DISABLE KEYS;

ALTER TABLE `product_prova` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `products`;

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
  `datacarico` date DEFAULT NULL,
  `pericoloRestituzione` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `products` DISABLE KEYS;

INSERT INTO `products` (`id`, `matricola`, `stato_id`, `filiale_id`, `listino_id`, `user_id`, `client_id`, `fornitore_id`, `ddt_id`, `fattura_id`, `datacarico`, `pericoloRestituzione`, `created_at`, `updated_at`) VALUES
(1,	'123',	5,	1,	3,	NULL,	NULL,	1,	1,	NULL,	'2021-08-20',	0,	'2021-03-02 00:00:00',	'2021-03-02 00:00:00'),
(2,	'234',	5,	1,	4,	NULL,	NULL,	1,	1,	NULL,	'2021-06-20',	0,	'2021-03-02 00:00:00',	'2021-03-02 00:00:00'),
(3,	'885566',	5,	2,	4,	NULL,	NULL,	1,	1,	NULL,	'2021-06-20',	0,	'2021-03-02 00:00:00',	'2021-03-02 00:00:00');
ALTER TABLE `products` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `provas`;

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
  `tipologia` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `provas` DISABLE KEYS;

ALTER TABLE `provas` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `ratefatturas`;

CREATE TABLE `ratefatturas` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `importo` int NOT NULL,
  `fattura_id` bigint unsigned NOT NULL,
  `note` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `ratefatturas` DISABLE KEYS;

ALTER TABLE `ratefatturas` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `recapitos`;

CREATE TABLE `recapitos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `codiceIdentificativo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `indirizzo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `citta` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provincia` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telefono` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `informazioni` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `recapitos` DISABLE KEYS;

INSERT INTO `recapitos` (`id`, `codiceIdentificativo`, `nome`, `indirizzo`, `citta`, `provincia`, `telefono`, `informazioni`, `user_id`, `created_at`, `updated_at`) VALUES
(1,	'R1',	'IGEA SALUS',	'VIALE EUROPA 1',	'LAMMARI',	'LU',	'0583174896',	'STUDI MEDICI, SOPRA LA FARMACIA COMUNALE',	2,	NULL,	NULL),
(2,	'R2',	'OTTICA APPOLLONI',	'PIAZZA G. MATTEOTTI 168',	'QUERCETA DI SERAVEZZA',	'LU',	'0584760689',	'E\' IN UNA TRAVERSA DELLA STRADA STATALE',	3,	NULL,	NULL),
(3,	'R3',	'CENTRO MEDICO BLUGALLERY',	'VIA FERRANTE FERRANTI, 41',	'TACCOLI',	'MC',	'0733639051',	'AL PRIMO PIANO DELLO STABILE NELLA PIAZZA',	9,	NULL,	NULL);
ALTER TABLE `recapitos` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `risultatitels`;

CREATE TABLE `risultatitels` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `mese` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mesenumero` int NOT NULL,
  `anno` int NOT NULL,
  `telefonate` int NOT NULL,
  `appuntamenti` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `risultatitels` DISABLE KEYS;

ALTER TABLE `risultatitels` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `ruolos`;

CREATE TABLE `ruolos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `ruolos` DISABLE KEYS;

INSERT INTO `ruolos` (`id`, `nome`, `created_at`, `updated_at`) VALUES
(1,	'admin',	NULL,	NULL),
(2,	'audio',	NULL,	NULL),
(3,	'amministrazione',	NULL,	NULL),
(4,	'call',	NULL,	NULL);
ALTER TABLE `ruolos` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `stato_apas`;

CREATE TABLE `stato_apas` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `stato_apas` DISABLE KEYS;

INSERT INTO `stato_apas` (`id`, `nome`, `created_at`, `updated_at`) VALUES
(1,	'DDT',	NULL,	NULL),
(2,	'RESO',	NULL,	NULL),
(3,	'PROVA',	NULL,	NULL),
(4,	'FATTURA',	NULL,	NULL),
(5,	'FILIALE',	NULL,	NULL),
(6,	'RICHIESTO',	NULL,	NULL),
(7,	'NUOVO',	NULL,	NULL),
(8,	'IMMATRICOLATO',	NULL,	NULL);
ALTER TABLE `stato_apas` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `strumentaziones`;

CREATE TABLE `strumentaziones` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `matricola` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fornitore` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medico_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `filiale_id` bigint DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `strumentaziones` DISABLE KEYS;

ALTER TABLE `strumentaziones` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `telefonatas`;

CREATE TABLE `telefonatas` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `eseguita_id` bigint NOT NULL,
  `client_id` bigint NOT NULL,
  `esito` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `note` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `effettuata` tinyint(1) DEFAULT NULL,
  `datarecall` date DEFAULT NULL,
  `mese` int DEFAULT NULL,
  `anno` int DEFAULT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `telefonatas` DISABLE KEYS;

ALTER TABLE `telefonatas` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `tipologias`;

CREATE TABLE `tipologias` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `recall` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `tipologias` DISABLE KEYS;

INSERT INTO `tipologias` (`id`, `nome`, `recall`, `created_at`, `updated_at`) VALUES
(1,	'PC',	240,	NULL,	NULL),
(2,	'CL',	NULL,	NULL,	NULL),
(3,	'CLC',	NULL,	NULL,	NULL),
(4,	'NORMO',	NULL,	NULL,	NULL),
(5,	'DEC',	NULL,	NULL,	NULL),
(6,	'LE',	NULL,	NULL,	NULL);
ALTER TABLE `tipologias` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `users`;

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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `users` DISABLE KEYS;

INSERT INTO `users` (`id`, `name`, `email`, `ruolo_id`, `budget_id`, `fatturati_id`, `delta_id`, `pezzi_id`, `email_verified_at`, `password`, `cleanpassword`, `remember_token`, `created_at`, `updated_at`) VALUES
(1,	'ADMIN',	'info@centrouditogroup.it',	1,	NULL,	NULL,	NULL,	NULL,	'2021-11-10 20:48:44',	'$2y$10$FRbeXvM/jAYugPA6PCpqxuBROofPdBalK2SZEQSMftviQlJt6ketW',	NULL,	NULL,	'2021-11-10 20:48:44',	'2021-11-10 20:48:44'),
(2,	'Federico Cosseddu',	'federico.cosseddu@centrouditogroup.it',	2,	1,	1000,	2000,	NULL,	'2021-11-10 20:48:44',	'$2y$10$vbHM3ZzJOovIZxwAM4CHh.udne2gplY4C8hhJ4427WG8g0Vhv3.hy',	NULL,	NULL,	'2021-11-10 20:48:44',	'2021-11-10 20:49:56'),
(3,	'Selene Caracciolo',	'selene.caracciolo@centrouditogroup.it',	2,	2,	1001,	2001,	NULL,	'2021-11-10 20:48:45',	'$2y$10$nu/78tjpXMVD.wjnOLP0d.yg1W3rtzVmZwDecEw6FTZE.6SK6Kjjy',	NULL,	NULL,	'2021-11-10 20:48:45',	'2021-11-10 20:49:56'),
(4,	'Matteo Serra',	'matteo.serra@centrouditogroup.it',	2,	7,	1002,	2002,	NULL,	'2021-11-10 20:48:45',	'$2y$10$vDkxFIO0ZnX2gIfEuploq.8K693NYlZi.LI6He0FoZc0qYYl/7zVu',	NULL,	NULL,	'2021-11-10 20:48:45',	'2021-11-10 20:49:56'),
(5,	'Audio Firenze',	'audio.firenze@centrouditogroup.it',	2,	3,	1003,	2003,	NULL,	'2021-11-10 20:48:45',	'$2y$10$66SkY.C84CqMpxrdbk1SE.OVzcjj/huPkI3to163zSLoiQM2x0Z7m',	NULL,	NULL,	'2021-11-10 20:48:45',	'2021-11-10 20:49:56'),
(6,	'Marina Mantovani',	'marina.mantovani@centrouditogroup.it',	2,	4,	1004,	2004,	NULL,	'2021-11-10 20:48:45',	'$2y$10$KS6mdzakWR3k6fhxalXgd.igMPjqvNpCEVkj.fdHB0guQS5MN761q',	NULL,	NULL,	'2021-11-10 20:48:45',	'2021-11-10 20:49:56'),
(7,	'Amm Toscana',	'toscana@centrouditogroup.it',	3,	NULL,	NULL,	NULL,	NULL,	'2021-11-10 20:48:45',	'$2y$10$a/rzTIUgnqfaz62PD1YPy.r0FXyNvJCzNcptEBUM5aBBZ/srNLfCS',	NULL,	NULL,	'2021-11-10 20:48:45',	'2021-11-10 20:48:45'),
(8,	'Chiara Cardinale',	'chiara.cardinale@centrouditogroup.it',	2,	6,	1005,	2005,	NULL,	'2021-11-10 20:48:45',	'$2y$10$B2ZukPFp4uz9acP7xf5FiOxzxw7i5MxWPbHoZeDqCyI30vo/tk7.y',	NULL,	NULL,	'2021-11-10 20:48:45',	'2021-11-10 20:49:57'),
(9,	'Athanasia Papatheodoru',	'athanasia.papatheodoru@centrouditogroup.it',	2,	5,	1006,	2006,	NULL,	'2021-11-10 20:48:45',	'$2y$10$1hvpGwjaQKS2xRZxbqliwe2EEI4.LvPiK33IfviMVi46m19s2UFcG',	NULL,	NULL,	'2021-11-10 20:48:45',	'2021-11-10 20:49:57'),
(10,	'call center',	'call@centrouditogroup.it',	4,	NULL,	NULL,	NULL,	NULL,	'2021-11-10 20:48:45',	'$2y$10$9Dl.8l1W4SFTdNC.p6mYA.vjtRAbFl6/998FFOtTYzQGkZcrdOkjS',	NULL,	NULL,	'2021-11-10 20:48:45',	'2021-11-10 20:48:45'),
(11,	'Amm Marche',	'marche@centrouditogroup.it',	3,	NULL,	NULL,	NULL,	NULL,	'2021-11-10 20:48:45',	'$2y$10$K3GIJxGncReW/cC6O8/6l.6jQ.gXgIokBPpuh00F0.qKVBD9V5pTi',	NULL,	NULL,	'2021-11-10 20:48:45',	'2021-11-10 20:48:45');
ALTER TABLE `users` ENABLE KEYS;



-- --------------------------------------------------------

DROP TABLE IF EXISTS `ventaglios`;

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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `ventaglios` DISABLE KEYS;

INSERT INTO `ventaglios` (`id`, `user_id`, `tot`, `anno`, `created_at`, `updated_at`, `M30`, `M50`, `M70`, `M90`, `LIVIO1200AI`, `LIVIO1600AI`, `LIVIO2000AI`, `LIVIO2400AI`, `LIVIO2400EDGEAILITHIUM`, `LIVIOAI1200LITHIUM`, `LIVIOAI1600LITHIUM`, `LIVIOAI2000LITHIUM`) VALUES
(1,	2,	0,	2021,	'2021-11-10 20:49:56',	'2021-11-10 20:49:56',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0'),
(2,	3,	0,	2021,	'2021-11-10 20:49:56',	'2021-11-10 20:49:56',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0'),
(3,	4,	0,	2021,	'2021-11-10 20:49:56',	'2021-11-10 20:49:56',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0'),
(4,	5,	0,	2021,	'2021-11-10 20:49:56',	'2021-11-10 20:49:56',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0'),
(5,	6,	0,	2021,	'2021-11-10 20:49:56',	'2021-11-10 20:49:56',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0'),
(6,	8,	0,	2021,	'2021-11-10 20:49:56',	'2021-11-10 20:49:57',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0'),
(7,	9,	0,	2021,	'2021-11-10 20:49:57',	'2021-11-10 20:49:57',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0',	'0');
ALTER TABLE `ventaglios` ENABLE KEYS;



COMMIT;
-- THE END
