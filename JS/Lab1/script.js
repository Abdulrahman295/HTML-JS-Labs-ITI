function isValidString(input) {
    return input !== null && input.trim().length > 0;
}

function isValidNumber(input) {
    if (input === null || input.trim() === '') 
        return false;

    return isFinite(input);
}




function questionTwo(){
    let msg;

    do {
        msg = prompt("Please enter a message:");

    } while (!isValidString(msg));

    for (let i = 1; i <= 6; i++) {
        document.write(`<h${i}>${msg}</h${i}>`);
    }
}

function questionThree(){
    let sum = 0, value;
    do{
        let input = prompt("Enter a number to add to the sum (or 0 to finish):");

        if(!isValidNumber(input)){
            continue;
        }

        value = Number(input);
        sum += value;

    } while(value !== 0 && sum < 100);   
    
    document.write(`<p>The total sum is: ${sum}</p>`);
}

function questionFour(){
    let name;
    do {
        name = prompt("Enter your name");

    } while (!isValidString(name));

    let birthYear;
    const THRESHOLD_YEAR = 2010;
    do {
        birthYear = prompt("Enter your year of birth:");

    } while (!isValidNumber(birthYear) || birthYear >= THRESHOLD_YEAR);

    const CURRENT_YEAR = 2026;
    let age = CURRENT_YEAR - Number(birthYear);

    document.write(`<p><b><u>Name:</u></b> ${name}</p>`);
    document.write(`<p><b><u>Year of Birth:</u></b> ${birthYear}</p>`);
    document.write(`<p><b><u>Age:</u></b> ${age}</p>`);
}


// questionTwo();

// questionThree();

questionFour();


