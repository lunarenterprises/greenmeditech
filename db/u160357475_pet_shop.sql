-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 11, 2026 at 07:33 AM
-- Server version: 11.8.9-MariaDB-log
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u160357475_pet_shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `o_id` int(20) NOT NULL,
  `o_user_name` varchar(30) NOT NULL,
  `o_user_address` varchar(255) NOT NULL,
  `o_user_phone_number` bigint(30) NOT NULL,
  `o_product_id` int(20) NOT NULL,
  `o_status` varchar(20) NOT NULL DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`o_id`, `o_user_name`, `o_user_address`, `o_user_phone_number`, `o_product_id`, `o_status`) VALUES
(1, 'Aishwarya', 'ullor, tvm, Kerala, , 695009', 788909907, 11, 'pending'),
(2, 'Aishwarya', 'ullor, tvm, Kerala, , 695009', 788909907, 11, 'pending'),
(3, 'Akhil Vinod', 'just for test, Kollam, Kerala, , 691012', 919633950757, 14, 'pending'),
(4, 'Akhil Vinod', 'just for test, Kollam, Kerala, , 691012', 919633950757, 14, 'pending'),
(5, 'Akhil Vinod', 'just for test, Kollam, Kerala, , 691012', 919633950757, 14, 'pending'),
(6, 'Aishwarya', 'ullor, tvm, Kerala, , 695009', 919072252494, 11, 'pending'),
(7, 'ac', 'sdghh, dff, Kerala, , 693212', 918157928944, 11, 'pending'),
(8, 'Akhil Vinod', 'Test, Kollam, Kerala, , 691012', 919633950757, 14, 'pending'),
(9, 'Sankar Lal', 'Sooryamangalam, Edakkodu , Chadayamangalam , Kerala, , Edakkodu ', 919446965255, 38, 'pending'),
(10, 'Sankar Lal', 'Sooryamangalam, Edakkodu , Chadayamangalam , Kerala, , Edakkodu ', 919446965255, 38, 'pending'),
(11, 'Antony Lopez,DBRA 76,Palamutto', 'Fr Jerome road, vaduthala po, Ernakulam , Kerala, , Vaduthala 682023', 919446037773, 14, 'pending'),
(12, 'Antony Lopez,DBRA 76,Palamutto', 'Fr Jerome road, vaduthala po, Ernakulam , Kerala, , Vaduthala 682023', 919446037773, 14, 'pending'),
(13, 'Antony Lopez,DBRA 76,Palamutto', 'Fr Jerome road, vaduthala po, Ernakulam , Kerala, , Vaduthala 682023', 919446037773, 14, 'pending'),
(14, 'Antony Lopez,DBRA 76,Palamutto', 'Fr Jerome road, vaduthala po, Ernakulam , Kerala, , Vaduthala 682023', 919446037773, 14, 'pending'),
(15, 'Nikhil Koshy ', 'Mangattu (H) Rubber Board P.O Puthupally Kumaramkod , KOTTAYAM , Kerala, , Rubber Board ', 917025832795, 14, 'pending'),
(16, 'Nikhil Koshy ', 'Mangattu (H) Rubber Board P.O Puthupally Kumaramkod , KOTTAYAM , Kerala, , Rubber Board ', 917025832795, 14, 'pending'),
(17, 'MITHUN SV NAIR', 'QTR NO. 412, VARUNA APARTMENT, SA ROAD, ELAMKULAM, KOCHI, ERNAKULAM, Kerala, , 682020', 919766253233, 14, 'pending'),
(18, 'BimalThomas ', 'Kelakam bus stand, Kannur, Kerala, , 670674', 917306803752, 14, 'pending'),
(19, 'BimalThomas ', 'Kelakam bus stand , Kannur, Kerala, , 670674', 917306803752, 14, 'pending'),
(20, 'BimalThomas ', 'Kelakam bus stand , Kannur, Kerala, , 670674', 917306803752, 14, 'pending'),
(21, 'Alphonsa pv', 'Punnakkuzhiyil house, Kakkayangad po, Palapalli mosque near, Aralam farm via, Kannur dist, kerala.670673, Kakkayangad, Kerala, , 670673', 918943064603, 14, 'pending'),
(22, 'Alphonsa pv', 'Punnakkuzhiyil house, Kakkayangad po, Palapalli mosque near, Aralam farm via, Kannur dist, kerala.670673, Kakkayangad, Kerala, , 670673', 918943064603, 14, 'pending'),
(23, 'Alphonsa pv', 'Punnakkuzhiyil house, Kakkayangad po, Palapalli mosque near, Aralam farm via, Kannur dist, kerala.670673, Kakkayangad, Kerala, , 670673', 918943064603, 14, 'pending'),
(24, 'aishwarya', 'Lunar , 68907, tvm, Himachal Pradesh, , 696008', 919072252494, 11, 'pending'),
(25, 'Saikiran Shaji Kunjathan', 'E/103, Rock Avenue CHS, Plot-E, Sai Nagar, Hindustan Nakka, Charkop Kandivali West, Opp ICICI Bank Charkop Branch, Mumbai, Maharashtra, , 400067', 919545327281, 14, 'pending'),
(26, 'Sindhu Sreekumar ', 'Sreeragam House Punnappala Punnappaala (Po) Wandoor (via) Malappuram, Malappuram, Kerala, , 679328', 9109074297506, 14, 'pending'),
(27, 'johny jacob', 'Mangat(H),Kootukad,Vadakumpuram PO, N.Paravur, Kerala, , 683521', 918075608133, 14, 'pending'),
(28, 'johny jacob', 'Mangat(H),Kootukad,Vadakumpuram PO, N.Paravur, Kerala, , 683521', 918075608133, 14, 'pending'),
(29, 'Souvik Das', '81 Sukanta Sarani, Railpark , Rishra, West Bengal, , 712250', 917879729818, 42, 'pending'),
(30, 'Sagitha NATH', 'Rk complex,akkulam road, Trivandrum, Kerala, , 695011', 9187678686866, 11, 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `p_id` int(20) NOT NULL,
  `p_name` varchar(30) DEFAULT NULL,
  `p_description` text DEFAULT NULL,
  `p_image` varchar(255) DEFAULT NULL,
  `price` int(30) DEFAULT NULL,
  `quantity` int(255) DEFAULT NULL,
  `p_stock` int(30) DEFAULT NULL,
  `p_status` varchar(20) NOT NULL DEFAULT 'active',
  `a_name` varchar(30) DEFAULT NULL,
  `a_email` varchar(255) DEFAULT NULL,
  `a_passwd` varchar(255) DEFAULT NULL,
  `a_role` varchar(20) DEFAULT NULL,
  `a_status` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`p_id`, `p_name`, `p_description`, `p_image`, `price`, `quantity`, `p_stock`, `p_status`, `a_name`, `a_email`, `a_passwd`, `a_role`, `a_status`) VALUES
