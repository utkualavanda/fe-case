# fe-case

This is a front-end case project built using modern web development technologies like React, TypeScript, and Vite. It uses various libraries such as Material-UI for UI components and React Query for data fetching.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Linting and Formatting](#linting-and-formatting)
- [Build and Preview](#build-and-preview)
- [Dependencies](#dependencies)

## Features

- Built with React and TypeScript for strong type safety.
- Uses Vite for fast builds and development server.
- Material-UI for pre-styled, customizable UI components.
- React Query for efficient server state management.
- ESLint and Prettier for consistent code quality and style.

## Prerequisites

Before running this project locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (latest stable version recommended)
- [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/utkualavanda/fe-case.git
   cd fe-case
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

## Running the Project

To start the development server locally:

```bash
yarn dev
```

The application will be accessible at `http://localhost:5173` by default.

### Pre-commit Hooks

This project uses Husky and lint-staged to ensure code quality. Changes are automatically linted and staged before committing.

## Build and Preview

To build the project for production:

```bash
yarn build
```

To preview the production build:

```bash
npm run preview
# or
yarn preview
```

## Dependencies

### Main Dependencies

- `@emotion/react` and `@emotion/styled`: For styling components.
- `@mui/material` and `@mui/icons-material`: Material-UI library for UI components.
- `@tanstack/react-query`: Server state management.
- `react`, `react-dom`: React library for building user interfaces.
- `react-router-dom`: For client-side routing.
- `react-hook-form`: Simplifies form management in React.
- `react-helmet-async`: Manages the document head for SEO.

### Development Dependencies

- `eslint` and plugins: Enforces coding standards.
- `prettier`: Formats code to maintain consistent style.
- `typescript`: Adds static typing to JavaScript.
- `vite`: Build tool for fast development.
- `husky` and `lint-staged`: Pre-commit hooks for linting and formatting.
