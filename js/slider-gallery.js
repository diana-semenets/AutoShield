const gallerySwiper = new Swiper('.gallery-slider', {
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