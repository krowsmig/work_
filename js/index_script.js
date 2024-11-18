$(document).ready(function(){

	// scroll up the content
	setTimeout(function(){
		$("html, body").animate({
			scrollTop: '0'
		}, 300);
	}, 0);

	// start word animation in the main
	$("p.main span").mouseover(function(){
		var spanIndex = $(this).index();

		$("#cont .sub_div").find("span.p_"+spanIndex).addClass("ani");

	});

	// stop animaton
	$("p.main span").mouseleave(function(){
		var spanIndex = $(this).index();

		$("#cont .sub_div").find("span.p_"+spanIndex).removeClass("ani");

	});


	// open extra list popup
	$("#forfun ul li a.see_more").click(function(){
		$("body").css("overflow","hidden");
		$(this).parent().parent().addClass("on");

		
		$(this).siblings(".fun_div").animate({
			scrollTop: '0'
		}, 0);

		return false;
	});

	// close the extra list popup
	$("#forfun ul li a.close").click(function(){
		$("body").css("overflow","auto");
		$(this).parent().parent().parent().parent().removeClass("on");
		return false;
	});

	// enable scroll of extra popup
	$("#forfun .fun_div").click(function(){
		$("body").css("overflow","auto");
		$("#forfun .pro_ul li").removeClass("on");
		return false;
	});

	// Close extra list by pressing the ESC key.
	$(document).keyup(function (e) {
	  if ($('#forfun .pro_ul li').hasClass('on') && e.keyCode === 27) { // ESC
	    $('#forfun .pro_ul li').removeClass('on');
	    $("body").css("overflow","auto");
	  }
	});

	// 
	$(".move_div button").click(function(){
		$(".move_div").addClass("close");
	});
	
});
