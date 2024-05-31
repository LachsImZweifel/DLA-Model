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
}
class Grid {
    constructor() {
        this.fields = Array.from({ length: 200 }, () => Array.from({ length: 200}, () => 0));
        this.crystalParticles = [];
        this.particles = [];
        this.initializeParticles();
    }

    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min+1)) + min;
    }

    updateParticles() {
       this.particles.forEach(particle => {
           let newXPos = particle.x += this.randomInt(-1, 1);
           let newYPos = particle.y += this.randomInt(-1, 1);
           if(true){
               particle.x = newXPos;
               particle.y = newYPos;
           }else{
               this.addCrystalParticle(particle);
           }
           this.deleteIfOutside(particle);
       })

    }

    deleteIfOutside(particle) {
        if (particle.x < 0 || particle.x >= 200 || particle.y < 0 || particle.y >= 200) {
            const index = this.particles.indexOf(particle);
            if (index > -1) {
                this.particles.splice(index, 1);
                console.log("Particle deleted");
            }
}
    }
    checkIfFree(x, y){
        return this.fields[x][y] === 0;
    }

    initializeParticles() {
        let crystalParticle = new Particle(75, 75);
        this.addCrystalParticle(crystalParticle);
        for (let i = 0; i < 100; i++) {
            let xPos = this.randomInt(0, 200);
            let yPos = this.randomInt(0, 200);
            let particle = new Particle(xPos, yPos);
            this.particles.push(particle);
        }
    }

    addCrystalParticle(particle) {
        particle.setIsCrystal(true);
        this.crystalParticles.push(particle);
        this.fields[particle.x][particle.y] = particle;
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
            this.context.fillRect(crystal.x, crystal.y, 1, 1);
        }

        // Zeichne alle Partikel
        this.context.fillStyle = "#0000FF"; // Blaue Farbe für normale Partikel
        for (let particle of this.grid.particles) {
            this.context.fillRect(particle.x, particle.y, 1, 1);
        }
    }
}