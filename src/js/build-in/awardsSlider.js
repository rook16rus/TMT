import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode, Thumbs} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode, Thumbs]);

export default function awardsSlider() {

    /* Инициализация слайдеров */

    const awardsSwiper = new Swiper('.about__awards-slider', {
        direction: "vertical",
        slidesPerView: "auto",
        spaceBetween: 150,
    })

    const imgSwiper = new Swiper('.about__awards-img-slider-inner', {
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        thumbs: {
            swiper: awardsSwiper,
        },
        allowTouchMove: false
    })

    /* Фиксация слайдера фотографий */

    const layout = document.querySelector('.about__awards');
    const imgSlider = document.querySelector('.about__awards-img-slider');
    const imgSliderInner = document.querySelector('.about__awards-img-slider-inner');

    if (!layout) return;

    coordsCheck(imgSliderInner, imgSlider, layout);

    /*  */

    const awardsSlides = document.querySelectorAll('.about__awards-slide');
    const averageHeight = awardsSwiper.height / awardsSlides.length;

    window.addEventListener('scroll', () => {
        coordsCheck(imgSliderInner, imgSlider, layout);

        const a = (layout.getBoundingClientRect().top + window.pageYOffset) - window.scrollY;
        if (a < 0) {
            const activeIndex = Math.floor(Math.abs(a) / (averageHeight + 25));
            imgSwiper.slideTo(activeIndex);
        }
    })
}

function coordsCheck(sidebarInner, sidebar, layout) {
    if (layout.getBoundingClientRect().top <= 100) {
        sidebarInner.style.position = 'fixed';
        sidebarInner.style.top = 100 + 'px'
        sidebarInner.style.bottom = 'auto';
        sidebarInner.style.width = sidebar.clientWidth + 'px';
    } else {
        sidebarInner.style.position = 'static';
        sidebarInner.style.width = 'auto';
    }

    if (Math.round(layout.getBoundingClientRect().bottom) <= Math.round(sidebarInner.getBoundingClientRect().bottom)) {
        sidebarInner.style.position = 'absolute';
        sidebarInner.style.bottom = 0 + 'px';
        sidebarInner.style.top = 'auto';
    }
}