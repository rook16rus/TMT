export default function contactsMap() {
    if(!document.querySelector('#map-test')) return;

    ymaps.ready(init);
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

    addPolyline([[55.78850772291667,49.137246863235184], [55.787377195760875,49.13808027278843], [55.78737077261405,49.13812318813261]], map);
    addPolyline([[55.78690643873011,49.136683360514766], [55.787319033828204,49.13807810920252], [55.78736286235366,49.13813175338281]], map);
    addPolyline([[55.78762785275234,49.139673795637385], [55.7876883053967,49.139239277776966], [55.787570422652934,49.139131989416384], [55.78735128070295,49.138206627306246], [55.78736034867024,49.13814225428988]], map);
}

function addMarker(coords, map) {
    const marker = new ymaps.Placemark(coords, {
        hintContent: 'офис ТМТ'
    }, {
    })

    map.geoObjects.add(marker);
}


function addPolyline(coords, map) {
  /*  const line = new ymaps.Polyline([...coords], {}, {
        strokeColor: 'FF0000',
        strokeWidth: 4,
        strokeStyle: 'dash'
    })*/

    ymaps.modules.require(['geoObject.Arrow'], function (Arrow) {
        let arrow = new Arrow([...coords], {}, {
            geodesic: true,
            strokeColor: 'FF0000',
            strokeWidth: 4,
            strokeStyle: 'solid',
            arrowMaxLength: 15
        });

        map.geoObjects.add(arrow);
    });
}

