

# WDI_PROJECT_1 - Slap a Doll

In my first project of my Web Development Immersive course with General Assembly, I was given the brief to create a game using the skills that we learned thus far.

I wanted to choose a game that would consolidate everything we'd learned in the first two weeks.
After researching games I decided upon 'Whack a Mole' but with my own spin. Building the basic version of the game was imperative to me as I wanted to ensure that the game logic was working on a smaller scale prior to making the game more interesting by adding levels, setting intervals, styling amongst other things. Once I achieved this I was able to get creative and 'Slap a Doll' was birthed which features members of the Kardashians.  Building this game really gave me the opportunity to practice using jQuery and DOM manipulation which I gravitated towards during the first weeks of the course.

Technologies used

jQuery
DOM manipulation


Slap a Doll is only available locally, screenshots are provided below



Screenshots





Psuedo code
//Whack a mole

HTML
- Link jquery library
- Create structure using semantic HTML
- Create container
- Create grid (Step 1)

CSS
- Style grid
- Style container

Step 1

- Create ul with 4 li's
- Style background color and border
- Set width, display etc

- Create variables
  - $lis
  - $mole

- Create function
- get lis at random from an array
- (console.log)
- add active class to element
- (console.log)
- add click event
- (console.log)
- Set interval 2000
- Loop

Step 2
- Add image class

JS
1. User clicks start game
2. Game starts
3. Timer starts 60 (61) - 0
4. Images appear at random
5. Add active class to (li) circle, add image, add click event
6. Remove active class, image and click event once a specified time has lapsed (Set timeout)
7. User clicks on 'active' (li) circle, 'play audio depending on character picked'
8. If 'active' (li) circle is clicked before timeout, update score by 10
9. If 'active' (li) circle is not clicked before timeout decrease score by 10
10. Increase the intervals each time the loop runs by 2000
11. Display play again
12. On click Reset game

Bonus
1. Select a mole using keyboard (left, right) and click event
   get button class
   Display 2 images
   Click on start game  
2. Added step choose grid size
