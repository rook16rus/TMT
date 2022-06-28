import './build-in/lazyload';
import detectTouch from './build-in/detectTouch';
import setScrollbarWidth from './build-in/setScrollbarWidth';
import anchorLinks from './build-in/anchorLinks';
import "./libs/yandexMapArrow";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import editableTextContainer from './custom/editableTextContainer';
import initSliders from "./custom/initSliders";
import verticalScrollSlider from "./build-in/verticalScrollSlider";
import fixedBlock from "./build-in/fixedBlock";
import projectSlider from "./build-in/projectSlider";
import intro from "./build-in/intro";
import fancybox from "./build-in/fancybox";
import contactsMap from "./build-in/contactsMap";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
    detectTouch();
    setScrollbarWidth();
    anchorLinks();
    verticalScrollSlider();
    fixedBlock();
    projectSlider();
    intro();
    fancybox();
    contactsMap();

    // custom
    initSliders();
    editableTextContainer();
});

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
});

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    setTimeout(() => document.body.classList.add('animatable'), 300);
});
