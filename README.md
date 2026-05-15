# Agora des Sciences — Site web

Site statique pour l'événement **Agora des Sciences** organisé par [AurorAlpes](https://www.auroralpes.fr).

## Structure

```
agora-sciences/
├── index.html              # Page d'accueil
├── css/
│   └── style.css           # Styles (charte graphique AurorAlpes)
├── js/
│   ├── components.js       # Navigation & footer partagés
│   └── main.js             # Animations & interactions
└── pages/
    ├── a-propos.html        # Section À propos
    ├── programme.html       # Timetable (style Indico)
    ├── inscription.html     # Formulaire Framaforms
    ├── contact.html         # Contact & carte
    ├── auroralpes.html      # Présentation AurorAlpes
    └── contributions/       # 1 page par contribution
        ├── ouverture.html
        ├── contrib-1.html
        ├── contrib-2.html
        ├── ...
        ├── table-ronde-1.html
        ├── table-ronde-2.html
        └── cloture.html
```

## Déploiement GitHub Pages

1. Créez un dépôt GitHub (ex: `auroralpes/agora-sciences`)
2. Poussez ce dossier à la racine du dépôt
3. Dans **Settings > Pages**, choisissez la branche `main` et le dossier `/` (root)
4. Le site sera disponible sur `https://auroralpes.github.io/agora-sciences/`

## Personnalisation

### Charte graphique
Les couleurs sont définies dans `css/style.css` via des variables CSS :
```css
--turquoise-claire: #ecf0ef;
--azur-fonce: #0b2228;
--orange: #ffa25a;
--marron-fonce: #2d0900;
--gris-vert: #494e48;
```

### Ajouter une contribution
Dupliquez `pages/contributions/contrib-1.html`, renommez-le et modifiez le contenu.
Ajoutez ensuite le lien correspondant dans `pages/programme.html`.

### Mettre à jour la date/le lieu
Recherchez `Date à confirmer` et `Grenoble, Isère` dans les fichiers HTML.

## Typographie
Le site utilise **Nunito / Nunito Sans** (Google Fonts) comme substitut libre à Gilroy.
Pour utiliser Gilroy si vous possédez la licence, remplacez l'import Google Fonts dans `style.css`.
