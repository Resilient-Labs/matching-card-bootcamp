let winCount = document.querySelector('.winner span')
let lossCount = document.querySelector('.winner span')
let restartBtn = document.querySelector('button')

let message = document.querySelector('.message')

let cards = ['Nike-Logo.png', 'Alo-Logo.png', 'Oakley-Logo.png', 'Under-Armour-Logo.png', 'Puma-Logo.png', 'Nike-Logo.png', 'Alo-Logo.png', 'Oakley-Logo.png', 'Under-Armour-Logo.png', 'Puma-Logo.png']

let firstCard = null;
let waiting = false;

let wins = 0;
let losses = 0;
let matches = 0;

function dealCards() {
  let deck = cards.slice(); // creating a copy of the array to use with the following logic
  firstCard = null;
  waiting = false;
  matches = 0;
  message.textContent = '';

  // this algo = will create the randomization 
  document.querySelectorAll('.card').forEach((element) => {
    const randomNumber = Math.floor(Math.random() * deck.length);
    const randomPicture = deck.splice(randomNumber, 1)[0];
    console.log(randomPicture)

    // Restarts the game 
    element.src = '' + encodeURIComponent(randomPicture)
    element.alt = ''
    element.parentElement.classList.remove('flipped', 'matched')
    element.parentElement.classList.add('facedown') 

  })

}

function turnOver() {
  // Prevent clicking if we are waiting for a mismatch to flip back, 
  // or if the card is already matched / flipped

  if (waiting) return;
  if (this === firstCard) return;
  if (this.classList.contains('matched') || this.classList.contains('flipped')) return;

  // Add the flipped class to the clicked .flipper container
  this.classList.add('flipped');
  console.log(this)

  if (!firstCard) {
    // First card of the pair clicked
    firstCard = this;
    return;
  }



  // Second card of the pair clicked -> grab the image src inside both .flipper targets
  let firstImg = firstCard.querySelector('.card').src;
  let secondImg = this.querySelector('.card').src;

  if (firstImg === secondImg) {
    // It's a match!=
    firstCard.classList.add('matched');
    this.classList.add('matched');
    matches++;

   
  }

  // 5 total pairs out of 10 cards
  if (matches === cards.length / 2) {
    wins++;
    winCount.textContent = wins;
    message.textContent = 'You Win!';
  }

  else {
    // Not a match
    waiting = true;
    losses++;
    lossCount.textContent = losses;

    // Wait 1 second so the player can see the mismatch, then flip back
    setTimeout(() => {
      firstCard.classList.remove('flipped');
      this.classList.remove('flipped');
      waiting = false;

       // Reset the cards for the next turn
    firstCard = null;
    secondCard = null;
    // Time -- below 
    }, 1000);
    
  }
}


document.querySelectorAll('.flipper').forEach((playable) => {
  playable.addEventListener('click', turnOver);

})

restartBtn.addEventListener('click', dealCards);
  dealCards() // call the dealCards function  --- used to randomize the page for every refresh! 




// document.querySelector('#clickMe').addEventListener('click', makeReq)

// function makeReq(){

//   const userName = document.querySelector("#userName").value;

//   fetch(`/api?student=${userName}`)
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data);
//       document.querySelector("#personName").textContent = data.name
//       document.querySelector("#personStatus").textContent = data.status
//       document.querySelector("#personOccupation").textContent = data.currentOccupation
//     });

// }

// document.getElementById("clickMe").onclick = makeReq;
//
// function makeReq(){
//
//   var userName = document.getElementById("userName").value;
//
//   var request = new XMLHttpRequest();
//   request.open('GET', '/api?student='+userName, true);
//
//   request.onload = function() {
//       console.log("works")
//       if (request.status >= 200 && request.status < 400) {
//         // Success!
//         var data = JSON.parse(request.responseText);
//         console.log(data)
//         document.getElementById("personName").innerHTML = data.name
//         document.getElementById("personStatus").innerHTML = data.status
//         document.getElementById("personOccupation").innerHTML = data.currentOccupation
//
//       } else {
//         // We reached our target server, but it returned an error
//
//       }
//     };
//
//     request.onerror = function() {
//       // There was a connection error of some sort
//     };
//
//     request.send();
