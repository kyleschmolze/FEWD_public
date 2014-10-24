## For loops

Let's say we want 5 pieces of input:

	var a = prompt("Provide a number:");
	var b = prompt("Provide a number:");
	var c = prompt("Provide a number:");
	var d = prompt("Provide a number:");
	var e = prompt("Provide a number:");

We could clean this up by using an array:

	var responses = [];
	responses.push(prompt("Provide a number:"));
	responses.push(prompt("Provide a number:"));
	responses.push(prompt("Provide a number:"));
	responses.push(prompt("Provide a number:"));
	responses.push(prompt("Provide a number:"));
	
That's still a lot of repetition! How about this?

	var responses = [];
	for(var i = 0; i < 5; i++) {
		responses.push(prompt("Provide a number:"));
	}


## Selecting a random element from an array

Let's say we have this array:

	var myArray = [100, 101, 102, 103, 104, 105];
	
How do we select a random element? First, how to we select *any* element?

	myArray[0] // 100, the first element
	myArray[5] // 105, the last element

Check this guy out in your console:

	Math.random() // 0.03640474425628781
	Math.random() // 0.25629262183792894
	Math.random() // 0.13557538762688637
	// It's different every time!
	
It always returns numbers between 0 and 1 (including 0, excluding 1). So how do we take a random number between 0 and 1, and turn it into a random number between 0 and 5?

	Math.random() * 6 // Gives us a number from 0 to 5.999999999999999
	Math.floor(Math.random() * 6) // Rounds down, so we get an integer from 0-5
	Math.floor(Math.random() * myArray.length) // Abstract out the length
	myArray[Math.floor(Math.random() * myArray.length)] // Grab the element!
	


## Fortune Teller

#### Step 1

- Start with a blank template
- Write a program which prompts the user 5 times for potential "fortunes"
- Add each fortune into an array
- Select a random element from the array using Math.random()
- `console.log` the randomly chosen fortune

#### Step 2

- Wrap your program into a function called `predictFuture()`
- Add a button to your html page which calls the function when clicked:

	```
		<button onclick='predictFuture();'>Predict the future</button>
	```

#### Advanced

- Instead of prompting the user 5 times for input, add an input field and button to your page:

	```
		<input type='text' id='newPrediction' />
		<button onclick='addPrediction()'>Add</button>
	```

- Write a function `addPrediction` to be executed when the user clicks the button. This function should:
	- Read the contents of the input using `document.getElementById('newPrediction').value;`
	- Add the input to the array of predictions.
	- Clear the input.
- The user can add as many predictions as they want, and then click the "Predict the future" button to receive a prediction.
- Optionally, add a `<span>` tag which contains the number of predictions currently in the array. Update this number every time the user adds a new prediction.
