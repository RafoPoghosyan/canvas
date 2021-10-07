const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");


let data = {
    yDelta:0,
    xDelta:0,
    x:10,
    y:10,
    width:50,
    height:50

}


const update = () => {

    data.x += data.xDelta;
    data.y += data.yDelta;

}
const draw = () => {

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillRect(data.x, data.y, data.width, data.height);

}



const loop = () => {
    requestAnimationFrame(loop);

    update();
    draw();

}

loop();

document.addEventListener("keydown", (evt) => {
    if (evt.code === "ArrowRight") {
        data.xDelta = 1;
    }  else if (evt.code === "ArrowLeft") {
        data.xDelta = -1;
    } else if (evt.code === "ArrowUp") {
        data.yDelta = -1;
    } else if (evt.code === "ArrowDown") {
        data.yDelta = 1;
    }
});

document.addEventListener("keyup", (evt) => {
    data.xDelta = 0;
    data.yDelta = 0;

})