import { AnimationScene, InteractionType } from "./types";

export const animations: AnimationScene[] = [
    {
        id: 'chase',
        duration: 5000,
        correctInteraction: InteractionType.Interacting,
        shapes: [
            {
                id: 'chaser',
                type: 'triangle',
                keyframes: [
                    { timestamp: 0, position: { x: 100, y: 300 }, rotation: 0, scale: 1 },
                    { timestamp: 5000, position: { x: 700, y: 300 }, rotation: 0, scale: 1 },
                ]
            },
            {
                id: 'chased',
                type: 'circle',
                keyframes: [
                    { timestamp: 0, position: { x: 200, y: 300 }, rotation: 0, scale: 1 },
                    { timestamp: 5000, position: { x: 800, y: 300 }, rotation: 0, scale: 1 },
                ]
            }
        ]
    },
    {
        id: 'meet-and-greet',
        duration: 4000,
        correctInteraction: InteractionType.Interacting,
        shapes: [
            {
                id: 'greeter1',
                type: 'circle',
                keyframes: [
                    { timestamp: 0, position: { x: 100, y: 100 }, rotation: 0, scale: 1 },
                    { timestamp: 2000, position: { x: 400, y: 300 }, rotation: 0, scale: 1 },
                    { timestamp: 4000, position: { x: 100, y: 100 }, rotation: 0, scale: 1 },
                ]
            },
            {
                id: 'greeter2',
                type: 'circle',
                keyframes: [
                    { timestamp: 0, position: { x: 700, y: 500 }, rotation: 0, scale: 1 },
                    { timestamp: 2000, position: { x: 400, y: 300 }, rotation: 0, scale: 1 },
                    { timestamp: 4000, position: { x: 700, y: 500 }, rotation: 0, scale: 1 },
                ]
            }
        ]
    },
    {
        id: 'random-bounce',
        duration: 6000,
        correctInteraction: InteractionType.Random,
        shapes: [
            {
                id: 'bouncer1',
                type: 'square',
                keyframes: [
                    { timestamp: 0, position: { x: 50, y: 50 }, rotation: 0, scale: 1 },
                    { timestamp: 1500, position: { x: 750, y: 450 }, rotation: 1, scale: 1 },
                    { timestamp: 3000, position: { x: 400, y: 50 }, rotation: 2, scale: 1 },
                    { timestamp: 4500, position: { x: 50, y: 450 }, rotation: 3, scale: 1 },
                    { timestamp: 6000, position: { x: 400, y: 250 }, rotation: 4, scale: 1 },
                ]
            },
            {
                id: 'bouncer2',
                type: 'square',
                keyframes: [
                    { timestamp: 0, position: { x: 750, y: 50 }, rotation: 0, scale: 1 },
                    { timestamp: 2000, position: { x: 50, y: 450 }, rotation: 2, scale: 1 },
                    { timestamp: 4000, position: { x: 750, y: 250 }, rotation: 4, scale: 1 },
                    { timestamp: 6000, position: { x: 50, y: 50 }, rotation: 6, scale: 1 },
                ]
            }
        ]
    },
    {
        id: 'goal-to-corner',
        duration: 3000,
        correctInteraction: InteractionType.GoalDirected,
        shapes: [
            {
                id: 'runner1',
                type: 'circle',
                keyframes: [
                    { timestamp: 0, position: { x: 400, y: 300 }, rotation: 0, scale: 1 },
                    { timestamp: 3000, position: { x: 750, y: 550 }, rotation: 0, scale: 1 },
                ]
            },
             {
                id: 'runner2',
                type: 'circle',
                keyframes: [
                    { timestamp: 0, position: { x: 400, y: 300 }, rotation: 0, scale: 1 },
                    { timestamp: 3000, position: { x: 50, y: 50 }, rotation: 0, scale: 1 },
                ]
            }
        ]
    },
    // Add 6 more animations
    {
        id: 'orbit',
        duration: 8000,
        correctInteraction: InteractionType.Interacting,
        shapes: [
            {
                id: 'center',
                type: 'square',
                keyframes: [
                    { timestamp: 0, position: { x: 400, y: 300 }, rotation: 0, scale: 1.5 },
                    { timestamp: 8000, position: { x: 400, y: 300 }, rotation: 2, scale: 1.5 },
                ]
            },
            {
                id: 'orbiter',
                type: 'circle',
                keyframes: [
                    { timestamp: 0, position: { x: 400, y: 100 }, rotation: 0, scale: 1 },
                    { timestamp: 2000, position: { x: 600, y: 300 }, rotation: 0, scale: 1 },
                    { timestamp: 4000, position: { x: 400, y: 500 }, rotation: 0, scale: 1 },
                    { timestamp: 6000, position: { x: 200, y: 300 }, rotation: 0, scale: 1 },
                    { timestamp: 8000, position: { x: 400, y: 100 }, rotation: 0, scale: 1 },
                ]
            }
        ]
    },
    {
        id: 'avoidance',
        duration: 4000,
        correctInteraction: InteractionType.Interacting,
        shapes: [
            {
                id: 'avoider1',
                type: 'triangle',
                keyframes: [
                    { timestamp: 0, position: { x: 100, y: 300 }, rotation: 0, scale: 1 },
                    { timestamp: 4000, position: { x: 700, y: 300 }, rotation: 0, scale: 1 },
                ]
            },
            {
                id: 'avoider2',
                type: 'triangle',
                keyframes: [
                    { timestamp: 0, position: { x: 700, y: 300 }, rotation: 3.14, scale: 1 },
                    { timestamp: 1800, position: { x: 450, y: 300 }, rotation: 3.14, scale: 1 },
                    { timestamp: 2200, position: { x: 450, y: 400 }, rotation: 3.14, scale: 1 },
                    { timestamp: 4000, position: { x: 100, y: 400 }, rotation: 3.14, scale: 1 },
                ]
            }
        ]
    },
    {
        id: 'parallel-lines',
        duration: 5000,
        correctInteraction: InteractionType.Random,
        shapes: [
            {
                id: 'line1',
                type: 'circle',
                keyframes: [
                    { timestamp: 0, position: { x: 100, y: 100 }, rotation: 0, scale: 1 },
                    { timestamp: 5000, position: { x: 700, y: 100 }, rotation: 0, scale: 1 },
                ]
            },
            {
                id: 'line2',
                type: 'circle',
                keyframes: [
                    { timestamp: 0, position: { x: 100, y: 200 }, rotation: 0, scale: 1 },
                    { timestamp: 5000, position: { x: 700, y: 200 }, rotation: 0, scale: 1 },
                ]
            }
        ]
    },
    {
        id: 'goal-to-center',
        duration: 2000,
        correctInteraction: InteractionType.GoalDirected,
        shapes: [
            {
                id: 'g1',
                type: 'square',
                keyframes: [
                    { timestamp: 0, position: { x: 50, y: 50 }, rotation: 0, scale: 1 },
                    { timestamp: 2000, position: { x: 400, y: 300 }, rotation: 0, scale: 1 },
                ]
            },
            {
                id: 'g2',
                type: 'square',
                keyframes: [
                    { timestamp: 0, position: { x: 750, y: 550 }, rotation: 0, scale: 1 },
                    { timestamp: 2000, position: { x: 400, y: 300 }, rotation: 0, scale: 1 },
                ]
            }
        ]
    },
    {
        id: 'dance',
        duration: 6000,
        correctInteraction: InteractionType.Interacting,
        shapes: [
            {
                id: 'dancer1',
                type: 'triangle',
                keyframes: [
                    { timestamp: 0, position: { x: 300, y: 300 }, rotation: 0, scale: 1 },
                    { timestamp: 1000, position: { x: 500, y: 300 }, rotation: 0, scale: 1 },
                    { timestamp: 2000, position: { x: 500, y: 300 }, rotation: 1.57, scale: 1 },
                    { timestamp: 3000, position: { x: 300, y: 300 }, rotation: 1.57, scale: 1 },
                    { timestamp: 4000, position: { x: 300, y: 300 }, rotation: 3.14, scale: 1 },
                    { timestamp: 5000, position: { x: 500, y: 300 }, rotation: 3.14, scale: 1 },
                    { timestamp: 6000, position: { x: 300, y: 300 }, rotation: 0, scale: 1 },
                ]
            },
            {
                id: 'dancer2',
                type: 'triangle',
                keyframes: [
                    { timestamp: 0, position: { x: 500, y: 300 }, rotation: 3.14, scale: 1 },
                    { timestamp: 1000, position: { x: 300, y: 300 }, rotation: 3.14, scale: 1 },
                    { timestamp: 2000, position: { x: 300, y: 300 }, rotation: 4.71, scale: 1 },
                    { timestamp: 3000, position: { x: 500, y: 300 }, rotation: 4.71, scale: 1 },
                    { timestamp: 4000, position: { x: 500, y: 300 }, rotation: 0, scale: 1 },
                    { timestamp: 5000, position: { x: 300, y: 300 }, rotation: 0, scale: 1 },
                    { timestamp: 6000, position: { x: 500, y: 300 }, rotation: 3.14, scale: 1 },
                ]
            }
        ]
    },
    {
        id: 'independent-circles',
        duration: 4000,
        correctInteraction: InteractionType.Random,
        shapes: [
            {
                id: 'c1',
                type: 'circle',
                keyframes: [
                    { timestamp: 0, position: { x: 100, y: 100 }, rotation: 0, scale: 1 },
                    { timestamp: 2000, position: { x: 100, y: 500 }, rotation: 0, scale: 1 },
                    { timestamp: 4000, position: { x: 100, y: 100 }, rotation: 0, scale: 1 },
                ]
            },
            {
                id: 'c2',
                type: 'circle',
                keyframes: [
                    { timestamp: 0, position: { x: 700, y: 100 }, rotation: 0, scale: 1 },
                    { timestamp: 2000, position: { x: 700, y: 500 }, rotation: 0, scale: 1 },
                    { timestamp: 4000, position: { x: 700, y: 100 }, rotation: 0, scale: 1 },
                ]
            }
        ]
    }
];