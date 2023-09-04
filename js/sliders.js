const swiper = new Swiper('.reviews__slider', {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2.3,
    loop: true,
    spaceBetween: 120,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        depth: 300,
        slideShadows: true,
    },
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    //autoplay: { delay: 5000 }
});
window.onresize = queryResizer
queryResizer()
function queryResizer() {
if (window.innerWidth < 990) swiper.params.slidesPerView = 2.3
if (window.innerWidth > 501) swiper.params.slidesPerView = 1.8
if (window.innerWidth > 990) swiper.params.slidesPerView = 2.3
if (window.innerWidth < 760) swiper.params.slidesPerView = 1.8
if (window.innerWidth < 501) swiper.params.slidesPerView = 1
swiper.update() 
} 



const swiperWorks = new Swiper('.works__slider', {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    speed: 500,
    spaceBetween: 30,
   
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
       
    },

    //autoplay: { delay: 5000 }
});

const swiperMain = new Swiper('.bg__slider', {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    speed: 500,
    spaceBetween: 30,
    effect: "fade",
   
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
       
    },

    autoplay: { delay: 3000 },
});


