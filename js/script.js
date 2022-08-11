var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 4000,
        duration: 2000,
        transition: 1000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 'auto',
            spaceBetween: 10,
            centeredSlides: true,
            loop: true,
        },
        300: {
            spaceBetween: 20,
            slidesPerView: 'auto',
            centeredSlides: true,
            loop: true,
        },
        600: {
            spaceBetween: 15,
            slidesPerView: 'auto',
            centeredSlides: true,
        },
        990: {
            slidesPerView: 4,
            spaceBetween: 30,
            autoplay: false,
        },
        1140: {
            slidesPerView: 3,
            spaceBetween: 40,
            autoplay: false,
            initialSlide: 1,
            loop: false,
            centeredSlides: true,
        },
        1320: {
            loop: false,
            centeredSlides: false,
            slidesPerView: 3,
            autoplay: false,
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


var swiper2 = new Swiper(".mySwiper2", {
    pagination: {
        el: ".swiper-pagination2",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    spaceBetween: 50,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 0,
    loop: true,

    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        0: {
            spaceBetween: 15,
            initialSlide: 1,
        },
        990: {
            spaceBetween: 50,
            slidesPerView: 'auto',
            centeredSlides: true,
        },
        1280: {
            spaceBetween: 50,
            slidesPerView: 2,
            centeredSlides: true,
            initialSlide: 1,
        }
    }

});



let fetCards = document.querySelector('.fet__cards')
let fetCard = fetCards.querySelectorAll('.fet__card')

for (let i = 0; i < fetCard.length; i++) {
    fetCard[i].addEventListener('click', function () {
        if (fetCard[i].classList.contains("active")) {
            fetCard[i].classList.remove("active");
        } else {
            fetCard[i].classList.add("active");
        }
    })
}