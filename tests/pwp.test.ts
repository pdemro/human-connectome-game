import { describe, it, expect, vi } from 'vitest';
import { PwP } from '../src/modes/pwp';
import { NeuralNetwork } from '../src/models/types';
import { Renderer } from '../src/core/renderer';
import { compromisedEmitterConfig } from '../src/core/particleSystem';

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

        // Mock renderer for the update method
        const mockRenderer = {
            particleSystem: {
                addEmitter: vi.fn(),
                removeEmitter: vi.fn(),
                update: vi.fn(),
                draw: vi.fn(),
            },
        } as unknown as Renderer;

        // Simulate a compromised connection
        network.connections[0].status = 'compromised';

        const mockColorRegistry = {
            compromised: 'red',
            glitching: 'orange',
            region: 'blue',
            setCompromisedColor: () => {},
            setGlitchedColor: () => {},
            setRegionColor: () => {},
        };
        gameMode.update(1000, mockRenderer, mockColorRegistry); // Let 1 second pass

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

        // Mock renderer for the update method
        const mockRenderer = {
            particleSystem: {
                addEmitter: vi.fn(),
                removeEmitter: vi.fn(),
                update: vi.fn(),
                draw: vi.fn(),
            },
        } as unknown as Renderer;

        const mockColorRegistry = {
            compromised: 'red',
            glitching: 'orange',
            region: 'blue',
            setCompromisedColor: () => {},
            setGlitchedColor: () => {},
            setRegionColor: () => {},
        };
        // Simulate a long period of time
        for (let i = 0; i < 100; i++) {
            gameMode.update(100, mockRenderer, mockColorRegistry);
        }

        const finalNetwork = gameMode.getNetwork();
        const hasCompromisedConnection = finalNetwork.connections.some(c => c.status === 'compromised');
        expect(hasCompromisedConnection).toBe(true);
        expect(mockRenderer.particleSystem.addEmitter).toHaveBeenCalled();
    });
});
