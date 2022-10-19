import { Fancybox } from '@fancyapps/ui';

export default function fancybox() {
    Fancybox.bind('[data-fancybox]', {
        helpers     : {
            overlay : {
                speedIn  : 0,
                speedOut : 300,
                opacity  : 0.8,
                css      : {
                    cursor : 'default'
                },
                closeClick: false
            }
        },
        Image: {
            zoom: false,
            Panzoom: {
                ratio: 3
            },
        },
        on: {
            load: (fancybox, slide) => {
                window.initCancelDownloadImg();
            },/*
            reveal() {
                const slides = this.$carousel.querySelectorAll('.fancybox__content');

                slides.forEach(slide => {
                    const img = slide.querySelector('img');

                    slide.style.width = slide.clientWidth / 10 + 'rem';
                    slide.style.height = slide.clientHeight / 10 + 'rem';
                    img.style.width = img.clientWidth / 10 + 'rem';
                    img.style.height = img.clientHeight / 10 + 'rem';
                })
            }*/
        },
    })
}