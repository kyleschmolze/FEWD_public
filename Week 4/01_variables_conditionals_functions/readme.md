# JavaScript Introduction


## Objectives
* Be able to use conditionals to acheive program goals
* Be able to use functions which take arguments and return values.
  
## This is going to be hard.
But we got you.


## What is programming?

Steve Jobs says:

	Computers are actually pretty simple. We’re sitting here on a bench in this café [for this part of the Interview]. Let’s assume that you understood only the most rudimentary of directions and you asked how to find the rest room. I would have to describe it to you in very specific and precise instructions. I might say, “Scoot sideways two meters off the bench. Stand erect. Lift left foot. Bend left knee until it is horizontal. Extend left foot and shift weight 300 centimeters forward…” and on and on. If you could interpret all those instructions 100 times faster than any other person in this café, you would appear to be a magician: You could run over and grab a milk shake and bring it back and set it on the table and snap your fingers, and I’d think you made the milk shake appear, because it was so fast relative to my perception. That’s exactly what a computer does. It takes these very, very simple-minded instructions—“Go fetch a number, add it to this number, put the result there, perceive if it’s greater than this other number”—but executes them at a rate of, let’s say, 1,000,000 per second. At 1,000,000 per second, the results appear to be magic.

* Programming means giving instructions.
* Usually your instructions are just a text file.
* The computer will literally read the instructions, one at a time, and perform each task.
* With enough instructions, you can build anything.
* Whenever you're programming, remember that you can think like a computer: just be dumb.
	
## Exercise: Open a Nalgene

* Computers are really really dumb.
* But they can do things really really fast.
* This is why they sometimes appear smart. 



## Why Javascript? 

![Javascript All The Things](javascript.jpg "Javascript")

Simple answer: We want high performance web sites!

*But what does this mean?*

* Client side programming:
  * Interaction with the DOM
  * Respond to DOM events: click, submit...
  * Send requests to the server.
  * Acts on response from the server.    
* Loosely-typed language (don't worry about what this means)


## Fun Facts

* Not to be confused with Java, but it is the baby child of Java syntax & Scheme principles
* Created in 10 days in May 1995 by [Brendan Eich](http://en.wikipedia.org/wiki/Brendan_Eich)
* It's an exciting time to learn Javascript! It's the language that enables web pages to respond to user interaction beyond the basic level.

## Let's buy a beer!


#### Alerts and Logging

Try an alert, see what happens:

	alert(100);

Try logging, see what happens:

	console.log(200);
	
#### Expressions

	console.log("Welcome to the world of javascript!");
	console.log(5 + 5);
	console.log("Hello" + " world.");

	
#### Variables

	var x = 100;
	console.log(x);
	
	var y = 5 + 5;
	console.log(y);
	
Statements with an `=` sign are called as *assignments*. Whenever we use an *assignment*, we start by evaluating the *right* side first, and then we store it into the *left* side.

Why are variables useful? Sometimes you don't know what the value is when you're writing the program! Try a prompt to see why:

	var x = prompt("How old are you?");
	console.log(x);

#### Conditionals

	var x = prompt("How old are you?");
	if(x < 21) {
		console.log("Sorry, you must be 21 to buy a beer.");
	} else {
		console.log("Sorry, you must be 21 to buy a beer.");
	}

* Compare values with `>`, `<`, `===`, and `!==`.
* Never use `==`.

Examples:

	console.log(5 < 10);
	==> true
	
	console.log(5 > 10);
	==> false
	
	console.log(5 === 5);
	==> true

	console.log(5 !== 10);
	==> true

#### Exercise

We also need to have enough money to buy a beer! Write a program that asks the user how much money they have, and then logs to the console if they can afford a beer or not. A beer costs $5.

**Advanced:**

The bartender also accepts quarters. First, ask how much cash the user has. Then, in a separate `prompt`, ask the user how many quarters they have (hint: you'll need a second variable). Then, add up how much money in total the user has, and logs to the console if they can afford a beer!

	var x = prompt("How much cash do you have?");
	var y = prompt("How many quarters do you have?");
	
	var total_cash = x + (y / 4);
	
	if(total_cash < 5) {
		console.log("Sorry, can't afford a beer.");
	} else {
		console.log("You have enough money! Drink up!");
	}
	
#### Follow up

What if we wanted our program to ask three people in a row?

## Functions

Ok, so we can already write some pretty cool code that actually does stuff. Let's unlock another big component of programming that makes us much more powerful: Functions!

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
	
Functions can do two more awesome things:

* Take in *arguments*.
* *Return* values.

Example with arguments:

	function convertQuartersToDollars(q) {
		var dollars = q / 4;
	}

This is great, but it's kind of useless! We need a way to extract that information back out of the function. Enter `return`.

Example with return:

	function convertQuartersToDollars(q) {
		var dollars = q / 4;
		return dollars;
	}
	
Now it's actually useful! Let's give it a shot:
		
	var total_cash = convertQuartersToDollars(9);
	
	console.log("You have $" + total_cash);
	
Wow! Functions are awesome! Let's mix it in with a prompt:
	
	var x = prompt("How many quarters do you have?");
	
	var total_cash = convertQuartersToDollars(x);
	
	console.log("You have $" + total_cash);
	
Ok, what just happened there? Notice: in the function, we used a variable called `q`. But we passed in a variable called `x`.

Let's walk through the code (like a robot), keeping in mind to always evaluate the *right* side of any assignment before the left side:

1. Prompt the user for input, and store it into a variable called `x`.
2. *Call* the function named `convertQuartersToDollars`, passing into it our variable `x`.
3. `convertQuartersToDollars` takes in one *argument* called `q`. When we pass in `x`, that value is copied into `q`.
4. `convertQuartersToDollars` does some math, and then *returns* a number.
5. Store whatever was *returned* by `convertQuartersToDollars` into a variable called `total_cash`. 
6. Log some output back to the user.

## Exercises!

#### Exercise 1: The World Translator

* Write a function named helloWorld that:
	* takes 1 argument, a language code (e.g. "es", "de", "en").
	* returns "Hello, World" for the given language, for at least 3 languages. 
	* defaults to returning English.
* Call that function for each of the supported languages and log the result to make sure it works.


 
#### Exercise 2: Max value

Write a program which prompts the user for 3 numbers, and then logs the highest value of the three.

**Advanced:**

Max and min: Make your program take 5 numbers, and have it log both the highest and lowest value.














