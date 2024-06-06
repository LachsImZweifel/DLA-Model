class Grid {
    constructor(canvasWidth, canvasHeight) {
        if (Grid.instance) {
            return Grid.instance;
        }
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.particleAmount = 100000;
        this.fields = Array.from({ length: canvasWidth }, () => Array.from({ length: canvasHeight}, () => 0));
        this.crystalParticles = [];
        this.particles = [];
        this.initializeParticles();
        Grid.instance = this;
    }

    initializeParticles() {
        let crystalParticle = new Particle(this.canvasWidth/2, this.canvasHeight/2);
        this.addCrystalParticle(crystalParticle);
        for (let i = 0; i < this.particleAmount; i++) {
            let xPos = this.randomInt(0, this.canvasWidth-1);
            let yPos = this.randomInt(0, this.canvasHeight-1);
            let particle = new Particle(xPos, yPos);
            this.particles.push(particle);
        }
    }

    updateParticles() {
        this.particles.forEach(particle => {
            let newXPos = particle.x + this.randomInt(-1, 1);
            let newYPos = particle.y + this.randomInt(-1, 1);

            // Ensure new positions are within bounds
            newXPos = Math.max(0, Math.min(newXPos, this.canvasWidth - 1));
            newYPos = Math.max(0, Math.min(newYPos, this.canvasHeight - 1));

            particle.x = newXPos;
            particle.y = newYPos;

            // Check if the particle is next to a crystal
            if (this.isNextToCrystal(particle.x, particle.y)) {
                this.addCrystalParticle(particle);
            }
        });
    }

    isNextToCrystal(x, y) {
        const directions = [
            [-1, 0], [1, 0], [0, -1], [0, 1],
            [-1, -1], [-1, 1], [1, -1], [1, 1]
        ];

        return directions.some(([dx, dy]) => {
            const nx = x + dx;
            const ny = y + dy;
            return nx >= 0 && nx < this.canvasWidth && ny >= 0 && ny < this.canvasHeight && this.fields[nx][ny] !== 0;
        });
    }

    addCrystalParticle(particle) {
        this.crystalParticles.push(particle);
        this.fields[Math.round(particle.x)][Math.round(particle.y)] = particle;
        const index = this.particles.indexOf(particle);
        if (index > -1) {
            this.particles.splice(index, 1);
        }
    }

    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}