(1, NULL, NULL, NULL, NULL, NULL, NULL, 'active', 'akhil', 'akhilvinod76@gmail.com', '$2b$10$2arNeFebqw9pSpWPwn7qHu3XRQpTKvJwHmi3DfRKdbbZUde9J.nPi', 'admin', 'active'),
(2, 'testingday', 'nothing but testb only', 'uploads/product/web.jpg', 30, 1, -33, 'removed', NULL, NULL, NULL, NULL, NULL),
(9, 'echo soap', 'goodyy', 'uploads/product/dm.jpg', 204, 1, 10, 'removed', NULL, NULL, NULL, NULL, NULL),
(10, 'Kennel Hygiene(lavender)', 'Introducing Eco Cleanser Kennel Hygiene, your ultimate solution for maintaining a clean and healthy environment for your pets. This 500 ml multi-surface concentrate solution is infused with the calming scent of lavender, ensuring not only cleanliness but also a refreshing fragrance. Designed to kill 99.9% of germs, Eco Cleanser Kennel Hygiene is perfect for sanitizing kennels, pet houses, and other areas where your pets reside. Keep your furry friends safe and their spaces spotless with Eco Cleanser Kennel Hygiene – the ideal choice for pet owners who prioritize hygiene and well-being.', 'uploads/product/web.jpg', 201, 1, 10, 'removed', NULL, NULL, NULL, NULL, NULL),
(11, 'Kennel Hygiene(Lemon Blossom)', 'UUU', 'uploads/product/sandal wood.JPG', 200, 1, -7, 'active', NULL, NULL, NULL, NULL, NULL),
(12, 'Kennel Hygiene(Rose Mist)', 'Eco Cleanser Kennel Hygiene Rose Mist is a powerful, eco-friendly cleaning solution designed specifically for maintaining the hygiene of pet kennels. This versatile, multi-surface concentrate effectively kills 99.9% of germs, ensuring a clean and safe environment for your furry friends.', 'uploads/product/dm.jpg', 201, 1, 10, 'removed', NULL, NULL, NULL, NULL, NULL),
(13, 'Kennel Hygiene(Neem)', 'Eco Cleanser Kennel Hygiene Neem is a powerful, eco-friendly cleaning solution designed specifically for maintaining the hygiene of pet kennels. This versatile, multi-surface concentrate effectively kills 99.9% of germs, ensuring a clean and safe environment for your furry friends.', 'uploads/product/neem.JPG', 200, 1, 10, 'removed', NULL, NULL, NULL, NULL, NULL),
(14, 'Kennel Hygiene(Sandalwood)', 'Eco Cleanser Kennel Hygiene Sandalwood is a premium, eco-friendly cleaning solution crafted for the specific needs of pet kennels. This powerful, multi-surface concentrate effectively kills 99.9% of germs, ensuring a clean and safe environment for your beloved pets.\n\n', 'uploads/product/sandal wood.JPG', 200, 1, -14, 'active', NULL, NULL, NULL, NULL, NULL),
(15, 'testing', 'nothing but testb only', 'uploads/product/noproduct.png', 300, 1, 30, 'removed', NULL, NULL, NULL, NULL, NULL),
(16, 'testingg', 'nothing but testb only', 'uploads/product/noproduct.png', 300, NULL, 30, 'removed', NULL, NULL, NULL, NULL, NULL),
(17, 'shampooykk', 'yhiiiiikk', 'uploads/product/web.jpg', 60, NULL, 20, 'removed', NULL, NULL, NULL, NULL, NULL),
(18, 'shampooyki', 'yhhhny', 'uploads/product/web.jpg', 60, NULL, 20, 'removed', NULL, NULL, NULL, NULL, NULL),
(19, 'shampooykii', 'yhhhny', 'uploads/product/web.jpg', 60, NULL, 20, 'removed', NULL, NULL, NULL, NULL, NULL),
(20, 'shampooykiiu', 'yhhhny', 'uploads/product/web.jpg', 60, NULL, 20, 'removed', NULL, NULL, NULL, NULL, NULL),
(21, 'shampooykiiui', 'yhhhny', 'uploads/product/user.png', 60, NULL, 20, 'removed', NULL, NULL, NULL, NULL, NULL),
(22, 'echosoapiiy', 'yhhhnyy', 'uploads/product/web.jpg', 56, NULL, 10, 'removed', NULL, NULL, NULL, NULL, NULL),
(23, 'shampooyp', 'yhhhn', 'uploads/product/user.png', 56, NULL, 20, 'removed', NULL, NULL, NULL, NULL, NULL),
(24, 'shampy', 'yhhhnyy', 'uploads/product/gd.jpg', 59, NULL, 20, 'removed', NULL, NULL, NULL, NULL, NULL),
(25, 'shampyy', 'yhhhnyy', 'uploads/product/gd.jpg', 59, NULL, 20, 'removed', NULL, NULL, NULL, NULL, NULL),
(26, 'shampi', 'yhhhnyy', 'uploads/product/dm.jpg', 59, NULL, 20, 'removed', NULL, NULL, NULL, NULL, NULL),
(27, 'echosoapyz', 'yhiiiiikk', 'uploads/product/web.jpg', 60, NULL, 20, 'removed', NULL, NULL, NULL, NULL, NULL),
(28, 'echosoapyr', 'yhiiiiikk', 'uploads/product/web.jpg', 60, NULL, 20, 'removed', NULL, NULL, NULL, NULL, NULL),
(29, 'shampooy', 'yhhhny', 'uploads/product/user.png', 56, NULL, 20, 'removed', NULL, NULL, NULL, NULL, NULL),
(30, 'rexona', 'undefined', 'uploads/product/web.jpg', 60, NULL, 10, 'removed', NULL, NULL, NULL, NULL, NULL),
(31, 'echosoapyyz', 'yhiiiiikk', 'uploads/product/dm.jpg', 60, NULL, 20, 'removed', NULL, NULL, NULL, NULL, NULL),
(32, 'testinggy', 'nothing but testb only', 'uploads/product/noproduct.png', 300, NULL, 30, 'removed', NULL, NULL, NULL, NULL, NULL),
(33, 'Echo green Soap', 'Good for pets', 'uploads/product/JOH_6447.JPG', 700, NULL, 19, 'active', NULL, NULL, NULL, NULL, NULL),
(34, 'ice', 'candy', 'uploads/product/1_oXTLp2aoats-JyUvy_4oAQ.jpg', 50, NULL, 5, 'removed', NULL, NULL, NULL, NULL, NULL),
(35, 'icee', 'candy', 'uploads/product/1_oXTLp2aoats-JyUvy_4oAQ.jpg', 50, NULL, 5, 'removed', NULL, NULL, NULL, NULL, NULL),
(36, 'iceehu', 'candy', 'uploads/product/offer.jpg', 50, NULL, 3, 'removed', NULL, NULL, NULL, NULL, NULL),
(37, 'soapp', 'yhhhny', 'uploads/product/1_oXTLp2aoats-JyUvy_4oAQ.jpg', 65, NULL, -1, 'removed', NULL, NULL, NULL, NULL, NULL),
(38, 'soappp', 'yhhhny', 'uploads/product/1_oXTLp2aoats-JyUvy_4oAQ.jpg', 65, NULL, 3, 'removed', NULL, NULL, NULL, NULL, NULL),
(39, 'soappi', 'yhhhny', 'uploads/product/1_oXTLp2aoats-JyUvy_4oAQ.jpg', 65, NULL, 5, 'removed', NULL, NULL, NULL, NULL, NULL),
(40, 'essential Hair oil', 'hii', 'uploads/product/gd.jpg', 40, NULL, 2, 'removed', NULL, NULL, NULL, NULL, NULL),
(41, ' Air Cooler', 'oreva monkey. d. luffy', 'uploads/product/main.jpeg', 1500, NULL, 20, 'removed', NULL, NULL, NULL, NULL, NULL),
(42, 'ABC', 'PQRST', 'uploads/product/JOH_6496.JPG', 300, NULL, 9, 'active', NULL, NULL, NULL, NULL, NULL),
(43, 'echosoapii', 'undefined', 'uploads/product/Logo.png', 56, NULL, 5, 'removed', NULL, NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`o_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`p_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `o_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `p_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
