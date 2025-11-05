# Task Plan: Social Interpreter Game Mode

This document outlines the implementation tasks for the "Social Interpreter" game mode.

## Phase 1: Setup

- [X] T001 Create new directory `src/modes/socialInterpreter`
- [X] T002 Create file `src/modes/socialInterpreter/socialInterpreter.ts`
- [X] T003 Create file `src/modes/socialInterpreter/types.ts`
- [X] T004 Create file `src/modes/socialInterpreter/animations.ts`
- [X] T005 Create file `src/core/ui.ts` for UI components

## Phase 2: Foundational

- [X] T006 [P] Implement `Button` class in `src/core/ui.ts`
- [X] T007 [P] Implement `Label` class in `src/core/ui.ts`
- [X] T008 Define data structures (`AnimationScene`, `InteractionType`, etc.) in `src/modes/socialInterpreter/types.ts`

## Phase 3: User Story 1 - Playing a Round

**Goal**: Players can start and play a full round of the Social Interpreter game.
**Testable Outcome**: A user can launch the game, see an animation, make a choice, and see feedback.

- [X] T009 [US1] Create the `SocialInterpreter` class structure in `src/modes/socialInterpreter/socialInterpreter.ts`
- [X] T010 [US1] Add a "Social Interpreter" button to the welcome screen in `src/main.ts`
- [X] T011 [US1] Implement the logic to instantiate and switch to the `SocialInterpreter` mode in `src/main.ts`
- [X] T012 [US1] Implement the animation rendering and playback logic within the `SocialInterpreter` class.
- [X] T013 [US1] Create a set of sample animations in `src/modes/socialInterpreter/animations.ts`
- [X] T014 [US1] Implement the UI for displaying choices using the `Button` component.
- [X] T015 [US1] Implement the scoring and feedback logic.
- [X] T016 [US1] Implement the main game loop for the Social Interpreter mode.

## Phase 4: User Story 2 - Exiting the Game

**Goal**: Players can exit the game mode at any time.
**Testable Outcome**: A user can click an exit button and be returned to the main menu.

- [X] T017 [US2] Add an "Exit" button to the Social Interpreter UI.
- [X] T018 [US2] Implement the logic to handle the exit button click and return to the welcome screen state in `src/main.ts`.

## Phase 5: Polish

- [X] T019 Add at least 10 different animations to `src/modes/socialInterpreter/animations.ts`
- [X] T020 Refine the visual style of the UI components.
- [X] T021 Add code comments to complex sections.

## Dependencies

- User Story 1 must be completed before User Story 2.

## Parallel Execution

- Within Phase 2, T006 and T007 can be executed in parallel.
- Most tasks within a user story phase are sequential, but UI and logic tasks can sometimes be parallelized if they don't touch the same state. For example, T014 and T015 could be worked on in parallel.
