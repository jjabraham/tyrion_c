-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 15, 2015 at 02:22 PM
-- Server version: 5.5.41-0ubuntu0.14.04.1
-- PHP Version: 5.6.7-1+deb.sury.org~trusty+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `tyrion_c`
--

--
-- Dumping data for table `Chapters`
--

INSERT INTO `Chapters` (`id`, `name`, `description`, `published`, `createdAt`, `updatedAt`, `CourseId`) VALUES
(1, 'Chapter test1', 'chapter', 1, '2015-04-13 00:00:00', '2015-04-13 00:00:00', 1),
(2, 'Chapter test2', 'chapter', 1, '2015-04-13 00:00:00', '2015-04-13 00:00:00', 1),
(3, 'Chapter test3', 'chapter', 0, '2015-04-13 00:00:00', '2015-04-13 00:00:00', 1);

--
-- Dumping data for table `Courses`
--

INSERT INTO `Courses` (`id`, `name`, `description`, `cpd`, `published`, `createdAt`, `updatedAt`) VALUES
(1, 'test1', 'test test', 5, 1, '2015-04-13 00:00:00', '2015-04-13 00:00:00'),
(2, 'course2', 'Description of course', 5, 1, '2015-04-14 00:00:00', '2015-04-14 00:00:00'),
(3, 'course3', 'Description of course', 5, 0, '2015-04-14 01:00:00', '2015-04-14 01:00:00');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
