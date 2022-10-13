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
            },
        },
    })
}