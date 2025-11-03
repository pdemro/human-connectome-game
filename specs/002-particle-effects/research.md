# Research: Particle Effects

This document outlines the research tasks required to clarify the technical approach for implementing particle effects.

## Research Tasks

### 1. Rendering Engine/Library for Particle Effects

**Status**: COMPLETED

**Summary**: The project uses the **2D Canvas API** for rendering. The `src/core/renderer.ts` file contains a `Renderer` class that operates on a `CanvasRenderingContext2D`. There is no WebGL or other hardware-accelerated rendering library in use.

**Decision**: Particle effects will be implemented using the 2D Canvas API. The existing `Renderer` class will be extended to support a particle system. No new libraries will be added for rendering.

### 2. Testing Framework

**Task**: Analyze the usage of the Vitest testing framework in the project.

**Method**:
- The `package.json` file indicates that `vitest` is used for testing.
- Review existing test files (`tests/*.test.ts`) to understand how tests are written and structured.

### 3. Performance Constraints for Particle Effects

**Status**: COMPLETED

**Summary**: Research on best practices for 2D canvas particle systems has revealed several key performance optimizations:

- **`requestAnimationFrame`**: The game loop should use `requestAnimationFrame` for smooth animations that are synchronized with the browser's repaint cycle. The project already uses this.
- **Offscreen Canvas**: Particles should be pre-rendered to an offscreen canvas to avoid redrawing complex shapes on every frame. `drawImage()` can then be used to render the particles to the main canvas, which is much faster.
- **Integer Coordinates**: Particle positions should be rounded to the nearest integer before rendering to avoid sub-pixel rendering, which can be computationally expensive.
- **Batch Drawing**: Drawing operations should be batched together to reduce the number of state changes on the canvas.
- **Redraw Regions**: Only the regions of the canvas that have changed should be redrawn on each frame.
- **Separate Logic**: The logic for updating particle positions and properties should be separated from the drawing logic.
- **WebGL**: For a very large number of particles, WebGL should be considered as it offloads rendering to the GPU. For the scope of this feature, the 2D Canvas API should be sufficient if the above optimizations are implemented.

### 4. Scale and Scope of Particle Effects

**Status**: COMPLETED

**Summary**: The number of simultaneous particle effects is likely to be low.

- The game has 3 brain regions.
- The user can create multiple connections between regions, but a large number of connections is unlikely.
- The `PwP` and `Relative` game modes introduce compromised or glitching states to one connection at a time.
- A reasonable estimate for the maximum number of simultaneous particle effects is **5-10**.

**Decision**: The particle system will be designed to handle up to 10 simultaneous effects without a significant drop in performance. This is well within the capabilities of the 2D Canvas API, especially with the performance optimizations identified in the previous research task.
