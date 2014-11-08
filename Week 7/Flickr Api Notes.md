# Let's integrate with an API!

Baby steps, y'all.

### Remember objects?

	var obj = {
		aNumber: 5,
		aKey: 'aValue',
		aList: [
			'one',
			'two',
			'three'
		]
	}
	
	obj.aList[1]; // 'two'

They're pretty cool. Do the exercise!

#### Step 0
Make sure you can enter players' names into an input, and then put those names somewhere on the board.

#### Step 1
Let's let the user pick their avatar! Add 5 images, with 5 corresponding radio options. When the form submits, grab the selected radio, get it's `val()` (the url of the image, and then set that as the player icon on the board!)

Do the first one as a group, the lab for the other 4.

#### Step 2
Let's get the API call up and running! 

	$.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=4ef070a1a5e8d5fd19faf868213c8bd0&nojsoncallback=1&text=dog", function(response) { 
        console.log(response);
    });
    // Schwat is going on here?

#### Step 3
Loop through the images, and `console.dir` each photo object.

#### Step 4
Write a function called `photoUrl` that takes in a photo object as it's argument, and `return`s a string, which is the full URL of the actual photo. Here is the structure for the URL:

	https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

Source: [https://www.flickr.com/services/api/misc.urls.html](https://www.flickr.com/services/api/misc.urls.html)

#### Step 5
Make your loop print out the full URL of the actual photo. Test them out by copy-pasting in your browser!

#### Step 6
Take those URLs, and modify your actual `img`s on the page!

- Change the 5 imgs for each player.
- Player 1 should see dogs, player 2 should see cats
- Also, add the image URL to the value of the radio tag
- Make sure the actual avatar works on the board!

#### Advanced
Add a search input, and search button, for each player. On click, query the flickr API for matching images based on the search term, and show the first 5 options.

Plug it all in!

#### Maybe
Go over JSONP.