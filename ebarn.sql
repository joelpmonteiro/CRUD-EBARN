-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: 31-Ago-2020 às 01:01
-- Versão do servidor: 5.7.30-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ebarn`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tractors`
--

CREATE TABLE `tractors` (
  `id` int(11) NOT NULL,
  `nameTractors` varchar(50) CHARACTER SET cp1251 COLLATE cp1251_general_cs NOT NULL,
  `modelTractors` varchar(50) CHARACTER SET cp1251 COLLATE cp1251_general_cs NOT NULL,
  `imgTractors` varchar(1024) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `tractors`
--

INSERT INTO `tractors` (`id`, `nameTractors`, `modelTractors`, `imgTractors`) VALUES
(69, 'k', 'k', '29bbb643-f291-4725-9ca2-0dfae14fce8e.jpeg'),
(70, 'kaskaks', 'dsfdgf', 'ea35d0dc-9c05-47c1-890d-e34e278e2b8b.jpeg'),
(71, 'ieri', 'kdkfgkfdg', 'aaeea347-f1e6-4b79-992f-7e4696ea62d3.jpeg'),
(72, 'aaasda', 'kfdsk', '55e2ce31-d6c2-4a74-ab0a-e4b048c3207e.jpeg'),
(73, 'mm', 'kk', 'deb4cb92-859d-4a0f-8d3f-378ed6f1b9c3.jpeg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tractors`
--
ALTER TABLE `tractors`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tractors`
--
ALTER TABLE `tractors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
