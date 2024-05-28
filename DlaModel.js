class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.isCrystal = false;
    }

    //GETTER
    get x() {
        return this.x;
    }

    get y() {
        return this.y;
    }

    get isCrystal(){
        return this.isCrystal;
    }

    //SETTER
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
        this.movingParticles = [];
        this.crystalParticles = [];
        this.fields = Array.from({ length: 50 }, () => Array.from({ length: 50 }, () => 0)); // null anstatt 0?
    }

    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    initiateParticles(){
        let crystalParticle1 = new Particle(25,25);
        crystalParticle1.setIsCrystal = true;
        this.crystalParticles.push(crystalParticle1);
        this.fields[25][25] = crystalParticle1;

        for (let i = 0; i < 250; i++) {
            do{
                let xPos = randomInt(0,50);
                let yPos = randomInt(0,50);
            }while(!this.checkIfFree(xPos, yPos))

            let particle = new Particle (xPos, yPos);
            this.movingParticles.push(particle);
            this.fields[xPos][yPos] = particle;
        }
    }

    updateParticles(){
        this.movingParticles.forEach(particle => {
            do{
                let newXPos = particle.x + randomInt(-1, 1);
                let newYPos = particle.y + randomInt(-1, 1);
            }while(!this.checkIfFree(newXPos, newYPos));
            //move Particle
            this.fields[particle.x][particle.y] = 0;
            particle.setPosition(newXPos, newYPos);
            this.fields[particle.x][particle.y] = particle;
            //add to Crystal

            //delete Particle
            if(this.checkIfOutside(particle.x, particle.y)){
                this.deleteParticle(particle);
            }
        });
    }

    deleteParticle(particle){
        this.fields[particle.x][particle.y] = 0;
        this.movingParticles.deleteParticle(particle);
    }

    checkIfOutside(x, y){
        if(x == 0 || x == 50 || y == 0 || y == 50){
            return true
        }
        return false;
    }

    checkIfFree(x, y){
        if(this.fields[x, y] == 0){
            return true;
        }
        return false;
    }
}

class Visuals {
    constructor(){
       this.setup();
       this.draw();
    }

    setup(){
        this.canvas = document.getElementById("myCanvas");
        this.context = this.canvas.getContext("2d");
    }

    draw(){
        this.context.fillStyle = "#FF0000";
        this.context.ellipse
    }
}