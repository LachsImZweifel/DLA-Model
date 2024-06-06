class Visuals {
    constructor(Grid) {
        this.canvas = document.getElementById("myCanvas");
        this.context = this.canvas.getContext("2d");
        this.grid = Grid;
        this.windowSizeFactorX = 1
    }

    setup() {

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.windowSizeFactorX = this.canvas.width/this.grid.gridWidth;
        this.windowSizeFactorY = this.canvas.height/this.grid.gridHeight;
    }

    draw() {
        this.context.fillStyle = "rgba(0, 0, 0, 1)";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        // Zeichne Kristallpartikel
        this.context.fillStyle = "rgb(0,224,255)";
        for (let crystal of this.grid.crystalParticles) {
            //let crystalColor = 1 / Math.sqrt((crystal.x - this.grid.gridWidth/2)**2 + (crystal.y - this.grid.gridHeight/2)**2);
            //this.context.fillStyle = "rgba(0, 0, 0, ${crystalColor})";
            this.context.fillRect(crystal.x * this.windowSizeFactorX, crystal.y * this.windowSizeFactorY,
                this.windowSizeFactorX, this.windowSizeFactorX);
        }

        // Zeichne normale Partikel
        this.context.fillStyle = "rgb(0,68,255)";
        for (let particle of this.grid.particles) {
            this.context.fillRect(particle.x * this.windowSizeFactorX, particle.y * this.windowSizeFactorY, this.windowSizeFactorX, this.windowSizeFactorX);
        }
    }
}
