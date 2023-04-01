# books-services-frontend

L’application web est réalisée avec Angular et le langage TypeScript. Elle comporte plusieurs pages affichant des livres.

## Routes de l’application

Les routes de l’application sont définies dans le fichier app-routing.module.ts. Les routes disponibles sont :

```
/books : voir touts les comics.
```

```
/books/{id} : voir les détails d'un comic.
```

```
/series : voir toutes les séries de comics.
```

```
/series/{id} : voir les détails d'une série de comics.
```

```
/editors : voir touts les éditeurs de comics.
```

```
/books/{id} : voir les détails d'un éditeur de comic.
```

## Installation classique

Assurez-vous d’avoir Node.js et npm installés sur votre ordinateur. Vous pouvez vérifier leur installation en ouvrant une invite de commande et en tapant node -v et npm -v.

#### 1. Clonez le dépôt du projet en utilisant la commande

```bash
git clone https://github.com/Nayzow/books-service-frontend
```

#### 2. À la racine du projet, installez les dépendances en utilisant la commande

```bash
npm install
```

#### 3. Lancez l’application en utilisant la commande

```bash
npm start
```

L'application devrait maintenant être accessible à l'adresse http://localhost:4200 à l'aide d'un serveur node.

## Installation avec Docker

Assurez-vous d’avoir Docker installé sur votre ordinateur.

#### 1. Clonez le dépôt du projet en utilisant la commande

```bash
git clone https://github.com/Nayzow/books-service-frontend
```

#### 2. À la racine du projet, construisez l’image Docker à partir du fichier Dockerfile en utilisant la commande

```bash
docker build -t books-service-frontend .
```

#### 3. Exécutez le conteneur en utilisant la commande

```bash
docker run --name books-service-frontend -p 80:80 -d books-service-frontend
```

L’application devrait maintenant être accessible à l’adresse http://localhost:80 à l’aide d’un serveur nginx.
