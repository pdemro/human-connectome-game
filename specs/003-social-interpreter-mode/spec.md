# Feature Specification: Social Interpreter Game Mode

**Version**: 1.0
**Status**: In Review
**Author**: Gemini
**Created**: 2025-11-05
**Last Updated**: 2025-11-05

## 1. Overview

This document outlines the functional requirements for a new game mode, "Social Interpreter." This mode is inspired by the "theory of mind" tasks used in the Psychosis Human Connectome Project (P-HCP) study. It aims to gamify the scientific task of interpreting social cues by having players watch animations of simple geometric shapes and categorize the nature of their interactions. This feature will not only enhance the game but also create a potential tool for academic research and public education on social cognition.

## 2. User Scenarios & Testing

This section describes the primary user flows and forms the basis for acceptance testing.

### Scenario 1: Playing a Round

- **As a player**, I want to select the "Social Interpreter" mode from the main menu so that I can start a new game.
- **Given** I am on the main menu,
- **When** I select "Social Interpreter,"
- **Then** the game mode starts, and the first animation is presented.
- **And** after the animation, I am presented with three choices: "Goal-directed," "Interacting," and "Random."
- **When** I select an answer,
- **Then** I receive feedback on my choice and my score is updated.
- **And** the next animation begins automatically.

### Scenario 2: Exiting the Game

- **As a player**, I want to be able to exit the "Social Interpreter" mode at any time.
- **Given** I am playing the "Social Interpreter" mode,
- **When** I press the "pause" or "exit" button,
- **Then** I am prompted to confirm if I want to quit.
- **When** I confirm,
- **Then** I am returned to the main menu, and my score for the session is discarded.

## 3. Functional Requirements

| ID | Requirement | Acceptance Criteria |
|---|---|---|
| FR-01 | **Main Menu Integration** | - The main menu must display a clearly labeled option to start the "Social Interpreter" game mode. <br>- Clicking this option must launch the game mode. |
| FR-02 | **Animation Display** | - The game must display a series of animations featuring simple geometric shapes (e.g., triangles, circles). <br>- Each animation must play for a duration of 5-10 seconds. <br>- Animations must be loaded from a predefined set. |
| FR-03 | **Interaction Choices** | - After each animation concludes, three mutually exclusive options must be displayed: "Goal-directed," "Interacting," and "Random." <br>- The player must be able to select one of the three options using standard input controls. |
| FR-04 | **Player Feedback** | - The game must provide immediate feedback after the player makes a selection. <br>- If the player's selection is incorrect, the game must display the correct interaction type. |
| FR-05 | **Scoring System** | - The game must maintain a score for the player's performance during a session. <br>- The score should increment for each correct answer. |
| FR-06 | **Game Progression** | - After feedback is displayed, the game should automatically proceed to the next animation. <br>- The sequence of animations should be randomized to ensure variety. |
| FR-07 | **Exit Mechanism** | - The game must provide a mechanism (e.g., a pause menu with an "Exit" button) to allow the player to leave the game mode. <br>- Exiting the mode must return the player to the main menu. |

## 4. Success Criteria

- **Player Engagement**: The average number of rounds played per user session in the "Social Interpreter" mode meets or exceeds 10.
- **Usability**: 95% of players can successfully start, play a full round (animation + choice), and exit the game mode without encountering any errors or UI blockages.
- **Content Capacity**: The system can successfully manage and randomly select from a library of at least 50 unique animations without performance degradation.

## 5. Data Model & Key Entities

- **`GameMode`**: Represents the "Social Interpreter" mode.
- **`Animation`**: A data structure or asset containing the movement paths and timings for shapes for a single scene. Each animation is associated with a correct `InteractionType`.
- **`InteractionType`**: An enumeration with possible values: `GOAL_DIRECTED`, `INTERACTING`, `RANDOM`.
- **`GameRound`**: A single instance of gameplay, consisting of one `Animation`, the player's choice, and the result.
- **`PlayerSession`**: Tracks the state for a single playthrough, including the current score and the list of animations already shown.

## 6. Assumptions & Dependencies

- **Assumption**: A 2D rendering engine capable of animating simple geometric shapes is available within the existing codebase.
- **Assumption**: A library of animations and their corresponding correct `InteractionType` will be provided by the project stakeholders or created as part of the implementation.
- **Dependency**: The existing main menu and UI framework can be extended to add the new game mode.

## 7. Out of Scope

- **User Accounts & Persistent Scores**: Player scores are session-based and will not be saved between game launches.
- **Data Collection for Research**: No player data will be collected or transmitted for academic research in this initial version.
- **Procedural Animation Generation**: All animations will be pre-designed and loaded as static assets.