---
layout: page
title: Events Calendar
---


# Regular events

#### Every Thursday at 8PM

- We meet regularly to work on different aspects of HAB launches, you are welcome to join. 
- Please have a computer with microphone, or a telephone that can dial 800 numbers ready.
- Please contact contact@hab.education to connect. 

<ul class="event-list" id="event-list">

</ul>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js" type="text/javascript"></script>
<script src="/js/list_events.js" type="text/javascript"></script>
<script>
function autorun()
{
	loadevents('/data/events.json', $('#event-list'));
}

if (document.addEventListener) document.addEventListener("DOMContentLoaded", autorun, false);
else if (document.attachEvent) document.attachEvent("onreadystatechange", autorun);
else window.onload = autorun;
</script>
