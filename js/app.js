$(setup);

//Declare global variables
let $lis = null;
let interval = null;
let counter = 61;
let score = 0;
let base = 1;
let numberOfUserClicks = 0;
let level = 1;

// const $start = $('.start-button');

//Create setup function
// The statements in the setup() function
// execute once when the program begins
function setup() {
  $('.start-button').on('click', startGame);
  $('.levels').hide();
}
// Generate board at start game starting from one
function startGame() {
  $('.start-button').hide();
  $('.levels').show();
  generateBoard();
}
//Create board multiply base by 100px
function generateBoard() {
  $('ul').css({
    'width': `${base * 100}px`,
    'height': `${base * 100}px`
  });
  // multiply base by base and incretment each iteration  (intial 1 x 1)
  for (var i = 0; i < base * base; i++) {
    $('ul').append('<li></li>');
  }

  $lis = $('li');
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
  $('.start-button').show();
}

//Get random list items
function getRandom(){
  const randomList = $lis[Math.floor(Math.random()*$lis.length)];
  displayMole(randomList);

}
//Add m
function displayMole(randomList){
  const showMole = $(randomList).addClass('mole');
  $(showMole).one('click', whackMole);

  //remove mole and click event after 1 second
  setTimeout(function() {
    $(randomList).off('click');
    //If Random list has class
    if ($(randomList).hasClass('mole')) {
      // user missed
      $(randomList).removeClass('mole');
      if (score !== 0) {
        score = score - 5;
        $('.display-score').html(score).addClass('missed');
      }
    }
  },1500);
}
//Remove mole once mole is clicked within 1 sec
function whackMole() {
  $(this).removeClass('mole');
  updateScore();
  clicksPerBase();
}

function updateScore() {
  // If mole is clicked before timeout, update score by 10
  if (whackMole){
    score+=10;
    $('.display-score').html(score).removeClass('missed');
  }
}
//Set number of user clicks to incretment by 1 per base
function clicksPerBase() {
  numberOfUserClicks++;

  if (numberOfUserClicks === base) {
    numberOfUserClicks = 0;
    clearInterval(interval);
    $('ul').empty();
    base++;
    generateBoard();
    levels();
  }
}
function levels() {
  level++;
  $('.display-level').html(level);
  console.log(level);
}
