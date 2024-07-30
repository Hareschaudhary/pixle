
// $('.owl-carousel').owlCarousel({
// loop:true,
// margin:0,
// navText:['  <img class="img-fluid prev" src="./assets/images/sec-three/Ellipse 4.svg" alt="btn">','<img class="img-fluid next" src="./assets/images/sec-three/arrow.svg" alt="btn">'],
// nav:false,
// merge:true,
// autoplay:true,
// autoplayTimeout:2000,
// autoplayHoverPause:true,
// lazyLoad:true,
// responsive:{
//     0:{
//         items:1
//     },
//     600:{
//         items:1,
//         merge:true,
//         loop:true,
//         nav:true
//     },
//     1000:{
//         items:2.5,
//         merge:true,
//         loop:true,
//         nav:true
//     }
// }
// });

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2.5
        }
    }
})

