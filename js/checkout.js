document.addEventListener('DOMContentLoaded', () => {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let orderItemsContainer = document.getElementById('order-items');
    let totalPriceElement = document.getElementById('total-price');

    function populateOrderSummary() {
        let total = localStorage.getItem('cartTotal') || '0.00'
        if (cartItems.length > 0) {
            cartItems.forEach((item) => {
                let itemDiv = document.createElement('div');
                itemDiv.className = 'order-item';
                itemDiv.innerHTML = `
                    <p>${item.name} - €${item.price}</p>
                `;
                orderItemsContainer.appendChild(itemDiv);
            });
        } else {
            orderItemsContainer.innerHTML = '<p>Seu carrinho está vazio</p>';
        }

        totalPriceElement.textContent = total;
    }

    document.getElementById('checkout-form').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Compra finalizada com sucesso!');
        localStorage.removeItem('cart');
        localStorage.removeItem('cartTotal');
        window.location.href = 'index.html';
    });

    populateOrderSummary();
});
