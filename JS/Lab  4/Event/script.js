function question_6(){
    document.addEventListener("keydown", function(event) {     
        console.log(event);

        let message = `ASCII is: ${event.keyCode}`;
        
        if(event.altKey) {
            message += "\n(Alt key detected)";
        }

        if(event.ctrlKey) {
            message += "\n(Ctrl key detected)";
        }

        if(event.shiftKey) {
            message += "\n(Shift key detected)";
        } 

        alert(message);

    });
}

function question_7(){
    const myInput = document.getElementById("myInput");

    myInput.addEventListener("input", function(event) {
        this.value = this.value.replace(/[^0-9]/g, '');        
    });

}

// question_6();

question_7();