$(document).ready(function(){

  let isSelect = $(document).find('select');
  if ( isSelect.length !== 0 ) {
    $('select').selectric();
  }

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


  $('.slider').slick({
    dots        : true,
    arrows      : false,
    slidesToShow: 1
  });


  let isMainPage = $('.page-header').hasClass('page-header--main');

  $('.burger').on('click', function() {
    let burger = $(this);
    let isOpen = burger.hasClass('is-open');

    if ( isOpen && isMainPage ) {
      closeDrop(burger);
      showWhiteLogo();
      return;
    } else if ( isOpen ) {
      closeDrop(burger);
      return;
    }

    openDrop(burger);
    if ( isMainPage ) {
      showBlackLogo();
    }
  });



  $(window).resize(function(){
    if ( $(window).width() >= 1280 ) {
      $('.page-header__drop').attr('style', '');
      $('.burger').removeClass('is-open');
      $('.logo-mob__img').attr('src', 'images/logo-white.png');
    }
  });


  $(document).scroll(function(){
    if ( $(document).scrollTop() > 30 && isMainPage ) {
      $('.page-header').addClass('is-scroll');
      $('.burger').addClass('is-scroll');
      showBlackLogo();
    } else if ( $(document).scrollTop() <= 30 && isMainPage) {
      $('.page-header').removeClass('is-scroll');
      $('.burger').removeClass('is-scroll');
      showWhiteLogo();
    }
  });


  function closeDrop(burger) {
    let nav = $('.page-header__drop');
    nav.slideUp();
    burger.removeClass('is-open');
  }

  function openDrop(burger) {
    let nav = $('.page-header__drop');
    nav.slideDown();
    burger.addClass('is-open');
  }

  function showWhiteLogo() {
    $('.logo-mob__img--black').css({
        display: 'none'
    });

    $('.logo-mob__img--white').css({
        display: 'block'
    });
  }

  function showBlackLogo() {
    $('.logo-mob__img--black').css({
        display: 'block'
    });
    $('.logo-mob__img--white').css({
        display: 'none'
    });
  }

});
