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