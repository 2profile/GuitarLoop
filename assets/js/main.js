/* SWIPER HOME */
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  /* MUDAR BACKGROUND DO HEADER */
  function scrollHeader() {
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.calssList.remove('scroll-header')
  }
window.addEventListener('scroll', scrollHeader)

/* NOVO SWIPER */
var newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 16,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: 'true',
});

/* CARRINHO */
const cart = document.getElementById('cart'),
      cartShop = document.getElementById('cart-shop'),
      cartClose = document.getElementById('cart-close')

/* MOSTRAR CARRINHO */
if(cartShop) {
  cartShop.addEventListener("click", () => {
    cart.classList.add('show-cart')
  })
}

/* ESCONDER CARRINHO */
if(cartClose) {
  cartClose.addEventListener("click", () => {
    cart.classList.remove('show-cart')
  })
}

/* LOGIN */
const login = document.getElementById('login'),
      loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close')

/* MOSTRAR LOGIN */
if(loginButton) {
  loginButton.addEventListener("click", () => {
    login.classList.add('show-login')
  })
}

/* ESCONDER LOGIN */
if(loginClose) {
  loginClose.addEventListener("click", () => {
    login.classList.remove('show-login')
  })
}

/* MOSTRAR SCROLL UP */
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');

  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* MENU */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* MOSTRAR MENU */
if(navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add('show-menu')
  })
}

/* ESCONDER MENU */
if(navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove('show-menu')
  })
}