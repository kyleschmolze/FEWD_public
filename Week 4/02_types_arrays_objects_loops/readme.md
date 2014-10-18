# Moar JavaScript

## Objectives
* Be able to use various JS data types
* Be able to manipulate JS Arrays and Objects
 
## Final Project!
Check the `Final Project` folder. Proposals are due in 2 weeks.

## Comments in Javascript:

* JavaScript uses `//` for line comments and `/* ... */` for multiline comments.

Ex:
	
	var x = 5; // This text will be ignored
	
	/* 
		So will
		this one.
	*/
	
	console.log(x);

## Types

There are certain *types* of data that we can put into a variable:

	var x = 5;
	var y = true;
	var z = "Hello, World.";
	
Even though they're all declared with `var`, they are in fact different "data types". Let's review some JS data types:

#### Numbers 

Numbers are one of the *types* of **values** we want to be able to interact and play with in JS.

* Numbers can be integers

  ```
   ..., -1,0, 2, 3, 4, 5, ... 
  ```
* Numbers can also be decimals

  ```
   2.718, 3.14, .5, .25, etc
  ```

In JS these are the same **type** of object, which it calls `Number`.

#### Strings

Strings are collections of letters and symbols known as **Characters**, and we use them to deal with words and text in Javascript. Strings are just another type of **value** in Javascript.

```
"John", "Jane", "Joe"
```

#### Booleans

Booleans can only have two values: `true` and `false`. These are great for if-statements.

#### Undefined variables

When a variable has never been assigned, it is of type `undefined`:

	var x;
	console.log(x);
	==> undefined


#### Exercise

What do each of these expressions evaluate to? (Hint: `!` means "not")

1. `5 < 6`
2. `5 !== "5"`
3. `5 == "5"`
4. `!true`
5. `!!5`
 
## Arrays 

Unfortunately, strings and numbers are not enough for most programming purposes. 
Very often, we need to store lists of information. In javascript, lists are called *arrays*.

Arrays are great for:

* Storing data
* Enumerating data
* Quickly reordering data 

	var friends = ['Moe', 'Larry', 'Curly'];
	=> ['Moe', 'Larry', 'Curly']


Now we have an array `friends`, which has 3 elements in it. We can ask the `friends` array for it's first, second, or third element specifically:

	// Get the first friend
	var first = friends[0];
	==> 'Moe'

	// Get the second friend	
	var second = friends[1];
	==> 'Larry'

	// Get the third friend	
	var third = friends[2];
	==> 'Curly'
	
	var next_friend = friends[3];
	==> undefined
	
	
**Notice:** To get the 1st element, we ask for element 0. To get the 2nd element, we ask for element 1. See the pattern? It's just a weird quirk of programming.

#### Overwrite elements

	friends[0] = 'Johnny';
	console.log(friends);
	// prints: ['Johnny', 'Larry', 'Curly']

	// Put Moe back in there:
	
	friends[0] = 'Moe';
	console.log(friends);
	// prints: ['Moe', 'Larry', 'Curly']
	
#### Push and Pop

Arrays are great because you can use them to store data! The `push` function adds an element to the end of the array, and the `pop` function removes the last element of an array (and returns it).

	friends.push('Bobby');
	
	console.log(friends); 
	// prints: ['Moe', 'Larry', 'Curly', 'Bobby']
	
	var last_friend = friends.pop();
	
	console.log(last_friend); 
	// prints: 'Bobby'

	console.log(friends); 
	// prints: ['Moe', 'Larry', 'Curly']
	

#### Length

It's extremely useful to ask for the number of items in an array:

	console.log(friends.length);
	// prints: 3

## Array Exercise

First, declare this array:

```
	var friends = ['Moe', 'Larry', 'Curly'];
```

1. Push your name to the end of the array.
2. Push your neighbor's name to the end of the array.
3. Log the entire array to double check.
3. Log the length of the new array.
4. Overwrite your name in the array with your last name.
5. Overwrite your neighbor's name in the array with his/her last name.
6. Log the entire array to check.

Push and pop are only two methods you can call on an array, there are dozens more. But they're very easy to Google and figure out, like, "how do I remove an element from the middle of an array in javascript?"

## Objects

Ok, here we go: **THE LAST TYPE**. This one is super awesome, I promise. *Objects* are like arrays, except instead of an ordered list of elements, *Objects* are simply key-value pairs:

	var house = {
		bedrooms: 4,
		bathrooms: 1,
		color: "pink",
		city: "Boston"
	}
	
	// You can use array-style syntax:
	console.log( house['bedrooms'] )
	==> 4

	// Or a new syntax that's only for objects:
	console.log( house.color )
	==> "pink"
	
Notes:

