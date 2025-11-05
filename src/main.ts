import { Renderer } from './core/renderer';
import { HealthyControl } from './modes/healthyControl';
import { PwP } from './modes/pwp';
import { Relative } from './modes/relative';
import { BrainRegion, Connection, GameMode, NeuralNetwork } from './models/types';
import { colorRegistry } from './core/colorRegistry';

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
    let gameMode: GameMode;

    // --- Game State ---
    const neuralNetwork: NeuralNetwork = {
        regions: [
            { id: 'v1', name: 'Visual Cortex', position: { x: 150, y: 200 } },
            { id: 'pfc', name: 'Prefrontal Cortex', position: { x: 400, y: 150 } },
            { id: 'hc', name: 'Hippocampus', position: { x: 300, y: 350 } },
        ],
        connections: [],
    };
    let selectedRegion: BrainRegion | null = null;
    let isDragging = false;
    let mousePos = { x: 0, y: 0 };
    // ------------------

    // --- Welcome Screen Buttons ---
    const buttons = {
        healthy: { x: canvas.width / 2 - 150, y: canvas.height / 2 - 25, width: 300, height: 50, text: 'Healthy Control' },
        pwp: { x: canvas.width / 2 - 150, y: canvas.height / 2 + 50, width: 300, height: 50, text: 'Person with Psychosis' },
        relative: { x: canvas.width / 2 - 150, y: canvas.height / 2 + 125, width: 300, height: 50, text: 'Relative' }
    };
    // ---------------------------

    // --- Color Pickers ---
    const compromisedColorPicker = document.createElement('input');
    compromisedColorPicker.type = 'color';
    compromisedColorPicker.value = colorRegistry.compromised;
    compromisedColorPicker.style.position = 'absolute';
    compromisedColorPicker.style.top = '20px';
    compromisedColorPicker.style.left = '20px';
    document.body.appendChild(compromisedColorPicker);

    const glitchedColorPicker = document.createElement('input');
    glitchedColorPicker.type = 'color';
    glitchedColorPicker.value = colorRegistry.glitching;
    glitchedColorPicker.style.position = 'absolute';
    glitchedColorPicker.style.top = '20px';
    glitchedColorPicker.style.left = '100px';
    document.body.appendChild(glitchedColorPicker);

    const regionColorPicker = document.createElement('input');
    regionColorPicker.type = 'color';
    regionColorPicker.value = colorRegistry.region;
    regionColorPicker.style.position = 'absolute';
    regionColorPicker.style.top = '20px';
    regionColorPicker.style.left = '180px';
    document.body.appendChild(regionColorPicker);

    compromisedColorPicker.addEventListener('input', (event) => {
        colorRegistry.setCompromisedColor((event.target as HTMLInputElement).value);
        drawWelcomeScreen();
    });

    glitchedColorPicker.addEventListener('input', (event) => {
        colorRegistry.setGlitchedColor((event.target as HTMLInputElement).value);
        drawWelcomeScreen();
    });

    regionColorPicker.addEventListener('input', (event) => {
        colorRegistry.setRegionColor((event.target as HTMLInputElement).value);
        drawWelcomeScreen();
    });
    // --------------------

    function drawWelcomeScreen() {
        ctx.fillStyle = '#1a1a1a'; // Dark background
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'white';
        ctx.font = '48px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Neural Connectivity Game', canvas.width / 2, canvas.height / 2 - 200);

        ctx.font = '18px Arial';
        ctx.fillText('The blue dots represent major brain regions. The lines are neural connections.', canvas.width / 2, canvas.height / 2 - 150);
        ctx.fillText('Your goal is to build and maintain a healthy network.', canvas.width / 2, canvas.height / 2 - 125);

        ctx.font = '16px Arial';
        ctx.fillStyle = '#ccc';
        ctx.fillText('Click and drag between nodes to form connections.', canvas.width / 2, canvas.height / 2 - 90);
        ctx.fillText('Click a red (compromised) or orange (glitching) connection to repair it.', canvas.width / 2, canvas.height / 2 - 65);


        // Buttons
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.font = '24px Arial';

        ctx.strokeRect(buttons.healthy.x, buttons.healthy.y, buttons.healthy.width, buttons.healthy.height);
        ctx.fillText(buttons.healthy.text, canvas.width / 2, buttons.healthy.y + 32);

        ctx.strokeRect(buttons.pwp.x, buttons.pwp.y, buttons.pwp.width, buttons.pwp.height);
        ctx.fillText(buttons.pwp.text, canvas.width / 2, buttons.pwp.y + 32);

        ctx.strokeRect(buttons.relative.x, buttons.relative.y, buttons.relative.width, buttons.relative.height);
        ctx.fillText(buttons.relative.text, canvas.width / 2, buttons.relative.y + 32);
    }

    function hideColorPickers() {
        compromisedColorPicker.style.display = 'none';
        glitchedColorPicker.style.display = 'none';
        regionColorPicker.style.display = 'none';
    }

    canvas.addEventListener('click', (event) => {
        if (gameState === 'welcome') {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            if (mouseX > buttons.healthy.x && mouseX < buttons.healthy.x + buttons.healthy.width &&
                mouseY > buttons.healthy.y && mouseY < buttons.healthy.y + buttons.healthy.height) {
                gameMode = new HealthyControl(neuralNetwork);
                gameState = 'playing';
                hideColorPickers();
            } else if (mouseX > buttons.pwp.x && mouseX < buttons.pwp.x + buttons.pwp.width &&
                       mouseY > buttons.pwp.y && mouseY < buttons.pwp.y + buttons.pwp.height) {
                gameMode = new PwP(neuralNetwork);
                gameState = 'playing';
                hideColorPickers();
            } else if (mouseX > buttons.relative.x && mouseX < buttons.relative.x + buttons.relative.width &&
                       mouseY > buttons.relative.y && mouseY < buttons.relative.y + buttons.relative.height) {
                gameMode = new Relative(neuralNetwork);
                gameState = 'playing';
                hideColorPickers();
            }
        } else if (gameState === 'playing') {
            // Restore connection logic
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            for (const connection of neuralNetwork.connections) {
                if (connection.status === 'compromised' || connection.status === 'glitching') {
                    const { sourceRegion, targetRegion } = connection;
                    const dx = targetRegion.position.x - sourceRegion.position.x;
                    const dy = targetRegion.position.y - sourceRegion.position.y;
                    const lenSq = dx * dx + dy * dy;
                    const t = Math.max(0, Math.min(1, ((mouseX - sourceRegion.position.x) * dx + (mouseY - sourceRegion.position.y) * dy) / lenSq));
                    const closestX = sourceRegion.position.x + t * dx;
                    const closestY = sourceRegion.position.y + t * dy;
                    const dist = Math.sqrt((mouseX - closestX) ** 2 + (mouseY - closestY) ** 2);

                    if (dist < 10) { // 10px tolerance
                        if (connection.status === 'compromised' || connection.status === 'glitching') {
                            renderer.particleSystem.removeEmitter(connection);
                        }
                        connection.status = 'stable';
                        break;
                    }
                }
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
            gameMode.update(deltaTime, renderer, colorRegistry);

            renderer.particleSystem.update(deltaTime);

            renderer.draw([...neuralNetwork.regions, ...neuralNetwork.connections]);
            renderer.particleSystem.draw();

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