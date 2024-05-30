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
    constructor(){
        this.crystalParticles = [];
        this.initializeParticles();
    }

    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    updateParticles(){

    }

    initializeParticles(){
        this.addCrystalPartical(75, 75);
        for (let i = 0; i < 100; i++) {
            let xPos = this.randomInt(0, 200);
            let yPos = this.randomInt(0, 200);
        }
    }

    addCrystalPartical(x,y){
        let crystalParticle = new Particle(x,y);
        crystalParticle.setIsCrystal(true);
        this.crystalParticles.push(crystalParticle);
    }
}

class Visuals {
    constructor(){
        this.grid = new Grid();
        this.setup();
        this.draw();
    }

    setup(){
        this.canvas = document.getElementById("myCanvas");
        this.context = this.canvas.getContext("2d");
    }

    draw(){
        this.context.fillStyle = "#FF0000";
        console.log(this.grid.crystalParticles);
        let xPos = this.grid.crystalParticles[0].x;
        let yPos = this.grid.crystalParticles[0].x;

        this.context.fillRect(xPos, yPos,10,10);
    }
}