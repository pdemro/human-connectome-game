import { GameMode, NeuralNetwork } from "../models/types";

export class Relative implements GameMode {
    private score = 100;

    constructor(private network: NeuralNetwork) {}

    public getNetwork(): NeuralNetwork {
        return this.network;
    }

    public getScore(): number {
        return this.score;
    }

    public update(deltaTime: number) {
        const glitchingCount = this.network.connections.filter(c => c.status === 'glitching').length;
        const stableCount = this.network.connections.filter(c => c.status === 'stable').length;

        // Score decreases for glitches, but increases for stable connections
        this.score += (stableCount * deltaTime) / 1000; // 1 point per second for stable
        this.score -= (glitchingCount * 0.5 * deltaTime) / 1000; // 0.5 point penalty for glitching

        // Simulate random glitches (more frequent than PwP)
        if (Math.random() < 0.05) { // Higher chance for events
            const stableConnections = this.network.connections.filter(c => c.status === 'stable');
            if (stableConnections.length > 0) {
                const randomIndex = Math.floor(Math.random() * stableConnections.length);
                stableConnections[randomIndex].status = 'glitching';
            }
        }
    }
}
