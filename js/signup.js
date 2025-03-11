// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Trigger the Bootstrap modal
    var myModal = new bootstrap.Modal(document.getElementById('discountModal'));
    myModal.show();
});

function applyDiscount(event) {
    event.preventDefault(); // Prevent form submission
    const email = document.getElementById('discountEmail').value;
    const password = document.getElementById('discountPassword').value;
    
    // Check if the fields are filled
    if (email && password) {
        // Display a thank-you message
        alert('Thank you for signing up! Enjoy your 10% discount.');
        
        // Close the modal
        const discountModal = new bootstrap.Modal(document.getElementById('discountModal'));
        discountModal.hide();
        
        // Optionally, reset the form
        document.getElementById('discountForm').reset();
    }
}