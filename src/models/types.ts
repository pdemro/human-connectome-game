import { Renderer } from "../core/renderer";

export interface GameMode {
    getNetwork(): NeuralNetwork;
    getScore(): number;
    update(deltaTime: number, renderer: Renderer): void;
}

export interface Player {
    score: number;
}

export type GameModeType = 'HEALTHY_CONTROL' | 'PERSON_WITH_PSYCHOSIS' | 'RELATIVE';

export interface NeuralNetwork {
    regions: BrainRegion[];
    connections: Connection[];
}

export interface BrainRegion {
    id: string;
    name: string;
    position: { x: number; y: number };
}

export interface Connection {
    id: string;
    sourceRegion: BrainRegion;
    targetRegion: BrainRegion;
    status: 'stable' | 'compromised' | 'glitching';
}

export interface GameEvent {
    type: 'disconnect' | 'noise' | 'glitch';
    targetConnection: Connection;
    duration: number;
}