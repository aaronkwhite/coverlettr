$(document).ready(init);

function init() {

	$.fn.scrollPath("getPath")

	// Move to 'start' element
	.moveTo(0, 0, {name: "one"})




	$(".settings .show-path").click(function(e) {
		e.preventDefault();
		$(".sp-canvas").toggle();
	}).toggle(function() {
		$(this).text("Hide Path");
	}, function() {
		$(this).text("Show Path");
	});

}