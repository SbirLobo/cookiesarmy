# MVC Express

## Description

This repository is a simple Express MVC structure from scratch.

## Steps

1. Clone the repo from Github.
2. Run `npm install` or `yarn install`.
3. Create _.env_ from _.env.sample_ file and add your DB parameters. Don't delete the _.sample_ file, it must be kept.

```
DB_HOST=your_db_host
DB_PORT=your_db_port
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
```

4. Adapt _database.sql_ with your own tables. Import the script in your SQL server. You can do it manually or run _migrate_ script (either using `npm run migrate` or `yarn run migrate`).
5. Start the server in dev mode with `npm run dev` or `yarn run dev`. This will run `index.js` using _nodemon_.
6. Go to `localhost:5000` with your favorite browser.
7. From this starter kit, create your own web application.

### Windows Users

If you develop on Windows, you should edit you git configuration to change your end of line rules with this command :

`git config --global core.autocrlf true`

## Example

An example (a basic list of items) is provided (you can load the _database.sql_ file in a test database). The accessible URLs are :

- Home page: [GET localhost:5000/](localhost:5000/)
- Item browse: [GET localhost:5000/items](localhost:5000/items)
- Item read: [GET localhost:5000/items/:id](localhost:5000/items/2)
- Item edit: PUT localhost:5000/items/:id
- Item add: POST localhost:5000/items
- Item deletion: DELETE localhost:5000/items/:id

## Install ⚙️

Liste des commandes et signification
setup : Initialisation du frontend et du backend ainsi que des outils
dev : Démarrage des deux serveurs (frontend + backend) dans un même terminal
dev-front : Démarrage d'un serveur React pour le frontend
dev-back : Démarrage d'un serveur Express pour le backend
lint : Exécute des outils de validation de code (sera exécutée automatiquement à chaque commit)
fix : Fixe les erreurs de formatage (à lancer si lint ne passe pas)

## Listing des outils utilisés

Concurrently : Permet d'exécuter plusieurs commandes dans un même terminal
Husky : Permet d'exécuter des actions en déclenchement de commandes git
Vite : Alternative à Create-React-App, embarquant moins de packages pour une expérience plus fluide
ESLint : Outil de "qualité de code", permet de s'assurer que des règles pré-configurées sont bien respectées
Prettier : Outil de "qualité de code" également, se concentre plus particulièrement sur le style du code
Standard Airbnb : L'un des "standards" les plus connus, même s'il n'est pas officiellement lié à ES/JS
Nodemon : Outil permettant de relancer un serveur à chaque fois qu'un des fichiers est modifié

You can find all these routes declared in the file `src/router.js`. You can add your own new routes, controllers and models.
