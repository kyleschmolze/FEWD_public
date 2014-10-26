$(document).ready(function() {
	// Put your code in here!
	$("#grayButton").click(function(){
		$("body").attr('class', 'gray');
		$("a").replaceWith("<a href='duckduckgo.com?q=gray+dog'>Search for a gray dog.</a>")
		// OR
		$("a").attr('href', 'duckduckgo.com?q=something');
		$("a").text('Search for a gray dog.');

		var newHref = $("a").attr('href');
		newHref = newHref.replace("white", "gray");
		$("a").attr('href', newHref)
	});

});