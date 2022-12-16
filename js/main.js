$(document).ready(function(){
	$(".list").click(function(){
		var value = $(this).attr("data-filter");
		if(value == "all"){
			$(".itemBox").show('1000');
		}
		else{
			$(".itemBox").not("."+value).hide("1000");
			$(".itemBox").filter("."+value).show("1000");
		}
	})
	
	
});
$(".list").click(function(){
	$('.list').removeClass('active');
	$(this).addClass('active');
});
	$('.menu').on('click', function(){
	$('.menu').removeClass('active');
	$(this).addClass('active');
});



var posicionNavegacion = $('nav').offset().top;
		console.log(posicionNavegacion);
		$(window).on('scroll', function(){
		  var posicionScroll = $(window).scrollTop();
		  console.log(posicionScroll);
		  if(posicionScroll > posicionNavegacion){
		      $('nav').addClass('sticky-nav');
		  }
		  else{
		  	$('nav').removeClass('sticky-nav');
		  	
		  }
		});

		function responsivemenu(){
				let x=document.getElementById("nav");
				let y=document.getElementById("btn");
				 if (x.className === "navbar") {
		         x.className += " responsive";
		         btn.style.transform="rotate(90deg)";
		       } else {
		         x.className = "navbar";
		         btn.style.transform="rotate(0deg)";
		          };
			};
	