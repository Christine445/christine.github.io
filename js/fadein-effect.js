console.log('Hi, I\'m Christine Hümmer. Welcome to my portfolio site!');

$(document).ready(function() {
    "use strict"; $(window).scroll( function(){ // When user scrolls, execute this JQuery function
        $('.fadein').each( function(i){
            
                var top_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height() * 1.4; // How far the scroll is from the text

        if ( bottom_of_window > top_of_element) {
            $(this).animate({'opacity':'1'},500); // Controls opacity
            $(this).css({transform:'translateY(-100px)'},2000); // Controls y position
            }
        }); 
    });
});