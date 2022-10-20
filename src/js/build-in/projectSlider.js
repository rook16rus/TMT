import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode, Lazy} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode, Lazy]);


export default function projectSlider() {
    if (matchMedia('(max-width: 768px)').matches) {
        const portfolioSingle = document.querySelector('.portfolio-single');
        if (!portfolioSingle) return;

        const swiper = new Swiper('.portfolio-single__gallery-container', {
            slidesPerView: 1,
            autoHeight: true,
            preloadImages: false,
            lazy: {
                loadPrevNext: true,
            },
            navigation: {
                nextEl: portfolioSingle.querySelector('.js-next-slide'),
                prevEl: portfolioSingle.querySelector('.js-prev-slide'),
            }

        })
    }
}