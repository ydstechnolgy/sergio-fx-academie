# SERGIO FX ACADÉMIE

Formation d'initiation au trading (Forex et or), en français. Site statique publié sur GitHub Pages.

## Structure

| Fichier | Contenu |
|---|---|
| `src/shell.html` | Page HTML, styles (thème sombre et clair) |
| `src/schema.js` | Liens (HFM, WhatsApp) et fonctions de schémas |
| `src/m1.js` … `src/m7.js` | Les 7 modules et leurs leçons |
| `src/quiz.js` | Quiz par module et glossaire |
| `src/engine.js` | Navigation, progression, quiz, examen, certificat |
| `img/` | Captures TradingView du coach |

## Modifier le site

1. Modifier les fichiers de `src/`.
2. Lancer `sh build.sh` pour régénérer `index.html`.
3. Commit et push sur `main` : GitHub Actions publie le site automatiquement.
