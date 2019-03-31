$(document).ready(function() {
    /*
    
        var waypoint = new Waypoint({
          element: document.getElementById('px-offset-waypoint'),
          handler: function(direction) {
            notify('I am 20px from the top of the window')
          },
          offset: 20 
          })
    */
    
    $('.js--section-mission').waypoint(function(direction) {
        if ($(window).width() <= 767 && direction == "down") {
            $('nav').addClass('sticky');
            $('.mobile-nav-icon').addClass('margin-neg');
        } else if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
            $('.mobile-nav-icon').removeClass('margin-neg');
        }
    }, {
        offset: '200px;'
    });
    
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        
        nav.slideToggle(200);
        
    })
    
})