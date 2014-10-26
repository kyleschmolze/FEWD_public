I haven't decided which homework we're going to do. It will be one of these two options:

##Option 1: Image Carousel

| | |
| ------------- |:-------------|
| __Topics__ | .foreach(), repetition, looping, arrays, image carousel. | 
| __Description__| Students create a basic image carousel using arrays and .foreach jQuery function. |    
| __Activity Type__| Paired | 


####Instructional Design Notes 

In this lab, students will build a version of the carousel. Students can choose whether to use the provided photos of food or animals or pull photos from another location.

*	Use a jQuery `click` listener to navigate between pictures when back and forward buttons are clicked.

*	There is a working version of the carousel in `code/carousel/carousel_obfuscated_solution`.

*	Add a `select` tag with 5 options, for the numbers 1-5. If a user rates a picture, use the `onChange` jQuery listener to store the number, and then flip to the next picture. 
*	After all pictures have been rated, display the average rating to the user.


__Bonus__: 

- Add a step at the beginning of the process:
	- First, the user is presented with an input field, and "Add picture" button.
	- The user may then input the URL of an image into the field, and click the "Add picture" button. 
	- This appends the image URL to an array, and clears the field. 
	- The user may add as many image URLs as they'd like.
	- Keep a running tally of how many images have been added so far, display that number to the user.
	
- There should be an "All done" button below. When clicked, this hides the input, and both buttons, and displays the carousel.
- Now, the carousel reads the images from the image URLs that were input in the first step.
- The carousel still behaves entirely like the original implementation. But now the user can enter their own URLs!