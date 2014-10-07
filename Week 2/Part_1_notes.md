![GeneralAssemb.ly](../../img/icons/instr_agenda.png)


##Lesson 03 - Advanced CSS


###Learning Objectives

*	Define CSS Box Model, and demonstrate the ability to properly manipulate the "box" around tags.

*	Differentiate between classes vs IDs and apply best practices when implementing.

*	Select nested elements to apply styling. 


###Schedule


| Time        | Topic| GA ICLs| Comments |
| ------------- |:-------------|:-------------------|:----------------|
| 10 min | HTML Template| [template]()| |
| 50 min | Box Model| [Box Model]() |  |
| 20 min | Nested Selectors | [Nested Selectors]() |  |
| 10 min | Getting Started| [How To Start]()| Show students how to tackle the Fashion blog. How to start. |
| 60 min | Lab Time| [Fashion Blog ]()|  |


##Starter code
Please download starter_code.zip from Schoology under Materials > Week 2. **PLEASE re-download this zip file if you already have it, I have probably changed it since you last downloaded it (last updated Oct 7).**

##HTML Template
To make everyone's lives much easier, I've created an html template in `starter_code/lesson 1/template`. It has the basic structure of an html5 document, and also includes `<link>` tags to necessary CSS files for you. As you can see, it links to normalize.css and style.css. You can read about normalize.css [here](http://nicolasgallagher.com/about-normalize-css/). (There is another CSS file in there, reset.css, which we will not be using. Feel free to read about reset.css because it's interesting stuff, but not required because we won't be using it.)

Whenever you start a new page, I suggest copy-pasting the entire `template` folder, renaming it, and then opening your new `index.html` and `css/style.css` in sublime. Then, just add html inside of the `<body>` tag in `index.html`, and add your custom CSS rules to the bottom of `css/style.css`. This way, you won't have to battle typos in your `<link>` tags, or worry about including the proper DOCTYPE declaration.

##Box Model
Demo code: [starter_code/lesson_1/box_model](starter_code/lesson_1/box_model), and also in
[this codepen](http://codepen.io/nevan/pen/vtorn).

Read through `index.html`, and then `css/style.css`. You'll see that there are many CSS rules surrounded in comments. Remove the comment tags to include the CSS, one line at a time, to see the changes rendered by chrome. Read about comments [here at MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Comments). 

When you're done uncommenting all lines, try implementing the suggested CSS changes at the bottom of the .html file.

**Note:** For all of these exercises, I suggest you try to manipulate the actual files in starter_code to get more comfortable with .html and .css files, sublime, and chrome. However, if you're having any difficulties, feel free to use the code pen.
 

##Nested Selectors
Demo code: [starter_code/lesson_1/nested_selectors](starter_code/lesson_1/nested_selectors) and [this codepen](http://codepen.io/nevan/pen/gFAfh).

First, let's find out what the DOM is. [Here's a good video explaining it](http://www.lynda.com/HTML-tutorials/What-Document-Object-Model-DOM/122462/137616-4.html).

In this lesson, we learned about how to use nested selectors in CSS. As you can see, using the space in a CSS selector, like `blockquote p`, selects *p tags within blockquote tags*. Walk through the codealong, and try adding your own nested selectors. 
 

####Exercise
How would you write a CSS rule which applies to the `<a href='selectme.html'>` tag, not the other `<a>` tags as well?

    <div>
      <h1>Look at me!</h1>
      <a href='home.html'>Back</a>
      <a href='about.html'>About me</a>
      <ul>
        <li>
          I have a list.
        </li>
        <li>
          Sometimes I say leeeest.
        </li>
        <li>
          You should try to select
          <a href='selectme.html'>this leeeenk<a>. 
          <!-- Select the above <a> tag, and only this <a> tag -->
        </li>
      </ul>
    </div>
          



##Fashion Blog

Let's code! Look in [starter_code/lesson_1/fashion_blog_part1](starter_code/lesson_1/fashion_blog_part1). Open `Fashion Blog - Final Product.png`, this is what we want our page to look like. Then, open `index.html` and `css/style.css`, and see how close you can get it!

Solution is in [solutions/fashion_blog_part1](solutions/fashion_blog_part1).