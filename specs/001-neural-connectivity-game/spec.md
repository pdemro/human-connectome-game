# Feature Specification: Neural Connectivity Game

**Feature Branch**: `001-neural-connectivity-game`
**Created**: 2025-11-01
**Status**: Draft
**Input**: User description: "Build a game which demonstrates core principals of the acedemic literature in the document @/documents/nihms-1741175.pdf. Here is a general concept: This game would focus on the idea that compromised neural connectivity and certain subtle neural alterations may mark a genetic liability for psychotic psychopathology, especially as seen in first-degree relatives. Core Principle: Aberrant brain connectivity in psychosis and its heritable nature. Gameplay: A puzzle/resource-management game where the player manages a network of neural connections (a "mini-connectome"). Goal: Maintain optimal connectivity and function in the brain network for one of three characters: Healthy Control, Relative, or Person with Psychosis (PwP). Mechanics: Connections are represented by draggable lines or "signals" between different brain regions (visual areas, cognitive areas, reward circuit). PwP Mode: The character starts with "compromised" or "aberrant" connections (represented by visual static or broken lines). The player constantly battles unexpected "disconnects" or "noise" events that impair processing. Relative Mode: The character has a baseline connectivity that is "subtly altered" or prone to smaller, more frequent "glitches" than the control, representing the genetic predisposition and intermediate symptom level reported in the paper. Control Mode: The network is stable, and the challenge is simply optimizing speed and efficiency. Demonstrates: The difference in neural function across the three groups, emphasizing that relatives exhibit an intermediate, subclinical level of abnormality in some measures."

## Clarifications

### Session 2025-11-01
- Q: How is the score calculated in each mode? → A: Score increases for each second a connection is stable and decreases for each second it's compromised or glitching.
- Q: What happens if the player does not intervene when a "disconnect" or "glitch" occurs? → A: The negative impact on the score continues and potentially spreads to adjacent connections.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Healthy Control Gameplay (Priority: P1)

As a player, I want to play the "Healthy Control" mode to understand the baseline mechanics of the game. I will manage a stable neural network and optimize its speed and efficiency.

**Why this priority**: This is the simplest mode and serves as a tutorial for the core gameplay mechanics.

**Independent Test**: The player can successfully complete a level in the "Healthy Control" mode.

**Acceptance Scenarios**:

1.  **Given** the player starts a new game in "Healthy Control" mode, **When** they connect the brain regions, **Then** the connections are stable and signals are transmitted efficiently.
2.  **Given** the player is playing in "Healthy Control" mode, **When** they optimize the network, **Then** their score increases.

### User Story 2 - Person with Psychosis (PwP) Gameplay (Priority: P2)

As a player, I want to play the "Person with Psychosis" mode to experience the challenges of managing a compromised neural network. I will have to constantly deal with unexpected "disconnects" and "noise" events.

**Why this priority**: This mode demonstrates the core concept of the game, which is to simulate the effects of psychosis on neural connectivity.

**Independent Test**: The player can experience and attempt to manage the "disconnects" and "noise" events in the "PwP" mode.

**Acceptance Scenarios**:

1.  **Given** the player starts a new game in "PwP" mode, **When** they try to establish connections, **Then** some connections are visually represented as "compromised" or "aberrant".
2.  **Given** the player is playing in "PwP" mode, **When** a "disconnect" or "noise" event occurs, **Then** the player must take action to restore the connection.

### User Story 3 - Relative Gameplay (Priority: P3)

As a player, I want to play the "Relative" mode to understand the intermediate state of neural connectivity. The network will be subtly altered and prone to smaller, more frequent "glitches".

**Why this priority**: This mode demonstrates the genetic predisposition and intermediate symptom level, which is a key concept from the source literature.

**Independent Test**: The player can experience and manage the "glitches" in the "Relative" mode.

**Acceptance Scenarios**:

1.  **Given** the player starts a new game in "Relative" mode, **When** they establish connections, **Then** the network is mostly stable but experiences occasional "glitches".
2.  **Given** the player is playing in "Relative" mode, **When** a "glitch" occurs, **Then** the player must take action to correct it, and these events are more frequent but less severe than in "PwP" mode.

### Edge Cases

- If the player does not intervene in an event, the negative score impact will continue and may spread to other connections.
- How is the score calculated in each mode?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST allow players to choose one of three gameplay modes: "Healthy Control", "Person with Psychosis", or "Relative".
- **FR-002**: The system MUST represent the neural network as a set of brain regions and connections.
- **FR-003**: The system MUST allow players to create and manage connections between brain regions.
- **FR-004**: The system MUST simulate "disconnects" and "noise" events in the "PwP" mode.
- **FR-005**: The system MUST simulate "glitches" in the "Relative" mode.
- **FR-006**: The system MUST provide a scoring mechanism to reflect the player's performance in managing the neural network.
- **FR-007**: The system MUST visually distinguish between stable, compromised, and glitching connections.
- **FR-008**: Score MUST increase for each second a connection is stable and decrease for each second it is compromised or glitching.
- **FR-009**: If the player does not intervene in a "disconnect" or "glitch" event, the negative score impact MUST continue and MAY spread to adjacent connections.

### Key Entities *(include if feature involves data)*

- **Player**: The user playing the game.
- **Game Mode**: The selected mode of gameplay (Healthy Control, PwP, Relative).
- **Neural Network**: The collection of brain regions and connections.
- **Brain Region**: A node in the neural network.
- **Connection**: A link between two brain regions.
- **Event**: A "disconnect", "noise", or "glitch" that affects the neural network.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 90% of players can successfully complete a level in "Healthy Control" mode on their first attempt.
- **SC-002**: Players in "PwP" mode experience a statistically significant higher number of disruptive events compared to "Relative" mode.
- **SC-003**: Players in "Relative" mode experience a statistically significant higher number of disruptive events compared to "Healthy Control" mode.
- **SC-004**: After playing all three modes, 80% of players can correctly identify the differences in gameplay between the modes.