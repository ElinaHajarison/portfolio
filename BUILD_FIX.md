# Correction de l'erreur de build Vercel

## Erreur source

Vercel affichait l'erreur suivante :

```text
[BUILD_UTILS_SPAWN_126] La commande « vite build » s'est terminée avec le code d'erreur 126
```

Le code de sortie `126` signifie que la commande a ete trouvee, mais que le systeme n'a pas pu l'executer. Dans ce projet, l'erreur concernait le lancement direct du shim `vite` situe dans `node_modules/.bin`.

## Diagnostic

La commande initiale dans `package.json` etait :

```json
{
  "scripts": {
    "build": "vite build"
  }
}
```

Le build fonctionne en local avec la commande suivante :

```powershell
npm run build
```

Pour reproduire une installation propre comme Vercel :

```powershell
npm ci
npm run build
```

## Resolution appliquee

Le script de build a ete modifie pour executer directement le fichier JavaScript de Vite avec Node :

```json
{
  "scripts": {
    "build": "node ./node_modules/vite/bin/vite.js build"
  }
}
```

Cette methode evite de dependre des permissions d'execution du fichier `node_modules/.bin/vite`, qui peuvent provoquer le code d'erreur `126` dans l'environnement de build.

La configuration Vercel a egalement ete explicitee :

```json
{
  "buildCommand": "npm run build",
  "installCommand": "npm ci",
  "outputDirectory": "dist"
}
```

## Commandes de verification

```powershell
npm ci
npm run build
```

Resultat obtenu :

```text
vite v6.4.5 building for production...
✓ 41 modules transformed.
✓ built successfully
```

Le build retourne maintenant le code `0`.

## Fichiers modifies

### 1. `package.json`

Modification du script `build` :

```diff
- "build": "vite build"
+ "build": "node ./node_modules/vite/bin/vite.js build"
```

Le fichier contient aussi Vite en version `6.4.5`.

### 2. `package-lock.json`

Le lockfile a ete mis a jour pour enregistrer Vite `6.4.5` et son integrite npm. Il permet a `npm ci` d'installer exactement les dependances attendues par Vercel.

### 3. `vercel.json`

Ajout de la configuration suivante :

```json
{
  "buildCommand": "npm run build",
  "installCommand": "npm ci",
  "outputDirectory": "dist"
}
```

Cette configuration garantit que Vercel utilise le script corrige et publie le dossier genere `dist`.

## Conclusion

La cause etait le lancement direct du binaire `vite` dans l'environnement de build. La correction consiste a lancer Vite via Node et a imposer ce script dans Vercel. Le build a ete valide apres une installation propre avec `npm ci`.
