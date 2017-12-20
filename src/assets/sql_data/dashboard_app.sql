-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 20, 2017 at 06:18 AM
-- Server version: 5.1.53
-- PHP Version: 5.3.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `dashboard_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `personal_details`
--

CREATE TABLE IF NOT EXISTS `personal_details` (
  `Name` varchar(30) NOT NULL,
  `DOB` varchar(30) NOT NULL,
  `Contact` varchar(20) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `Languages_known` varchar(50) NOT NULL,
  `Address` varchar(500) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `personal_details`
--

INSERT INTO `personal_details` (`Name`, `DOB`, `Contact`, `Email`, `Languages_known`, `Address`) VALUES
('Sagar Sathe', '08-July-1992', '9028031562', 'sagar.sathe2020@gmail.com', 'English, Marathi, Hindi', 'H-602, Sai Mystique Society, Near Sinhgad Institutes, Ambegaon, Pune-46');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE IF NOT EXISTS `projects` (
  `name` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL,
  `duration` varchar(20) NOT NULL,
  `platform` varchar(80) NOT NULL,
  `description` varchar(500) NOT NULL,
  `my_role` varchar(500) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`name`, `type`, `duration`, `platform`, `description`, `my_role`) VALUES
('Library Management System', 'academic', '', 'Java', 'We designed a system which keeps database of books in Library and members of library', ''),
('Reminder Application', 'academic', '', 'Win32 SDK', 'The application stores multiple kind of reminders', ''),
('Video For All', 'industrial', '5 months', 'Python', 'Video For All is designed to simplify the use of high quality videoconference / telepresence systems at home and at the office. It can be connected to multiple simultaneous camera and medical sensors that allow VFA to be used for home nursing and home monitoring. ', 'I had developed the calender module in which we can add multiple calendars in application through which we can remember appointments, events. '),
('Phi Education Portal', 'industrial', '1 year', 'AngularJS', 'This website brings experiential learning to students and working professionals all over the world through highly interactive and industry relevant projects.', 'I am writing SQL procedures for respective tasks. Then, make routing for pages, writes a controller, then factory methods for implementing the logic behind the scenes.');

-- --------------------------------------------------------

--
-- Table structure for table `qualifications`
--

CREATE TABLE IF NOT EXISTS `qualifications` (
  `ExaminationName` varchar(20) NOT NULL,
  `University` varchar(40) NOT NULL,
  `YearOfPassing` double NOT NULL,
  `Percentage` double NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `qualifications`
--

INSERT INTO `qualifications` (`ExaminationName`, `University`, `YearOfPassing`, `Percentage`) VALUES
('S.S.C', 'Maharshtra State Board', 2007, 76.15),
('H.S.C', 'Maharshtra State Board', 2009, 71.71),
('BCS', 'Pune University', 2012, 70.89),
('MCA(Sci)', 'Pune University', 2015, 66.31);

-- --------------------------------------------------------

--
-- Table structure for table `skillsets`
--

CREATE TABLE IF NOT EXISTS `skillsets` (
  `Programming_languages` varchar(50) NOT NULL,
  `Markup_languages` varchar(50) NOT NULL,
  `Database` varchar(50) NOT NULL,
  `Operating_system` varchar(50) NOT NULL,
  `Frameworks` varchar(50) NOT NULL,
  `Hardware_skills` varchar(50) NOT NULL,
  `CMS` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `skillsets`
--

INSERT INTO `skillsets` (`Programming_languages`, `Markup_languages`, `Database`, `Operating_system`, `Frameworks`, `Hardware_skills`, `CMS`) VALUES
('PHP, JAVA, Python, Javascript, C, CPP', 'HTML', 'MySQL', 'Ubuntu, OpenSuse, Windows 7, Windows 10', 'AngularJS, Laravel', 'AICIT Certificate Course in Computer Hardware', 'Wordpress');
