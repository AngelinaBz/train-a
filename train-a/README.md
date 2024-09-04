# Train Booking Application

## Overview

This is a train booking application developed using Angular.
It provides users with a convenient interface for registration, trip search, order placement, and booking management.
The application also includes administrative features for managing stations, carriages, and routes.

## Main Pages

### User Pages

- Registration Page: Allows new users to create an account by filling in the required information.
- Login Page: Enables users to log in using their credentials.
- User Profile Page: Displays user information and allows editing of personal details.

### Trip Pages

- Search Page: Allows users to search for available trips based on their preferences.
- Trip Details: Includes detailed information about available trips, such as departure and arrival times, ticket prices, and available seats.

### Order Page

- Order Management: Allows users to place bookings, view, and manage their orders.

### Manager Pages

- Stations Management: Allows adding, editing, and deleting stations.
- Carriages Management: Manages different types of carriages and their characteristics.
- Route Management: Includes features for creating and editing routes, as well as managing rides.

## Technologies

- Angular: The main framework for front-end development.
- TypeScript: Used for writing typed code.
- NgRx: State management for the application.
- SCSS: Styling of components.

## Prerequisites

- **Node.js**: Ensure you have Node.js version `20.16.0` installed.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/train-a.git
   cd train-a
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run dev mode:
   ```bash
   npm run start
   ```

## Available Scripts

- **`npm run ng`**: Runs the Angular CLI.

- **`npm run start`**: Runs the app in the development mode. Open http://localhost:4200 to view it in your browser.

- **`npm run build`**: Builds the app for production to the `dist` folder.

- **`npm run watch`**: Builds the app in watch mode using the development configuration.

- **`npm run test`**: Launches the test runner in the interactive watch mode.

- **`npm run test:coverage`**: Runs tests and generates a code coverage report.

- **`npm run test:staged`**: Runs tests with code coverage in a headless Chrome browser without watch mode.

- **`npm run lint`**: Lints the project files.

- **`npm run lint:fix`**: Lints the project files and fixes linting errors.

- **`npm run stylelint`**: Lints the stylesheets in the project.

- **`npm run stylelint:fix`**: Lints and fixes errors in the stylesheets.

- **`npm run ci:format`**: Checks the code formatting using Prettier.

- **`npm run format`**: Formats the code using Prettier.

- **`npm run prepare`**: Prepares the project for Husky by navigating to the parent directory and setting up Husky hooks.

## Contributing

To contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification:

- **feat**: Adding a new feature.
- **fix**: Fixing a bug.
- **docs**: Changes to documentation.
- **style**: Code style changes (formatting, etc.).
- **refactor**: Code refactoring without changing functionality.
- **test**: Adding or updating tests.
- **chore**: Changes to build process or auxiliary tools and libraries.
  Examples:

```bash
feat: added train list display component
fix: fixed order details display bug
docs: updated API description in README
```

5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

### Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification to maintain a clean and readable commit history. Please ensure your commit messages adhere to this format.

## License

This project is licensed under the MIT License.
