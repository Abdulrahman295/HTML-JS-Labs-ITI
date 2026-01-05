
function question_3(){
    let headerDiv = document.getElementById("header");
    headerDiv.style.textAlign = "right";

    
    let listElement = document.getElementById("nav");
    listElement.style.listStyleType = "circle"; 
    listElement.style.listStylePosition = "inside";


    let newDiv = document.createElement("div");
    newDiv.style.textAlign = "left"; 

    let imgElement = headerDiv.firstElementChild;
    newDiv.append(imgElement.cloneNode(true));

    let mainContainer = document.querySelector(".center");
    mainContainer.append(newDiv);
}

question_3();