;(function () {
	
	'use strict';

    $(".accordion-titulo").click(function(){
		
    var contenido=$(this).next(".accordion-content");
			
    if(contenido.css("display")=="none"){ //open		
      $('.accordion-content').slideUp(250)
      $('.accordion-titulo').removeClass("open");	
      contenido.slideDown(250);			
      $(this).addClass("open");
    }
    else{ //close		
      contenido.slideUp(250);
      $(this).removeClass("open");	
    }
							
    });
    
	var owlCarousel = function(){

        new WOW().init();

        $('.owl-carousel').owlCarousel({
            items : 4,
            loop  : true,
            margin : 170,
            center : true,
            smartSpeed :900,
            nav:true,
            navText: [
                "<i class='fa carousel-left-arrow fa-chevron-left'></i>",
                "<i class='fa carousel-right-arrow fa-chevron-right'></i>"
            ],
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:1,
                    nav:true,
                    margin : 120,
                },
                1000:{
                    items:3,
                    nav:true,
                    loop:true,
                    pagination: false,
                    paginationNumbers: true,
                    autoplay: true,
                    autoplayTimeout: 1500,
                    navText: [
                        "<i class='fa carousel-left-arrow fa-chevron-left'></i>",
                        "<i class='fa carousel-right-arrow fa-chevron-right'></i>"
                    ],
                }
            }
        });

	};

    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'slow');
        return this; // for chaining...
    }

	$(function(){
		owlCarousel();
	});

    var accordeonItems = document.querySelectorAll('.accordion-titulo')
    accordeonItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()
            var image = e.target.attributes['data-image'].value
            var complement_image = document.querySelector('#complement-image')
            complement_image.setAttribute('src', `img/complements/${image}.png`)
        })
    })


}());