import { Fancybox } from '@fancyapps/ui';

export default function fancybox() {
    Fancybox.bind('[data-fancybox]', {
        Image: {
            zoom: false
        },
        on: {
            load: (fancybox, slide) => {
                window.initCancelDownloadImg();
            },
        },
    })
}