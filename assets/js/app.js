$(function() {
  var header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrollOffset = $(window).scrollTop();

  /* Fixed Header */
  checkScroll(scrollOffset);

  $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  /* Smooth scroll */
  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $this.data("scroll"),
      blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate(
      {
        scrollTop: blockOffset
      },
      500
    );
  });

  /* Menu nav toggle */
  $("#nav_toggle").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  });

  /* Collapse */
  $("[data-collapse]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $this.data("collapse");

    $this.toggleClass("active");
  });

  /* Slider */
  $(document).ready(function() {
    var sliderConfig = {
      infinite: true,
      fade: false,
      slidesToScroll: 1
    };

    function setSliderSettings() {
      var windowWidth = $(window).width();
      if (windowWidth > 1230) {
        sliderConfig.slidesToShow = 3;
      } else if (windowWidth > 770) {
        sliderConfig.slidesToShow = 2;
      } else {
        return;
      }

      $("[data-slider]").slick(sliderConfig);
    }

    // Initialize the slider on page load
    setSliderSettings();

    // Re-initialize the slider when the window is resized
    $(window).resize(function() {
      setSliderSettings();
    });

    // Don't execute the script when the width is smaller than 770px
    if (window.matchMedia("(max-width: 770px)").matches) {
      return;
    }
  });
});

// Get the modal
var modals = document.querySelectorAll(".modal");

// Get the button that opens the modal
var modal_buttons = document.querySelectorAll(".modal_open");

var modal_close = document.querySelectorAll(".modal .close");

// When the user clicks the button, open the modal
modal_buttons.forEach(function(item) {
  item.onclick = function() {
    document.querySelector(item.getAttribute("data-target")).style.display =
      "block";
  };
});

modal_close.forEach(function(item) {
  item.onclick = function() {
    item.parentElement.style.display = "none";
  };
});

window.onclick = function(event) {
  if (event.target.getAttribute("role") === "dialog") {
    event.target.style.display = "none";
  }
};

VANTA.GLOBE({
  el: "#intro",
  mouseControls: true,
  touchControls: true,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0
});
function animateText(id, text, i) {
  document.getElementById(id).innerHTML = text.substring(0, i);
  i++;
  if (i > text.length) i = 0;
  setTimeout("animateText('" + id + "','" + text + "'," + i + ")", 100);
}
