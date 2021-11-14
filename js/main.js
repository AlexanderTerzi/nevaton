$(function () {

	// Hamburger
	  $('.menu-btn').on('click', function(e) {
	  e.preventDefault();
	  $(this).toggleClass('menu-btn_active');
	  $('.menu-mobile').toggleClass('menu-mobile_active');
	});

	// ArcticModal
  	$('.popup__form').click(function(e) {
  		e.preventDefault();
  		$('#form').arcticmodal();
  	});
  	$('.popup__privacy').click(function(e) {
  		e.preventDefault();
  		$('#privacy').arcticmodal();
  	});
  	$('.popup__example').click(function(e) {
  		e.preventDefault();
  		$('#example').arcticmodal();
  	});
    $('.popup__athermal').click(function(e) {
      e.preventDefault();
      $('#athermal').arcticmodal();
    });

	// Preloader
	var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');

	// Hamburger
	$('.menu-open').click(function (){
		$('.menu-collapse').toggleClass('d-none').css('order', '1');
		$('.menu__list').toggleClass('menu-opened');
	})

	$('.menu-opened li a').click(function (){
		$('.menu-collapse').toggleClass('d-none').css('order', '0');
		$('.menu__list').toggleClass('menu-opened');
	})

  $(".main-menu__item a").addClass("main-menu__link go_to");
    $(".menu-mobile__item a").addClass("menu-mobile__link go_to");

	// Плавный скроллинг
	$('.go_to').click( function(){
	var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
	    return false;
    });

    // Плавающая шапка
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500){  
            $('#header-fixed').addClass("sticky");
        }
        else{
            $('#header-fixed').removeClass("sticky");
        }
    });

    // Show more
    $('.gallery__btn_more').click(function() {
  		$('.gallery__wrap_hide').fadeIn();
	});

    // Slick slider
    $('.header__slider').slick({
    	infinite: true,
      dots: true,
    	autoplay: true,
      autoplaySpeed: 4000,
     	adaptiveHeight: true,
   		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
   		nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>'
  	});

  	// wow
  	new WOW().init();

    // TwentyTwenty
    $("#compare").twentytwenty({
      no_overlay: true
    });

});