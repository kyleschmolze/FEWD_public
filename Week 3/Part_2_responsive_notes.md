##Lesson 6 - Responsive Basics


###Learning Objectives

*	Articulate that responsive __design__ is more design than code.

*	Know the difference between fixed and responsive layouts and understand the difference between fluid and elastic layouts.

*	Apply media queries to web sites to achieve a responsive layout.

*	Implement media queries to change layout on mobile devices.

<br><br>

##Responsive Sites

When dealing with mobile, we are presented with a whole new set of challenges. It's important to separate these challenges into *design* challenges and *engineering* challenges. It turns out the design challenges are much harder than the engineering ones. Lucky us.

Let's take a look at a website, and how we would want it designed for a phone.

[https://www.groupmuse.com/events/1136](https://www.groupmuse.com/events/1136)


Remember to share the [starter_code](starter_code/) at the beginning of class. Share code along solutions before lab time so students have an example to reference.

<br><br>

##Fixed, Fluid, and Responsive Layouts

**Fixed layout**: Always renders the same for any device. Sizes are often specified in pixels. Usually 960px or 980px wide.

**Fluid layouts**: Scales with device size. Sizes are often specified in percentages.

**Responsive layouts**: Different layouts specified for different device sizes. Sizes are often specified in percentages, but also **break points** are added for dramatic change for some devices (like smart phones).

Checkout these __Fixed__ sites

*	[UPS.com](http://www.ups.com)

*	[Boston.com](http://www.boston.com)

*	[Google.com](http://www.google.com)

*	[Getaround.com](http://www.getaround.com)


Checkout these __Responsive__ Sites

*	[Generalassemb.ly](http://www.generalassemb.ly)

*	[Dwolla.com](http://www.dwolla.com)

*	[Sweethatclub.com](http://www.sweethatclub.com)

*	[Relayrides.com](http://www.relayrides.com)



<br>
<br>

##EM Clarification

__EM__
Sized based on the width of the letter “m” 

1em => 100% font-size

[http://alistapart.com/articles/howtosizetextincss](http://alistapart.com/articles/howtosizetextincss)

Based on parent

	.parent{ 
		font-size:16px;
	}
	
	.child{
		font-size:2em;
	}

What will the font-size be in the child?

<br><br><br>

#Media Queries


	@media [specify devices] and [condition_1] and [condition_2]
	
	@media screen // For pages in a browser
	
	@media print // For printed pages
	
	@media only screen and	(min-width: 768px) and (max-width: 991px)
	
	@media only screen and	(orientation: portrait)
	
	@media only screen and	(orientation: landscape)

Standard media queries sizes:

| Device size | Min | Max |
| ------------- |:-------------|:-------------------|
| Small | 0px | 767px |
| Medium | 768px | 991px |
| Large | 992px | ∞ |


##Mobile Display

Often when a phone browser renders a website, it tries to render it at full size (980px). Then, the user can zoom into areas of interest.

We want to make sure that the phone browser renders our page at the pixel width of the device. If a mobile phone is 420px wide, we want it to render our webpage at a width of 420px.

Here's the `<meta>` tag that let's us do that:

	<meta name="viewport" content="width=device-width, initial-scale=1">
	
Optionally, disable user zooming:

	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=none">

<br><br>
##Usage

	.column {
		float:left;
	}
	
	@media only screen and (max-width:768px) {
		.column {
			float:none;
		}
	} 
	

If I put the media query first, will this CSS still work as expected?

Codepen: [http://codepen.io/anon/pen/vBlKe?editors=110](http://codepen.io/anon/pen/vBlKe?editors=110)
