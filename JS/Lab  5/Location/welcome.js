const params = new URLSearchParams(window.location.search);

document.getElementById('name').textContent = `${params.get('title')} ${params.get('name')}`;
document.getElementById('email').textContent = params.get('email');
document.getElementById('mobile').textContent = params.get('mobile');
document.getElementById('gender').textContent = params.get('gender');
document.getElementById('address').textContent = params.get('address');