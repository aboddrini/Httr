document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('formResult').textContent = 'تم إرسال رسالتك بنجاح!';
    } else {
        document.getElementById('formResult').textContent = 'يرجى تعبئة جميع الحقول.';
    }
});