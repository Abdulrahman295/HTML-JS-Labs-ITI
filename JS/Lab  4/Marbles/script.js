const marbles = document.querySelectorAll('.marble');

let currentIndex = 0;
let timer = null;  

function moveToNextMarble() {
    marbles[currentIndex].src = 'grey.jpg'; 

    currentIndex = (currentIndex + 1) % marbles.length;
    
    marbles[currentIndex].src = 'orange.jpg';
}


function start(){
    if (!timer) {
        timer = setInterval(moveToNextMarble, 1000);
    }
}

function stop(){
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

marbles.forEach(marble => {
    marble.addEventListener('mouseenter', stop);
    
    marble.addEventListener('mouseleave', start);
});