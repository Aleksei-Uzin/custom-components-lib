# @aleksei-uzin/custom-components-lib

[![NPM version](https://img.shields.io/npm/v/@aleksei-uzin/custom-components-lib.svg)](https://www.npmjs.com/package/@aleksei-uzin/custom-components-lib)
[![NPM downloads](https://img.shields.io/npm/dm/@aleksei-uzin/custom-components-lib.svg)](https://www.npmjs.com/package/@aleksei-uzin/custom-components-lib)
[![License](https://img.shields.io/npm/l/@aleksei-uzin/custom-components-lib.svg)](https://github.com/Aleksei-Uzin/custom-components-lib/blob/main/LICENSE)

A lightweight and customizable React component library built with TypeScript and Storybook.

## ✨ Features

- **Lightweight**: Minimal dependencies to keep your bundle size small.
- **Customizable**: Components designed to be easily styled and adapted.
- **TypeScript**: Fully typed for a better developer experience.
- **Storybook**: Comes with a Storybook for interactive component development and documentation.
- **Live Demo**: [View the deployed Storybook on Chromatic](https://68ecd60c78da2f4cd2b1e20e-whhjqvsoao.chromatic.com/).

## 🚀 Installation

You can install the package using npm or yarn:

```bash
npm install @aleksei-uzin/custom-components-lib
```

## Usage

Here's a basic example of how to use a component from the library.

```jsx
import React from 'react'
import { Button } from '@aleksei-uzin/custom-components-lib'

function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
    </div>
  )
}

export default MyApp
```

## 📖 Storybook

This library uses [Storybook](https://storybook.js.org/) for component development and documentation. To run Storybook locally, use the following command:

```bash
npm run storybook
```

This will start the Storybook development server, and you can view the components at `http://localhost:6006`.

## 🛠️ Available Scripts

In the project directory, you can run:

- `npm run build`: Builds the library for production.
- `npm run release`: Builds and publishes the library to npm.
- `npm run storybook`: Starts the Storybook development server.
- `npm run build-storybook`: Builds Storybook as a static web application.
- `npm run lint`: Lints the source files using ESLint.
- `npm run format:check`: Checks for formatting issues with Prettier.
- `npm run format:write`: Formats the source files with Prettier.

## A Note from the Author

This library represents my first journey into creating and publishing a component library. It has been a fantastic learning experience, and I'm excited to share it. I hope you find it useful, and I welcome any feedback or contributions as I continue to learn and improve.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License

This project is ISC licensed.
