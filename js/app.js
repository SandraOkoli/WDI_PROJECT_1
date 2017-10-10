$(setup);

//Declare global variables
let $li = null;
let interval = null;
let counter = 61;
// let countDown = null;


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
  $('.timer-display').html(counter);

  if (counter===0){
    clearInterval(interval);
    reset();
  }
  getRandom();
}

function reset() {
  counter = 61;
  $('.timer-display').html('0');
  // $('.start-button').html('Play Again?');
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
//Remove mole once mole is hit
function whackMole() {
  $(this).removeClass('mole');

}

// 8. If 'active' (li) circle is clicked before timeout, update score by 10
// 9. If 'active' (li) circle is not clicked before timeout decrease score by 10

function updateScore(){

}
//intervalSetup
