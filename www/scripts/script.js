$(document).ready(function(){

  let isSelect = $(document).find('select');
  if ( isSelect.length !== 0 ) {
    $('select').selectric();
  }
    
  // $('.community-photos').slick();



  $('.community-photos').slick({
    dots        : true,
    arrows      : false,
    mobileFirst : true,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768,
        settings  : {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1280,
        settings  : {
          slidesToShow: 6
        }
      }
    ]
  });

  $('.burger').on('click', function() {
    let nav = $('.page-header__drop');
    let burger = $(this);
    // let header

    if ( burger.hasClass('is-open') ) {
      nav.slideUp();
      burger.removeClass('is-open');
      $('.logo-mob__img').attr('src', 'images/logo-white.png');
      return;
    }

    nav.slideDown();
    burger.addClass('is-open');
    $('.logo-mob__img').attr('src', 'images/logo_footer-black.png');
  });

  $(window).resize(function(){
    if ( $(window).width() >= 1280 ) {
      $('.page-header__drop').attr('style', '');
      $('.burger').removeClass('is-open');
      $('.logo-mob__img').attr('src', 'images/logo-white.png');
    }
  });


  $(document).scroll(function(){
    if ( $(document).scrollTop() > 30 ) {
      $('.page-header').addClass('is-scroll');
      $('.burger').addClass('is-scroll');
      $('.logo-mob__img').attr('src', 'images/logo_footer-black.png');
    } else {
      $('.page-header').removeClass('is-scroll');
      $('.burger').removeClass('is-scroll');
      $('.logo-mob__img').attr('src', 'images/logo-white.png');
    }
  });


})