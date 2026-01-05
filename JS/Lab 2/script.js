function question_1_1(){
    let name; // should be characters only
    let valid_name = false;
    do {
        name = prompt("Enter your name:");
        let name_expression = /^[A-Za-z\s]+$/;

        if(name !== null && name.trim().length > 0 && name_expression.test(name)){
            valid_name = true;
        }

    } while (!valid_name);

    let phone; // should be number only and lenght equal to 8;
    let valid_phone = false;
    do {
        phone = prompt("Enter your phone number:");
        let phone_expression = /^\d{8}$/;
        
        if(phone !== null && phone_expression.test(phone)){
            valid_phone = true;
        }
    } while (!valid_phone);

    let mobile; // should be number only and lenght equal to 11 and start with 010 or 011 or 012
    let valid_mobile = false;
    do {
        mobile = prompt("Enter your mobile number:");
        let mobile_expression = /^(010|011|012)\d{8}$/;

        if(mobile !== null && mobile_expression.test(mobile)){
            valid_mobile = true;
        }
    } while (!valid_mobile);

    let email; // should be a valid email format
    let valid_email = false;
    do {
        email = prompt("Enter your email address:");
        let email_expression = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(email !== null && email_expression.test(email)){
            valid_email = true;
        }
    } while (!valid_email);

    document.write(`<p><b><u>Name:</u></b> ${name}</p>`);
    document.write(`<p><b><u>Phone Number:</u></b> ${phone}</p>`);
    document.write(`<p><b><u>Mobile Number:</u></b> ${mobile}</p>`);
    document.write(`<p><b><u>Email Address:</u></b> ${email}</p>`);
}

function question_1_2(){
    let str;
    let valid_str = false;
    do {
        str = prompt("Enter a string:");
        if(str !== null && str.trim().length > 0){
            valid_str = true;
        }
    } while (!valid_str);

    let ignore_case = confirm("Do you want to ignore case while checking for palindrome?");

    let processed_str = ignore_case ? str.toLowerCase() : str;
    let reversed_str = processed_str.split('').reverse().join('');
    
    if(processed_str === reversed_str){
        document.write(`<p>The string "${str}" is a palindrome.</p>`);
    } else {
        document.write(`<p>The string "${str}" is not a palindrome.</p>`);
    }
}

function question_2_1(){
    let radius;
    let valid_radius = false;
    do {
        radius = prompt("Enter the radius of the circle:");
        if(radius !== null && isFinite(radius) && Number(radius) > 0){
            valid_radius = true;
        }
    } while (!valid_radius);

    let area = Math.PI * Math.pow(Number(radius), 2);
    alert(`The area of the circle with radius ${radius} is ${area.toFixed(2)}`);
}

function question_2_2(){
    let number;
    let valid_number = false;
    do {
        number = prompt("Enter a non-negative number to calculate its square root:");
        if(number !== null && isFinite(number) && Number(number) >= 0){
            valid_number = true;
        }
    } while (!valid_number);

    let square_root = Math.sqrt(Number(number));
    alert(`The square root of ${number} is ${square_root.toFixed(2)}`);
}

function question_3_1(){
    let numbers = [];
    while(numbers.length < 3){
        let input = prompt(`Enter number ${numbers.length + 1}:`);
        if(input !== null && isFinite(input) && Number(input) !== 0){
            numbers.push(Number(input));
        }
    }

    let sum = numbers.reduce((acc, val) => acc + val);
    let product = numbers.reduce((acc, val) => acc * val);
    let division = numbers.reduce((acc, curr) => acc / curr);

   // display the resultss as equation 
    document.write(`<p>Sum: ${numbers.join(' + ')} = ${sum}</p>`);
    document.write(`<p>Product: ${numbers.join(' * ')} = ${product}</p>`);
    document.write(`<p>Division: ${numbers.join(' / ')} = ${division.toFixed(2)}</p>`);

}

function question_4_1(x, y){
    if(arguments.length != 2){
        throw new Error("must be 2 arguments");
    }

    console.log(x, y);
}

function question_4_2(){
    return Array.from(arguments).reverse();
}

function question_4_3(){
    for(let i = 0; i < arguments.length; i++){
        if(isNaN(arguments[i])){
            throw new Error(`${arguments[i]} is not a number`);
        }
    }

    let sum = Array.from(arguments).reduce((acc, val) => acc + val,0);

    return sum;
}

function question_4_4(str){
    let date = new Date(str);

    let options = { weekday: 'long' };

    console.log(date.toLocaleDateString('en-US', options));
}



 //question_1_1();

//  question_1_2();

// question_2_1();

//  question_2_2();

// question_3_1();

// try {
//     question_4_1(1,2,3);
// } catch (error) {
//     console.error(error.message);
// }

// console.log(question_4_2(1,2,3,4,5));


// try {
//     console.log(question_4_3(1,2,3,4,5));
//     console.log(question_4_3(1,2,"a"))
// } catch (error) {
//     console.error(error.message);
// }

// question_4_4("2026-1-4");
// question_4_4("1/7/2026");



