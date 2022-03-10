$(document).ready(() => {
    $(document).scroll(() => {
        $('.navbar').toggleClass('active', $(this).scrollTop() > $('.navbar').height())
    })
})

var swiper = new Swiper(".mySwiperProduct", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".bxs-chevron-right-circle",
        prevEl: ".bxs-chevron-left-circle",
      },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        350: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 30,
        }
       
    }
  });