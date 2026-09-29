// Product elements

const productCards =
    document.querySelectorAll(".product-card");

const categoryButtons =
    document.querySelectorAll(".category-btn");

const searchInput =
    document.getElementById("searchInput");

const noProducts =
    document.getElementById("noProducts");


// Category filtering

categoryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const category =
            button.getAttribute("data-category");


        categoryButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        filterProducts(category);

    });

});


// Search

searchInput.addEventListener("input", function () {

    const searchText =
        searchInput.value.toLowerCase();

    let visibleProducts = 0;


    productCards.forEach(function (card) {

        const productName =
            card.getAttribute("data-name")
                .toLowerCase();

        const category =
            card.getAttribute("data-category")
                .toLowerCase();


        if (
            productName.includes(searchText) ||
            category.includes(searchText)
        ) {

            card.style.display = "block";

            visibleProducts++;

        } else {

            card.style.display = "none";

        }

    });


    if (visibleProducts === 0) {

        noProducts.style.display = "block";

    } else {

        noProducts.style.display = "none";

    }

});


// Category filtering function

function filterProducts(category) {

    let visibleProducts = 0;


    productCards.forEach(function (card) {

        const cardCategory =
            card.getAttribute("data-category");


        if (
            category === "all" ||
            cardCategory === category
        ) {

            card.style.display = "block";

            visibleProducts++;

        } else {

            card.style.display = "none";

        }

    });


    if (visibleProducts === 0) {

        noProducts.style.display = "block";

    } else {

        noProducts.style.display = "none";

    }

}


// Shopping cart

let cart = [];

const cartCount =
    document.getElementById("cartCount");

const cartModal =
    document.getElementById("cartModal");

const cartItems =
    document.getElementById("cartItems");

const cartTotal =
    document.getElementById("cartTotal");


// Add to cart

const addCartButtons =
    document.querySelectorAll(".add-cart");

addCartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const product =
            button.getAttribute("data-product");

        const price =
            Number(
                button.getAttribute("data-price")
            );


        cart.push({
            name: product,
            price: price
        });


        updateCart();


        button.textContent = "Added ✓";


        setTimeout(function () {

            button.textContent = "Add to Cart";

        }, 1000);

    });

});


// Update cart

function updateCart() {

    cartCount.textContent = cart.length;


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

        cartTotal.textContent = "₹0";

        return;

    }


    cartItems.innerHTML = "";

    let total = 0;


    cart.forEach(function (item, index) {

        total += item.price;


        const cartItem =
            document.createElement("div");

        cartItem.classList.add("cart-item");


        cartItem.innerHTML = `
            <div>
                <strong>${item.name}</strong>
                <p>₹${item.price}</p>
            </div>

            <button
                class="remove-item"
                data-index="${index}"
            >
                Remove
            </button>
        `;


        cartItems.appendChild(cartItem);

    });


    cartTotal.textContent =
        "₹" + total;


    // Remove buttons

    document
        .querySelectorAll(".remove-item")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    const index =
                        Number(
                            button.getAttribute(
                                "data-index"
                            )
                        );

                    cart.splice(index, 1);

                    updateCart();

                }
            );

        });

}


// Open cart

document
    .getElementById("cartBtn")
    .addEventListener("click", function () {

        cartModal.classList.add("active");

    });


// Close cart

document
    .getElementById("closeCart")
    .addEventListener("click", function () {

        cartModal.classList.remove("active");

    });


// Close modal when clicking outside

cartModal.addEventListener("click", function (event) {

    if (event.target === cartModal) {

        cartModal.classList.remove("active");

    }

});


// Checkout

document
    .getElementById("checkoutBtn")
    .addEventListener("click", function () {

        if (cart.length === 0) {

            alert("Your cart is empty.");

            return;

        }


        alert(
            "Thank you for shopping with ShopEase!"
        );


        cart = [];

        updateCart();

        cartModal.classList.remove("active");

    });