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
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive: {
      // breakpoint from 0 up
      0 : {
        items: 1
      },
      // breakpoint from 480 up
      480 : {
        items: 2
      }
    }
  });
});


/* ----------------------------------
    Progress Bars
  ----------------------------------- */
$(function() {
  $('#progress-elements').waypoint(function() {
    $(".progress-bar").each(function() {
      $(this).animate({width: $(this).attr("aria-valuenow") + '%'}, 1000);
    });
    this.destroy();
  }, {
    offset: 'bottom-in-view'
  });
});

/* ----------------------------------
    Responsive Tabs
  ----------------------------------- */

$(function() {
  $("#services-tabs").responsiveTabs({
    animation: 'slide'
  });
});


/* ----------------------------------
    Portfolio
  ----------------------------------- */

$(window).on('load', function() {
  // init Isotope
  var $grid = $('#isotope-container').isotope({
    // options
  });
  
  $('#isotope-filters').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    $('#isotope-filters').find('.active').removeClass('active');
    $(this).addClass('active');
  });
});

/* ----------------------------------
    Magnifier
  ----------------------------------- */

$(function() {
  $('#portfolio-wrapper').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }
    // other options
  });
});

/* ----------------------------------
    Testimonials
  ----------------------------------- */

$(function(){
  $("#testimonial-slider").owlCarousel({
    items: 1,
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
    Stats
  ----------------------------------- */
$(function() {
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
});

/* ----------------------------------
    Clients
  ----------------------------------- */

$(function(){
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots:false,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive: {
      // breakpoint from 0 up
      0 : {
        items: 2
      },
      // breakpoint from 480 up
      480 : {
        items: 3
      },
      768 : {
        items: 6
      }
    }
  });
});

/* ----------------------------------
    Navigation
  ----------------------------------- */
$(function() {
  showHideNav();
  $(window).scroll(function() {
    showHideNav();
  });
  
  function showHideNav() {
    if($(window).scrollTop() > 50) {
      $('nav').addClass('white-nav-top');
      $('.navbar-brand img').attr("src", "img/logo/logo-dark.png");
      
      $('#back-to-top').fadeIn();
    }else {
      $('nav').removeClass('white-nav-top');
      $('.navbar-brand img').attr("src", "img/logo/logo.png");
      $('#back-to-top').fadeOut(100);
    }
  }
  
});

/* ----------------------------------
    Smooth Scrolling
  ----------------------------------- */
$(function() {
  $('.smooth-scroll').click(function(event) {
    event.preventDefault();
    
    var section_id = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(section_id).offset().top - 64
    }, 1250, 'easeInOutExpo');
  });
})

/* ----------------------------------
    Mobile Menu
  ----------------------------------- */
$(function() {
  $('#mobile-nav-open-btn').click(function() {
    $('#mobile-nav').css('height', '100%');
  });
  
  $('#mobile-nav-close-btn, #mobile-nav a').click(function() {
    $('#mobile-nav').css('height', '0%');
  });
});

/* ----------------------------------
    Wow Animation
  ----------------------------------- */
$(function() {
  new WOW().init();
});

$(window).on('load', function() {
  $("#home-heading-1").addClass("animated fadeInDown");
  $("#home-heading-2").addClass("animated fadeInDown");
  $("#home-text").addClass("animated fadeInDown");
  $("#home-btn").addClass("animated fadeInDown");
  $("#arrow-down i").addClass("animated fadeInDown infinite");
});









