

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})


jQuery(".owl-carousel4").owlCarousel(
    {
        loop: true,
        center: true,
        margin: 20,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 2,

            },
            600: {
                items: 3,

            },
            1000: {
                items: 5,
                nav: true,
                loop: true
            }
        }
    }
);