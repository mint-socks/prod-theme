// Gumby is ready to go
Gumby.ready(function() {
	console.log('Houston we are online...', Gumby.debug());


Gumby.initialize('fittext');

	// placeholder polyfil
	if(Gumby.isOldie || Gumby.$dom.find('html').hasClass('ie9')) {
		$('input, textarea').placeholder();
	}
});

// Oldie document loaded
Gumby.oldie(function() {
	console.log("This is an oldie browser...");
});

Gumby.touch(function() {
	console.log("This is a touch enabled device...");
});




$(document).ready(function() {


/* sticky header
=========================*/
$("#navbar").sticky({topSpacing:0});


/* parallax background
=========================*/
$.stellar({
horizontalScrolling: false,
verticalOffset: -40		
});




/* flexslider
=========================*/

$('.flexslider').flexslider({
                        animationLoop: true,
                        pauseOnAction: true,
                        pauseOnHover: true,
                        smoothHeight: false,
                        directionNav: false,
                        controlNav: true,
                        animation: "slide"
                    });



});