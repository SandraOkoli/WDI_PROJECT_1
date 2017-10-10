$(setup);

//Declare global variables
let $li = null;
let interval = null;
let counter = 61;
let score = 0;

//Create setup function
// The statements in the setup() function
// execute once when the program begins
function setup() {
  $li = $('li');

  $('.start-button').on('click', startGame);
}
function startGame() {
  interval = setInterval(timer, 2000);
}
function timer(){
  counter --;
  $('.display-timer').html(counter);

  if (counter===0){
    clearInterval(interval);
    reset();
  }
  getRandom();
}

function reset() {
  counter = 61;
  $('.display-timer').html('0');
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
//Remove mole once mole is clicked within 1 sec
function whackMole() {
  $(this).removeClass('mole');
  updateScore();
}

function updateScore() {
  // If mole is clicked before timeout, update score by 10
  if (whackMole){
    score+=10;
    console.log(score);
    $('.display-score').html(score);
    //else decrease score by 5
  }
  if (!whackMole) {
    score-=5;
    console.log('-5 points');
    $('.display-score').html(score).addClass('missed');
  }

}
