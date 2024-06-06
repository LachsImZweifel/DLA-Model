class Visuals {
    constructor() {
        this.setup();
    }

    setup() {
        this.canvas = document.getElementById('myCanvas');
        this.context = this.canvas.getContext('2d');
        var socket = io.connect('http://localhost:3000');
        socket.on('mouse', this.newDrawing.bind(this));
    }

    newDrawing(data) {
        console.log(data);
        this.context.fillRect(data.x, data.y, 20, 20);
    }
}

window.onload = function() {
    new Visuals();
}