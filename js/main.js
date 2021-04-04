$(function () {
    $('.main__slider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        fade: true,
        autoplaySpeed: 500,
        responsive: [
            {
              breakpoint: 1201,
              settings: {
                dots: false
              }
            }
        ]
    });

    $('.response__slider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        fade: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1161,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 881,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 601,
              settings: {
                slidesToShow: 1
              }
            },

        ]
    });

    // $('.menu__btn').on('click', function() {
    //     $('.menu-list').toggleClass('menu-list--active');
    // })    
});

// menu burger
let menuBtn = document.querySelector('.menu__btn');
let menuList = document.querySelector('.menu-list');
menuBtn.addEventListener('click', function () {
    menuList.classList.toggle('menu-list--active');
})