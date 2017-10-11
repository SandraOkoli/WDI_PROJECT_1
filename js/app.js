$(setup);

//Declare global variables
let $lis = null;
let interval = null;
let counter = 61;
let score = 0;
let base = 1;
let numberOfUserClicks = 0;

//Create setup function
// The statements in the setup() function
// execute once when the program begins
function setup() {
  $('.start-button').on('click', startGame);
}

function startGame() {
  generateBoard();
}

function generateBoard() {
  $('ul').css({
    'width': `${base * 100}px`,
    'height': `${base * 100}px`
  });

  for (var i = 0; i < base * base; i++) {
    $('ul').append('<li></li>');
  }

  $lis      = $('li');
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
  const randomList = $lis[Math.floor(Math.random()*$lis.length)];
  displayMole(randomList);
  // addMoreMoles();
}
//Add active class(red) to show mole
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
        $('.display-score').html(score);
      }
    }
  },1500);
}
//Remove mole once mole is clicked within 1 sec
function whackMole() {
  numberOfUserClicks++;

  if (numberOfUserClicks === base) {
    numberOfUserClicks = 0;
    clearInterval(interval);
    $('ul').empty();
    base++;
    generateBoard();
  }

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
    $('.display-score').html(score).addClass('missed');
  }

}

// Increasing grid and mole logic
