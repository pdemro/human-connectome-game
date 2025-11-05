import { describe, it, expect } from 'vitest';
import { Button, Label } from '../src/core/ui';

describe('Button', () => {
    const button = new Button(10, 20, 100, 50, 'Test');

    it('should correctly identify a click within its bounds', () => {
        expect(button.isClicked(50, 40)).toBe(true);
    });

    it('should correctly identify a click outside its bounds', () => {
        expect(button.isClicked(5, 5)).toBe(false);
        expect(button.isClicked(120, 80)).toBe(false);
    });

    it('should correctly identify a click on its edge', () => {
        expect(button.isClicked(10, 20)).toBe(false); // Top-left corner is exclusive
        expect(button.isClicked(110, 70)).toBe(false); // Bottom-right corner is exclusive
    });
});

describe('Label', () => {
    it('should be created with the correct properties', () => {
        const label = new Label(50, 60, 'Hello', '16px Arial', 'red');
        expect(label.x).toBe(50);
        expect(label.y).toBe(60);
        expect(label.text).toBe('Hello');
        expect(label.font).toBe('16px Arial');
        expect(label.color).toBe('red');
    });
});
