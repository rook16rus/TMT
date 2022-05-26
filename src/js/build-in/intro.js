export default function intro() {
    const intro = document.querySelector('.intro');
    if (!intro) return;

    const header = document.querySelector('.header');

    intro.style.setProperty('--header-height', header.clientHeight + 'px');
}