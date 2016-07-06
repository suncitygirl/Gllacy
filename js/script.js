(function () {

  ymaps.ready(init);
  var myMap;

  function init() {
    myMap = new ymaps.Map("map", {
      center: [59.938429885190054, 30.32991749740603],
      zoom: [16],
      controls: []
    }),
    myMap.behaviors.disable("scrollZoom");
    myMap.controls.add("zoomControl");

    myPlacemark = new ymaps.Placemark([59.93866675783276,30.32307250000002], {
      hintContent: "г. Санкт-Петербург, ул. Б. Конюшенная, д. 19/8",
    }, {
      iconLayout: "default#image",
      iconImageHref: "img/map-marker.svg",
      iconImageSize: [79, 138],
      iconImageOffset: [-38, -130],
    });

    myMap.geoObjects.add(myPlacemark);
  }
})();
