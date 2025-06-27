# Projet GameOn
1. Forkez ce repo ;
2. Il est conseillé d'utiliser VisualStudio Code et vous pouvez utiliser Docker, mais ce n'est pas obligatoire ;
3. Il n'y a aucune dépendance ;
4. Vous ne devez utiliser que du CSS personnalisé et du JavaScript pur, sans jQuery, Bootstrap ou autre librairie.


# 🕹️ GameOn – Formulaire d'inscription à un tournoi esport

Projet réalisé dans le cadre de la formation **Developpeur d'applications JavaScript React** chez OpenClassrooms.
GameOn est une entreprise fictive qui souhaite proposer un formulaire d'inscription à ses tournois via son site web.
Ce projet est le premier du parcours à introduire JavaScript, avec une attention particulière sur la validation côté client et l'interactivité de l'interface, tout en prenant en compte le responsive.

---

## 📚 Contexte

- 🎓 Projet n°4 du parcours OpenClassrooms : [Scénario](https://openclassrooms.com/fr/paths/877/projects/807/709-scenario)
- 🎯 Objectif : **ajouter une modale fonctionnelle** et **gérer un formulaire de manière interactive en JavaScript Vanilla**
- 💡 Contraintes pédagogiques : DOM sans framework, pas de bibliothèques externes, responsive obligatoire

---

## ⚙️ Stack utilisée

- **HTML5** – structure de la page et du formulaire
- **CSS3** – mise en page responsive, animations
- **JavaScript (Vanilla)** – interactions, modale, validation personnalisée

---

## ✨ Fonctionnalités principales

- Ouverture et fermeture d'une **modale personnalisée**
- **Formulaire dynamique** avec gestion complète des erreurs utilisateur
- Vérifications côté client :
  - Prénom / nom (min. 2 caractères)
  - Email valide
  - Date de naissance non vide
  - Nombre de tournois (entre 0 et 99)
  - Sélection d'une ville (radio)
  - Acceptation des CGU
- **Affichage conditionnel** des erreurs (`data-error-visible`)
- Message de validation après validation
- **Responsive design** jusqu’à 320px
- Code **modulaire** (fichiers JS séparés)

---

## 📁 Structure du projet

```

│── js/
│   ├── index.js             # Orchestration générale
│   ├── nav.js               # Barre de nav responsive
│   ├── modal.js             # Modale & menu responsive
│   ├── formValidation.js    # Fonctions de validation
│   ├── displayMessage       # Message de validation
│   └── (optionnel) utils.js # Pour centraliser le code réutilisable si le projet prend de l'ampleur
├── images/
├── index.html
├── modal.css
└── README.md
```

---

## 🚀 Lancer le projet en local

1. **Cloner le repo GitHub** :
```bash
git clone https://github.com/Delia-1/GameOn-website-FR.git
```

2. **Ouvrir le fichier `index.html`** directement dans un navigateur.

💡 Aucune installation de dépendances requise.

---

## 🧠 Choix techniques

- Utilisation du **modèle modulaire** pour une meilleure lisibilité et évolutivité :

  - `formValidation.js` → fonctions **pures et indépendantes** pour chaque champ, avec usage systématique du **early return** pour simplifier la lecture et éviter les blocs imbriqués

  - `nav.js` → fonction `editNav()` dédiée à la **gestion du menu responsive**

  - `modal.js` → gestion de l’**ouverture/fermeture de la modale**, incluant l'animation de fermeture et le **nettoyage complet du formulaire**

  - `displayMessage.js` → **affichage conditionnel** du message final de confirmation après validation réussie du formulaire

  - `index.js` → fichier principal d’**orchestration globale** : déclaration des constantes, appel des fonctions importées, gestion des événements utilisateur

- Le **quantityLabel dynamique** (adapté à la taille de l’écran) est resté dans `index.js` car il est unique.
  _S’il devait se généraliser, cette logique serait déplacée dans un fichier dédié, ex. : `responsiveText.js`._

- Une fonction `resetForm()` est utilisée pour **réinitialiser les champs** et **retirer les messages d’erreur** (`data-error-visible`) à chaque fermeture de la modale, assurant un affichage toujours propre à la réouverture.

- Utilisation systématique des attributs `for` et `id` pour lier chaque label à son input, garantissant une **meilleure accessibilité** et une **navigation clavier fluide**.

- Les erreurs sont affichées dynamiquement via l’attribut `data-error-visible`, **manipulé en JavaScript** et stylé en CSS pour une expérience utilisateur claire et cohérente.

- Le code est pensé pour **évoluer facilement** grâce à une **séparation claire des responsabilités** et une **architecture modulaire**.

---

## 👩‍💻 Auteur

Projet réalisé par **Délia**
📫 [Profil GitHub](https://github.com/Delia-1)

---
