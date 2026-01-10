
const userForm = document.getElementById('userForm');
const tableBody = document.getElementById('usersTableBody');

const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const emailInput = document.getElementById('email');

const nameError = document.getElementById('nameError');
const ageError = document.getElementById('ageError');
const emailError = document.getElementById('emailError');


userForm.addEventListener('submit', function(event) {
    event.preventDefault();

    if (validateForm()) {
        addRowToTable();
        
        resetForm(); 
    }
});

function validateForm() {
    let isValid = true;
    
    clearErrors();

    const nameVal = nameInput.value.trim();
    const ageVal = ageInput.value.trim();
    const emailVal = emailInput.value.trim();

    if (nameVal === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    } else if (!isValidName(nameVal)) {
        nameError.textContent = "Name can only contain letters and spaces.";
        isValid = false;
    }

    if (ageVal === "") {
        ageError.textContent = "Age is required.";
        isValid = false;
    } else if (Number(ageVal) <= 0) {
        ageError.textContent = "Age must be a positive number.";
        isValid = false;
    }

    if (emailVal === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!isValidEmailFormat(emailVal)) {
        emailError.textContent = "Please enter a valid email format.";
        isValid = false;
    }

    return isValid;
}


function addRowToTable() {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = nameInput.value;

    const ageCell = document.createElement('td');
    ageCell.textContent = ageInput.value;

    const emailCell = document.createElement('td');
    emailCell.textContent = emailInput.value;

    row.appendChild(nameCell);
    row.appendChild(ageCell);
    row.appendChild(emailCell);

    tableBody.appendChild(row);
}


function resetForm() {
    userForm.reset();
    clearErrors();
}

function clearErrors() {
    nameError.textContent = "";
    ageError.textContent = "";
    emailError.textContent = "";
}


function isValidEmailFormat(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function isValidName(name) {
    const re = /^[a-zA-Z\s]+$/;
    return re.test(name);
}