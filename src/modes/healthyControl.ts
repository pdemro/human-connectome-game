import { GameMode, NeuralNetwork } from "../models/types";
import { Renderer } from "../core/renderer";

export class HealthyControl implements GameMode {
    private score = 0;

    constructor(private network: NeuralNetwork) {}

    public getNetwork(): NeuralNetwork {
        return this.network;
    }

    public getScore(): number {
        return this.score;
    }

    public update(deltaTime: number, renderer: Renderer) {
        // In Healthy Control mode, the score simply increases over time.
        this.score += deltaTime / 1000; // 1 point per second
    }
}
