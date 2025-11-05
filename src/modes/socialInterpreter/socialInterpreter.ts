import { Renderer } from "../../core/renderer";
import { ColorRegistry } from "../../core/colorRegistry";
import { animations } from "./animations";
import { AnimationScene, InteractionType } from "./types";
import { Button } from "../../core/ui";

export class SocialInterpreter {
    private score = 0;
    private currentAnimation: AnimationScene | null = null;
    private animationTime = 0;
    private gameState: 'playing' | 'feedback' = 'playing';

    private choiceButtons: Button[] = [];
    private exitButton: Button;

    constructor(canvas: HTMLCanvasElement) {
        this.choiceButtons = [
            new Button(canvas.width / 2 - 450, canvas.height - 100, 300, 50, InteractionType.GoalDirected),
            new Button(canvas.width / 2 - 150, canvas.height - 100, 300, 50, InteractionType.Interacting),
            new Button(canvas.width / 2 + 150, canvas.height - 100, 300, 50, InteractionType.Random),
        ];
        this.exitButton = new Button(canvas.width - 120, 20, 100, 40, "Exit");
        this.nextAnimation();
    }

    private nextAnimation() {
        this.currentAnimation = animations[Math.floor(Math.random() * animations.length)];
        this.animationTime = 0;
        this.gameState = 'playing';
    }

    public update(deltaTime: number, renderer: Renderer, colorRegistry: ColorRegistry) {
        const ctx = (renderer as any).ctx;
        this.animationTime += deltaTime;

        if (this.currentAnimation) {
            if (this.animationTime > this.currentAnimation.duration) {
                this.gameState = 'feedback';
            }

            if (this.gameState === 'playing') {
                // Draw animation
                const ctx = (renderer as any).ctx;
                for (const shape of this.currentAnimation.shapes) {
                    // --- Animation Interpolation Logic ---
                    // Find the current and next keyframes based on the current animation time
                    let currentKeyframe = shape.keyframes[0];
                    let nextKeyframe = shape.keyframes[0];
                    for (let i = 0; i < shape.keyframes.length; i++) {
                        if (shape.keyframes[i].timestamp <= this.animationTime) {
                            currentKeyframe = shape.keyframes[i];
                            if (i < shape.keyframes.length - 1) {
                                nextKeyframe = shape.keyframes[i + 1];
                            } else {
                                // If it's the last keyframe, stay on it
                                nextKeyframe = currentKeyframe;
                            }
                        }
                    }

                    // Calculate the interpolation factor (t) between the two keyframes
                    const t = (this.animationTime - currentKeyframe.timestamp) / (nextKeyframe.timestamp - currentKeyframe.timestamp);

                    // Interpolate position
                    const x = currentKeyframe.position.x + (nextKeyframe.position.x - currentKeyframe.position.x) * t;
                    const y = currentKeyframe.position.y + (nextKeyframe.position.y - currentKeyframe.position.y) * t;

                    // Draw the shape (simple circle for now)
                    ctx.fillStyle = 'white';
                    ctx.beginPath();
                    ctx.arc(x, y, 20, 0, Math.PI * 2);
                    ctx.fill();
                }
            } else if (this.gameState === 'feedback') {
                // Draw choices
                for (const button of this.choiceButtons) {
                    button.draw(ctx);
                }
            }
            this.exitButton.draw(ctx);
        }
    }

    public handleInput(x: number, y: number): boolean { // Returns true if exit
        if (this.exitButton.isClicked(x, y)) {
            return true;
        }

        if (this.gameState === 'feedback' && this.currentAnimation) {
            for (const button of this.choiceButtons) {
                if (button.isClicked(x, y)) {
                    if (button.text === this.currentAnimation.correctInteraction) {
                        this.score++;
                    }
                    this.nextAnimation();
                    break;
                }
            }
        }
        return false;
    }

    public getScore(): number {
        return this.score;
    }
}
