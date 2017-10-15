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

// execute once when the program begins
function setup() {
  const $slap = $('#slap');
  const $introSound = $('#kim-sound-clip');
  const $startButton = $('.start-button');
  const $characterButton = $('.character-button')
  const $levels = $('.levels');
  const $timer = $('.timer');
  const $scoreBoard = $('.score-board');
  const $displayTimer = $('.display-timer');
  const $selectMole = $('.select-mole');
  const $gameOver = $('.game-over');
  $startButton.on('click', startGame);
  $levels.hide();
  $characterButton.hide();
  $timer.hide();
  $scoreBoard.hide();
  selectMole();

  function startGame() {
    $startButton.hide();
    $selectMole.hide();
    $levels.show();
    $timer.show();
    $scoreBoard.show();
    $gameOver.text('GAME OVER').hide();
    generateBoard();
  }

  //Countdown from 60-0 reset game
  function timer(){
    counter --;
    $displayTimer.html(counter);

    if (counter===0){
      clearInterval(interval);
      reset();
    }
    getRandom();
  }

  //Create board set width and height to 100px
  function generateBoard() {
    $('ul').css({
      'width': `${base * 100}px`,
      'height': `${base * 100}px`
    });
    // multiply base by base and incretment each iteration (intial 1 x 1)
    for (var i = 0; i < base * base; i++) {
      $('ul').append('<li></li>');
      console.log(base);
    }
    $lis = $('li');
    interval = setInterval(timer, 2000);
  }

  //Set number of user clicks to incretment per base
  function clicksPerBase() {
    numberOfUserClicks++;

    if (numberOfUserClicks === base && base < 5) {
      numberOfUserClicks = 0;
      clearInterval(interval);
      $('ul').empty();
      base++;
      generateBoard();
      levels();
    }

  }
  //Get random list items
  function getRandom(){
    const randomList = $lis[Math.floor(Math.random()*$lis.length)];
    displayMole(randomList);
  }

  // Select a mole from the class
  function selectMole() {
    $introSound.get('0').play();
    $gameOver.text('GAME OVER').hide();
    $('.choose-characters img').on('click', function(e){
      //Create variable to target the image source
      $chosenChar = $(e.target).attr('src');
      $('.choose-characters img').removeClass('selected');
      //Once div class image is selected add the image class to moleChoice
      moleChoice = $(this).attr('class');
      $(`.${moleChoice}`).addClass('selected');
    });
  }
  function displayMole(randomList){
    const showMole = $(randomList).addClass('mole selected');
    //Give mole chosen character src
    $('.mole').css('background-image', `url('${$chosenChar}')`);
    $(showMole).one('click', whackMole);

    //remove mole and click event after 1.3 seconds
    setTimeout(function() {
      $(randomList).off('click');
      if ($(randomList).hasClass('mole')) {
        // user missed mole
        $(randomList).removeClass('mole selected');
        // If mole is not 0, decrease score by 5
        if (score !== 0) {
          score = score - 5;
          $('.display-score').html(score).addClass('missed');
        }
      }
    },1300);
  }
  //Remove mole once mole is clicked within 1.3 secs, update score, increase clicks per base
  function whackMole() {
    $(this).removeClass('mole selected');
    $slap.get('0').play();
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

  function levels() {
    level++;
    $('.display-level').html(level);
  }

  function reset() {
    counter = 30;
    base = 1;
    level = 1;
    $displayTimer.html('0');
    $startButton.text('Play Again').show();
    $gameOver.text('GAME OVER').show();
    $characterButton.on('click', selectMole).show();
    $('ul').empty();
  }
}
