let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header .header-3');
let scrollTop = document.querySelector('.scroll-top');


let cart = JSON.parse(localStorage.getItem('cart')) || [];

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

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} foi adicionado ao carrinho.`);
}

document.querySelectorAll('.box .btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        let productBox = this.closest('.box');
        let productName = productBox.querySelector('h3').innerText;
        let productPrice = productBox.querySelector('.price').innerText.split(' ')[0].replace('€', '');
        addToCart(productName, productPrice);
    });
});


document.querySelector('.fas.fa-shopping-cart').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'cart.html';
});