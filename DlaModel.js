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
        this.fields = fields[50][50];
    }

    initiateParticles(){
        for (let i = 0; i < 250; i++) {
            let xPos = random(0,50);
            let yPos = random(0,50);
            this.fields[xPos][yPos].push(new Particle(xPos, yPos));
        }
    }

    updateParticles(){
        this.fields.forEach(element => {
            
        });
    }
}