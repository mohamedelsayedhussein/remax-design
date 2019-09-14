
$(document).ready(function(){

    var $header = $('header');

    $(window).scroll(function(){
      if($(this).scrollTop() > 0 ){
        $header.addClass('scrolled');
    } else {
        $header.removeClass('scrolled');
      }
    if($(this).scrollTop() > 50 ){
      $('.goTop').addClass('show');
    }else {
      $('.goTop').removeClass('show');
    }
    });

    $('.goTop').click(function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
    });

    $header.find('.menu-icon').click(function() {
      $header.find('.bottom-header').toggleClass('show');
      $(this).find($(".fa")).toggleClass('fa-times');
    });

    // show & hidden log page

    var activeUser = $header.find('.other-links .active-user');
    var log = $('#log-page');
      activeUser.click(function(e){
      e.preventDefault();
      log.fadeIn();
    });

    var close = log.find('.login-wrap .close-btn');
      close.click(function(){
      log.fadeOut();
    });

    log.click(function(){
        $(this).fadeOut(500);
    });

    log.find('.login-wrap').click(function(event){
      event.stopPropagation();
    });

    $(document).keydown(function(e){
        if (e.keyCode == 27) {
          log.fadeOut(500);
        }
      });
  });

//  init aos animation library
  AOS.init({
    duration: 600,
  });

  // select to plugin
  // $('#mselected').select2({
  //   placeholder: ""
  // });