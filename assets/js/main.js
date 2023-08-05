$( document ).ready(function() {
$(window).scroll(function () {
  if ($(window).scrollTop() >= 40) {
    $("#header").addClass("is-sticky");
  } else {
    $("#header").removeClass("is-sticky");
  }
});
});

const preloader = document.querySelector("#preloader");
if (preloader) {
  window.addEventListener("load", () => {
    preloader.remove();
  });
}

/**
 * Sticky Header on Scroll
 */
//  $( document ).ready(function() {
// const selectHeader = document.querySelector("#header");
// if (selectHeader) {
//   let headerOffset = selectHeader.offsetTop;
//   let nextElement = selectHeader.nextElementSibling;

//   const headerFixed = () => {
//     if (headerOffset - window.scrollY <= 500) {
//       selectHeader.classList.add("sticked");
//       if (nextElement) nextElement.classList.add("sticked-header-offset");
//     } else {
//       selectHeader.classList.remove("sticked");
//       if (nextElement) nextElement.classList.remove("sticked-header-offset");
//     }
//   };
//   window.addEventListener("load", headerFixed);
//   document.addEventListener("scroll", headerFixed);
// }
//  });

/**
 * Navbar links active state on scroll
 */
let navbarlinks = document.querySelectorAll("#navbar a");

function navbarlinksActive() {
  navbarlinks.forEach((navbarlink) => {
    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    let position = window.scrollY + 200;

    if (
      position >= section.offsetTop &&
      position <= section.offsetTop + section.offsetHeight
    ) {
      navbarlink.classList.add("active");
    } else {
      navbarlink.classList.remove("active");
    }
  });
}
window.addEventListener("load", navbarlinksActive);
document.addEventListener("scroll", navbarlinksActive);

/**
 * Mobile nav toggle
 */
const mobileNavShow = document.querySelector(".mobile-nav-show");
const mobileNavHide = document.querySelector(".mobile-nav-hide");

document.querySelectorAll(".mobile-nav-toggle").forEach((el) => {
  el.addEventListener("click", function (event) {
    event.preventDefault();
    mobileNavToogle();
  });
});

function mobileNavToogle() {
  document.querySelector("body").classList.toggle("mobile-nav-active");
  mobileNavShow.classList.toggle("d-none");
  mobileNavHide.classList.toggle("d-none");
}

/**
 * Hide mobile nav on same-page/hash links
 */
document.querySelectorAll("#navbar a").forEach((navbarlink) => {
  if (!navbarlink.hash) return;

  let section = document.querySelector(navbarlink.hash);
  if (!section) return;

  navbarlink.addEventListener("click", () => {
    if (document.querySelector(".mobile-nav-active")) {
      mobileNavToogle();
    }
  });
});

/**
 * Toggle mobile nav dropdowns
 */
const navDropdowns = document.querySelectorAll(".navbar .dropdown > a");

navDropdowns.forEach((el) => {
  el.addEventListener("click", function (event) {
    if (document.querySelector(".mobile-nav-active")) {
      event.preventDefault();
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("dropdown-active");

      let dropDownIndicator = this.querySelector(".dropdown-indicator");
      dropDownIndicator.classList.toggle("bi-chevron-up");
      dropDownIndicator.classList.toggle("bi-chevron-down");
    }
  });
});

//  client carousel --------------
$(".client-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// number counter ------------
function visible(partial) {
  var $t = partial,
    $w = jQuery(window),
    viewTop = $w.scrollTop(),
    viewBottom = viewTop + $w.height(),
    _top = $t.offset().top,
    _bottom = _top + $t.height(),
    compareTop = partial === true ? _bottom : _top,
    compareBottom = partial === true ? _top : _bottom;

  return (
    compareBottom <= viewBottom && compareTop >= viewTop && $t.is(":visible")
  );
}

$(window).scroll(function () {
  if (visible($(".count-digit"))) {
    if ($(".count-digit").hasClass("counter-loaded")) return;
    $(".count-digit").addClass("counter-loaded");

    $(".count-digit").each(function () {
      var $this = $(this);
      jQuery({ Counter: 0 }).animate(
        { Counter: $this.text() },
        {
          duration: 3000,
          easing: "swing",
          step: function () {
            $this.text(Math.ceil(this.Counter));
          },
        }
      );
    });
  }
});

// Testimonail carousel -------
$(".testimonal-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
