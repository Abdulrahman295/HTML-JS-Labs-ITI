let currentIndex = 1;
const ImageCnt = 6;
let showInterval = null; 

const imgElement = document.getElementById("ImgHolder");

function updateImage() {
    imgElement.src = currentIndex + ".jpg";
}

function goNext() {
    stopSlideshow();
    
    if (currentIndex < ImageCnt) {
        currentIndex++;
        updateImage();
    }
}

function goPrevious() {
    stopSlideshow();

    if (currentIndex > 1) {
        currentIndex--;
        updateImage();
    }
}

function startSlideshow() {
    if (showInterval) return;

    showInterval = setInterval(function() {
        if (currentIndex >= ImageCnt) {
            currentIndex = 1;
        } else {
            currentIndex++;
        }
        updateImage();
    }, 2000);
}


function stopSlideshow() {
    if (showInterval) {
        clearInterval(showInterval);
        showInterval = null;
    }
}