import loadApi from "./loadApi";

export default function contactsMap() {
    const map = document.querySelector('#map-test');
    if(!map) return;

    const url = `https://api-maps.yandex.ru/2.1/?apikey=${map.dataset.api}&lang=ru_RU`
    loadApi('yandex', url, () => { ymaps.ready(init) })
}

function init() {
    const map = new ymaps.Map('map-test', {
        center: [55.787535275464855,49.13822021074417],
        zoom: 18
    })

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('rulerControl'); // удаляем контрол правил

    addMarker([55.787535275464855,49.13822021074417], map);

}

function addMarker(coords, map) {
    const marker = new ymaps.Placemark(coords, {
        hintContent: 'офис ТМТ'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/placemarker.svg',
        iconImageSize: [40, 40],
        iconImageOffset: [-20, -40]
    })

    map.geoObjects.add(marker);
}
