import loadApi from "./loadApi";

export default function contactsMap() {
    const map = document.querySelector('#map');
    if(!map) return;

    const url = `https://api-maps.yandex.ru/2.1/?apikey=${map.dataset.api}&lang=ru_RU`
    loadApi('yandex', url, () => { ymaps.ready(init) })
}

function init() {
    const mapElement = document.querySelector('#map');
    const zoom = mapElement.dataset.zoom;
    const hint = mapElement.dataset.hint;
    const marker = mapElement.dataset.marker;
    const coords = mapElement.dataset.coordinates.split(',');

    const map = new ymaps.Map('map', {
        center: [...coords],
        zoom: zoom
    })

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('rulerControl'); // удаляем контрол правил

    addMarker([...coords], map, hint, marker);

}

function addMarker(coords, map, hint, markerIcon) {
    const marker = new ymaps.Placemark(coords, {
        hintContent: hint
    }, {
        iconLayout: 'default#image',
        iconImageHref: markerIcon,
        iconImageSize: [40, 40],
        iconImageOffset: [-20, -40]
    })

    map.geoObjects.add(marker);
}
