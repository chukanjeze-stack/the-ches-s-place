// Mobile Menu

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Cart


let cart = [];

function addToCart(name, price){

    cart.push({
        name:name,
        price:price
    });

    document.getElementById("cart-count").innerText = cart.length;
    renderCart();

    console.log(cart);

    alert(`${name} added to cart`);
}

function toggleCart(){

    document
        .getElementById("cart-panel")
        .classList
        .toggle("open");
}

function renderCart(){

    const cartItems =
        document.getElementById("cart-items");

    const totalElement =
        document.getElementById("cart-total");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        total += item.price;

        cartItems.innerHTML += `
            <p>
                ${item.name} - ₦${item.price}
            </p>
        `;
    });

    totalElement.innerText = total;
}