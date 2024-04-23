-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 09 avr. 2024 à 10:21
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `gestiondeprojet`
--

-- --------------------------------------------------------

--
-- Structure de la table `cartes`
--

CREATE TABLE `cartes` (
  `idCarte` int(11) NOT NULL,
  `nomCarte` varchar(45) DEFAULT NULL,
  `idListe` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `cartes`
--

INSERT INTO `cartes` (`idCarte`, `nomCarte`, `idListe`) VALUES
(15, 'Carte1', 716),
(16, 'Carte2', 716),
(17, 'Carte3', 181),
(18, 'Carte4', 181),
(31, 'Carte1', 635);

-- --------------------------------------------------------

--
-- Structure de la table `listes`
--

CREATE TABLE `listes` (
  `idListe` int(11) NOT NULL,
  `nomListe` varchar(45) DEFAULT NULL,
  `idProjets` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `listes`
--

INSERT INTO `listes` (`idListe`, `nomListe`, `idProjets`) VALUES
(181, 'Liste2', 199),
(584, 'Liste2', 462),
(635, 'Liste1', 462),
(716, 'Liste1', 199);

-- --------------------------------------------------------

--
-- Structure de la table `membres`
--

CREATE TABLE `membres` (
  `idMembre` int(11) NOT NULL,
  `nomMembre` varchar(45) DEFAULT NULL,
  `idProjets` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `membres`
--

INSERT INTO `membres` (`idMembre`, `nomMembre`, `idProjets`) VALUES
(7, 'Membres1', 199),
(8, 'Membres2', 199);

-- --------------------------------------------------------

--
-- Structure de la table `profil`
--

CREATE TABLE `profil` (
  `idProfil` int(10) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `motdepasse` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `profil`
--

INSERT INTO `profil` (`idProfil`, `nom`, `email`, `motdepasse`) VALUES
(1, 'Faralahy', 'faralahy@gmail.com', 'motdepasse');

-- --------------------------------------------------------

--
-- Structure de la table `projets`
--

CREATE TABLE `projets` (
  `idProjets` int(11) NOT NULL,
  `nomProjets` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `projets`
--

INSERT INTO `projets` (`idProjets`, `nomProjets`) VALUES
(199, 'Projet 4'),
(462, 'Projet5');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `cartes`
--
ALTER TABLE `cartes`
  ADD PRIMARY KEY (`idCarte`),
  ADD KEY `fk_cartes_listes1` (`idListe`);

--
-- Index pour la table `listes`
--
ALTER TABLE `listes`
  ADD PRIMARY KEY (`idListe`),
  ADD KEY `fk_listes_projets` (`idProjets`);

--
-- Index pour la table `membres`
--
ALTER TABLE `membres`
  ADD PRIMARY KEY (`idMembre`),
  ADD KEY `fk_membres_projets1` (`idProjets`);

--
-- Index pour la table `profil`
--
ALTER TABLE `profil`
  ADD PRIMARY KEY (`idProfil`);

--
-- Index pour la table `projets`
--
ALTER TABLE `projets`
  ADD PRIMARY KEY (`idProjets`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `cartes`
--
ALTER TABLE `cartes`
  MODIFY `idCarte` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT pour la table `membres`
--
ALTER TABLE `membres`
  MODIFY `idMembre` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `profil`
--
ALTER TABLE `profil`
  MODIFY `idProfil` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `cartes`
--
ALTER TABLE `cartes`
  ADD CONSTRAINT `fk_cartes_listes1` FOREIGN KEY (`idListe`) REFERENCES `listes` (`idListe`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `listes`
--
ALTER TABLE `listes`
  ADD CONSTRAINT `fk_listes_projets` FOREIGN KEY (`idProjets`) REFERENCES `projets` (`idProjets`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `membres`
--
ALTER TABLE `membres`
  ADD CONSTRAINT `fk_membres_projets1` FOREIGN KEY (`idProjets`) REFERENCES `projets` (`idProjets`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
