# Portfolio Senior - Dark Premium

Bienvenue dans votre portfolio haut de gamme, concu pour les developpeurs seniors. Ce projet implemente un design systeme dark premium avec du verre depeoli (glassmorphism), des micro-animations interactives, et un systeme de chargement de donnees dynamique base sur JSON.

## Fonctionnalites
- **100% Editable via JSON** : Toutes les informations (profil, stats, competences, projets, parcours) sont lues depuis un unique fichier.
- **Design System Premium** : Polices modernes (Clash Display pour les titres, Satoshi pour les sous-titres, Inter pour le corps), accents neon bleus/violets, et texture de bruit subtile.
- **Constellation Interactive** : Un arriere-plan dynamique sur canvas qui suit le mouvement des particules.
- **Curseur Personnalise** : Un curseur fluide qui reagit au survol des elements interactifs (liens, boutons, inputs).
- **Entierement Responsive** : Adapte aux mobiles, tablettes et ordinateurs de bureau.

---

## Comment editer le portfolio en 5 minutes ?

Toutes les donnees de votre portfolio se trouvent dans le fichier suivant :
- portfolio.config.json

Ouvrez ce fichier dans votre editeur (ex. VS Code) et modifiez les valeurs pour personnaliser votre portfolio :
- **personal** : Votre nom, votre role, vos taglines (qui s'animent en boucle sur l'ecran d'accueil), votre adresse e-mail, votre statut de disponibilite et vos liens de reseaux sociaux.
- **stats** : Vos statistiques professionnelles (qui s'animeront automatiquement au defilement).
- **skills** : Vos competences classees par categories avec leurs niveaux en pourcentage.
- **projects** : Vos projets avec leur titre, description, technologies (stack), categorie (pour le filtrage) et liens (GitHub/Live).
- **experience** : Votre parcours professionnel (historique de timeline).

---

## Tester localement

Comme le site charge les donnees dynamiquement depuis le fichier portfolio.config.json, les navigateurs bloquent par defaut ces requetes pour des raisons de securite (politique CORS) si vous ouvrez simplement le fichier index.html par un double-clic.

Pour le tester localement, vous devez lancer un mini-serveur web. Heureusement, vous disposez de Python sur votre machine :

1. Ouvrez votre terminal ou PowerShell.
2. Deplacez-vous dans le dossier :
   cd E:\portfolio
3. Lancez le serveur local Python :
   python -m http.server 8000
4. Ouvrez votre navigateur et rendez-vous a l'adresse :
   http://localhost:8000

---

## Connecter et Deployer sur GitHub

Pour connecter ce dossier directement a votre compte GitHub :

1. Creez un nouveau depot vide sur votre compte GitHub (sans ajouter de README, .gitignore ou licence).
2. Liez et envoyez votre code en executant les commandes suivantes dans votre terminal :
   ```powershell
   cd E:\portfolio
   # Lier le depot distant (remplacez par l'URL de votre depot)
   git remote add origin https://github.com/votre-utilisateur/votre-depot.git
   
   # Envoyer le code sur la branche principale
   git push -u origin main
   ```
3. Une fois en ligne, vous pouvez activer GitHub Pages dans les parametres de votre depot GitHub pour heberger votre portfolio gratuitement en ligne, ou le lier a un service comme Vercel pour un deploiement continu a chaque push.
