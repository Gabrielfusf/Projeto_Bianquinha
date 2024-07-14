document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.box .btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const productBox = button.closest('.box');
            const productName = productBox.querySelector('h3').textContent;
            const productPrice = parseFloat(productBox.querySelector('.price').textContent.replace('€', ''));
            const productQuantity = parseInt(productBox.querySelector('input[type="number"]').value);
            addToCart(productName, productPrice, productQuantity);
        });
    });

    function addToCart(name, price, quantity) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const existingProductIndex = cart.findIndex(item => item.name === name);

        if (existingProductIndex >= 0) {
            cart[existingProductIndex].quantity += quantity;
        } else {
            cart.push({ name, price, quantity });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${name} foi adicionado ao carrinho.`);
    }
});

document.querySelector('.fas.fa-shopping-cart').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'cart.html';
});

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header .header-3');
let scrollTop = document.querySelector('.scroll-top');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

scrollTop.onclick = () =>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 155){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }

    if(window.scrollY > 250){
        scrollTop.style.display = 'initial';
    }else{
        scrollTop.style.display = 'none';
    }

}

var swiper = new Swiper(".home-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop:true,
});

var dateOffset = (24*60*60*1000) * 2;
let countDate = new Date().getTime() + dateOffset;

function countDown(){

    let now = new Date().getTime();

    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;

}

setInterval(function(){
    countDown();
},1000);
