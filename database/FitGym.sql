-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 04, 2023 at 06:44 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `FitGym`
--

-- --------------------------------------------------------

--
-- Table structure for table `academias`
--

CREATE TABLE `academias` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `cpf` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `andress` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `token_acess` varchar(255) DEFAULT NULL,
  `token_login` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `academias`
--

INSERT INTO `academias` (`id`, `name`, `email`, `cpf`, `password`, `andress`, `phone`, `created_at`, `updated_at`, `token_acess`, `token_login`) VALUES
(4, 'pro-saude', 'proda@gamail.com', '$2y$10$aiD7BIpy2UKGu.7pHG1iAOTa2lXKlAJydVnOinNCXZrrf/wQrK8sC', '$2y$10$yCyZ5FHM0TIdTX/Mu6J9kekFcvX2XWodR0O5wNCx5AeHWQe.r5FxW', 'Rua Maria Luiza De Araujo 04', '84986044130', NULL, NULL, NULL, '1c5d9e4afb62b7f7c90c27c72c7830f742fb64139b187c2946ff372c5c0826de'),
(5, 'malhart', 'malhart@gmail.com', '$2y$10$YsQS311qh5wIWnJqCrqHaueC6i.3n4aPZIucQP6n8WAzjAVFXzWai', '$2y$10$QGGmuaNxH.ItNhL69kGHqOe/3D/iAZOhz5ShMCaMf4aDDUNFi1Hja', 'Rua campo azul', '84986044120', NULL, NULL, NULL, 'dae99eb73525428f2c525d2ed6d5b212bee471575b4f9fde43f7f065ceb3faa7'),
(6, 'AcademiaX', 'academia@gmail.com', '46004958026', '$2y$10$yCyZ5FHM0TIdTX/Mu6J9kekFcvX2XWodR0O5wNCx5AeHWQe.r5FxW', 'Rua Maria Luiza De Araujo 04', '84986044130', NULL, NULL, NULL, '26ab4c3de1cc8591a5948c63a53e2dd1fd8e1be46df8fe7aa7b17fd4797d62eb'),
(7, 'Academia Y', 'joao.silva@email.com', '45678912345', '$2y$10$V1uuhhEPEMRbA5EeT4vT8OaLcCQ5xTku1Gyd6kuu3bl/YnAJa9dDS', 'Rua da Academia, 567, Bairro Fitness, Cidade Saúde', '2198765432', NULL, NULL, NULL, '8fda5f3b963e244c8e8ec40d43ba4d4e3cdabb708e44e0d91ed34be753485570');

-- --------------------------------------------------------

--
-- Table structure for table `alunos`
--

CREATE TABLE `alunos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token_login` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `alunos`
--

INSERT INTO `alunos` (`id`, `name`, `email`, `password`, `token_login`, `created_at`, `updated_at`) VALUES
(2, 'Frankllin Silva de Souza', 'frankllinsilva300@gmail.com', '$2y$10$4OPRSElwRqWQQ94tYzOzTef27NmeG7gc02jW6oJB0jFUKKTGd0aUa', '8adc59fd56dd2c1d33c25eb7da8971dd63e3a0af73a1cf3c230eb32450b28697', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `associacao`
--

CREATE TABLE `associacao` (
  `id` int(20) NOT NULL,
  `id_academias` int(10) NOT NULL,
  `id_alunos` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `biceps`
--

CREATE TABLE `biceps` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `dorsal`
--

CREATE TABLE `dorsal` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(2, '2023_10_03_182418_create_table_alunos', 1);

-- --------------------------------------------------------

--
-- Table structure for table `ombro`
--

CREATE TABLE `ombro` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `peito`
--

CREATE TABLE `peito` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `perna`
--

CREATE TABLE `perna` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `triceps`
--

CREATE TABLE `triceps` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `academias`
--
ALTER TABLE `academias`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `alunos`
--
ALTER TABLE `alunos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `alunos_email_unique` (`email`);

--
-- Indexes for table `associacao`
--
ALTER TABLE `associacao`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `biceps`
--
ALTER TABLE `biceps`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dorsal`
--
ALTER TABLE `dorsal`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ombro`
--
ALTER TABLE `ombro`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `peito`
--
ALTER TABLE `peito`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `perna`
--
ALTER TABLE `perna`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `triceps`
--
ALTER TABLE `triceps`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alunos`
--
ALTER TABLE `alunos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `associacao`
--
ALTER TABLE `associacao`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
