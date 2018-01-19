$(setup);

//Declare global variables
let $lis = null;
let interval = null;
let counter = 30;
let score = 0;
let base = 1;
let numberOfUserClicks = 0;
let level = 1;
let dollChoice = null;
let $chosenChar;

// execute once when the program begins
function setup() {
  const $slap = $('#slap');
  const $introSound = $('#kim-sound-clip');
  const $startButton = $('.start-button');
  const $characterButton = $('.character-button');
  const $levels = $('.levels');
  const $displayLevel= $('.display-level');
  const $timer = $('.timer');
  const $scoreBoard = $('.score-board');
  const $displayTimer = $('.display-timer');
  const $selectDoll = $('.select-doll');
  const $gameOver = $('.game-over');
  $startButton.on('click', startGame);
  $levels.hide();
  $characterButton.hide();
  $timer.hide();
  $scoreBoard.hide();
  selectDoll();

  function startGame() {
    $startButton.hide();
    $selectDoll.hide();
    $levels.show();
    $timer.show();
    $scoreBoard.show();
    $gameOver.text('GAME OVER').hide();
    $characterButton.text('GAME OVER').hide();
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
    displayDoll(randomList);
  }

  // Select a doll from the class
  function selectDoll() {
    $introSound.get('0').play();
    $gameOver.text('GAME OVER').hide();
    $('.choose-characters img').on('click', function(e){
      //Create variable to target the image source
      $chosenChar = $(e.target).attr('src');
      $('.choose-characters img').removeClass('selected');
      //Once div class image is selected add the image class to dollChoice
      dollChoice = $(this).attr('class');
      $(`.${dollChoice}`).addClass('selected');
    });
  }
  function displayDoll(randomList){
    const showDoll = $(randomList).addClass('doll selected');
    //Give doll chosen character src
    $('.doll').css('background-image', `url('${$chosenChar}')`);
    $(showDoll).one('click', whackDoll);

    //remove doll and click event after 1.3 seconds
    setTimeout(function() {
      $(randomList).off('click');
      if ($(randomList).hasClass('doll')) {
        // user missed doll
        $(randomList).removeClass('doll selected');
        // If score is not 0, decrease score by 5
        if (score !== 0) {
          score = score - 5;
          $('.display-score').html(score).addClass('missed');
        }
      }
    },1300);
  }
  //Remove doll once doll is clicked within 1.3 secs, play sound effect, update score, increase clicks per base
  function whackDoll() {
    $(this).removeClass('doll selected');
    $slap.get('0').play();
    updateScore();
    clicksPerBase();
  }

  function updateScore() {
    // If doll is clicked before timeout, update score by 10
    if (whackDoll){
      score+=10;
      $('.display-score').html(score).removeClass('missed');
    }
  }

  function levels() {
    level++;
    $displayLevel.html(level);
  }

  function reset() {
    counter = 30;
    base = 1;
    $displayTimer.html('0');
    $displayLevel.html('1');
    $startButton.text('Play Again').show();
    $gameOver.text('GAME OVER').show();
    $('ul').empty();

  }
}
