/*
 jQuery;
 */

"use strict";


jQuery(document).ready(function ($) {

	$(window).load(function () {
		$(".loaded").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});

	// // https://dashboard.emailjs.com/admin/account
	// emailjs.init('7ZikURkoIB5F5dLQB');

    // window.onload = function() {
    //     document.getElementById('contact-form').addEventListener('submit', function(event) {
    //         event.preventDefault();
    //         // generate a five digit number for the contact_number variable
    //         this.contact_number.value = Math.random() * 100000 | 0;
    //         // these IDs from the previous steps
    //         for(var i = 0; i < 25; i++) {
    //         emailjs.sendForm('service_dvj93yu', 'template_s04rsmd', this)
    //             .then(function() {
    //                 console.log('SUCCESS!');
    //             }, function(error) {
    //                 console.log('FAILED...', error);
    //             });
    //         }
    //     });
    // }




	jQuery('.scrollup').click(function () {
		$("html, body").animate({scrollTop: 0}, 2000);
		return false;
	});

	jQuery('.nav a').bind('click', function () {
		$('html , body').stop().animate({
			scrollTop: $($(this).attr('href')).offset().top - 80
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
	
	
	jQuery(window).scroll(function () {
	  var top = jQuery(document).scrollTop();
		var height = 300;
	  //alert(batas);
	  
	  if (top > height) {
		jQuery('.navbar-fixed-top').addClass('menu-scroll');
	  } else {
	   jQuery('.navbar-fixed-top').removeClass('menu-scroll');
	  }
	});	
 // Scroll up 

    $(window).scroll(function(){
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    }); 
 
 new WOW().init();

});
