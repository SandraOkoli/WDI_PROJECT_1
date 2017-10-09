$(setup);

//initally set list items to null
let $li = null;
let $interval = null;
let $timer = null;


function setup() {
  $li = $('li');
  getRandom();

}
//
function getRandom(){
  const list = $li[Math.floor(Math.random()*$li.length)];
  console.log(list);
  // $interval = setInterval(2000);
  // console.log($interval);

  active(list);
}

function active(list){
  const $mole = $(list).addClass('active');
  console.log($mole);

  setSpeed(list);
}

// function setSpeed(list){
//   $interval = setInterval(2000);
//   console.log()
// }
//create Loop


// function active(){
//   const div = $('div').addClass('active');
//   console.log(div);
// }

// function interval(){
//   const
//
// }
