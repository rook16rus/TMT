import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);


export default function projectSlider() {
    const currentSlider = document.querySelector('.portfolio-single__current-img');

    if (!currentSlider) return

    const gallery = new Swiper('.portfolio-single__gallery', {
        slidesPerView: 3,
        spaceBetween: 10,
        breakpoints: {
            1024: {
                slidesPerView: 5,
            },
            768: {
                slidesPerView: 3,
            }
        },
        on: {
            touchEnd: function(s,e) {
                let range = 5;
                let diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY
                    - s.touches.startY;
                if (diff < range || diff > -range) s.allowClick = true;
            }
        }
    });

    new Swiper(`.${currentSlider.classList[0]}`, {
        autoHeight: true,
        thumbs: {
            swiper: gallery
        },
        spaceBetween: 12,
        breakpoints: {
            380: {
                autoHeight: false,
                grid: {
                    rows: 1
                },
                spaceBetween: 0,
            }
        },
        navigation: {
            nextEl: currentSlider.querySelector('.js-next-slide'),
            prevEl: currentSlider.querySelector('.js-prev-slide'),
        },
    })
}