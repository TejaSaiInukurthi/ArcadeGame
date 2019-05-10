# Classic Arcade Game Clone Project

## Table of Contents

- [Instructions](#instructions)
- [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

____________________

## Cloning  the Project

1.  I have cloned the project using `git clone` from the github link provided by udacity.
2.  I have made changes in `app.js` and `index.js` files.
3.  Run the project by opening the `index.html` with any browser.

## What I did in this projects.

1. First of all I Familiarized myself with the starter code
   * I have opened `index.html` and understood the functionality of the application.
   * I have understood the code functionality in the `app.js`, `engine.js` and `resources.js` and how the `engine.js ` rendering the page continuously inorder to display a continous game.

2. I have found some errors on  the console which is saying allEnemies array is not defined. so I created an array allEnemies and created 3 enemy objects by giving 3 parameters x-coordinate ,y-coordinate value and
speed using a for loop and pushed them into allEnemies array. this displayed a game background on the web page. this brings enemy bugs on the page.

3. Next I have created a player class with constructor taking 2 parameters x-coordinate and y-coordinate and update and render function just as like for the Enemy class .

4. I have created a player object by specifying initial position x and y coordinate values. and this brings the player on the game.

5. Inorder to randomly move the enemy bugs, we need to add  a `math.random()` function in Enemy update method which will move the enemy bugs with random speeds.

6. Then I created a count variable which gives us score and in update function whenever the player reaches water the palyer has to again come back to the initial position and count variable should increment by one.

7. Now I have written code for `checkCollisions()` method such that whenever player touches enemies he has to  come to initial position and lost one life. for Lifes I created a Life class just like the Enemy class and in engine.js I have loaded the heart image. Every time the player collides with the bug he lost a life.

8. I have created a `playerSelect()`function inorder to select the character. I used a Sweetalert to select a character. and the character image loaded to player image and Finally I have created a `gameover()` function in engine.js file which will be called when allLifes of player length is zero. and displays Gameover and score using Sweetalert.

## Conclusion  
1. After completing this project I got better understanding on Object Oriented JavaScript and ES6 functionalities.

Here's the link to the game (https://tejasaiinukurthi.github.io/ArcadeGame/)
Note: The game only works with keyboard only its better play it in pc. 
