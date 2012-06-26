$(document).ready(init);

function init() {
	/* ========== DRAWING THE PATH AND INITIATING THE PLUGIN ============= */

	$.fn.scrollPath("getPath")

		// Move to 'start' element
		.moveTo(0, 0, {name: "start"})
		
		// Line to 'description' element
		//arc( centerX, centerY, radius, startAngle, endAngle, counterclockwise [,options] )
		.arc(0, 400, 400, -Math.PI/2, Math.PI/2, false)
		
		.lineTo(400, 800, {

			name: "description"
		})






		// Arc down and line to 'syntax'
		.arc(400, 1200, 400, -Math.PI/2, Math.PI/2, true)
		
		.lineTo(600, 1600, {
			callback: function() {
				highlight($(".settings"));
			},
			name: "syntax"
		})
		
		// Continue line to 'scrollbar'
		.lineTo(1750, 1600, {
			callback: function() {
				highlight($(".sp-scroll-handle"));
			},
			name: "scrollbar"
		})

		// Continue upwards to 'source'
		.lineTo(2400, -700, {
			name: "source"
		})
		
		// Small arc downwards
		.arc(2250, -700, 150, 0, -Math.PI/2, true)

		//Line to 'follow'
		.lineTo(1350, -850, {
			name: "follow"
		})
		// Arc and rotate back to the beginning.
		.arc(1300, 50, 900, -Math.PI/2, -Math.PI, true, {rotate: Math.PI*2, name: "end"});

	// We're done with the path, let's initate the plugin on our wrapper element
	$(".wrapper").scrollPath({drawPath: true, wrapAround: true});

	// Add scrollTo on click on the navigation anchors
	$("nav").find("a").each(function() {
		var target = this.getAttribute("href").replace("#", "");
		$(this).click(function(e) {
			e.preventDefault();
			
			// Include the jQuery easing plugin (http://gsgd.co.uk/sandbox/jquery/easing/)
			// for extra easing functions like the one below
			$.fn.scrollPath("scrollTo", target, 1000, "easeInOutSine");
		});
	});

	/* ===================================================================== */

	$(".settings .show-path").click(function(e) {
		e.preventDefault();
		$(".sp-canvas").toggle();
	}).toggle(function() {
		$(this).text("Hide Path");
	}, function() {
		$(this).text("Show Path");
	});

	

	
	}
