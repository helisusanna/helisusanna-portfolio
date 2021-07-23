import $ from 'jquery';
$(document).ready(function(){
    $(window).scroll(function() {
		$(".slideanim").each(function(){
			let pos = $(this).offset().top;
			let winTop = $(window).scrollTop();

			if (pos < winTop + 600) {
				$(this).addClass("slide");
			}
		});
        
	});

/*	$("#img").each(function(){

		if ($('#img').is(":hover")) {
			$("#img").addClass("overlay");
		}
	});*/
});