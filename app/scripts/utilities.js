'use strict';

// function checkForMatch(cardChosen1, cardChosen2) {
//     // clearInterval(timer); //stop timer
//     if (cardChosen1 === cardChosen2) {
        
//     } else {
    	
//         // document.images[firstchoice].src = backcard;
//         // document.images[secondchoice].src = backcard;
//         // return;
// 	}
// }

function shuffle (array) {
  var i = 0
  var j = 0
  var temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}
