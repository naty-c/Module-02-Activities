function sendForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const status = document.getElementById('form-status');

    status.textContent = '';
    status.classList.remove('success', 'error');

    if (name && email && message) {
        displayStatus(status, 'Your form is on the way!', 'success');
    } else {
        displayStatus(status, 'Fill in all fields before sending.', 'error');
    }
}

function cleanForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

function displayStatus(element, message, type) {
    const p = document.createElement('p');
    p.textContent = message;
    element.appendChild(p);
    element.classList.add(type);

    setTimeout(() => {
        element.textContent = '';
        element.classList.remove('success', 'error');
    }, 5000);
}
