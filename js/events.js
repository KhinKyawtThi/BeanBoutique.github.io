function registerEvent(eventName) {
    document.getElementById('registration-form').style.display = 'block';
    document.getElementById('event').value = eventName;
    window.scrollTo({ top: document.getElementById('registration-form').offsetTop, behavior: 'smooth' });
}

// Add an event listener to the registration form
document.querySelector('.registration-form form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show a confirmation message
    const name = document.getElementById('name').value;
    const eventName = document.getElementById('event').value;
    alert(`Thank you, ${name}! You have successfully registered for "${eventName}".`);

    // Optionally, you can reset the form
    this.reset();
    document.getElementById('registration-form').style.display = 'none'; // Hide the form again
});

document.querySelector('.registration-form form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const eventName = document.getElementById('event').value;
    document.getElementById('registered-event').textContent = eventName;
    alert(`Thank you, ${name}! You have successfully registered for "${eventName}".`);
    
    // Show success message and hide form
    document.getElementById('success-message').style.display = 'block';
    document.getElementById('registration-form').style.display = 'none';
    this.reset();
});       

// function for calendar
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth', // Change to 'listWeek' or 'listMonth' for a smaller view
        height: 'auto',              // Automatically adjust height
        contentHeight: 300,          // Set content height for a smaller calendar
        events: [
            { title: 'Coffee Tasting Session', start: '2024-10-25', description: '2:00 PM - 4:00 PM, Bean Boutique Main Hall' },
            { title: 'Brewing Class: Master the French Press', start: '2024-11-05', description: '10:00 AM - 12:00 PM, Workshop Room' },
            { title: 'Meet the Roaster', start: '2024-11-15', description: '3:00 PM - 5:00 PM, Bean Boutique Main Hall' },
        ],
        eventContent: function(arg) {
            return {html: `<div style="white-space: normal;" title="${arg.event.title}">${arg.event.title}</div>`};
        },
        eventClick: function(info) {
            alert(info.event.title + '\n' + info.event.extendedProps.description);
        },
        headerToolbar: {
            start: 'title',
            center: '',
            end: 'prev,next'
        },
        themeSystem: 'bootstrap'
    });
    calendar.render();
});

//function for search for events
function filterEvents() {
const searchQuery = document.getElementById('eventSearch').value.toLowerCase();
const events = document.querySelectorAll('.event-list .card');

events.forEach(event => {
    const title = event.querySelector('.card-title').textContent.toLowerCase();
    const date = event.querySelector('.card-text').textContent.toLowerCase();
    const location = event.querySelector('.card-text:last-of-type').textContent.toLowerCase();

    if (title.includes(searchQuery) || date.includes(searchQuery) || location.includes(searchQuery)) {
        event.style.display = 'block';
    } else {
        event.style.display = 'none';
    }
});
}

document.getElementById('eventSearch').addEventListener('input', filterEvents);