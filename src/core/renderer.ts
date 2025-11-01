import { BrainRegion, Connection } from "../models/types";

export class Renderer {
    constructor(private ctx: CanvasRenderingContext2D) {}

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
        this.ctx.fillStyle = 'blue';
        this.ctx.beginPath();
        this.ctx.arc(region.position.x, region.position.y, 20, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.fillStyle = 'white';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(region.name, region.position.x, region.position.y);
    }

    private drawConnection(connection: Connection) {
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(connection.sourceRegion.position.x, connection.sourceRegion.position.y);
        this.ctx.lineTo(connection.targetRegion.position.x, connection.targetRegion.position.y);
        this.ctx.stroke();
    }
}
