import { describe, it, expect } from 'vitest';
import { HealthyControl } from '../src/modes/healthyControl';
import { NeuralNetwork } from '../src/models/types';

describe('HealthyControl', () => {
    it('should initialize with a stable network', () => {
        const network: NeuralNetwork = {
            regions: [],
            connections: [
                { id: '1', sourceRegion: {id: 'a', name: 'A', position: {x:0, y:0}}, targetRegion: {id: 'b', name: 'B', position: {x:1, y:1}}, status: 'stable' }
            ]
        };
        const gameMode = new HealthyControl(network);
        expect(gameMode.getNetwork().connections[0].status).toBe('stable');
    });

    it('should increase the score over time', () => {
        const network: NeuralNetwork = {
            regions: [],
            connections: [
                { id: '1', sourceRegion: {id: 'a', name: 'A', position: {x:0, y:0}}, targetRegion: {id: 'b', name: 'B', position: {x:1, y:1}}, status: 'stable' }
            ]
        };
        const gameMode = new HealthyControl(network);
        const initialScore = gameMode.getScore();
        gameMode.update(1000); // 1 second
        expect(gameMode.getScore()).toBeGreaterThan(initialScore);
    });
});
