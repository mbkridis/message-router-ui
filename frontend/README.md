# 📬 Message Router Frontend (Angular 19 + Angular Material)

## 🧭 Contexte

Cette application frontend fait partie du système *Message Router*, développé pour le département Paiement de la banque. Elle permet d'afficher les messages transférés depuis des applications Back Office via IBM MQ Series, et de gérer les partenaires MQ via une interface utilisateur.

L'application est développée avec **Angular 17** et utilise **Angular Material 17** pour la couche graphique. L'accent est mis sur la performance, la résilience et la simplicité d'utilisation.

> ⚠️ **NB** : Les fonctionnalités d'authentification, d'autorisation, et de sécurisation des routes via les guards ne sont pas encore implémentées à ce stade du projet.

---

## 🚀 Fonctionnalités

### 📩 Messages

- Affichage sous forme de **tableau** des messages stockés dans la base de données.
- Consultation des détails d’un message via une **popin (dialog Angular Material)** avec un bouton "Cancel" pour fermeture.
- Appel des **API REST** exposées par le backend pour la consultation des messages.

### 🤝 Partenaires MQ

- Affichage de la **liste des partenaires** dans un tableau.
- Ajout de nouveaux partenaires via un **formulaire dynamique**.
- Suppression de partenaires depuis l’IHM.
- Champs requis pour un partenaire :
  - `Alias` *(obligatoire)*
  - `Type` *(obligatoire)*
  - `Direction` *(INBOUND | OUTBOUND)*
  - `Application` *(texte libre)*
  - `Processed Flow Type` *(MESSAGE | ALERTING | NOTIFICATION)*
  - `Description` *(obligatoire)*

### 🧭 Navigation

- Barre de navigation avec accès :
  - à la **liste des messages**
  - à la **gestion des partenaires**

---

## 🛠️ Stack Technique

| Technologie       | Version         |
|------------------|-----------------|
| Angular           | 19.2.0          |
| Angular Material  | 19.2.0          |
| Typescript        | 5.7.2           |
| Node.js           | 22.14.0         |
| Package Manager   | npm             |
| Styling           | CSS             |

---

## 📦 Installation & Démarrage

### Prérequis

- Node.js >= 18
- Angular CLI

🔒 Sécurité (TODO)
La partie authentification et autorisation via un service d’identité (OAuth2, JWT...) n’est pas encore intégrée. À implémenter :

Guards pour les routes protégées

Stockage sécurisé du token

Redirection conditionnelle selon les rôles

🧪 Tests
À venir.
