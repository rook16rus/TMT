import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);


export default function projectSlider() {
    const currentSlider = document.querySelector('.portfolio-single__current-img');

    if (!currentSlider) return

    const gallery = new Swiper('.portfolio-single__gallery', {
        slidesPerView: 8,
        spaceBetween: 10
    });

    new Swiper(`.${currentSlider.classList[0]}`, {
        navigation: {
            nextEl: currentSlider.querySelector('.js-next-slide'),
            prevEl: currentSlider.querySelector('.js-prev-slide'),
        },
        thumbs: {
            swiper: gallery
        }
    })
}