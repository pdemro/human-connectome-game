import { Renderer } from './core/renderer';
import { HealthyControl } from './modes/healthyControl';
import { BrainRegion, Connection, NeuralNetwork } from './models/types';

function main() {
    const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
    if (!canvas) {
        console.error("Fatal: Canvas element with id 'gameCanvas' not found.");
        return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error("Fatal: Could not get 2D rendering context.");
        return;
    }

    const renderer = new Renderer(ctx);

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    let gameState: 'welcome' | 'playing' = 'welcome';

    // --- Game State ---
    const neuralNetwork: NeuralNetwork = {
        regions: [
            { id: 'v1', name: 'Visual Cortex', position: { x: 150, y: 200 } },
            { id: 'pfc', name: 'Prefrontal Cortex', position: { x: 400, y: 150 } },
            { id: 'hc', name: 'Hippocampus', position: { x: 300, y: 350 } },
        ],
        connections: [],
    };
    const gameMode = new HealthyControl(neuralNetwork);
    let selectedRegion: BrainRegion | null = null;
    let isDragging = false;
    let mousePos = { x: 0, y: 0 };
    // ------------------

    // --- Welcome Screen Button ---
    const healthyControlButton = {
        x: canvas.width / 2 - 150,
        y: canvas.height / 2 - 25,
        width: 300,
        height: 50,
        text: 'Healthy Control'
    };
    // ---------------------------

    function drawWelcomeScreen() {
        ctx.fillStyle = '#1a1a1a'; // Dark background
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'white';
        ctx.font = '48px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Neural Connectivity Game', canvas.width / 2, canvas.height / 2 - 100);

        // Healthy Control Button
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.strokeRect(healthyControlButton.x, healthyControlButton.y, healthyControlButton.width, healthyControlButton.height);
        ctx.font = '24px Arial';
        ctx.fillText(healthyControlButton.text, canvas.width / 2, canvas.height / 2 + 8);

        ctx.fillStyle = '#888';
        ctx.font = '20px Arial';
        ctx.fillText('Person with Psychosis (Coming Soon!)', canvas.width / 2, canvas.height / 2 + 80);
        ctx.fillText('Relative (Coming Soon!)', canvas.width / 2, canvas.height / 2 + 120);
    }

    canvas.addEventListener('click', (event) => {
        if (gameState === 'welcome') {
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            if (
                mouseX > healthyControlButton.x &&
                mouseX < healthyControlButton.x + healthyControlButton.width &&
                mouseY > healthyControlButton.y &&
                mouseY < healthyControlButton.y + healthyControlButton.height
            ) {
                gameState = 'playing';
            }
        }
    });

    canvas.addEventListener('mousedown', (event) => {
        if (gameState !== 'playing') return;
        mousePos = { x: event.clientX, y: event.clientY };
        for (const region of neuralNetwork.regions) {
            const dx = region.position.x - mousePos.x;
            const dy = region.position.y - mousePos.y;
            if (Math.sqrt(dx * dx + dy * dy) < 20) {
                selectedRegion = region;
                isDragging = true;
                break;
            }
        }
    });

    canvas.addEventListener('mousemove', (event) => {
        if (gameState !== 'playing') return;
        mousePos = { x: event.clientX, y: event.clientY };
    });

    canvas.addEventListener('mouseup', (event) => {
        if (gameState !== 'playing') return;
        if (isDragging && selectedRegion) {
            mousePos = { x: event.clientX, y: event.clientY };
            let targetRegion: BrainRegion | null = null;
            for (const region of neuralNetwork.regions) {
                const dx = region.position.x - mousePos.x;
                const dy = region.position.y - mousePos.y;
                if (Math.sqrt(dx * dx + dy * dy) < 20) {
                    targetRegion = region;
                    break;
                }
            }

            if (targetRegion && targetRegion.id !== selectedRegion.id) {
                const newConnection: Connection = {
                    id: `${selectedRegion.id}-${targetRegion.id}`,
                    sourceRegion: selectedRegion,
                    targetRegion: targetRegion,
                    status: 'stable'
                };
                neuralNetwork.connections.push(newConnection);
            }
        }
        isDragging = false;
        selectedRegion = null;
    });

    let lastTime = 0;
    function gameLoop(timestamp: number) {
        if (lastTime === 0) {
            lastTime = timestamp;
        }
        const deltaTime = timestamp - lastTime;
        lastTime = timestamp;

        ctx.fillStyle = '#1a1a1a'; // Dark background
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (gameState === 'welcome') {
            drawWelcomeScreen();
        } else if (gameState === 'playing') {
            gameMode.update(deltaTime);

            renderer.draw([...neuralNetwork.regions, ...neuralNetwork.connections]);

            if (isDragging && selectedRegion) {
                ctx.strokeStyle = 'yellow';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(selectedRegion.position.x, selectedRegion.position.y);
                ctx.lineTo(mousePos.x, mousePos.y);
                ctx.stroke();
            }

            ctx.fillStyle = 'white';
            ctx.font = '24px Arial';
            ctx.textAlign = 'left';
            ctx.fillText(`Score: ${Math.floor(gameMode.getScore())}`, 20, 40);
        }

        requestAnimationFrame(gameLoop);
    }

    requestAnimationFrame(gameLoop);
}

window.addEventListener('DOMContentLoaded', main);
