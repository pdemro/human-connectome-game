import { NeuralNetwork } from "../models/types";

export class HealthyControl {
    private score = 0;

    constructor(private network: NeuralNetwork) {}

    public getNetwork(): NeuralNetwork {
        return this.network;
    }

    public getScore(): number {
        return this.score;
    }

    public update(deltaTime: number) {
        // In Healthy Control mode, the score simply increases over time.
        this.score += deltaTime / 1000; // 1 point per second
    }
}
