import { Connection } from "../models/types";

interface Particle {
    position: { x: number; y: number };
    velocity: { x: number; y: number };
    size: number;
    color: string;
    lifespan: number;
}

interface ParticleEmitterConfig {
    particleCount: number;
    particleLifespan: number;
    particleSize: number;
    particleSpeed: number;
    particleColor: string;
}

class ParticleEmitter {
    public particles: Particle[] = [];

    constructor(public connection: Connection, private config: ParticleEmitterConfig) {
        this.createParticles();
    }

    private createParticles() {
        for (let i = 0; i < this.config.particleCount; i++) {
            this.particles.push(this.createParticle());
        }
    }

    private createParticle(): Particle {
        const t = Math.random();
        const start = this.connection.sourceRegion.position;
        const end = this.connection.targetRegion.position;
        const position = {
            x: start.x + t * (end.x - start.x),
            y: start.y + t * (end.y - start.y),
        };

        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * this.config.particleSpeed;
        return {
            position,
            velocity: { x: Math.cos(angle) * speed, y: Math.sin(angle) * speed },
            size: Math.random() * this.config.particleSize,
            color: this.config.particleColor,
            lifespan: Math.random() * this.config.particleLifespan,
        };
    }

    public update(deltaTime: number) {
        this.particles.forEach((p, index) => {
            p.lifespan -= deltaTime;
            if (p.lifespan <= 0) {
                this.particles[index] = this.createParticle();
            } else {
                p.position.x += p.velocity.x * (deltaTime / 1000);
                p.position.y += p.velocity.y * (deltaTime / 1000);
            }
        });
    }
}

export const compromisedEmitterConfig: ParticleEmitterConfig = {
    particleCount: 100,
    particleLifespan: 1000,
    particleSize: 20,
    particleSpeed: 1,
    particleColor: 'red',
};

export const glitchedEmitterConfig: ParticleEmitterConfig = {
    particleCount: 50,
    particleLifespan: 500,
    particleSize: 30,
    particleSpeed: 2,
    particleColor: 'orange',
};

export class ParticleSystem {
    private emitters: Map<string, ParticleEmitter> = new Map();

    constructor(private ctx: CanvasRenderingContext2D) {}

    public addEmitter(connection: Connection, config: ParticleEmitterConfig) {
        this.emitters.set(connection.id, new ParticleEmitter(connection, config));
    }

    public removeEmitter(connection: Connection) {
        this.emitters.delete(connection.id);
    }

    public update(deltaTime: number) {
        this.emitters.forEach(emitter => emitter.update(deltaTime));
    }

    public draw() {
        this.emitters.forEach(emitter => {
            emitter.particles.forEach(p => {
                this.ctx.fillStyle = p.color;
                this.ctx.beginPath();
                this.ctx.arc(p.position.x, p.position.y, p.size, 0, Math.PI * 2);
                this.ctx.fill();
            });
        });
    }
}
