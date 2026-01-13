let timeoutDuration = 30000;

setTimeout(function() {
    alert("Time is up! The page will now reload.");
    location.reload();
}, timeoutDuration);


const form = document.getElementById('regForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const address = document.getElementById('address').value;

   
    const params = new URLSearchParams({
        name: name,
        title: title,
        gender: gender,
        email: email,
        mobile: mobile,
        address: address
    });

    window.location.href = 'welcome.html?' + params.toString();
});
