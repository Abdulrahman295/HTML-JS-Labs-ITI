const originalDiv = document.getElementById("originalDiv");

originalDiv.addEventListener("click", function() {
   const newDiv = originalDiv.cloneNode(true);

    newDiv.style.backgroundColor = getRandomRGB();

    document.body.append(newDiv); 
});

function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}