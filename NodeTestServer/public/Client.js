class Client {
    constructor() {
        this.visuals = new Visuals();
        this.setup();
    }

    setup() {
        this.canvas = document.getElementById('myCanvas');
        this.context = this.canvas.getContext('2d');
        var socket = io.connect('http://localhost:3000');
        socket.on('DlaData', this.newDrawing.bind(this));
        socket.on('gridSizeData', data => this.visuals.setup(JSON.parse(data)));
    }

    newDrawing(data) {
        data = JSON.parse(data);
        console.log(data);
        this.visuals.draw(data.crystals, data.particles);
    }
}

window.onload = function() {
    new Client();
}