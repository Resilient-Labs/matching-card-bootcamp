import { Queue } from './queue.js';

const images = ['☎️', '🍎', '🇿🇼', '🥐', '🧲'];
const N = 10;
const clickedButtons = new Queue();
let hidden = 0;

function shuffleNums() {
  const nums = [0, 1, 2, 3, 4, 0, 1, 2, 3, 4];
  let shuffledNums = nums
    .map((val) => ({ val, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ val }) => val);
  return shuffledNums;
}
const currShuffle = shuffleNums();

//if there is a match remove them from the dom
//if not do nothing (for now)
function checkEquality(a, b) {
  const firstId = a.id;
  const secondId = b.id;

  const match = currShuffle[firstId] === currShuffle[secondId];
  if (match) {
    a.classList.add('disable'); 
    b.classList.add('disable'); 
    setTimeout(() => {
      a.childNodes.forEach((child) => child.classList.add('hidden'));
      b.childNodes.forEach((child) => child.classList.add('hidden'));
    }, 500);

    hidden += 2;
  } else {
    setTimeout(() => {
      flipBack(a);
      flipBack(b);
    }, 1000);
    console.log('no match!');
  }
}

function checkFirstTwoClickedButtons() {
  const [first, second] = clickedButtons.dismountFirstTwo();
  checkEquality(first, second);
}

function generateBoard() {
  const board = document.querySelector('.board');
  for (let i = 0; i < N; i++) {
    //create a square
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    square.setAttribute('id', i);
    //create a div for the front of the image
    const front = document.createElement('div');
    front.setAttribute('class', 'card-front');
    front.textContent = '⭐︎';
    //create a div for the back of the image
    const img = document.createElement('div');
    img.setAttribute('class', 'card-back hidden');
    img.textContent = images[currShuffle[i]];
    //add eventListener to the square
    square.addEventListener('click', (e) => handleButtonClick(e));
    //add everything to the dom
    square.appendChild(front);
    square.appendChild(img);
    board.appendChild(square);
  }
}

function flip(e) {
  const front = e.childNodes[0];
  const back = e.childNodes[1];
  front.classList.add('hidden');
  back.classList.remove('hidden');
}

function flipBack(e) {
  const front = e.childNodes[0];
  const back = e.childNodes[1];
  front.classList.remove('hidden');
  back.classList.add('hidden');
}

function handleButtonClick(e) {
  //flip and show the image
  const clickedDiv = e.currentTarget;
  flip(clickedDiv);
  clickedButtons.push(clickedDiv);

  //if there are two clicked buttons, check if they are the same
  if (clickedButtons.length >= 2) {
    checkFirstTwoClickedButtons();
  }

  if (hidden === N) {
    console.log('You matched them all!');
    document.querySelector('.hasWon').textContent = 'You matched them all!';
  }
  // return e.target.id;
}

function main() {
  generateBoard();
}

window.onload = main;

//the goal is:
//1. when the square is clicked, show the back image
//2. when 2 squares are clicked and they are the same(they are hidden forever)
//2. and they are different show the front, hide the back

//still need to do:
//1 disable the click event on the same square ✅
//1. disable a square once it has been matched 
//1. add a reset button
//2. add a timer
//3. add a score
//4. add a way to restart the game
//6. add a way to choose the number of images
