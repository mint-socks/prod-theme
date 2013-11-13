var   
	  loadingError = '<p class="error">Cannot find project.</p>',
      current,
	  next, 
	  prev,
	  target, 
	  hash,
	  url,
	  page,
	  title,
	  projectIndex,
	  scrollPostition,
	  projectLength,
      wrapperHeight,	  
      cache = false,  	  	  
	  ajaxLoading = false,
	  pageRefresh = true,
	  content = false,
      easing = 'easeOutExpo',
	  folderName = 'projects',
	  loader = $('div#loader'),
	  portfolioGrid = $('#projects.grid'),
	  projectContainer = $('div#ajax-inside'),
	  projectNavigation = $('#ajax-nav ul'),
	  exitProject = $('li#closeProject a');	


exitProject.hide();
projectNavigation.hide();
	  
$(function(){	


  $(window).bind( 'hashchange', function() {
	  
	  		 
 hash = $(window.location).attr('hash'); 
 var root = '#!'+ folderName +'/';
 var rootLength = root.length;	
 
 	 
	if( hash.substr(0,rootLength) != root ){
		return;						
	} else {	

		 var correction = 0;
		 var headerH = $('header').outerHeight()+correction;
		 hash = $(window.location).attr('hash'); 
	     url = hash.replace(/[#\!]/g, '' ); 
		 
		 
       
		portfolioGrid.find('li.grid-item.current').children().removeClass('active');
		portfolioGrid.find('li.grid-item.current').removeClass('current' );
		
		


		/* ADDRESS BAR LOAD */
		if(pageRefresh == true && hash.substr(0,rootLength) ==  root){	

				$('html,body').stop().animate({scrollTop: (projectContainer.offset().top-70)+'px'},800,'easeOutExpo', function(){											
					loadProject();																									  
				});
				
		/* PROJECT NAVIGATION / CLICK LOAD */
		}else if(pageRefresh == false && hash.substr(0,rootLength) == root){				
					$('html,body').stop().animate({scrollTop: (projectContainer.offset().top-headerH)+'px'},800,'easeOutExpo', function(){ 		
		
					if(content == false){						
						loadProject();							
					}else{	
						projectContainer.animate({opacity:0,height:wrapperHeight},function(){
						loadProject();
						});
					}
							
					projectNavigation.fadeOut('100');
					exitProject.fadeOut('100');
							
					});
			
		/* BROWSER NAVIGATION */	
		}else if(hash=='' && pageRefresh == false || hash.substr(0,rootLength) != root && pageRefresh == false || hash.substr(0,rootLength) != root && pageRefresh == true){	
		        scrollPostition = hash; 
				$('html,body').stop().animate({scrollTop: scrollPostition+'px'},1000,function(){				
							
					removeProject();								
							
				});
				
		}

		/* ADD ACTIVE CLASS TO CLICKED PROJECT */
		 portfolioGrid.find('li.grid-item .grid-project a[href="#!' + url + '"]' ).parent().parent().addClass( 'current' );
		 portfolioGrid.find('li.grid-item.current').find('.grid-project').addClass('active');

  }
	  
	});	  
	  	/* AJAX LOAD PROJECT */		
		function loadProject(){
		loader.fadeIn();
			
		if(!ajaxLoading) {				
	            ajaxLoading = true;
								
				projectContainer.load( url +' div#ajaxpage', function(xhr, statusText, request){
																   
						if(statusText == "success"){			
								
								ajaxLoading = false;
								
									page =  $('div#ajaxpage');		
			
									$('.flexslider').flexslider({
                        animationLoop: true,
                        pauseOnAction: true,
                        pauseOnHover: true,
                        smoothHeight: false,
                        directionNav: true,
                        controlNav: true,
                        animation: "slide"
                    });


$.stellar('refresh');
			
										hideLoader();	
														  
											
											
								
						}
						
						if(statusText == "error"){
						
								loader.addClass('loadingError').append(loadingError);
								

						}
					 
					});
				
			}
			
		}
	
		function hideLoader(){
			loader.fadeOut('slow', function(){													  
					showProject();					
			});			 
		}	
		
	function showProject(){
			if(content==false){
				    wrapperHeight = projectContainer.children('div#ajaxpage').outerHeight()+'px';
					projectContainer.animate({opacity:1,height:wrapperHeight}, function(){
				        
						scrollPostition = $('html,body').scrollTop();
						projectNavigation.fadeIn();
						exitProject.fadeIn();
						content = true;	
								
					});
					
			}else{
                    wrapperHeight = projectContainer.children('div#ajaxpage').outerHeight()+'px';
					projectContainer.animate({opacity:1,height:wrapperHeight}, function(){																		  
					
						scrollPostition = $('html,body').scrollTop();
						projectNavigation.fadeIn();
						exitProject.fadeIn();
						
					});

			
		
			}
					
			
projectNavigation.fadeIn('800');
					exitProject.fadeIn('800');

			projectIndex = portfolioGrid.find('li.grid-item.current').index();
			projectLength = $('li.grid-item.current .grid-project').length-1;
			
			
			if(projectIndex == projectLength){
				
				$('ul li#nextProject a').addClass('disabled');
				$('ul li#prevProject a').removeClass('disabled');
				
			}else if(projectIndex == 0){
				
				$('ul li#prevProject a').addClass('disabled');
				$('ul li#nextProject a').removeClass('disabled');
				
			}else{
				
				$('ul li#nextProject a,ul li#prevProject a').removeClass('disabled');
				
			}
		
	  }
	  
	  function removeProject(closeURL){
				projectNavigation.fadeOut(150);
				exitProject.fadeOut(150);				
				projectContainer.animate({opacity:0,height:'0px'});
				projectContainer.empty();
				
			if(typeof closeURL!='undefined' && closeURL!='') {
				location = '#_';
			}
			portfolioGrid.find('li.grid-item.current').children().removeClass('active');
			portfolioGrid.find('li.grid-item.current').removeClass('current' );			
	  }
	  
	  
     /* PROJECT BUTTON NAVIGATION */
	  $('#nextProject a').on('click',function () {											   							   
					 
		    current = portfolioGrid.find('li.grid-item.current');
		    next = current.next('li.grid-item');
		    target = $(next).children('div').children('a').attr('href');
			$(this).attr('href', target);
			
		
			if (next.length === 0) { 
				 return false;			  
			 } 
		   
		   current.removeClass('current'); 
		   current.children().removeClass('active');
		   next.addClass('current');
		   next.children().addClass('active');	
	   				   
		});

	    $('#prevProject a').on('click',function () {			
			
		  current = portfolioGrid.find('li.grid-item.current');
		  prev = current.prev('li.grid-item');
		  target = $(prev).children('div').children('a').attr('href');
		  $(this).attr('href', target);
			
		   
		   if (prev.length === 0) {
			  return false;			
		   }
		   
		   current.removeClass('current');  
		   current.children().removeClass('active');
		   prev.addClass('current');
		   prev.children().addClass('active');
		   
		});		
         /* CLOSE PROJECT BUTTON */
		 $('#closeProject a').on('click',function () {
			 
		    removeProject($(this).attr('href')); 			
			portfolioGrid.find('li.grid-item.current').children().removeClass('active');			
			loader.fadeOut();
			return false;	

		});		 
                $(window).trigger( 'hashchange' );
		 
		 /* FIX CONTENT POSITIONING */
		 $(window).bind('resize',function(){						
			$(projectContainer).css({height:'auto'});
											 
		}); 
		 pageRefresh = false;	  


});