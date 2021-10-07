const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const backgroundImg = document.createElement("img");
backgroundImg.src = "https://p4.wallpaperbetter.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg";

const heroImg = document.createElement("img");
heroImg.src = "ninj.png";

const bulletImg = document.createElement("img");
bulletImg.src = "https://cdn4.iconfinder.com/data/icons/ninja-icons-set-cartoon-style/512/a254-512.png";

const audio = document.createElement("audio");
audio.src = "http://ftp.tekwind.co.jp/pub/asustw/beta/p4bg-vm/Audio/C-Media/9738_9739A/Demo%20Programs/Gun.wav";



let data = {
    hero: {
        xDelta:0,
        yDelta:0,
        x:10,
        y:240,
        width:150,
        height:150
    },
    bullets: []


}


const update = () => {
    data.hero.x += data.hero.xDelta;
    data.hero.y += data.hero.yDelta;

    data.bullets.forEach((bullet) => {
        bullet.x += bullet.xDelta;
    });

    data.bullets = data.bullets.filter(bullet => {
        if (bullet.x > canvas.width) {
            return false;
        }
        return true;
    })



}
const draw = () => {
    context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
    context.drawImage(heroImg, data.hero.x, data.hero.y, data.hero.width, data.hero.height);

    data.bullets.forEach((bullet) => {
        context.drawImage(bulletImg, bullet.x, bullet.y, bullet.width, bullet.height);
    })

}



const loop = () => {
    requestAnimationFrame(loop);

    update();
    draw();

}

loop();

document.addEventListener("keydown", (evt) => {

    if(evt.code === "ArrowRight") {
        data.hero.xDelta = 2;
    } else if (evt.code === "ArrowLeft") {
        data.hero.xDelta = -2;
    } else if (evt.code === "Space"){
        audio.currentTime = 0;
        audio.play();
        data.bullets.push({
            xDelta:5,
            x:data.hero.x + 40,
            y:data.hero.y,
            width:40,
            height:40
        })

    }
});

document.addEventListener("keyup", (evt) => {
    data.hero.xDelta = 0;
})

