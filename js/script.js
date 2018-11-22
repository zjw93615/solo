/* ----------------------------------
    Preloader
  ----------------------------------- */

$(window).on('load', function() {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
});


/* ----------------------------------
    Team
  ----------------------------------- */
$(function(){
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots:false,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
  });
});


/* ----------------------------------
    Progress Bars
  ----------------------------------- */
$(function() {
  $(".progress-bar").each(function() {
    
    $(this).animate({width: $(this).attr("aria-valuenow") + '%'}, 1000);
  });
});






