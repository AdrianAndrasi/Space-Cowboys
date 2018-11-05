$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".priesvitna").css("background" , "#404040");
	  }

	  else {
		  $(".dark").css("background" , "404040");  	
	  }
  })
})