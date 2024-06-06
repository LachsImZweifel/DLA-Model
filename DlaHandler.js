class DlaHandler {
    constructor() {
        this.grid = new Grid;
        this.visuals = new Visuals(this.grid);
        this.setup();
        this.draw();
    }

    setup() {
        this.grid.initializeParticles();
        this.visuals.setup();
    }
    draw() {
        setInterval(() => {
            this.grid.updateParticles();
            this.visuals.draw();
        }, 10); // refresh every 10ms
    }
}