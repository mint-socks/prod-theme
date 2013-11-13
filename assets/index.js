$(document).ready(function() {


/* one page navigation
=========================*/

// Cache selectors

var lastId,
    topMenu = $("#top-nav"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
});




/* twitter
=========================*/
$('#tweets').tweetable({
				username: 'envato', 
				time: true,
				rotate: false,
				speed: 4000, 
				limit: 1,
				replies: false,
				position: 'append',
				failed: "Sorry, twitter is currently unavailable for this user.",
				html5: true,
				onComplete:function($ul){
					$('time').timeago();
				}
			});



/* contact form
=========================*/
$('#submit').click(function(){

$('html, body').animate({
        scrollTop: $("#success").offset().top -150
    }, 1500);

$.post("sendemail.php", $("#contactform").serialize(),  function(response) {

$('#success').html(response);
$( '#contactform' ).each(function(){
    this.reset();
});
});
return false;
});
});


/* portfolio filters
=========================*/
$(window).load(function(){
 // cache container
var $container = $('#projects');


// initialize isotope
$container.isotope();

// filter items when filter link is clicked
$('#filters a').click(function(){
  var selector = $(this).attr('data-filter');
  $container.isotope({ filter: selector });
  return false;
});
var $optionSets = $('#options .option-set'),
          $optionLinks = $optionSets.find('a');
      $optionLinks.click(function(){
        var $this = $(this);
        // don't proceed if already selected
        if ( $this.hasClass('selected') ) {
          return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
 });


});