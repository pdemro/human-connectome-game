# Tasks: Neural Connectivity Game

**Input**: Design documents from `/specs/001-neural-connectivity-game/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), data-model.md, research.md

**Tests**: Unit tests will be included for each user story to ensure correctness.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Initialize npm project with `npm init -y`
- [ ] T002 [P] Install dependencies: `npm install typescript esbuild`
- [ ] T003 [P] Install development dependencies: `npm install vitest @types/node`
- [ ] T004 [P] Create `tsconfig.json` for TypeScript configuration
- [ ] T005 Create project structure: `src/`, `dist/`, `tests/`
- [ ] T006 Create `src/index.html` with a canvas element
- [ ] T007 Create `src/main.ts` as the main entry point
- [ ] T008 Create build and test scripts in `package.json`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [ ] T009 Implement the main game loop in `src/main.ts`
- [ ] T010 [P] Implement a core rendering engine for the canvas in `src/core/renderer.ts`
- [ ] T011 [P] Define data models from `data-model.md` as TypeScript interfaces in `src/models/types.ts`

---

## Phase 3: User Story 1 - Healthy Control Gameplay (Priority: P1) 🎯 MVP

**Goal**: Implement the baseline mechanics of the game with a stable neural network.

**Independent Test**: A player can start, play, and complete a level in the "Healthy Control" mode.

### Tests for User Story 1 ⚠️

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [ ] T012 [P] [US1] Write unit test for Healthy Control game logic in `tests/healthyControl.test.ts`

### Implementation for User Story 1

- [ ] T013 [P] [US1] Implement `HealthyControl` game mode logic in `src/modes/healthyControl.ts`
- [ ] T014 [P] [US1] Implement rendering of brain regions in `src/core/renderer.ts`
- [ ] T015 [P] [US1] Implement rendering of stable connections in `src/core/renderer.ts`
- [ ] T016 [US1] Implement drag-and-drop mechanic for creating connections in `src/main.ts`
- [ ] T017 [US1] Implement scoring logic for the Healthy Control mode in `src/modes/healthyControl.ts`

---

## Phase 4: User Story 2 - Person with Psychosis (PwP) Gameplay (Priority: P2)

**Goal**: Simulate the challenges of managing a compromised neural network.

**Independent Test**: A player can experience and attempt to manage "disconnects" and "noise" events in the "PwP" mode.

### Tests for User Story 2 ⚠️

- [ ] T018 [P] [US2] Write unit test for PwP game logic in `tests/pwp.test.ts`

### Implementation for User Story 2

- [ ] T019 [P] [US2] Implement `PwP` game mode logic in `src/modes/pwp.ts`
- [ ] T020 [P] [US2] Implement visual representation for "compromised" connections in `src/core/renderer.ts`
- [ ] T021 [US2] Implement "disconnect" and "noise" event simulation in `src/modes/pwp.ts`
- [ ] T022 [US2] Implement logic for the player to restore connections in `src/main.ts`

---

## Phase 5: User Story 3 - Relative Gameplay (Priority: P3)

**Goal**: Simulate the intermediate state of neural connectivity with subtle alterations.

**Independent Test**: A player can experience and manage "glitches" in the "Relative" mode.

### Tests for User Story 3 ⚠️

- [ ] T023 [P] [US3] Write unit test for Relative game logic in `tests/relative.test.ts`

### Implementation for User Story 3

- [ ] T024 [P] [US3] Implement `Relative` game mode logic in `src/modes/relative.ts`
- [ ] T025 [P] [US3] Implement visual representation for "glitching" connections in `src/core/renderer.ts`
- [ ] T026 [US3] Implement "glitch" event simulation in `src/modes/relative.ts`
- [ ] T027 [US3] Implement logic for the player to correct glitches in `src/main.ts`

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T028 [P] Implement the game mode selection UI in `src/main.ts`
- [ ] T029 [P] Add instructions and improve UI/UX in `src/index.html` and `src/main.ts`
- [ ] T030 Code cleanup and refactoring across the codebase
- [ ] T031 Final validation of the single `index.html` build output

---

## Dependencies & Execution Order

- **Setup (Phase 1)** and **Foundational (Phase 2)** must be completed before any user stories.
- User stories can be implemented in parallel after Phase 2 is complete.
- **Polish (Phase N)** should be done after all user stories are implemented.

## Implementation Strategy

### MVP First (User Story 1 Only)

1.  Complete Phase 1: Setup
2.  Complete Phase 2: Foundational
3.  Complete Phase 3: User Story 1
4.  **STOP and VALIDATE**: Test User Story 1 independently.
5.  Deploy/demo if ready.
