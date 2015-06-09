$(document).ready(function() {
    
    /*
			 *  Simple image gallery. Uses default settings
			 */

			$('.fancybox').fancybox();

			/*
			 *  Different effects
			 */

			// Change title type, overlay closing speed
			$(".fancybox-effects-a").fancybox({
				helpers: {
					title : {
						type : 'outside'
					},
					overlay : {
						speedOut : 0
					}
				}
			});

			// Disable opening and closing animations, change title type
			$(".fancybox-effects-b").fancybox({
				openEffect  : 'none',
				closeEffect	: 'none',

				helpers : {
					title : {
						type : 'over'
					}
				}
			});

			// Set custom style, close if clicked, change title type and overlay color
			$(".fancybox-effects-c").fancybox({
				wrapCSS    : 'fancybox-custom',
				closeClick : true,

				openEffect : 'none',

				helpers : {
					title : {
						type : 'inside'
					},
					overlay : {
						css : {
							'background' : 'rgba(238,238,238,0.85)'
						}
					}
				}
			});

			// Remove padding, set opening and closing animations, close if clicked and disable overlay
			$(".fancybox-effects-d").fancybox({
				padding: 0,

				openEffect : 'elastic',
				openSpeed  : 150,

				closeEffect : 'elastic',
				closeSpeed  : 150,

				closeClick : true,

				helpers : {
					overlay : null
				}
			});

			/*
			 *  Button helper. Disable animations, hide close button, change title type and content
			 */

			$('.fancybox-buttons').fancybox({
				openEffect  : 'none',
				closeEffect : 'none',

				prevEffect : 'none',
				nextEffect : 'none',

				closeBtn  : false,

				helpers : {
					title : {
						type : 'inside'
					},
					buttons	: {}
				},

				afterLoad : function() {
					this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
				}
			});


			/*
			 *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
			 */

			$('.fancybox-thumbs').fancybox({
				prevEffect : 'none',
				nextEffect : 'none',

				closeBtn  : false,
				arrows    : false,
				nextClick : true,

				helpers : {
					thumbs : {
						width  : 50,
						height : 50
					}
				}
			});

			/*
			 *  Media helper. Group items, disable animations, hide arrows, enable media and button helpers.
			*/
				$('.fancybox-media')
				.attr('rel', 'media-gallery')
				.fancybox({
					openEffect : 'none',
					closeEffect : 'none',
					prevEffect : 'none',
					nextEffect : 'none',

					arrows : false,
					helpers : {
						media : {},
						buttons : {}
					}
				});

			/*
			 *  Open manually
			*/

			$("#fancybox-manual-a").click(function() {
				$.fancybox.open('1_b.jpg');
			});

			$("#fancybox-manual-b").click(function() {
				$.fancybox.open({
					href : 'iframe.html',
					type : 'iframe',
					padding : 5
				});
			});
    
    
    
    $("body").queryLoader2({
        barColor: "#efefef",
        backgroundColor: "#111",
        percentage: true,
        barHeight: 10,
        minimumTime: 100,
        fadeOutTime: 500
    });
    
    $.stellar({
        responsive: true,
        horizontalOffset: 60
    });
    
     
    $(".carousel").owlCarousel({
        loop: true,
        responsive:{
            0:{
            items:1,
            nav:true
            }
        },
        navText : ""
    });
    
    $('.popup').magnificPopup({type:'image'});
    $('.popup_c').magnificPopup();
    
    function wResize() {
        $("header").css("min-height", $(window).height());
    };
    
    wResize();
    $(window).resize(function() {
        wResize
    });
    
    
    $(".top_phone .wrapper .tab").click(function() {
	$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
    
    $(".footer_phone .wrapper .tab").click(function() {
	$(".footer_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".footer_phone .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
    
    
    $(".tab_header .wrapper .tab").click(function() {
	$(".tab_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_header .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".contacts_top .tab").click(function() {
	$(".contacts_top .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".contacts_top .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    
	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
        var ths = $(this)    
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
                var magnificPopup = $.magnificPopup.instance; 
                // save instance in magnificPopup variable
                magnificPopup.close(); 
                // Close popup that is currently opened
			     ths.trigger("reset");
            }, 1000);
		});
	});
	
});

$(window).load(function() {
    
    var $menu = $("#menu");

                $(window).scroll(function () {
                    if ($(this).scrollTop() > 100 && $menu.hasClass("default")) {
                        $menu.removeClass("default").addClass("fixed");
                        $('#contacts').fadeOut(0,function(){
                            $('#btn').fadeIn() //показываем контакты, уже после того, как скрыли логотип
                        }) //скрываем логотип

                    } else if ($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
                        $menu.removeClass("fixed").addClass("default");
                        $('#btn').fadeOut(0,function(){
                            $('#contacts').fadeIn() //показываем логотип, уже после того, как скрыли контакты
                        }) //скрываем контакты
                    }
                }); //scroll
    
    $(".top_header h1").animated("fadeInDown", "fadeInDown");
    $(".tab_header p").animated("fadeInUp", "fadeInUp");
    $(".tab_header form").animated("fadeInRight", "fadeInRight");
    $(".top_header h2").animated("fadeInUp", "fadeInUp");
    $(".tab_header .wrapper").animated("flipInY", "fadeOut");
    $(".how_floor").animated("flipInY", "fadeOut");
    $(".profi_item").animated("fadeInRight", "fadeOut");
    $(".s_profi form").animated("fadeInRight", "fadeOut");
    $(".tb_inf").animated("fadeInLeft", "fadeOut");
    $("footer").animated("fadeInUp", "");
    
});
