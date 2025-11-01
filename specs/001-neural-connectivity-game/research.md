# Research: Neural Connectivity Game

## Technology Choices

### Game Engine

- **Decision**: HTML5 Canvas
- **Rationale**: The user requested a single HTML file that can be dragged into a browser. The HTML5 Canvas API is a standard web technology that allows for drawing graphics via JavaScript, which is perfect for a simple 2D game. It has no external dependencies and is supported by all modern browsers.
- **Alternatives considered**:
    - **Phaser**: A popular HTML5 game framework. While powerful, it would add unnecessary complexity and dependencies for this project.
    - **PixiJS**: A lightweight 2D rendering engine. Also a good choice, but for the sake of simplicity, we will stick to the standard Canvas API.

### Language

- **Decision**: TypeScript
- **Rationale**: The user requested TypeScript. It provides static typing, which helps to catch errors early and improves code quality.
- **Alternatives considered**:
    - **JavaScript**: While an option, TypeScript is a better choice for larger projects due to its type safety.

### Bundler

- **Decision**: esbuild
- **Rationale**: The user requested a single HTML file as the final output. A bundler is needed to package the TypeScript code and any other assets into a single file. esbuild is a very fast and simple bundler that is easy to configure.
- **Alternatives considered**:
    - **Webpack**: A powerful and popular bundler, but it can be complex to configure.
    - **Parcel**: Another simple bundler, but esbuild is generally faster.

### Testing Framework

- **Decision**: Vitest
- **Rationale**: Vitest is a modern and fast testing framework that is easy to set up and use with TypeScript projects. It has a Jest-compatible API, which is familiar to many developers.
- **Alternatives considered**:
    - **Jest**: A popular testing framework, but it can be slower than Vitest.
    - **Mocha**: A flexible testing framework, but it requires more configuration than Vitest.
