var myswiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
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
