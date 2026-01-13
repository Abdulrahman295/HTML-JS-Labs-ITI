let openWindowBtn = document.getElementById('openWindowBtn');

let newWindow;

openWindowBtn.addEventListener('click', function() {
    newWindow = window.open('', 'child', 'width=400,height=400');
}
);

setTimeout(function() {
   if (newWindow && !newWindow.closed) {
       newWindow.close();
   }
}, 5000);

