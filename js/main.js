var myswiper = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
});
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
      center: [7.57, 79.79],
      zoom: 8,
      controls: ["zoomControl"],
      behaviors: ["drag"],
    }),
    myGeoObject = new ymaps.GeoObject({
      // Описание геометрии.
      geometry: {
        type: "Point",
        coordinates: [7.57, 79.79],
      },
    });

  myMap.geoObjects.add(myGeoObject);
}
