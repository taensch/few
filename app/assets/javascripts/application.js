// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).on('turbolinks:load', function(){
    $(".sticker").sticky({ topSpacing: 0, center:true});

    /*var $root = $('html, body');
    $('#menu-main a').click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
        scrollTop: $(href).offset().top
        }, 500, function () {
        window.location.hash = href;
      });
      return false;
    });*/
  //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
      if ($(".main-menu").offset().top > 50) {
          $(".main-menu").addClass("top-nav-collapse");
      } else {
          $(".main-menu").removeClass("top-nav-collapse");
      }
  });

  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {
      $('.page-scroll a').bind('click', function(event) {
          var $anchor = $(this);
          var $id = $($anchor.attr('href').replace("/static_pages/index", ""));
          $('html, body').stop().animate({
              scrollTop: $($id).offset().top
          }, 1500, 'easeInOutExpo');
          event.preventDefault();
          console.log("scrolling is working!")
      });
  });
});
