document.addEventListener('DOMContentLoaded', () => {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let orderItemsContainer = document.getElementById('order-items');
    let totalPriceElement = document.getElementById('total-price');

    function populateOrderSummary() {
        let total = 0;

        if (cartItems.length > 0) {
            cartItems.forEach((item) => {
                let itemDiv = document.createElement('div');
                itemDiv.className = 'order-item';
                itemDiv.innerHTML = `
                    <p>${item.name} - €${item.price} x ${item.quantity} = €${(item.price * item.quantity).toFixed(2)}</p>
                `;
                orderItemsContainer.appendChild(itemDiv);
                total += item.price * item.quantity;
            });
        } else {
            orderItemsContainer.innerHTML = '<p>Seu carrinho está vazio</p>';
        }

        totalPriceElement.textContent = total.toFixed(2);
        localStorage.setItem('cartTotal', total.toFixed(2));
        console.log('Cart total stored:', localStorage.getItem('cartTotal'));
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
