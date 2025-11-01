import { GameMode, NeuralNetwork } from "../models/types";

export class PwP implements GameMode {
    private score = 100; // Start with a higher score that will decrease

    constructor(private network: NeuralNetwork) {}

    public getNetwork(): NeuralNetwork {
        return this.network;
    }

    public getScore(): number {
        return this.score;
    }

    public update(deltaTime: number) {
        // For now, just decrease the score to make the first test pass
        // The event simulation will be implemented next.
        const compromisedCount = this.network.connections.filter(c => c.status === 'compromised').length;
        
        if (compromisedCount > 0) {
            this.score -= (compromisedCount * deltaTime) / 1000;
        }

        // Simulate random events
        if (Math.random() < 0.01) { // Small chance each frame to create an event
            const stableConnections = this.network.connections.filter(c => c.status === 'stable');
            if (stableConnections.length > 0) {
                const randomIndex = Math.floor(Math.random() * stableConnections.length);
                stableConnections[randomIndex].status = 'compromised';
            }
        }
    }
}
