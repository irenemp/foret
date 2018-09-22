$(document).ready(function(){

// efecto escritura
  var instance = new TypeIt('#escritura', {
      strings: ['cosas bonitas', 'tu espacio', 'tu casa'],
      speed:100,
      breakLines:false,

  });

// efecto icono dibujable

 new Vivus('iconocasa', {duration: 200});




  });

  $(function() {
     $('.scroll-down').click (function() {
       $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
       return false;
     });
   });

   // Carousel owl plugin

     $('.owl-carousel').owlCarousel( {

     margin:30,
     loop:true,
    autoplay:true,
   autoplayTimeout:1800,
   autoplayHoverPause:true,
  responsiveClass:true,
       responsive:{
           0:{
               items:1,
               nav:true
           },
           600:{
               items:2,
               nav:false
           },

           768:{
               items:3,
               nav:false
           },

           1200:{
               items:4,
               nav:true,
               loop:true
           }
       }


     });

// llave scroll

     $(window).on("scroll",scrollParalax);

     		function scrollParalax() {
     			 var scrollUsuario = $(window).scrollTop();
     			 console.log(scrollUsuario);


     			 $('.fotollaves').css("transform", "translateX("+ -scrollUsuario * 0.18 + "px)");



     		}
