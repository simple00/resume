
function main(){
    (function () {
    	
    	//nav scroll
    	
        $(window).bind('scroll',function(){

            $(window).scroll(function() {
			    if ($(".navbar").offset().top > 100) {
			        $(".navbar-fixed-top").addClass("top-nav-collapse");
			    } else {
			        $(".navbar-fixed-top").removeClass("top-nav-collapse");
			    }
			});
        })

        // mouse scroll
        $('a.page-scroll').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 40
                    }, 900);
                    return false;
                }
            }
        });
		
		 
		
        
        /*====================================
    experence Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $container = $('#portfolio');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	
	// ****************************************************************
        


    }());


}
main();
