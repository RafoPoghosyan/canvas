
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");


let data = {
    x:10,
    y:10,
    width:50,
    height:50,
    fillStyle:"red"
}

let xDelta = 2;
let yDelta = 2;

const update = () => {
    if (data.x + data.width > canvas.width || data.x < 0) {
        xDelta *= -1;
    }
    if (data.y + data.height > canvas.height || data.y < 0) {
        yDelta *= -1;
    }
    data.x += xDelta;
    data.y += yDelta;
}
const draw = () => {
    context.clearRect(0,0, canvas.width, canvas.height);
    context.fillStyle = data.fillStyle;
    context.fillRect(data.x, data.y, data.width, data.height);
}



const loop = () => {
    requestAnimationFrame(loop);

    update();
    draw();

}

loop()