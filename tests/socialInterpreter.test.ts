import { describe, it, expect, vi } from 'vitest';
import { SocialInterpreter } from '../src/modes/socialInterpreter/socialInterpreter';
import { InteractionType } from '../src/modes/socialInterpreter/types';
import * as animations from '../src/modes/socialInterpreter/animations';

// Mock the canvas element
const mockCanvas = {
    width: 800,
    height: 600,
} as HTMLCanvasElement;

describe('SocialInterpreter', () => {
    it('should initialize with a score of 0 and start the first animation', () => {
        const game = new SocialInterpreter(mockCanvas);
        expect(game.getScore()).toBe(0);
        expect((game as any).currentAnimation).not.toBeNull();
    });

    it('should increase the score for a correct answer', () => {
        const game = new SocialInterpreter(mockCanvas);
        const correctInteraction = (game as any).currentAnimation.correctInteraction;
        
        // Find the button with the correct answer
        const correctButton = (game as any).choiceButtons.find(b => b.text === correctInteraction);

        // Simulate being in the feedback state
        (game as any).gameState = 'feedback';
        
        game.handleInput(correctButton.x + 1, correctButton.y + 1);
        expect(game.getScore()).toBe(1);
    });

    it('should not increase the score for an incorrect answer', () => {
        const game = new SocialInterpreter(mockCanvas);
        const correctInteraction = (game as any).currentAnimation.correctInteraction;
        
        // Find a button with an incorrect answer
        const incorrectButton = (game as any).choiceButtons.find(b => b.text !== correctInteraction);

        // Simulate being in the feedback state
        (game as any).gameState = 'feedback';

        game.handleInput(incorrectButton.x + 1, incorrectButton.y + 1);
        expect(game.getScore()).toBe(0);
    });

    it('should move to the next animation after an answer is given', () => {
        const game = new SocialInterpreter(mockCanvas);
        const firstAnimationId = (game as any).currentAnimation.id;

        // Simulate being in the feedback state
        (game as any).gameState = 'feedback';
        
        // Click any button
        const anyButton = (game as any).choiceButtons[0];
        game.handleInput(anyButton.x + 1, anyButton.y + 1);

        // If there's more than one animation, the new one should be different
        if (animations.animations.length > 1) {
            expect((game as any).currentAnimation.id).not.toBe(firstAnimationId);
        } else {
            expect((game as any).currentAnimation.id).toBe(firstAnimationId);
        }
    });

    it('should return true from handleInput when the exit button is clicked', () => {
        const game = new SocialInterpreter(mockCanvas);
        const exitButton = (game as any).exitButton;
        const result = game.handleInput(exitButton.x + 1, exitButton.y + 1);
        expect(result).toBe(true);
    });
});
