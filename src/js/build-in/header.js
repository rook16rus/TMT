import { disableBodyScroll as lockScroll, clearAllBodyScrollLocks as unlockScroll } from 'body-scroll-lock';

export default function header() {
    const header = document.querySelector('.header');
    const nav = document.querySelector('.header-mobile-nav');

    nav.style.setProperty('--header-height', header.offsetHeight + 'px');

    const burger = document.querySelector('.header__burger');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        nav.classList.toggle('active');

        if (burger.classList.contains('active')) {
            lockScroll(nav);
        } else {
            unlockScroll();
        }
    })
}