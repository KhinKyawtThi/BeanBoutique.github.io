// JavaScript function to toggle the search box
function toggleSearch() {
    const searchForm = document.querySelector('.search-form');
    searchForm.classList.toggle('active');
}

// Function to filter items based on search input
function searchItems() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        if (title.includes(input)) {
            card.style.display = ''; // Show the card if it matches
        } else {
            card.style.display = 'none'; // Hide the card if it doesn't match
        }
    });
}

// Attach event listener to the search input
document.getElementById('searchInput').addEventListener('input', searchItems);