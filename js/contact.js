document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    if (name && email && subject && message) {
        alert('Thank you for contacting us! We will get back to you shortly.');
        this.reset(); // Clears the form after submission
    } else {
        alert('Please fill in all fields.');
    }
});