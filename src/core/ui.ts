export class Button {
    constructor(
        public x: number,
        public y: number,
        public width: number,
        public height: number,
        public text: string
    ) {}

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = '#333';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.strokeRect(this.x, this.y, this.width, this.height);

        ctx.fillStyle = 'white';
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2 + 8);
    }

    public isClicked(x: number, y: number): boolean {
        return x > this.x && x < this.x + this.width && y > this.y && y < this.y + this.height;
    }
}

export class Label {
    constructor(
        public x: number,
        public y: number,
        public text: string,
        public font = '24px Arial',
        public color = 'white'
    ) {}

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.font = this.font;
        ctx.textAlign = 'center';
        ctx.fillText(this.text, this.x, this.y);
    }
}
