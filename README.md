# books-services-frontend

L'application web est réalisée avec Angular et le langage TypeScript. Elle comporte plusieurs pages affichant des livres.

## Routes de l'application

Les routes de l'application sont définies dans le fichier app-routing.module.ts. Les routes disponibles sont :

```
/books : voir toutes les livres.
```

```
/books/{book} : voir les détails d'un livre.
```

## Installation classique

Assurez-vous d'avoir Node.js et npm installés sur votre ordinateur. Vous pouvez vérifier leur installation en ouvrant une invite de commande et en tapant node -v et npm -v.

#### 1. Clonez le dépôt du projet en utilisant la commande

```bash
git clone https://github.com/Nayzow/endpoint-sh-frontend
```

#### 2. À la racine du projet, installez les dépendances en utilisant la commande

```bash
npm install
```

#### 3. Démarrez l'application en utilisant la commande

```bash
npm start
```

## Installation avec Docker

Assurez-vous d'avoir Docker installé sur votre ordinateur.

#### 1. Clonez le dépôt du projet en utilisant la commande

```bash
git clone https://github.com/Nayzow/endpoint-sh-frontend
```

#### 2. À la racine du projet, Construisez l'image Docker à partir du fichier Dockerfile en utilisant la commande

```bash
docker build -t endpoint-sh-frontend .
```

#### 3. Exécutez le conteneur en utilisant la commande

```bash
docker run --name endpoint-sh-frontend -p 80:80 -d endpoint-sh-frontend
```

L'application devrait maintenant être accessible à l'adresse http://localhost:80 à l'aide d'un serveur nginx.
