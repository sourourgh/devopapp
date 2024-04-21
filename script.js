// JavaScript code for interacting with the DOM
document.addEventListener('DOMContentLoaded', function() {
    // Code to execute when the DOM is fully loaded
    console.log('DOM fully loaded.');

    // Example: Add event listener to buttons
    var addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            var productId = event.target.dataset.id;
            console.log('Product added to cart:', productId);
            // Add your logic for adding product to cart here
        });
    });
});
