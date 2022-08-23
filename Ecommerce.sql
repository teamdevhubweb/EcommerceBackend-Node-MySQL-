-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 23, 2022 at 07:25 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node-mysql-registration-login-api`
--

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `images` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `title`, `images`, `createdAt`, `updatedAt`) VALUES
(2, 'Samsung', '/static/samsung-removebg-preview.png', '2022-08-20 10:24:19', '2022-08-20 10:24:19');

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `ProductID` int(11) NOT NULL,
  `Items` int(11) NOT NULL,
  `Variations` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `UserID`, `ProductID`, `Items`, `Variations`, `createdAt`, `updatedAt`) VALUES
(1, 1, 111, 11, 0, '2022-08-20 10:59:27', '2022-08-20 10:59:27'),
(2, 2, 222, 2, 0, '2022-08-20 11:09:04', '2022-08-20 11:09:04');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `CreateBy` int(11) NOT NULL,
  `CategoryId` int(11) NOT NULL,
  `CategoryName` varchar(255) NOT NULL,
  `ProductName` varchar(255) NOT NULL,
  `ProductQty` varchar(255) NOT NULL,
  `Mesurement` varchar(255) NOT NULL,
  `ProductPrice` varchar(255) NOT NULL,
  `DiscountPercent` varchar(255) NOT NULL,
  `PriceAfterDiscount` varchar(255) NOT NULL,
  `ProductType` varchar(255) NOT NULL,
  `ShortDescription` text NOT NULL,
  `Specification` text NOT NULL,
  `HSNNumber` varchar(255) NOT NULL,
  `Brand` varchar(255) NOT NULL,
  `Taxes` varchar(255) NOT NULL,
  `CapProductQty` int(11) NOT NULL,
  `FullDescription` text NOT NULL,
  `Slug` varchar(255) DEFAULT NULL,
  `AvailablePinCode` text DEFAULT NULL,
  `AvailableZoneIds` text DEFAULT NULL,
  `TotalOrders` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `WishlistStatus` varchar(255) NOT NULL,
  `IscapProduct` varchar(255) NOT NULL,
  `StartTime` varchar(255) NOT NULL,
  `EndTime` varchar(255) NOT NULL,
  `IsStatus` varchar(255) NOT NULL,
  `TotalStockQuantity` varchar(255) NOT NULL,
  `CouponOfferAvailable` varchar(255) NOT NULL,
  `FeatureProduct` varchar(255) NOT NULL,
  `ProductImage` varchar(255) NOT NULL,
  `FeatureImage` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `CreateBy`, `CategoryId`, `CategoryName`, `ProductName`, `ProductQty`, `Mesurement`, `ProductPrice`, `DiscountPercent`, `PriceAfterDiscount`, `ProductType`, `ShortDescription`, `Specification`, `HSNNumber`, `Brand`, `Taxes`, `CapProductQty`, `FullDescription`, `Slug`, `AvailablePinCode`, `AvailableZoneIds`, `TotalOrders`, `createdAt`, `updatedAt`, `WishlistStatus`, `IscapProduct`, `StartTime`, `EndTime`, `IsStatus`, `TotalStockQuantity`, `CouponOfferAvailable`, `FeatureProduct`, `ProductImage`, `FeatureImage`) VALUES
(24, 20, 1, 'Mobile', 'Apple Iphone 13 Pro', '1', '0', '1,50,000', '0', '1,50,000', 'Mobile', 'The iPhone 13 Pro is Apple\'s smaller premium iPhone with a 6.1\" screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling.', 'Specification :::-- The iPhone 13 Pro is Apple\'s smaller premium iPhone with a 6.1\" screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling.', 'A2483Z2636', 'Apple', 'GST', 1, 'FullDescription :::-- The iPhone 13 Pro is Apple\'s smaller premium iPhone with a 6.1\" screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling.', 'NULL', '345210', '#097243597', '0', '2022-08-20 09:45:34', '2022-08-20 09:45:34', 'Active', '1', '2022-05-13 12:50:54', '2022-05-13 12:50:54', 'Active', '100', '0', 'Active', '/static/hydra.png,/static/A.png,/static/tImg.png', '/static/iphone-removebg-preview.png'),
(25, 7, 7, 'Mobile', 'Samsung S21 Ultra', '1', '0', '2,00,000', '0', '2,00,000', 'Mobile', 'The Samsung S21 Ultra is Samsung\'s Biggest premium iPhone with a 6.6\" screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling.', 'Specification :::-- The Samsung S21 Ultra is Samsung\'s Biggest premium iPhone with a 6.6\" screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling.', 'A2483Z2636', 'Samsung', 'GST', 1, 'FullDescription :::-- The Samsung S21 Ultra is Samsung\'s Biggest premium iPhone with a 6.6\" screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling.', 'NULL', '302012', '#0907u79893', '0', '2022-08-22 07:42:45', '2022-08-22 07:42:45', 'Active', '1', '2022-05-13 12:50:54', '2022-05-13 12:50:54', 'Active', '100', '0', 'Active', '/static/hydra.png,/static/A.png,/static/tImg.png', '/static/samsung-removebg-preview.png');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `ProductID` int(11) NOT NULL,
  `Ratings` varchar(255) NOT NULL,
  `Review` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `UserID`, `ProductID`, `Ratings`, `Review`, `createdAt`, `updatedAt`) VALUES
(1, 1, 24, '5⭐', 'Top Notch Product', '2022-08-20 12:00:16', '2022-08-20 12:00:16'),
(2, 2, 24, '5⭐', 'Out Of The Box Product', '2022-08-22 07:35:17', '2022-08-22 07:35:17'),
(3, 2, 25, '10⭐', 'Out Of The Box Product', '2022-08-22 07:43:39', '2022-08-22 07:43:39'),
(4, 7, 25, '10⭐', 'Out Of The Box Product || Bestest Phone Ever used By Myself', '2022-08-22 07:44:11', '2022-08-22 07:44:11');

-- --------------------------------------------------------

--
-- Table structure for table `taxes`
--

CREATE TABLE `taxes` (
  `id` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `TaxPercent` decimal(10,0) NOT NULL,
  `TaxType` varchar(255) NOT NULL,
  `Status` enum('Active','InActive') NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `taxes`
--

INSERT INTO `taxes` (`id`, `Name`, `TaxPercent`, `TaxType`, `Status`, `createdAt`, `updatedAt`) VALUES
(1, 'GST', '18', 'Central Goods And Service Tax', 'Active', '2022-08-20 12:34:07', '2022-08-20 12:34:07'),
(3, 'GST', '22', 'State Goods And Service Tax', 'InActive', '2022-08-20 12:34:45', '2022-08-20 12:34:45');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `hash` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `username`, `hash`, `image`, `createdAt`, `updatedAt`) VALUES
(7, 'Navneet', 'Mishra', 'navneet', '$2a$10$0hnEPG5MoJFfN.p2Wwq0m.Pb7z4eP6q4WaszUVrMU14bEhYefaZPm', '/static/A.png', '2022-08-19 09:18:59', '2022-08-19 09:24:50'),
(8, 'Navneet', 'Mishra', 'lokesh', '$2a$10$aNMGLL.H74r2KP0e8jtAjeUsZ1PjwaOs6lsC2Mgi96NHZjaV328nK', '/static/hydra.png', '2022-08-19 09:19:32', '2022-08-19 10:26:29'),
(10, 'lokesh', 'kumawat', 'lokeshkumawat', '$2a$10$jg/ay9y91L9rE/m6Kk92IuKbzRLM3W.9xpAxJ1ddMUeR55dDFUibq', '/static/Nahargarh-fort_600-1280x720.jpg', '2022-08-19 10:53:12', '2022-08-19 10:53:12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `taxes`
--
ALTER TABLE `taxes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `taxes`
--
ALTER TABLE `taxes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
