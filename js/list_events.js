function loadevents(url, dest) {
	$.getJSON(url, function (json) {
    //console.log(json);
	    $.each(json, function (i, ev) {
	        //alert(fb.result);
	        var datetime = ev.Year + "-" + ev.Month + "-" + ev.Day;

	       	dest.append(
	        	$('<li>').append(
	        		$('<time>').attr('datetime', datetime).append(
	        				$('<span>').attr('class', 'day').text(ev.Day)
	        			).append(
	        				$('<span>').attr('class', 'month').text(ev.Month + "/" + ev.Year)
	        			)
	        	).append(
	        		$('<div>').attr('class', 'info').append(
	        				$('<h2>').attr('class', 'title').text(ev.Title)
	        			).append(
	        				$('<p>').attr('class', 'loc').text(ev.Location)
	        			)
	        	).append(
	        				$('<div>').attr('class', 'desc').text(ev.Description)
	        			)
	        	);
	    });
	});
}