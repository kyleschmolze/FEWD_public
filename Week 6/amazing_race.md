# Amazing Race!

Today is a lab day. We're gonna build a game! What game??? A racing game! 

**Show demo.**

#### Pre-work
* Let's think about how we might build this game. 
* First, try to break down the HTML and CSS. What elements will you need on the * page? What CSS might you need? Do you foresee any classes?
* What about javascript? Can you think of a loose structure for the code? Imagine you have a magic way to say "when the 'l' key is pressed", and "when the 'a' key is pressed". 

#### Step 0
Download amazing_race.zip from Schoology.

Check out our files. 

We've only got 3: HTML, CSS, and JS. You'll notice that only the HTML file has anything in it. Do you see my plan???

#### Step 1
* What CSS do you need to write to be able to see the grid?
* How do you want to display the "current" square for each player?

#### Step 2
* In your console, what javascript do you need to write in order to make the **first** `td` the "current" square?
* In your console, what javascript do you need to write in order to make the **nth** `td` the "current" square?

#### Step 3
* Add an event listener for the "keydown" event on the whole `<body>` which simply logs "Hello, world." (Hint: `$(document).))
* Then, try making your anonymous function take in an `event` variable, and then have it log `event.which`.

#### Step 4
* Figure out which "keycodes" we want to pay attention to.
* Make your page log "You pressed A" when `a` is pressed, and "You pressed L" when `l` is pressed.

#### Step 5
Connect the dots! Whenever `a` is pressed, "move" the player 1 square to the right by one.  Whenever `l` is pressed, "move" the player 2 square to the right by one.

#### Step 6
Win conditions! How do we know when a player has "won"? What might that look like in code? Can you make your page log "Player 1 won!" when the first player's current square goes past the edge of the table?

#### Step 7
Actually put an `h1` on the page when a player wins. Watch out: what happens when the "loser" crosses the finish line?

## Your turn

Make your game as cool / pretty / challenging as you want! We'll break in groups based on features that you want to build, and each group should plan their feature together outloud, and help each other write the code to make it work!

## Homework

Here are the required features to be completed for homework this week:

- Announce the winner in an `h1` on the page.
- Write some custom CSS, make it look cool!
- Don't use a table at all.
  - Instead of toggling classes on a table's `td`s, just add a single div for each player, and then use javascript to add `margin-left: 10px`, then `margin-left: 20px`, etc for each player movement.

- Include a "setup" screen which asks for each player's name. Place that name next to the player's "racetrack".

- When a player wins, display their total time.
  - The timer should start once players have entered their name and clicked "Start".
  - Use timestamps to calculate the total time:
  
  ```
    // Start the clock:
    var start_time = new Date();

    // Then later, when a player has one:
    var end_time = new Date();
    // Calculate the total time:
    console.log("You won the race in " + (end_time - start_time) + " milliseconds");
  ```

  - But instead of logging the result, include it in your winner-announcing `h1`.

#### Optional (but fun) features!

- Require alternating keys to make the players move
- Race against a bot
- Allow players to pick a color
- Support any # of players

