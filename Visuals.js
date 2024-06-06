class Visuals {
    constructor(Grid) {
        this.canvas = document.getElementById("myCanvas");
        this.context = this.canvas.getContext("2d");
        this.grid = Grid;
    }

    setup() {
        this.canvas.width = this.grid.canvasWidth;
        this.canvas.height = this.grid.canvasHeight;
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // Canvas leeren

        // Zeichne Kristallpartikel
        this.context.fillStyle = "#FF0000";
        for (let crystal of this.grid.crystalParticles) {
            this.context.fillRect(crystal.x, crystal.y, 1, 1);
        }

        // Zeichne normale Partikel
        this.context.fillStyle = "#0000FF";
        for (let particle of this.grid.particles) {
            this.context.fillRect(particle.x, particle.y, 1, 1);
        }
    }
}
