document.getElementById('startButton').addEventListener('click', async function() {
    const messageAlert = document.getElementById('message');

    function showMessage(message, className) {
        messageAlert.textContent = message;
        messageAlert.className = className;
        messageAlert.classList.remove('hidden');
    }

    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    let userName = prompt("Enter your name:");

    if (userName) {
        let userConfirmation = confirm("Hello, " + userName + " ! " + "Do you want to continue?");
        if (userConfirmation) {
            showMessage("Great, " + userName + "! Let's Go!", 'success');
        } else {
            showMessage("Oh! OK, " + userName + ". See you later!", 'error');
        }
    } else {
            showMessage("Error! Please enter your name.", 'error');
    }
    await wait(5000);
    messageAlert.classList.add('hidden');
});
