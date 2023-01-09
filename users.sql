-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 09, 2023 at 07:20 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `springtodo`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `mobile` varchar(13) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `todos` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`mobile`, `fullname`, `password`, `todos`) VALUES
('9148749155', 'Ubaid Patel', 'ubaid123@', '[{\"id\":2,\"title\":\"Ubaid \",\"desc\":\"Patel\"},{\"id\":\"1\",\"title\":\"No Todos\",\"desc\":\"No Todos created yet you an create it form right side\",\"checked\":false},{\"id\":2,\"title\":\"Ubaid \",\"desc\":\"Patel\"},{\"id\":1,\"title\":\"Ubaid \",\"desc\":\"Patel\"}]'),
('9148749157', 'Ubaid Patel', 'ubaid123@', '[{\"id\":\"1\",\"title\":\"No Todos\",\"desc\":\"No Todos created yet you an create it form right side\",\"checked\":false},{\"id\":2,\"title\":\"First Todo\",\"desc\":\"Patel\"},{\"id\":\"1\",\"title\":\"No Todos\",\"desc\":\"No Todos created yet you an create it form right side\",\"checked\":false}]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`mobile`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
