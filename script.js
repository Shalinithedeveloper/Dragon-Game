score = 0;
cross = true;
document.onkeydown = function (e) {
    console.log("Key code is :", e.keyCode)
    if (e.keyCode == 32) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    if (e.keyCode == 39) {
       dino = document.querySelector('.dino');
       dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
       dino.style.left = dinoX + 112 + "px";
    }
    if (e.keyCode == 37) {
       dino = document.querySelector('.dino');
       dinoY = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
       dino.style.left = dinoY - 112 + "px";
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameover = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    console.log(offsetX, offsetY)
    if (offsetX < 73 && offsetY < 52) {
        obstacle.classList.remove('obstacleAni')
        gameover.style.visibility = 'visible';
        // audiogo.play();
    }
    else if(offsetX< 145 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(()=> {
            cross = true;
        }, 1000);
    }

}, 100);

function updateScore(score){
    scorcont.innerHTML = "Your Score:" + score
}