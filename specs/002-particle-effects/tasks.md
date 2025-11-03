# Tasks: Particle Effects for Connection State Changes

This document outlines the tasks required to implement the particle effects feature.

## Phase 1: Foundational

- [X] T001 Create `src/core/particleSystem.ts` with a `ParticleSystem` class.
- [X] T002 Implement the `Particle` and `ParticleEmitter` classes in `src/core/particleSystem.ts`.
- [X] T003 Add a `ParticleSystem` instance to the `Renderer` class in `src/core/renderer.ts`.
- [X] T004 Update the `gameLoop` in `src/main.ts` to call the `update` and `draw` methods of the `ParticleSystem`.

## Phase 2: User Story 1 - Visual Cue for Compromised Connection

**Goal**: As a player, I want to see a particle effect on a neural connection when it becomes compromised.
**Independent Test**: A single connection can be put into a "compromised" state, and the particle effect should be visible.

- [X] T005 [US1] Create a `ParticleEmitterConfig` for the "compromised" state in `src/core/particleSystem.ts`.
- [X] T006 [US1] In `src/main.ts`, when a connection's status changes to "compromised", add a particle emitter to the `ParticleSystem` for that connection.
- [X] T007 [US1] In `src/main.ts`, when a connection's status changes from "compromised" to "stable", remove the corresponding particle emitter from the `ParticleSystem`.
- [X] T008 [US1] Implement the rendering logic for the "compromised" particle effect in the `ParticleSystem`'s `draw` method.

## Phase 3: User Story 2 - Visual Cue for Glitched Connection

**Goal**: As a player, I want to see a distinct particle effect on a neural connection when it becomes glitched.
**Independent Test**: A single connection can be put into a "glitched" state, and a unique particle effect should be visible.

- [X] T009 [US2] Create a `ParticleEmitterConfig` for the "glitched" state in `src/core/particleSystem.ts`.
- [X] T010 [US2] In `src/main.ts`, when a connection's status changes to "glitched", add a particle emitter to the `ParticleSystem` for that connection.
- [X] T011 [US2] In `src/main.ts`, when a connection's status changes from "glitched" to "stable", remove the corresponding particle emitter from the `ParticleSystem`.
- [X] T012 [US2] Implement the rendering logic for the "glitched" particle effect in the `ParticleSystem`'s `draw` method.

## Phase 4: Polish & Cross-cutting Concerns

- [X] T013 Implement a combined particle effect for connections that are both "compromised" and "glitched".
- [X] T014 [P] Optimize the particle system based on the performance best practices identified in `research.md`.
- [X] T015 [P] Add tests for the `ParticleSystem` in `tests/particleSystem.test.ts`.

## Dependencies

- User Story 2 depends on the completion of User Story 1.

## Parallel Execution

- **User Story 1**: Tasks T005, T006, T007, and T008 can be worked on in parallel after the foundational tasks are complete.
- **User Story 2**: Tasks T009, T010, T011, and T012 can be worked on in parallel after User Story 1 is complete.
- **Polish**: Tasks T014 and T015 can be worked on in parallel.

## Implementation Strategy

The implementation will follow an MVP-first approach, starting with the foundational tasks and then implementing User Story 1. User Story 2 will be implemented after User Story 1 is complete. The polish phase will address any remaining issues and optimizations.
