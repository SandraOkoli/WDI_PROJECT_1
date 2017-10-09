$(setup);

//initally set list items to null
let $li = null;
let $interval = null;
console.log($li);

function setup() {
  $li = $('li');
  getRandom();
}

function getRandom(){
  const li = $li[Math.floor(Math.random()*$li.length)];
  console.log(li);
  $interval = setInterval(2000);
  console.log($interval);
}


// 1) pickRandomHole
// 2) addMoleToHole
// 3) addClickToHoleWhereMoleIs
// 3) removeMoleFromHole
// 4) removeClickFromHoleWhereMoleWas
//
//   function setup() {
//     $holes = $(‘.hole’);
//     pickRandomHole();
//   }
//
//   function getRandom() {
//   const hole = $holes[Math.floor(Math.random()*$holes.length)];
//
//   }
// function setup () {
//
// }
//   const $lis =
//
//
//   $('li').each(function(){
//     var id =[Math.floor(Math.random()*$lis.length)];
//   });
//
//
