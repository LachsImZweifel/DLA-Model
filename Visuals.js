class Visuals {
    constructor(Grid) {
        this.canvas = document.getElementById("myCanvas");
        this.context = this.canvas.getContext("2d");
        this.grid = Grid;
        this.windowSizeFactor = 1
    }

    setup() {

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.windowSizeFactor = this.canvas.width/this.grid.gridWidth;
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // Canvas leeren

        // Zeichne Kristallpartikel
        this.context.fillStyle = "#FF0000";
        for (let crystal of this.grid.crystalParticles) {
            this.context.fillRect(crystal.x * this.windowSizeFactor, crystal.y * this.windowSizeFactor,
                this.windowSizeFactor, this.windowSizeFactor);
        }

        // Zeichne normale Partikel
        this.context.fillStyle = "#0000FF";
        for (let particle of this.grid.particles) {
            this.context.fillRect(particle.x * this.windowSizeFactor, particle.y * this.windowSizeFactor, this.windowSizeFactor, this.windowSizeFactor);
        }
    }
}
