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

#### Homework
Take those URLs, and modify your actual `img`s on the page!

- Change the 5 imgs for the first player.
- Also, add the image URL to the value of the radio tag.
- Make sure the actual avatar works on the board!

Here's the code to pull in images of dogs:

    function buildFlickrUrl(p) {
      var url = "https://farm";
      url += p.farm;
      url += ".staticflickr.com/";
      url += p.server;
      url += "/";
      url += p.id;
      url += "_";
      url += p.secret;
      url += ".jpg";

      return url;
    }
    
    $(document).ready(function() {

      var flickrUrl = "https://www.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=4ef070a1a5e8d5fd19faf868213c8bd0&nojsoncallback=1&text=dog";
      
      $.get(flickrUrl, function(response) { 
        // Loop through all photos in response.photos.photo
        // call console.log(some_photo.id);
        for(var i = 0; i < 5; i++) {
          var photoUrl = buildFlickrUrl(response.photos.photo[i]);
          $("img").eq(i).attr('src', photoUrl);
          $("input.player-1-avatar").eq(i).val(photoUrl);
        }
        //Note, this only works for the first player.
	  });
    
   	  // The rest of your code below...

Your homework is to make this pull in images of... anything!

- Add a "search" input, and link to press to actually call the search.
	- **Don't add a Search `<button>` tag, use a `<a>` tag**
	- A button tag will cause the form to submit!
- Add a `.click` listener to the Search link, which:
	- Grabs the value from the search input
	- Makes the `$.get` call for the flickr API, using the search term in place of `dog`.
- Make sure the avatar actually works on the board!

#### Advanced

- Add another search bar for player 2!
- Integrate into your own game!
