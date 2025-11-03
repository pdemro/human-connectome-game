# Quickstart: Particle Effects

This guide provides a brief overview of how to use the particle effects system.

## Creating a Particle System

The particle effects are managed by a `ParticleSystem` class that will be added to the renderer. The `ParticleSystem` will be responsible for creating, updating, and drawing all particle emitters.

### 1. Initialization

The `ParticleSystem` will be initialized in the `Renderer` class.

```typescript
// src/core/renderer.ts

import { ParticleSystem } from './particleSystem'; // To be created

export class Renderer {
    private particleSystem: ParticleSystem;

    constructor(private ctx: CanvasRenderingContext2D) {
        this.particleSystem = new ParticleSystem(ctx);
    }

    // ...
}
```

### 2. Creating Particle Emitters

Particle emitters are created by the `ParticleSystem` and are associated with a connection.

```typescript
// src/main.ts

// When a connection becomes compromised or glitched
const connection = neuralNetwork.connections[0];
renderer.particleSystem.addEmitter(connection);
```

### 3. Updating and Rendering

The `ParticleSystem` needs to be updated and drawn on each frame.

```typescript
// src/main.ts

function gameLoop(timestamp: number) {
    // ...

    // Update the particle system
    renderer.particleSystem.update(deltaTime);

    // Draw the particle system
    renderer.particleSystem.draw();

    // ...
}
```
