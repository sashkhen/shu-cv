# sashkhen's CV

Personal CV project. Webpage supports light and dark theme, it's responsive and print ready.

## Installation and usage

### Installing

In order to use this project you need to clone repo, install dependencies and start in dev mode

```bash
git clone https://github.com/sashkhen/shu-cv.git

cd shu-cv

npm i

npm run dev
```

### Updating

If you'd like to update CV with you own info, go to [resume.ts](./src/constants/resume.ts) file and make necessary adjustments.

In order to adjust print version sizing go to [global styles](./src/index.css) file and adjust base `font-size` value for `print` media query:

```css
...

@media print {
  ...

  html {
    font-size: 11.25px;
  }
}
```

### Building

In order to build app for production use

```bash
npm run build
```

### Deployment

In order to deploy your own version of CV to github pages:

- make sure your project is on github ([changing a remote repository's URL](https://medium.com/@ninadkarlekar/deploying-your-react-project-on-github-pages-a-step-by-step-guide-f8b364fa75fa))
- update `package.json`

```json
{
  ...
  "homepage": "https://<username>.github.io/<repository>",
  ...
}
```

- commit and push changes
- run `gh-pages` scripts

```bash
npm run deploy
```

## Built with

### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

#### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