* Elements of an object are *unordered*. So you can't ask for the *second* element.
* Each element consists of a *key* and a *value*.
* Keys and values can be of **any data type**.
	* So we are allowed to do this:
	
	
	```
	obj = { 
		5: 'certainly not the fifth element!',
		6.7: 'somewhere between 6 and 7',
		normalKey: 'normalValue'
	}
	
	obj[5]
	==> 'certainly not the fifth element!'
	
	obj[6.7]
	==> 'somewhere between 6 and 7'
	
	obj.normalKey
	==> 'normalValue'
	```
	
	* There is a useful shorthand for when you use Strings as keys. These two objects are equivalent:

	```
	obj1 = { key: "value" }
	obj2 = { "key": "value" }
	```
	

## Exercise: John Doe

Let's say we had some data about this guy John:

	John, Doe, 36, 1234 Park St, San Francisco, CA

How would you represent this data as an object? (Hint: Think about breaking it down into things like firstname, lastname, age, etc.) Write up that object 
 
**Advanced:**

What if you had 5 people? Maybe you should think about using an array, too...

	John, Doe, 36, 1234 Park St, San Francisco, CA
	Moe, Doe, 31, 1234 Park St, San Francisco, CA
    Larry, Doe, 36, 1234 Spark St, San Francisco, CA
    Curly, Doe, 36, 1239 Park St, San Francisco, CA
    Jane, Doe, 32, 1239 Spark St, San Francisco, CA

* How would you ask for the 3rd person's age?

## For loops

Remember this guy?

	function hasEnoughCash() {
		var x = prompt("How much cash do you have?");
		var y = prompt("How many quarters do you have?");
		
		var total_cash = x + (y / 4);
		
		if(total_cash < 5) {
			console.log("Sorry, can't afford a beer.");
		} else {
			console.log("You have enough money! Drink up!");
		}
	}
	
	hasEnoughCash();
	hasEnoughCash();
	hasEnoughCash();
	hasEnoughCash();
	hasEnoughCash();
	
This doesn't seem particularly DRY (don't repeat yourself). How can we tell the computer to "do this 5 times"?

	for(var i = 0; i < 5; i++) {
		hasEnoughCash();
	}

That's it! The syntax is really weird, I know. But note the `5`, that means "Do this 5 times".

## Exercise

Implement a for loop that alerts "You're the bomb." 3 times.

**Advanced**

Prompt the user for a number, then alert "You're the bomb" *that* number of times. (Hint: Keep an eye on the `5` in the for loop.)

## While loops

They're just like a for loop, but instead of doing something *n number of times*, they just *keep looping while the conditional is true*.

	var input = "";
	while(input == "") {
		input = prompt("What's your favorite number?");
	}
	
	alert(input);


## Exercises!

#### Exercise 1: Reverse the Input

Write a program which prompts for 5 strings, and then logs them back out in reverse. You must use an array, and the `reverse` method.


#### Exercise 2 (advanced): Rock paper scissors

Write a program that plays rocks, paper, scissors!

* First, write a function `getComputerChoice()` which *randomly* returns one of these 3 strings: `"rock"`, `"paper"`, `"scissors"`.
	* You'll need: an array, use of array.length, `Math.random()`, and `Math.floor()`.
* Then take in user input, asking for their choice.
* Use if-statements to decide who won.
* Log the winner of the game!
* If the user inputs anything other than `"rock"`, `"paper"`, or `"scissors"`, log `"Please enter either rock, paper, or scissors"`.

## Homework: Calculator


Write your own calculator! 

#### Step 1

Write a program which completes the following task:

1. Prompt the user for a number, x.
1. Prompt user for an operator (must be +, -, *, /)
	* Remember! It will come in as a string, like "+".
2. Prompt the user for a second number, y.
3. Alert the result of x [operator] y.

Ex: The input of these three values into the prompts:

	5
	*
	10
	
Would cause the program to alert the number `50`.

**Advanced:**

* Make your program support exponents via the '^' string (Hint: Check out the Math object).
* Make your program only prompt *once*, of the form "5 + 10". Then, break that string into three parts by using javascript's `split` method (which returns an array).

#### Step 2

Wrap your code into a function `calculate`, which takes in three arguments, one for each input, and returns the calculated number. It should look like this:

	function calculate(x, operator, y) {
		// Your code goes in here
	}
	
	// Now you can call the function with any input!
	var answer = calculate(5, "*", 10);
	
	console.log(answer) // logs: 50
	
Your final program should still prompt three times the numbers and operator, but make sure to call `calculate` with those values to do the math!
	

**Advanced:**

* Now that you have a function, you can chain multiple calculations together! Make your program take in 5 inputs, of the form:

	```
	number1
	operator1
	number2
	operator2
	number3
	```
	
* And have it calculate ((number1 [operator1] number2) [operator2] number3).
	* Hint: You already know how to calculate the first chunk. Calculate it, and then store that value in a variable. Then, pass that variable in as the first input of another `calculate` call! (along with operator2 and number3).

* So an input of: `5`, `+`, `10`, `*`, `2` would log `30`

* Can you use the `split` method to allow your program to only prompt once? Make it support a single input of `5 + 10 * 2`.


 

 
 