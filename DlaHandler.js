

class DlaHandler {
    constructor() {
        this.Grid = new Grid;
        this.Visuals = new Visuals;
        this.setup();
        this.draw()
    }

    setup() {
        this.Grid.initializeParticles();
        this.Visuals.setup();
    }
    draw() {
        this.Grid.updateParticles();
        this.Visuals.draw();
    }
}