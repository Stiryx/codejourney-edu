# Assistant IA - Guide d'installation

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :
- [Node.js](https://nodejs.org/) (version 16 ou supérieure)
- [Git](https://git-scm.com/downloads)

## Installation

1. Clonez le dépôt :
```bash
git clone [URL_DU_REPO]
cd [NOM_DU_DOSSIER]
```

2. Installez les dépendances :
```bash
npm install
```

3. Créez un fichier `.env` à la racine du projet et ajoutez votre clé API Mistral :
```
VITE_MISTRAL_API_KEY=votre_clé_api_ici
```

4. Démarrez le serveur de développement :
```bash
npm run dev
```

5. Ouvrez votre navigateur et accédez à :
```
http://localhost:8080
```

## Structure du projet

Le projet utilise :
- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui pour les composants
- Framer Motion pour les animations

## Scripts disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Crée une version de production
- `npm run preview` : Prévisualise la version de production

## Aide et support

Si vous rencontrez des problèmes :
1. Vérifiez que Node.js est bien installé : `node --version`
2. Vérifiez que toutes les dépendances sont installées : `npm install`
3. Vérifiez que le fichier `.env` est bien configuré
4. Consultez les logs dans la console du navigateur