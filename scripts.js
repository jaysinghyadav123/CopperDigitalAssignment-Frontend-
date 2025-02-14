
const products = [
    { id: 1, name: "dumbbell", price: 100, image: "https://img.freepik.com/free-psd/pair-weights-isolated-transparent-background_191095-21137.jpg?t=st=1739480440~exp=1739484040~hmac=40377a8ec50cff7f6e4405acf3ec0bc3f877bd1ecd033a4aa21d65cfaf3de890&w=740" },
    { id: 2, name: "treadmill", price: 1500, image: "https://img.freepik.com/free-photo/3d-gym-equipment_23-2151114174.jpg?t=st=1739480756~exp=1739484356~hmac=42b323f726618d64c2de1b9c21f2fa43a78f42f811f731d4ad7b67d101cfe2a6&w=996" },
    { id: 3, name: "Bottle", price: 20, image: "https://img.freepik.com/free-psd/blank-white-plastic-bottle-mockup-ideal-branding-design_632498-24452.jpg?t=st=1739481020~exp=1739484620~hmac=c014ae13a4bff7574533eaffc5845f3fb6fdba18ba2c7597974faf54a2f13343&w=740" },
    { id: 4, name: "Mat", price: 25, image: "https://img.freepik.com/free-psd/blue-rolledup-yoga-mat-perfect-fitness-wellbeing_191095-93206.jpg?t=st=1739481223~exp=1739484823~hmac=865306acefcd3fc791c415c0a742df2fc8bbd7b61b59b16abbc846061741f873&w=740" },
	{ id: 5, name: "Gym Cycle", price: 30, image: "https://img.freepik.com/free-psd/modern-white-exercise-bike-ready-workout-transparent-background_84443-28976.jpg?t=st=1739481457~exp=1739485057~hmac=1c4a0d3c9312019d27c841c621dc637d4d265b836803bc5b5644866883482140&w=740" },
	{ id: 6, name: "Protien", price: 5, image: "https://img.freepik.com/free-vector/protein-supplements-banner-design_23-2150072980.jpg?t=st=1739481666~exp=1739485266~hmac=c1631847cb20d2339ab9e2be57f2953d8b4c599dd24019165fec304af53c516e&w=996" },
	{ id: 7, name: "Sprouts", price: 40, image: "https://img.freepik.com/premium-photo/top-view-green-bean-sprouts-bowl_271326-957.jpg?w=996" },
	{ id: 8, name: "fruts supplement", price: 45, image: "https://img.freepik.com/premium-photo/hand-reaching-supplement-bottle-labeled-weight-loss-with-mineral-capsules_1316642-5893.jpg?w=1380" }
];

let cart = [];


function displayProducts() {
    const productsList = document.getElementById("products-list");
    productsList.innerHTML = ""; 
    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsList.appendChild(productDiv);
    });
}


function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingProduct = cart.find(p => p.id === productId);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartCount();
    updateCartModal();
}


function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    cartCount.innerText = cart.length;
}


function updateCartModal() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItems.appendChild(li);
    });

    const cartModal = document.getElementById("cart-modal");
    cartModal.style.display = "block";
}


document.getElementById("checkout-btn").addEventListener("click", () => {
    alert("Proceeding to Checkout");
    cart = []; 
    updateCartCount();
    updateCartModal();
    document.getElementById("cart-modal").style.display = "none";
});


window.addEventListener("click", (e) => {
    const cartModal = document.getElementById("cart-modal");
    if (e.target === cartModal) {
        cartModal.style.display = "none";
    }
});

     
document.addEventListener("DOMContentLoaded", () => {
    displayProducts();
});


document.getElementById("cart-icon").addEventListener("click", () => {
    const cartModal = document.getElementById("cart-modal");
    cartModal.classList.toggle("show");
});

