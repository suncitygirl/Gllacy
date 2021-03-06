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

var link = document.querySelector(".open-modal");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var name = popup.querySelector("[name=fullname]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=feedback]");
var form = popup.querySelector("form");
var overlay = document.querySelector("body");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  overlay.classList.add("overlay")
  name.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  overlay.classList.remove("overlay")
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if(!name.value || !email.value || !text.value) {
    event.preventDefault();
  }
});
