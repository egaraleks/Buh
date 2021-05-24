$(function(){

    $('.presentation__slider').slick({
        dots: true,
        nextArrow: '<button type="button" class=" slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class=" slick-btn slick-prev"></button>',
        infinite: false,

    });
    $('.clients__items').slick({
        dots: true,
        nextArrow: '<button type="button" class=" slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class=" slick-btn slick-prev"></button>',
        infinite: false,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                  slidesToShow: 3,
                }
              },
              {
                breakpoint: 870,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                }
              },
        ]
    });
    $('.reviews__items').slick({
        dots: true,
        nextArrow: '<button type="button" class=" slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class=" slick-btn slick-prev"></button>',
        infinite: false,
    });
})


let nav_list = document.querySelector('.header__nav-list');

document.querySelector('.header__nav-btn').onclick = () =>{
    nav_list.classList.toggle('nav_list--active')
}