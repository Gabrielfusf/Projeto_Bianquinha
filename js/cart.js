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
                let actionCell = document.createElement('td');
                let removeButton = document.createElement('button');

                nameCell.textContent = item.name;
                priceCell.textContent = `€${item.price}`;
                removeButton.textContent = 'Remover';
                removeButton.className = 'button-remove';
                removeButton.addEventListener('click', () => {
                    removeItem(index);
                });

                actionCell.appendChild(removeButton);

                row.appendChild(nameCell);
                row.appendChild(priceCell);
                row.appendChild(actionCell);
                cartTable.appendChild(row);

                total += parseFloat(item.price);
            });
        } else {
            cartTable.innerHTML = '<tr><td colspan="3">Seu carrinho está vazio</td></tr>';
        }

        totalPriceElement.textContent = total.toFixed(2);
        localStorage.setItem('cartTotal', total.toFixed(2)); // Armazena o total no localStorage
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
