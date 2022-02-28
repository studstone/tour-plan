function send(event, php) {
  console.log("Отправка запроса");
  event.preventDefault ? event.preventDefault() : (event.returnValue = false);
  var req = new XMLHttpRequest();
  req.open("POST", php, true);
  req.onload = function () {
    if (req.status >= 200 && req.status < 400) {
      json = JSON.parse(this.response);
      console.log(json);

      if (json.result == "success") {
        alert("Сообщение отправлено");
      } else {
        alert("Ошибка. Сообщение не отправлено");
      }
    } else {
      alert("Ошибка сервера. Номер: " + req.status);
    }
  };

  req.onerror = function () {
    alert("Ошибка отправки запроса");
  };
  req.send(new FormData(event.target));
}

$(document).ready(function () {
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom--visible");
  });

  var hotelSlider = new Swiper(".hotel-slider", {
    loop: true,
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

  var reviewsSlider = new Swiper(".reviews-slider", {
    loop: true,
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
    var scrolled = $(window).scrollTop();
    $(".parallax").each(function (index) {
      var imageSrc = $(this).data("image-src");
      var imageHeight = $(this).data("height");
      $(this).css("background-image", "url(" + imageSrc + ")");
      $(this).css("height", imageHeight);

      var initY = $(this).offset().top;
      var height = $(this).height();
      var diff = scrolled - initY;
      var ratio = Math.round((diff / height) * 100);
      $(this).css(
        "background-position",
        "cover " + parseInt(-(ratio * 1.5)) + "px"
      );
    });

    $(window).scroll(function () {
      var scrolled = $(window).scrollTop();
      $(".parallax").each(function (index, element) {
        var initY = $(this).offset().top;
        var height = $(this).height();
        var endY = initY + $(this).height();

        var visible = isInViewport(this);
        if (visible) {
          var diff = scrolled - initY;
          var ratio = Math.round((diff / height) * 100);
          $(this).css(
            "background-position",
            "cover " + parseInt(-(ratio * 1.5)) + "px"
          );
        }
      });
    });
  });

  function isInViewport(node) {
    var rect = node.getBoundingClientRect();
    return (
      (rect.height > 0 || rect.width > 0) &&
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  $(document).keydown(function (e) {
    var code = e.keyCode || e.which;
    if (code == 27) $("modal").hide();
  });
  $(".modal__form").validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Please specify your name",
        minLength: "Name must be at least 2 letters",
      },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com",
      },
      phone: "Please specify your phone number",
    },
  });
  $(".footer__form").validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Please specify your name",
        minLength: "Name must be at least 2 letters",
      },
      phone: "Please specify your phone number",
    },
  });
  $(".subscribe").validate({
    errorClass: "invalid-1",
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com",
    },
  });
});

let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);

AOS.init();
