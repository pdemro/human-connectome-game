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

To play the game, start the local development server:

```bash
npm run dev
```

This will start a server and provide a URL (usually `http://127.0.0.1:8000`). Open that URL in your web browser to play the game. The server will also watch for file changes and automatically reload the browser.

## Running Tests

To run the unit tests, use the following command:

```bash
npm test
```