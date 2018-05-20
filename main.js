console.log('sim sim salabim')


// change div display
var inlineBlock = function() {
  $('.letter').css('display', 'inline-block');
  console.log('display inline block');
};
inlineBlock();

// // display block
// var block = function() {
//   $('.letter').css('display', 'block');
//   console.log('display block');
// };
// setTimeout(block, 3000);
//
// // hide div classes
// var hideLetter = function() {
//   $('#letter2, #letter3, #letter4, #letter5, #letter5').css('display', 'none');
//   console.log('hiding letter');
// };
// setTimeout(hideLetter, 3500)
//
// // change text content
// var changeLetter = function() {
//   $('#letter1').text('U')
//   console.log('change letter');
// }
// setTimeout(changeLetter, 4000);



// Create add/remove classes functions
// classes have animations associated with themd
var addFade = function() {
  $('.letter2', '.letter3', '.letter4', '.letter5').addClass('letterFade');
};

var timeoutDelay = function () {
  setTimeout( addFade, 3000);
  console.log('fading');
};
timeoutDelay();
