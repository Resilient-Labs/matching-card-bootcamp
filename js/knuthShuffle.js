// Fetched from
//https://raw.githubusercontent.com/coolaj86/knuth-shuffle/master/index.js
//
//Can't use directly because of
// Cross-Origin Read Blocking (CORB) blocked cross-origin response https://raw.githubusercontent.com/coolaj86/knuth-shuffle/master/index.js with MIME type text/plain. See https://www.chromestatus.com/feature/5629709824032768 for more details.
//

/*jshint -W054 */
(function (exports) {
  'use strict';

  // http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  function shuffle(array) {
    var currentIndex = array.length
      , temporaryValue
      , randomIndex
      ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  exports.knuthShuffle = shuffle;
}('undefined' !== typeof exports && exports || 'undefined' !== typeof window && window || global));
