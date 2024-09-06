const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto', // Number of slides to show per view
    direction: 'horizontal',
    spaceBetween: '16',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1, // 1 slide per view when window width is < 320px
        },
        768: {
            slidesPerView: 2, // 2 slides per view when window width is >= 960px
        },
        // 1024: {
        //     slidesPerView: 2, // 2 slides per view when window width is >= 1024px
        // },
        1248: {
            slidesPerView: 3, // 3 slides per view when window width is >= 1248px
            spaceBetween: 24
        }
    }
});

// Dropdown Menu
const headerBtn = document.querySelector('hamburger__menu');
const dropDown = document.querySelector('.dropdown');





