// Sample product list
const products = [
    { id: 1, name: 'Premium Dog Food', price: 25 },
    { id: 2, name: 'Organic Dog Food', price: 30 },
    { id: 3, name: 'Grain-Free Dog Food', price: 35 }
];

// Function to display products
function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'card';
        productCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">$${product.price}</p>
                <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productList.appendChild(productCard);
    });
}

// Shopping cart array
let cart = [];

// Function to add products to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    displayCart();
}

// Function to display the cart
function displayCart() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';
    cart.forEach((item, index) => {
        const cartItem = document.createElement('li');
        cartItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        cartItem.innerHTML = `
            ${item.name} - $${item.price}
            <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartList.appendChild(cartItem);
    });
}

// Function to remove items from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

// Function for checkout (simple alert for now)
function checkout() {
    alert('Thank you for your purchase!');
    cart = [];
    displayCart();
}

// Initialize product display
document.addEventListener('DOMContentLoaded', displayProducts);