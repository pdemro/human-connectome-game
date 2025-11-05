# Research: Social Interpreter Game Mode

## 1. Animation Asset Strategy

- **Decision**: Animations will be defined programmatically as TypeScript objects. Each animation object will contain a list of shapes and a timeline of keyframes that define their position, rotation, and scale over time.
- **Rationale**: This approach avoids the need for external asset loading, which simplifies the build process and reduces application size. It also makes the animations easily extensible and modifiable directly in the code. Given the simplicity of the geometric shapes, a programmatic approach is more efficient than using sprite sheets or video files.
- **Alternatives Considered**:
    - **Sprite Sheets**: Considered too complex for simple geometric shapes.
    - **Video Files**: Would increase the application's size and complexity unnecessarily.

## 2. UI Component Integration

- **Decision**: A new set of simple UI components will be created within the `src/core` directory to handle the rendering and input for the "Social Interpreter" mode. These will include a `Button` class and a `Label` class that can be drawn directly onto the canvas.
- **Rationale**: The existing rendering engine is minimalistic and does not have a UI framework. Creating simple, reusable UI components for this feature will keep the code organized and separated from the core game logic. This avoids cluttering the main game loop with UI-specific code.
- **Alternatives Considered**:
    - **Integrating a UI Library**: Integrating a full UI library like `dat.GUI` or a custom solution would be overkill for the simple requirements of this feature and would add unnecessary dependencies.
    - **Hardcoding UI in the Game Mode**: Directly drawing and managing UI within the `SocialInterpreter` class would mix UI and game logic, violating the principle of separation of concerns.
