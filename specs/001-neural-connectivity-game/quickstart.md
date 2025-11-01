# Quickstart: Neural Connectivity Game

This guide provides instructions on how to build and run the Neural Connectivity Game.

## Prerequisites

- Node.js (version 20.x or higher)
- npm (or a compatible package manager)

## Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd human-connectome
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

## Building the Game

To build the game and generate the final `index.html` file, run the following command:

```bash
npm run build
```

This will create a `dist` directory containing the `index.html` file.

## Playing the Game

To play the game, open the `dist/index.html` file in a web browser. You can do this by dragging the file into the browser window or by using the "Open File" menu option in your browser.

## Development

To run the game in development mode with hot-reloading, run the following command:

```bash
npm run dev
```

This will start a local development server and open the game in your default browser. Any changes you make to the source code will be automatically reflected in the browser.

## Running Tests

To run the unit tests, use the following command:

```bash
npm test
```
