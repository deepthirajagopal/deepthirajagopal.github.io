$(document).ready(function(){

	// Menu
	$( ".menu-icon" ).click(function() {
	  $( ".navigation" ).fadeToggle( "fast", "linear" );
	});
	$( ".menu-icon" ).click(function() {
	  $( this ).toggleClass( "active" );
	});
	$( ".share-icon" ).click(function() {
	  $( ".mobile-share-set" ).fadeToggle( "fast", "linear" );
	});
	
	// Flex slider nav controls 
	$('.nav-prev').on('click', function(){
		$('.flexslider').flexslider('prev')
		return false;
	})
	
	$('.nav-next').on('click', function(){
		$('.flexslider').flexslider('next')
		return false;
	})
	
	
	// Hide / Show info for index
	$(".flexslider .slides > li").click(function () {
		if ($(window).width() < 700) {
			$(this).children(".site-info").animate({top:0}, 200);
		}
		else {
			
		}
	});
	
	// Back Button
	$( ".back-icon" ).delay(1700).animate({
		opacity:1,
	}, 400, function() {
		// Animation complete.
	});
	
	
	$( ".site-button" ).click(function() {
		$('.flexslider').flexslider('next')
		return false;
	});
	
	// Audio Controls
	$(".audio").click(function() {
		$(this).children('.audio img.play').toggle();
		$(this).children('.audio img.pause').toggle();
	});
	
	// Mobile Helper
	$(".got-it").click(function () {
			$(".mobile-helper").fadeOut("fast");
	});
	
	// Menu Items
	$('.insta-icon').click( function() { window.open('http://instagram.com/deepthirajagopal/'); return false; } );
	$('.linked-icon').click( function() { window.open('https://in.linkedin.com/in/deepthirv'); return false; } );
	$('.be-icon').click( function() { window.open('https://www.behance.net/deepthi1992'); return false; } );
    /*$('.pav-name').click( function() { window.open('/resume', "_self"); return false; } ); */
	$('.resume-button').click( function() { window.open('resume/index.html', "_self"); return false; } );

	// Page Transition
	$( ".pade-transition" ).click(function() {
	  $( ".site-wrapper" ).fadeOut( "fast", "linear" );
	});
	
	// Lazy Load
	$("img.lazy").lazyload({
		 effect : "fadeIn",
	});
	
});


// Flexslider
$(window).load(function(){
	$('.flexslider').flexslider({
		animation: "slide",
		animationSpeed: 300,
		easing: "swing",
		useCSS: false,
		slideshow: false,
        animationLoop: false,
        itemMargin: 5,
		//direction: "vertical", 
		mousewheel: false,   
		directionNav: false,
    	contolNav: false,
		pager:true,
		manualControls: ".flex-control-nav li",
		before: function (slider) {
		  $(".project-info").animate({opacity:0}, 200);
		  $(".site-info").animate({opacity:0}, 200);
		},
		after: function (slider) {
			$(".site-info").animate({opacity:1}, 200);
			$(".project-info").animate({opacity:1}, 200);
			}
		});
});

// Preloader
$(window).load(function() { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow':'visible'});
}) 


// Scroll To
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
/*
$(function() {
$('html, body').delay(2000).animate({
     scrollTop: $('#main').offset().top
   }, 1000);
   });
*/

// AUDIO
$(function(){
  $('#audio-player, #audio-player-weekends, #audio-player-onlyones, #audio-player-beverly').mediaelementplayer({
    alwaysShowControls: true,
    features: ['playpause','progress'],
    audioVolume: 'horizontal',
    iPadUseNativeControls: false,
    iPhoneUseNativeControls: false,
    AndroidUseNativeControls: false
  });
});
