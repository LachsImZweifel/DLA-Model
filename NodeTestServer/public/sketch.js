
class Visuals {
    constructor() {
        var socket;
        setup();
    }

    setup() {
        this.canvas = document.getElementById('myCanvas');
        this.context = this.canvas.getContext('2d');
        socket = io.connect('http://localhost:3000');
        socket.on('mouse', newDrawing);
    }

    newDrawing(data) {
        this.context.fillRect(data.x, data.y, 20, 20);
    }
}