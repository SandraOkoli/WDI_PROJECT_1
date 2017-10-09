$(setup);

//initally set list items to null
let $li = null;
let $interval = null;
let $timer = null;
const $startGame =('button');
const $timerDisplay =('.div');

//Set
function setup() {
  $li = $('li');
  getRandom();
}
//Get random list items
function getRandom(){
  const randomList = $li[Math.floor(Math.random()*$li.length)];
  displayMole(randomList);
}
//Add active class(red) to show mole
function displayMole(randomList){
  const showMole = $(randomList).addClass('mole');
  $(showMole).one('click', whackMole);

  //remove mole and click event after 1 second
  setTimeout(function() {
    $(randomList).removeClass('mole');
    $(randomList).off('click');
  },1500);
}

function whackMole() {
  $(this).removeClass('mole');

}
//Set Timeout


//
// function whackMole(){
//
// }
//     //Remove Class
//   / whackMole(showMole);
// }
// // Click on mole when show mole is active(red))
// function whackMole(showMole) {
//   $(showMole).one('click', () => {
//     console.log('clicked');
//     //If mole is clicked on then removeClass
//     if (true)
//      const removeMole= $(list).removeClass('active');{
//     //If mole is not clicked on
//      }else
//
//   });
// }



//Function to start the game(Set interval, timer and on click)
// function startGame() {
//   $interval = setInterval(countdown, 2000);
//   getRandom();
//   $startGame.on('click');
// }
//
// function countdown() {
//   $timer--;
//   $timerDisplay.html($timer);
//   console.log($timer);
//
//   if ($timer <= 0) {
//     clearInterval($interval);
//     // gameOver();
//   }
// }
