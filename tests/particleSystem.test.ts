import { describe, it, expect, vi } from 'vitest';
import { ParticleSystem } from '../src/core/particleSystem';
import { Connection, BrainRegion } from '../src/models/types';

describe('ParticleSystem', () => {
    it('should add and remove emitters', () => {
        const ctx = { fillStyle: '', beginPath: vi.fn(), arc: vi.fn(), fill: vi.fn() } as any;
        const particleSystem = new ParticleSystem(ctx);
        const sourceRegion: BrainRegion = { id: 'a', name: 'A', position: { x: 0, y: 0 } };
        const targetRegion: BrainRegion = { id: 'b', name: 'B', position: { x: 1, y: 1 } };
        const connection: Connection = { id: 'a-b', sourceRegion, targetRegion, status: 'stable' };
        const config = { particleCount: 1, particleLifespan: 1, particleSize: 1, particleSpeed: 1, particleColor: 'red' };

        particleSystem.addEmitter(connection, config);
        expect((particleSystem as any).emitters.has('a-b')).toBe(true);

        particleSystem.removeEmitter(connection);
        expect((particleSystem as any).emitters.has('a-b')).toBe(false);
    });
});
