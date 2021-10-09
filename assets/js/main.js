$(document).ready(function () {
    $('.nav-link').click(function () {
        $('.nav-link').removeClass('active')
        $(this).addClass('active')
    })
})

$(window).scroll(function (e) {
    if ($(window).scrollTop() > 70) {
        $(".navbar").addClass("show");
    } else {
        $(".navbar").removeClass("show");
    }
    e.preventDefault()
});

var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    spaceBetween: 30,
    centeredSlides: false,
    slidesPerView: "auto",
    navigation: {
        nextEl: ".bxs-chevron-right-circle",
        prevEl: ".bxs-chevron-left-circle",
    },
});
var swiperTesti = new Swiper(".mySwiperTesti", {
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: "auto",
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});