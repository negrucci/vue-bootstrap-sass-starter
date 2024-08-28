# Vue Bootstrap Sass Starter

A **Vue.js** starter template integrated with **Bootstrap 5** and **Sass** for building responsive, customizable, and modern web applications. This template serves as a starting point for projects that need a solid frontend setup with popular tools pre-configured.

## Features
- **Vue 3**: Uses the latest version of Vue.js with Composition API.
- **Bootstrap 5**: Fully integrated for responsive UI components and layouts.
- **Sass**: Pre-configured with Bootstrap's Sass variables for easy theming.
- **Vue Router**: Configured for routing in a Single Page Application (SPA).
- **Axios**: Included for making HTTP requests to APIs.
- **Modular Architecture**: Organized file structure for scalability and maintainability.

## Recommended IDE Setup
[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).
  
## Quick Start

### 1. Clone the repository:
```bash
git clone https://github.com/yourusername/vue-bootstrap-sass-starter.git
```

### 2. Navigate to the project directory:
```bash
cd vue-bootstrap-sass-starter
```

### 3. Install dependencies:
```bash
npm install
```

### 4. Run the development server:
```bash
npm run dev
```

### 5. Lint with [ESLint](https://eslint.org/)
```sh
npm run lint
```

### 6. Compile and Minify for Production
```sh
npm run build
```

## Project Structure

```bash
vue-bootstrap-sass-starter/
│
├── public/                # Static public assets
│   └── favicon.ico        # Example favicon for the app
├── src/                   # Main application source code
│   ├── assets/            # Project assets such as images, fonts, etc.
│   │   └── bootstrap/     # Bootstrap-specific Sass files for customization
│   ├── components/        # Vue components, reusable across the application
│   ├── composables/       # Vue composables (reusable logic with Composition API)
│   ├── locales/           # Localization files for i18n support
│   ├── router/            # Vue Router configuration, including route definitions
│   ├── App.vue            # Root component of the application
│   ├── i18n.js            # Internationalization (i18n) configuration
│   └── main.js            # Application entry point, initializing Vue app
│
├── .eslintrc.cjs          # ESLint configuration for code linting and standards
├── .gitignore             # Specifies which files and folders Git should ignore
├── .prettierrc.json       # Prettier configuration for consistent code formatting
├── index.html             # Main HTML file, serves as the entry point for the app
├── jsconfig.json          # JavaScript configuration for IDE support (e.g., path aliases)
├── LICENSE                # License for the project
├── package-lock.json      # Auto-generated file for locking dependencies versions
├── package.json           # Project metadata, dependencies, and scripts
├── README.md              # Project documentation, instructions for setup and usage
└── vite.config.js         # Vite configuration file for development/build tooling
```

## Configuration

### 1. Environment Variables
Vite supports environment variables defined in .env files. You can use these variables in your code with the import.meta.env syntax.

Example .env file:

```env
VITE_API_URL=https://api.example.com
```
Access the variable in your code:
```js
const apiUrl = import.meta.env.VITE_API_URL
```

### 2. Bootstrap Theming with Sass
You can customize Bootstrap's default styles by modifying the variables in `src/assets/bootstrap/_variables.scss`. This allows you to change colors, fonts, spacing, and other design aspects without overriding Bootstrap classes directly.

Example:

```scss
// Change primary color
$primary: #ff6f61;
```
