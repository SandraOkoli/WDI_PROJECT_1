

 ![](/Users/sandraokoli/Desktop/GA logo.png)
#WDI30 PROJECT 1 - Slap a Doll


For my first project of the Web Development Immersive course with General Assembly, I built a game using Javascript, jQuery, HTML5, CSS3. 'Slap a Doll' featuring the Kardashians is a humourous take on the popular arcade game Whac-A-Mole invented in the 1970s by Aaron Fechter.


##Concept

The idea behind the game is simple and highly satisfying. Users have the option of choosing between three Kardashians to feature in the game. Using mouse clicks, the user must slap a Kardashian as they appear before the time runs out. Each time a Kardashian is successfully hit, the score is incremented by 10 points. If a user fails to click on time, if the score is greater than 0 the score is decremented by 5 points. The game gets faster each time the user goes up a level. 

##Technologies/Libraries

* jQuery
* DOM Manipulation
* Google fonts
* normalize.css

##Iterations
Building the basic version of the game was imperative to me as I wanted to ensure that the game logic was working on a smaller scale before added further iterations.

1. First iteration was a simple 2 x 2 grid and 'getRandom' functionality
2. Second iteration was increased intervals
3. Appended list items to increase the grid size each time the number of user           clicks was equal to the grid base.


##Screenshots
![](/Users/sandraokoli/Desktop/Screenshots/Slap a doll intro-screenshot.png
)

![](/Users/sandraokoli/Desktop/Screenshots/Slap a doll - level1.png
)

![](/Users/sandraokoli/Desktop/Screenshots/Slap a doll - level2.png
)

![](/Users/sandraokoli/Desktop/Screenshots/Slap a doll - level4.png
)

##Heroku Link
https://warm-river-92816.herokuapp.com/


##What went well
Initially, I created four list items and created a box with css, using math floor and math random to select random li's from an array which were displayed in red. I then created the functionality to Whack a doll, followed by the set timeout functionality.

After succesfully getting the game to work in it's simpliest form. I was able to expand/ammend on what I had already written.

This vastly improved performance and playability of the game.


##Challenges
The grid logic was a great problem to solve. The way I implemented this was as follows:

To begin with, a grid is created. The grid is an Unordered List (UL) initally consisting of 1 List Item (LI). The UL is given a width and height of ``${base * 100}px`` (using the JQuery .css() method). I declared base as a global variable as I needed to reuse this in multiple functions.

Using a for loop I multiplied the base by base and incretmented each iteration. With the .append method I was able to increase the grid size by adding a list item each iteration.
`for (var i = 0; i < base * base; i++) {
      $('ul').append('<li></li>');
      console.log(base);
    }` 

As I assigned my counter to 30, it was fairly easy for users to pass levels, this is where I encountered a problem with the grid size which began a contionous loop until the time ran out. This effected the performance, and UX of the game as the grid got bigger users were required to scroll up and down the page to see/hit a doll. I fixed this by creating a clicksPerBase function which handled the logic to set the number of user clicks to equal the current base. I then added a conditional statement to ensure that lis would only be appended to the grid if the value of base was less 5.


![](/Users/sandraokoli/Desktop/Screen Shot 2018-01-15 at 13.24.52.png)


##Feature backlog
I would implement the following features in this game:

1. Responsive I ran out of time but with more time, I would ensure that this project is mobile responsive and that the grid works on different devices (bearing in mind that the grid expands which will be more difficult to fit on a smaller device).
2. When the game is over, I would add the option to select another character.
3. I would change the cursor to a hand emoji to suit the theme of the game.
4. High Score either by storing the score data in the browser's memory or via backend integration


##Final thoughts
I had a lot of fun making and then playing this game! It was a great first project as I became familiar with JQuery documentation and experimented further with CSS. I am proud with the resultant playability of the game and also the final UI.