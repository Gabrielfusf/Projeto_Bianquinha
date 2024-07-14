document.addEventListener('DOMContentLoaded', () => {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let cartTable = document.getElementById('cart-items');
    let totalPriceElement = document.getElementById('total-price');

    function updateCart() {
        cartTable.innerHTML = '';
        let total = 0;

        if (cartItems.length > 0) {
            cartItems.forEach((item, index) => {
                let row = document.createElement('tr');
                let nameCell = document.createElement('td');
                let priceCell = document.createElement('td');
                let quantityCell = document.createElement('td');
                let totalCell = document.createElement('td');
                let actionCell = document.createElement('td');
                let removeButton = document.createElement('button');

                nameCell.textContent = item.name;
                priceCell.textContent = `€${item.price}`;
                quantityCell.textContent = item.quantity;
                totalCell.textContent = `€${(item.price * item.quantity).toFixed(2)}`;
                removeButton.textContent = 'Remover';
                removeButton.className = 'button-remove';
                removeButton.addEventListener('click', () => {
                    removeItem(index);
                });

                actionCell.appendChild(removeButton);

                row.appendChild(nameCell);
                row.appendChild(priceCell);
                row.appendChild(quantityCell);
                row.appendChild(totalCell);
                row.appendChild(actionCell);
                cartTable.appendChild(row);

                total += item.price * item.quantity;
            });
        } else {
            cartTable.innerHTML = '<tr><td colspan="5">Seu carrinho está vazio</td></tr>';
        }

        totalPriceElement.textContent = total.toFixed(2);
        localStorage.setItem('cartTotal', total.toFixed(2));
        console.log('Cart total stored:', localStorage.getItem('cartTotal')); 
    }

    function removeItem(index) {
        cartItems.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        updateCart();
    }

    updateCart();

    document.getElementById('checkout-button').addEventListener('click', () => {
        window.location.href = 'checkout.html';
    });
});
