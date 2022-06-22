(function ($) {
	"use strict";

    jQuery(document).ready(function($){

    	//carousel items start

        $(".expertise-slider").owlCarousel({
            loop:true,
            autoplay: true,
            dots: false,
            navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            mouseDrag: true,
            touchDrag: true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                767:{
                    items:2,
                    nav:false
                },
                991:{
                    items:3,
                    nav:true
                },
                1200:{
                    items:4,
                    nav:true,
                }
            }
        });

        //carousel items end


    //jquery end 
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	