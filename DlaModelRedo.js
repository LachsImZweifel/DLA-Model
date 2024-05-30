class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.isCrystal = false;
    }

    setPosition (x, y){
        this.x = x;
        this.y = y;
    }

    setIsCrystal (isCrystal){
        this.isCrystal = isCrystal;
    }
    updatePosition() {
        // zufällige Verschiebung um -1 bis 1 auf x- und y-Achse
        this.x += Math.random() * 2 - 1;
        this.y += Math.random() * 2 - 1;
    }
}
class Grid {
    constructor() {
        this.crystalParticles = [];
        this.particles = [];
        this.initializeParticles();
    }

    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    updateParticles() {
        for (let particle of this.particles) {
            particle.updatePosition();
        }
    }

    initializeParticles() {
        this.addCrystalPartical(75, 75);
        for (let i = 0; i < 100; i++) {
            let xPos = this.randomInt(0, 200);
            let yPos = this.randomInt(0, 200);
            let particle = new Particle(xPos, yPos);
            this.particles.push(particle);
        }
    }

    addCrystalPartical(x, y) {
        let crystalParticle = new Particle(x, y);
        crystalParticle.setIsCrystal(true);
        this.crystalParticles.push(crystalParticle);
    }
}

class Visuals {
    constructor() {
        this.grid = new Grid();
        this.setup();
        this.startVisualization();
    }

    setup() {
        this.canvas = document.getElementById("myCanvas");
        this.context = this.canvas.getContext("2d");
    }

    startVisualization() { //aktualisiert die Partikelbewegeung
        setInterval(() => {
            this.draw();
        }, 100);
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // Canvas leeren

        // Update Partikelpositionen
        this.grid.updateParticles();

        // Zeichne Kristallpartikel
        this.context.fillStyle = "#FF0000";
        for (let crystal of this.grid.crystalParticles) {
            this.context.fillRect(crystal.x, crystal.y, 10, 10);
        }

        // Zeichne alle Partikel
        this.context.fillStyle = "#0000FF"; // Blaue Farbe für normale Partikel
        for (let particle of this.grid.particles) {
            this.context.fillRect(particle.x, particle.y, 10, 10);
        }
    }


}