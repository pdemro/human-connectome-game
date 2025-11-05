# Data Model: Social Interpreter Game Mode

This document defines the data structures for the "Social Interpreter" feature.

## 1. Core Entities

### `AnimationScene`

Represents a single animation scene to be shown to the player.

| Field | Type | Description |
|---|---|---|
| `id` | `string` | A unique identifier for the animation. |
| `shapes` | `AnimatedShape[]` | An array of shapes to be animated in the scene. |
| `duration` | `number` | The total duration of the animation in milliseconds. |
| `correctInteraction` | `InteractionType` | The correct interpretation of the animation. |

### `AnimatedShape`

Represents a single geometric shape within an `AnimationScene`.

| Field | Type | Description |
|---|---|---|
| `id` | `string` | A unique identifier for the shape within the scene. |
| `type` | `'circle' \| 'triangle' \| 'square'` | The type of geometric shape. |
| `keyframes` | `Keyframe[]` | An array of keyframes defining the shape's movement. |

### `Keyframe`

Defines the state of a shape at a specific point in time.

| Field | Type | Description |
|---|---|---|
| `timestamp` | `number` | The time of this keyframe in milliseconds from the start of the animation. |
| `position` | `{ x: number; y: number }` | The position of the shape. |
| `rotation` | `number` | The rotation of the shape in radians. |
| `scale` | `number` | The scale of the shape. |

## 2. Enumerations

### `InteractionType`

Represents the type of interaction between shapes in an animation.

| Value | Description |
|---|---|
| `GOAL_DIRECTED` | The shapes are trying to achieve a goal. |
| `INTERACTING` | The shapes are interacting with each other. |
| `RANDOM` | The shapes are moving randomly. |

## 3. Game State

### `SocialInterpreterState`

Represents the state of the "Social Interpreter" game mode at any given time.

| Field | Type | Description |
|---|---|---|
| `currentAnimation` | `AnimationScene \| null` | The animation currently being displayed. |
| `score` | `number` | The player's current score. |
| `gameState` | `'playing' \| 'feedback'` | The current state of the game loop. |
