import { describe, it, expect, vi } from 'vitest';
import { Relative } from '../src/modes/relative';
import { NeuralNetwork } from '../src/models/types';
import { Renderer } from '../src/core/renderer';
import { glitchedEmitterConfig } from '../src/core/particleSystem';

describe('Relative', () => {
    it('should decrease the score when a connection is glitching', () => {
        const network: NeuralNetwork = {
            regions: [],
            connections: [
                { id: '1', sourceRegion: {id: 'a', name: 'A', position: {x:0, y:0}}, targetRegion: {id: 'b', name: 'B', position: {x:1, y:1}}, status: 'stable' }
            ]
        };
        const gameMode = new Relative(network);
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

        const mockColorRegistry = {
            compromised: 'red',
            glitching: 'orange',
            region: 'blue',
            setCompromisedColor: () => {},
            setGlitchedColor: () => {},
            setRegionColor: () => {},
        };
        // Manually set a glitch for testing
        gameMode.getNetwork().connections[0].status = 'glitching';
        gameMode.update(1000, mockRenderer, mockColorRegistry); // Let 1 second pass

        // Expect the score to be lower than the initial score
        expect(gameMode.getScore()).toBeLessThan(initialScore);
    });

    it('should have glitching connections periodically', () => {
        const network: NeuralNetwork = {
            regions: [],
            connections: [
                { id: '1', sourceRegion: {id: 'a', name: 'A', position: {x:0, y:0}}, targetRegion: {id: 'b', name: 'B', position: {x:1, y:1}}, status: 'stable' }
            ]
        };
        const gameMode = new Relative(network);

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
        const hasGlitchingConnection = finalNetwork.connections.some(c => c.status === 'glitching');
        expect(hasGlitchingConnection).toBe(true);
        expect(mockRenderer.particleSystem.addEmitter).toHaveBeenCalled();
    });
});
