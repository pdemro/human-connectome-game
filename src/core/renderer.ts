import { BrainRegion, Connection } from "../models/types";
import { ParticleSystem } from "./particleSystem";
import { colorRegistry } from "./colorRegistry";

export class Renderer {
    public particleSystem: ParticleSystem;

    constructor(private ctx: CanvasRenderingContext2D) {
        this.particleSystem = new ParticleSystem(ctx);
    }

    public draw(entities: (BrainRegion | Connection)[]) {
        for (const entity of entities) {
            if ('position' in entity) {
                this.drawBrainRegion(entity);
            } else {
                this.drawConnection(entity);
            }
        }
    }

    private drawBrainRegion(region: BrainRegion) {
        this.ctx.fillStyle = colorRegistry.region;
        this.ctx.beginPath();
        this.ctx.arc(region.position.x, region.position.y, 20, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.fillStyle = 'white';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(region.name, region.position.x, region.position.y);
    }

    private drawConnection(connection: Connection) {
        switch (connection.status) {
            case 'compromised':
                this.ctx.strokeStyle = colorRegistry.compromised;
                this.ctx.lineWidth = 4;
                break;
            case 'glitching':
                this.ctx.strokeStyle = colorRegistry.glitching;
                this.ctx.lineWidth = 2;
                break;
            case 'stable':
            default:
                this.ctx.strokeStyle = 'white';
                this.ctx.lineWidth = 2;
                break;
        }

        this.ctx.beginPath();
        this.ctx.moveTo(connection.sourceRegion.position.x, connection.sourceRegion.position.y);
        this.ctx.lineTo(connection.targetRegion.position.x, connection.targetRegion.position.y);
        this.ctx.stroke();
    }
}
