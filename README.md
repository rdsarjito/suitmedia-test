# React + TypeScript + Vite

This template provides a minimal setup to get React working with Vite, TypeScript, and ESLint. It includes Hot Module Replacement (HMR) and some ESLint rules for development.

## Official Vite Plugins

You have two official options for integrating React with Vite:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) - Uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) - Uses [SWC](https://swc.rs/) for Fast Refresh.

## Expanding the ESLint Configuration

For production applications, it's recommended to enable type-aware lint rules. Follow these steps to configure ESLint:

1. **Configure `parserOptions`**:

    ```js
    // tseslint.config.js
    export default tseslint.config({
      languageOptions: {
        // other options...
        parserOptions: {
          project: ['./tsconfig.node.json', './tsconfig.app.json'],
          tsconfigRootDir: import.meta.dirname,
        },
      },
    });
    ```

2. **Update ESLint Configuration**:

    - Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`.
    - Optionally, add `...tseslint.configs.stylisticTypeChecked`.
    - Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update your config:

      ```js
      // eslint.config.js
      import react from 'eslint-plugin-react';

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
      });
      ```

## Setting Up Vite Base URL

To set the base URL for API requests in your Vite project, add the following environment variable to your `.env.local` file:

```env
VITE_BASE_API_URL=https://suitmedia-backend.suitdev.com