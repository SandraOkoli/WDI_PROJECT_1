$(setup);

//Declare global variables
let $lis = null;
let interval = null;
let counter = 30;
let score = 0;
let base = 1;
let numberOfUserClicks = 0;
let level = 1;
let moleChoice = null;
let $chosenChar;
let $slap = $('#slap');
let $introSound = $('#kim-sound-clip');

// execute once when the program begins
function setup() {
  $('.start-button').on('click', startGame);
  $('.levels').hide();
  $('.timer').hide();
  $('.score-board').hide();
  $('#kim-sound-clip').get('0').play();
  selectMole();
}

// Select a mole from the class
function selectMole() {
  $('.choose-characters img').on('click', function(e){
    //Create variable to target the image source
    $chosenChar = $(e.target).attr('src');
    $('.choose-characters img').removeClass('selected');
    // //Once div class image is selected add the image class to moleChoice
    moleChoice = $(this).attr('class');
    $(`.${moleChoice}`).addClass('selected');
  });
}
function displayMole(randomList){
  const showMole = $(randomList).addClass('mole selected');
  //Give mole chosen character src
  $('.mole').css('background-image', `url('${$chosenChar}')`);
  $(showMole).one('click', whackMole);


  //remove mole and click event after 1.5 seconds
  setTimeout(function() {
    $(randomList).off('click');
    if ($(randomList).hasClass('mole')) {
      // user missed mole
      $(randomList).removeClass('mole selected');
      if (score !== 0) {
        score = score - 5;
        $('.display-score').html(score).addClass('missed');
      }
    }
  },1400);
}
//Remove mole once mole is clicked within 1.5 secs, update score, increase clicks per base
function whackMole() {
  $(this).removeClass('mole selected');
  $('#slap').get('0').play();
  updateScore();
  clicksPerBase();

}
function startGame() {
  $('.start-button').hide();
  $('.select-mole').hide();
  $('.levels').show();
  $('.timer').show();
  $('.score-board').show();
  generateBoard();
}
//Create board multiply base
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
//Countdown from 60-0 reset game
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
  counter = 30;
  $('.display-timer').html('0');
  $('.start-button').text('Play Again').show();
  $('.game-over').html('GAME OVER');
  $('ul').empty();
}

//Get random list items
function getRandom(){
  const randomList = $lis[Math.floor(Math.random()*$lis.length)];
  displayMole(randomList);
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
}
