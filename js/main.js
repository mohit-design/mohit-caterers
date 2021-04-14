$(function() {
  // On Scroll Logo and Navbar Menu Background Change JS
	$(window).scroll(function(){
	  if ($(window).scrollTop() >= 400) {
	    $(".bg-logo-navbar-menu-desktop").addClass("active");
	   } else {
	    $(".bg-logo-navbar-menu-desktop").removeClass("active");
	   }
	});
  // Smooth Animation On Click of Navbar Menu
  $(".menu-listing-desktop > li > a, .menu-listing-mobile > li > a, .footer-listing > li > a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      offset = 60;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - offset
      }, 1400);
    }
  });
  $(".menu-listing-desktop > li > a").click(function() {
    $(".menu-listing-desktop > li > a").parent().removeClass("active");
    $(this).parent().addClass("active");
  });
  $(".menu-listing-mobile > li > a").click(function() {
    $(".menu-listing-mobile > li > a").parent().removeClass("active");
    $(this).parent().addClass("active");
  });
  // On Scroll Active Class and Remove Class
  $(".menu-listing-desktop, .menu-listing-mobile").onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 1400,
    scrollThreshold: 0.10,
    filter: '',
    easing: 'swing'
  });
  // Mobile Menu JS
	$(".burger-menu").click(function() {
    $(this).toggleClass("active");
		$(".fixed-navbar-menu-mobile").toggleClass("active");
    $(".menu-listing-mobile").toggleClass("active");
    $(".veg-non-veg-listing-mobile").toggleClass("active");
		$("body").toggleClass("active");
  });
  $(".menu-listing-mobile > li > a").click(function() {
    $(".burger-menu").removeClass("active");
    $(".fixed-navbar-menu-mobile").removeClass("active");
		$(".menu-listing-mobile").removeClass("active");
    $(".veg-non-veg-listing-mobile").toggleClass("active");
		$("body").removeClass("active");
  });
  // Scroll To Top JS
  var offset = 400;
  var duration = 700;
  $(window).scroll(function() {
    if($(this).scrollTop() > offset) {
      $(".scroll-to-top").fadeIn(700).addClass("active");
    } else {
      $(".scroll-to-top").fadeOut(700).removeClass("active");
    }
  });
  $(".scroll-to-top").click(function(event) {
    event.preventDefault();
    $('html,body').animate({scrollTop: 0},4000);
    if($(".menu-listing > li > a").parent().hasClass("active")) {
      $(".menu-listing > li > a").parent().removeClass("active");
      $(".menu-listing > li:nth-child(1) > a").parent().addClass("active");
    }
  });
  // Banner Slick Slider JS
  $(".banner-slick-slider-home").slick({
    arrows: false,
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 700,
    fade: true,
    cssEase: 'linear'
  });
  // Testimonials Slick Slider JS
  $(".testimonials-slick-slider-home").slick({
    arrows: false,
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // AOS Animation JS
  AOS.init({
    easing: 'ease-in-out-sine'
  });
});
// Disabled "Ctrl" and "Ctrl + Shift" Keys JS
$(document).keydown(function (event) {
  if (event.keyCode == 123) {
      return false;
  }
  else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
      return false;
  }
});
// Disabled Right Click JS
window.oncontextmenu = function () {
  return false;
}
// Disabled Ctrl + U and Ctrl + C JS
$(document).keydown(function(event) {
	var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();
	if (event.ctrlKey && (pressedKey == "c" || pressedKey == "u")) {
	return false;
	}
});