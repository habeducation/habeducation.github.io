Date.prototype.getMonthName = function(lang) {
    lang = lang && (lang in Date.locale) ? lang : 'en';
    return Date.locale[lang].month_names[this.getMonth()];
};

Date.prototype.getMonthNameShort = function(lang) {
    lang = lang && (lang in Date.locale) ? lang : 'en';
    return Date.locale[lang].month_names_short[this.getMonth()];
};

Date.locale = {
    en: {
       month_names: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
       month_names_short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
};

function loadevents(url, dest) {
	$.getJSON(url, function (json) {
    //console.log(json);
    var needsHeading = true;
    var lastFuture = true;
    var lastYearCat = 0;
	    $.each(json, function (i, ev) {
	        //alert(fb.result);
	        //var datetime = ev.Year + "-" + ev.Month + "-" + ev.Day;
	        var evdate = new Date(+("20" + ev.Year), +ev.Month, +ev.Day);
	        var today = new Date();

	        if (evdate > today) {
	        	if (needsHeading) {
	        		dest.append($("<h1>Future Special Events</h1>"));
	        		needsHeading = false;
	        	}
	        } else {
	        	if (lastFuture) {
	        		dest.append($("<h1>Past Special Events</h1>"));
	        		lastFuture = false;
	        	}
	        	if (lastYearCat != ev.Year) {
	        		dest.append($("<h1>20" + ev.Year + "</h1>"));
	        		lastYearCat = ev.Year;
	        	}
	        }
	       	dest.append(
	        	$('<li>').append(
	        		$('<time>').append(
	        				$('<span>').attr('class', 'day').text(ev.Day)
	        			).append(
	        				$('<span>').attr('class', 'month').text(evdate.getMonthNameShort())
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