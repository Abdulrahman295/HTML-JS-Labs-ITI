var inp = document.querySelector("#Answer");

inp.readOnly = true;

function EnterNumber(num){
    inp.value += num;
}

function EnterOperator(val) {
    inp.value += ` ${val} `;
}

function EnterClear(){
    inp.value = "";
}

function EnterEqual() {
    try {
        if (inp.value === "") return;
        inp.value = eval(inp.value);

    } catch (err) {
        inp.value = "Error";
    }
}