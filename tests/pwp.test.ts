import { describe, it, expect } from 'vitest';
import { PwP } from '../src/modes/pwp';
import { NeuralNetwork } from '../src/models/types';

describe('PwP', () => {
    it('should decrease the score when a connection is compromised', () => {
        const network: NeuralNetwork = {
            regions: [],
            connections: [
                { id: '1', sourceRegion: {id: 'a', name: 'A', position: {x:0, y:0}}, targetRegion: {id: 'b', name: 'B', position: {x:1, y:1}}, status: 'stable' }
            ]
        };
        const gameMode = new PwP(network);
        const initialScore = gameMode.getScore();

        // Simulate a disconnect event
        gameMode.update(1000); // Let 1 second pass

        // Expect the score to be lower than the initial score
        expect(gameMode.getScore()).toBeLessThan(initialScore);
    });

    it('should have compromised connections periodically', () => {
        const network: NeuralNetwork = {
            regions: [],
            connections: [
                { id: '1', sourceRegion: {id: 'a', name: 'A', position: {x:0, y:0}}, targetRegion: {id: 'b', name: 'B', position: {x:1, y:1}}, status: 'stable' }
            ]
        };
        const gameMode = new PwP(network);

        // Simulate a long period of time
        for (let i = 0; i < 100; i++) {
            gameMode.update(100);
        }

        const finalNetwork = gameMode.getNetwork();
        const hasCompromisedConnection = finalNetwork.connections.some(c => c.status === 'compromised');
        expect(hasCompromisedConnection).toBe(true);
    });
});
