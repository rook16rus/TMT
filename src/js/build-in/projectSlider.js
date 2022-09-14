import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);


export default function projectSlider() {
    if (matchMedia('(max-width: 640px)').matches) {
        const portfolioSingle = document.querySelector('.portfolio-single');
        if (!portfolioSingle) return;

        const swiper = new Swiper('.portfolio-single__gallery-container', {
            slidesPerView: 1,
            autoHeight: true,
            navigation: {
                nextEl: portfolioSingle.querySelector('.js-next-slide'),
                prevEl: portfolioSingle.querySelector('.js-prev-slide'),
            },
        })
    }
}