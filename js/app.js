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
  const list = $li[Math.floor(Math.random()*$li.length)];
  mole(list);
}
//Assign mole with an active class, which highlights in red
function mole(list){
  const showMole = $(list).addClass('active');
  console.log(showMole);

  whackMole(showMole);
}
// Click on mole when show mole is active(red))
function whackMole(showMole) {
  $(showMole).one('click', () => {
    console.log('clicked');
  });
}
    //If true then removeClass
    // if(showMole){
    //   const removeMole = $(list).removeClass('active')
    // } else {
    //
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
