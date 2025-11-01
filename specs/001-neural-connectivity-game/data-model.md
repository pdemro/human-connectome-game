# Data Model: Neural Connectivity Game

This document outlines the key entities for the Neural Connectivity Game, based on the feature specification.

## Player

- **Description**: Represents the user playing the game.
- **Fields**:
    - `score`: number - The player's current score.

## GameMode

- **Description**: An enumeration representing the selected gameplay mode.
- **Values**:
    - `HEALTHY_CONTROL`
    - `PERSON_WITH_PSYCHOSIS`
    - `RELATIVE`

## NeuralNetwork

- **Description**: The collection of brain regions and connections that the player manages.
- **Fields**:
    - `regions`: BrainRegion[] - An array of brain regions in the network.
    - `connections`: Connection[] - An array of connections between the regions.

## BrainRegion

- **Description**: A node in the neural network.
- **Fields**:
    - `id`: string - A unique identifier for the brain region.
    - `name`: string - The name of the brain region (e.g., "Visual Cortex").
    - `position`: { x: number, y: number } - The position of the region on the game canvas.

## Connection

- **Description**: A link between two brain regions.
- **Fields**:
    - `id`: string - A unique identifier for the connection.
    - `sourceRegion`: BrainRegion - The starting brain region.
    - `targetRegion`: BrainRegion - The ending brain region.
    - `status`: 'stable' | 'compromised' | 'glitching' - The current status of the connection.

## GameEvent

- **Description**: Represents a "disconnect", "noise", or "glitch" that affects the neural network.
- **Fields**:
    - `type`: 'disconnect' | 'noise' | 'glitch' - The type of event.
    - `targetConnection`: Connection - The connection affected by the event.
    - `duration`: number - The duration of the event in milliseconds.