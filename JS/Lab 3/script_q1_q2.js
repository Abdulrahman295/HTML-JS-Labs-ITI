function isNumeric(input) {
    return input !== null && input.trim() !== "" && isFinite(input);
}

function isInRange(number, min, max) {
    return number >= min && number <= max;
}

function getValidNumber(promptMessage, min = -Infinity, max = Infinity){
    let number;
    let valid_number = false;

    do {
       
        number = prompt(promptMessage);
        if(isNumeric(number) && isInRange(Number(number), min, max)){   
            valid_number = true;
        }
    } while (!valid_number);

    return Number(number);
}

function getAlphabeticString(promptMessage, minLength = 1, maxLength = Infinity){
    let str;
    let valid_str = false;
    const chars_only_expression = /^[A-Za-z\s]+$/;

    do {
        str = prompt(promptMessage);

        if(str === null ) continue;

        str = str.trim();

        if(chars_only_expression.test(str) && isInRange(str.length, minLength, maxLength)){
            valid_str = true;
        }
    } while (!valid_str);

    return str;
}


function question_1(){
    let nums = [];
    while(nums.length < 5){
        let input = getValidNumber(`Enter number ${nums.length + 1}:`);
        nums.push(input);
    }

    let asc_sorted = Array.from(nums).sort((a, b) => a - b);
    let desc_sorted = Array.from(nums).sort((a, b) => b - a);

    document.write(`<p>Original Array: [${nums.join(', ')}]</p>`);
    document.write(`<p>Ascending Sorted Array: [${asc_sorted.join(', ')}]</p>`);
    document.write(`<p>Descending Sorted Array: [${desc_sorted.join(', ')}]</p>`);
}

function question_2(){
    let numPersons = getValidNumber("Enter the number of persons:", 1);

    let names = [];
    let ages = [];

    for(let i = 0; i < numPersons; i++){
        let name = getAlphabeticString(`Enter the name of person ${i + 1}:`, 3, 10);
        let age = getValidNumber(`Enter the age of person ${i + 1}:`, 10, 60);

        names.push(name);
        ages.push(age);
    }

    const table = document.getElementById("personsTable");
    const tbody = document.getElementById("personsTableBody");


    for (let i = 0; i < numPersons; i++) {
        let row = document.createElement("tr");

        let nameCell = document.createElement("td");
        nameCell.textContent = names[i];

        let ageCell = document.createElement("td");
        ageCell.textContent = ages[i];

        row.append(nameCell);
        row.append(ageCell);
        tbody.append(row);
    }

    table.style.display = "block";
}


question_1();

question_2();

