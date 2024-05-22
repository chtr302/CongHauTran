document.getElementById('contactForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var formMessage = document.getElementById('formMessage');

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
        formMessage.textContent = 'Please input Name before submitting.';
        formMessage.classList.remove('form-message-success');
        formMessage.classList.add('form-message-error');
        formMessage.style.display = 'block';
        event.preventDefault();
    } else if (!email || !emailRegex.test(email)) {
        formMessage.textContent = 'Invalid email.';
        formMessage.classList.remove('form-message-success');
        formMessage.classList.add('form-message-error');
        formMessage.style.display = 'block';
        event.preventDefault();
    } else if (!message) {
        formMessage.textContent = 'Please input Message before submitting.';
        formMessage.classList.remove('form-message-success');
        formMessage.classList.add('form-message-error');
        formMessage.style.display = 'block';
        event.preventDefault();
    } else {
        formMessage.textContent = 'Successfully.';
        formMessage.classList.remove('form-message-error');
        formMessage.classList.add('form-message-success');
        formMessage.style.display = 'block';
    }
});