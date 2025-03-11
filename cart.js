function changeQuantity(inputId, amount) {
    const quantityInput = document.getElementById(inputId);
    let currentValue = parseInt(quantityInput.value);
    currentValue = isNaN(currentValue) ? 1 : currentValue + amount;
    if (currentValue <1) currentValue = 1; // Ensure quantity doesn't go below 1
    quantityInput.value = currentValue;
}

// Function to add items to the cart
function addToCart(name, price, quantity) {
    const cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += quantity; // Update quantity if item already in cart
    } else {
        cart.push({ name, price, quantity }); // Add new item
    }
    
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    updateCartCount();
    alert(`${quantity} of ${name} has been added to your cart!`);
}

// Function to update the cart count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    const totalItems = cart.reduce((count, item) => count + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalItems;
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();

    const checkoutBtn = document.getElementById('checkout-btn');
    checkoutBtn.addEventListener('click', () => {
        const cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
        if (cart.length === 0) {
            alert('Your cart is empty.');
            return;
        }

        let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        
        if (confirm(`Your total is $${total.toFixed(2)}. Do you want to proceed with checkout?`)) {
            localStorage.removeItem('shoppingCart');
            updateCartDisplay();
            updateCartCount();
            alert('Checkout successful! Your cart has been cleared.');
        }
    });
});

// Function to display cart items in the modal
function updateCartDisplay() {
    const cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    let total = 0;

    cartItemsContainer.innerHTML = ''; // Clear current items

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item', 'd-flex', 'justify-content-between', 'mb-2');
        itemDiv.innerHTML = `
            <p>${item.name} - $${item.price} x ${item.quantity}</p>
            <p><strong>Subtotal:</strong> $${(item.price * item.quantity).toFixed(2)}</p>
            <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(itemDiv);
        total += item.price * item.quantity;
    });

    document.getElementById('total-price').textContent = total.toFixed(2);
}

// Remove item from cart
window.removeFromCart = (index) => {
    const cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    cart.splice(index, 1); // Remove item from array
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    updateCartDisplay();
    updateCartCount();
};

document.getElementById('cartModal').addEventListener('show.bs.modal', updateCartDisplay);

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

document.getElementById('searchInput').addEventListener('input', searchItems);

