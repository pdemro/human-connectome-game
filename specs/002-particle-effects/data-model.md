# Data Model: Particle Effects

This document describes the data structures for the particle effects feature.

## Core Entities

### Particle

Represents a single particle in a particle effect.

| Property   | Type                             | Description                               |
|------------|----------------------------------|-------------------------------------------|
| `position` | `{ x: number, y: number }`       | The current position of the particle.     |
| `velocity` | `{ x: number, y: number }`       | The current velocity of the particle.     |
| `size`     | `number`                         | The size of the particle.                 |
| `color`    | `string`                         | The color of the particle.                |
| `lifespan` | `number`                         | The remaining lifespan of the particle in milliseconds. |

### ParticleEmitter

Manages a collection of particles for a specific connection.

| Property      | Type                             | Description                               |
|---------------|----------------------------------|-------------------------------------------|
| `connection`  | `Connection`                     | The connection that the emitter is attached to. |
| `particles`   | `Particle[]`                     | The array of particles managed by the emitter. |
| `config`      | `ParticleEmitterConfig`          | The configuration for the particle emitter. |

### ParticleEmitterConfig

Defines the behavior of a particle emitter.

| Property          | Type       | Description                               |
|-------------------|------------|-------------------------------------------|
| `particleCount`   | `number`   | The maximum number of particles.          |
| `particleLifespan`| `number`   | The lifespan of each particle in milliseconds. |
| `particleSize`    | `number`   | The initial size of each particle.        |
| `particleSpeed`   | `number`   | The initial speed of each particle.       |
| `particleColor`   | `string`   | The color of the particles.               |
