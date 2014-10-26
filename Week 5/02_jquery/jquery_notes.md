![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - Lesson Name 

###Instructor Name

Instructors current role.

---


##Agenda

*	jQuery

---

##jQuery


jQuery __is__ JavaScript

---


##jQuery

jQuery is a cross-browser JavaScript library designed to simplify the client-side scripting of HTML.

---

##jQuery

*	jquery.com - A JavaScript library that makes DOM manipulation simple.*	“Cross browser” - works the same in all* browsers. *	Allows:
	*	Document traversal	*	CSS Manipulation	*	Event Handling	*	Animation	*	and more!

---


##jQuery

Adding jQuery to your website

```<script src="js/jquery-1.8.3.min.js"></script>``` - Adding the file.

```<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>``` - CDN

---



##jQuery

###$

The Dollar Sign

---

##jQuery


Selectors are just like CSS

	$("p")
	$(".some_class")
	$("#some_id")

---

##jQuery
Finding elements on a page, use selectors with the $ function:	$(“#search”).text("Hello world");	$(“.errors”).addClass("red-text");Returns HTML elements you have selected.

---


##jQuery

$(document).ready();

---


##jQuery

Everything you need to know is here: 

###[http://jquery.com/](http://jquery.com/)

---


##Click handlers

- Can be specified in `onclick` attribute, or with javascript directly. It's generally better to use event listeners instead of attributes.

	```
	$("a").click(function(){
		alert("You clicked a link!");
	});
	```


![GeneralAssemb.ly](../../img/icons/code_along.png)

## Color Switcher

- Open the `color_switcher` project in the provided `code` directory for this week. 
- Add javascript to `color_switcher.js` such that when each colored circle is clicked, it adds one of these classes to the `body` element:
	- `yellow`, `white`, `gray`, `blue`
	- Make sure to remove any color classes on the body before adding a new one!
- Then that's done, modify the link to search for a dog of the pages current color (change the text and URL of the `<a>` tag).


## Cash Register
 
####Step 1
Create a cash register page which takes in prices from an input, then adds them do the page using jQuery, and adds up the total of all the prices. Starter code is in `code/cash_register`

####Step 2
Create 2 inputs, one for the name of the item, one for the price. Render the items and prices on the receipt.

####Advanced
Use an array to keep track of all elements. Add a "-" button next to each item to remove the item from the receipt, which also updates the total correctly.