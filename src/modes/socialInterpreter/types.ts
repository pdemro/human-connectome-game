export enum InteractionType {
    GoalDirected = 'Goal-directed',
    Interacting = 'Interacting',
    Random = 'Random',
}

export interface Keyframe {
    timestamp: number;
    position: { x: number; y: number };
    rotation: number;
    scale: number;
}

export interface AnimatedShape {
    id: string;
    type: 'circle' | 'triangle' | 'square';
    keyframes: Keyframe[];
}

export interface AnimationScene {
    id: string;
    shapes: AnimatedShape[];
    duration: number;
    correctInteraction: InteractionType;
}
