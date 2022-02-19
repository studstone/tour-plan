var hotelSlider = new Swiper(".hotel-slider", {
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

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  document
    .querySelector(".navbar-bottom")
    .classList.toggle("navbar-bottom--visible");
});

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

var reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
});

$(document).ready(function () {
  // Populate images from data attributes.
  var scrolled = $(window).scrollTop();
  $(".parallax").each(function (index) {
    var imageSrc = $(this).data("image-src");
    var imageHeight = $(this).data("height");
    $(this).css("background-image", "url(" + imageSrc + ")");
    $(this).css("height", imageHeight);

    // Adjust the background position.
    var initY = $(this).offset(1).top;
    var height = $(this).height();
    var diff = scrolled - initY;
    var ratio = Math.round((diff / height) * 100);
    $(this).css(
      "background-position",
      "center " + parseInt(-(ratio * 1.5)) + "px"
    );
  });

  // Attach scroll event to window. Calculate the scroll ratio of each element
  // and change the image position with that ratio.
  // https://codepen.io/lemagus/pen/RWxEYz
  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();
    $(".parallax").each(function (index, element) {
      var initY = $(this).offset().top;
      var height = $(this).height();
      var endY = initY + $(this).height();

      // Check if the element is in the viewport.
      var visible = isInViewport(this);
      if (visible) {
        var diff = scrolled - initY;
        var ratio = Math.round((diff / height) * 100);
        $(this).css(
          "background-position",
          "center " + parseInt(-(ratio * 1.5)) + "px"
        );
      }
    });
  });
});

// Check if the element is in the viewport.
// http://www.hnldesign.nl/work/code/check-if-element-is-visible/
function isInViewport(node) {
  // Am I visible? Height and Width are not explicitly necessary in visibility
  // detection, the bottom, right, top and left are the essential checks. If an
  // image is 0x0, it is technically not visible, so it should not be marked as
  // such. That is why either width or height have to be > 0.
  var rect = node.getBoundingClientRect();
  return (
    (rect.height > 0 || rect.width > 0) &&
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
