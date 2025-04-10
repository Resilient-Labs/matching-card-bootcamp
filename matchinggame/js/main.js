//final submission 
const eachSection = ['🎀','🎀','🌸','🌸','💅','💅','👛','👛','🛍️','🛍️']
const shuffleEachSection = eachSection.sort((a,b) => 0.5 - Math.random()) //mdn: 
console.log(shuffleEachSection);

var numberOfClicks = 0
var firstClickIndex = null
var secondClickIndex = null


let allCards = document.querySelectorAll('.card')
console.log(allCards);
for (let i = 0; i < allCards.length; i++){
	allCards[i].addEventListener('click', theGame)

	function theGame(event) {
		console.log(event);
		console.log(i);
		numberOfClicks++
		if (numberOfClicks === 1){
			event.target.innerText = shuffleEachSection[i]
			firstClickIndex = i
			
		}
		else if (numberOfClicks === 2){
			event.target.innerText = shuffleEachSection[i]
			secondClickIndex = i
			console.log((allCards[firstClickIndex].innerText.charCodeAt() == allCards[secondClickIndex].innerText.charCodeAt()));
			
			if (allCards[firstClickIndex].innerText.charCodeAt() == allCards[secondClickIndex].innerText.charCodeAt()){
				console.log('you win!');
				

			}
			else {
				allCards[firstClickIndex].innerText = ''
				allCards[secondClickIndex].innerText = ''


			}
			numberOfClicks = 0
		}

			//remove everything after done w second click 
	
	}
	
	
}

/*
//this code finally worked !!!
const eachSection = ['🎀','🎀','🌸','🌸','💅','💅','👛','👛','🛍️','🛍️']
const shuffleEachSection = eachSection.sort((a,b) => 0.5 - Math.random()) //mdn: 
console.log(shuffleEachSection);

var numberOfClicks = 0
var firstClickIndex = null
var secondClickIndex = null


let allCards = document.querySelectorAll('.card')
console.log(allCards);
for (let i = 0; i < allCards.length; i++){
	allCards[i].addEventListener('click', theGame)

	function theGame(event) {
		console.log(event);
		console.log(i);
		numberOfClicks++
		if (numberOfClicks === 1){
			event.target.innerText = shuffleEachSection[i]
			firstClickIndex = i
			
		}
		else if (numberOfClicks === 2){
			event.target.innerText = shuffleEachSection[i]
			secondClickIndex = i
			console.log((allCards[firstClickIndex].innerText.charCodeAt() == allCards[secondClickIndex].innerText.charCodeAt()));
			
			if (allCards[firstClickIndex].innerText.charCodeAt() == allCards[secondClickIndex].innerText.charCodeAt()){
				console.log('you win!');
				

			}
			else {
				allCards[firstClickIndex].innerText = ''
				allCards[secondClickIndex].innerText = ''


			}
			numberOfClicks = 0
		}

			//remove everything after done w second click 
	
	}
	
	
}
*/

//thought process 
//const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const shuffledArray = array.sort((a, b) => 0.5 - Math.random());


// function each randomizing the board
/*function eachSectionReturn() {
	//while (eachSection.length <=0)
	for (let i = 0; i < 10;i++)
		{
	
	let theCards = eachSection.splice(Math.floor(Math.random()* eachSection.length), 1)//mdn splice : The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
	randomEachSection.push(theCards)
	
	
}
return randomEachSection


}


// .forEach((section, i) => section.addEventListener('click', (e)=> theGame(e,i)))//note to self: i is for index, ()=>, allows you pass additional arguements to fx & e is for an event 

 
//  console.log(i);

	 
   
	
	




//another idea 

/* 
*/
/*var randomEachSection = []
var x = ['🎀','🎀','🌸','🌸','💅','💅','👛','👛','🛍️','🛍️']
console.log(x);

function eachSectionReturn() {
	//while (eachSection.length <=0)
	for (let i = 0; i < 10;i++)
		{
	
	var y = x.splice(Math.floor(Math.random()*x.length), 1)
	randomEachSection.push(y)
	
	console.log(y);
	
	
}
return randomEachSection


}
document.querySelectorAll('.one').forEach(section => section.addEventListener('click', theGame))
function theGame(e) {
	

	let theSquares = eachSectionReturn()
	console.log(theSquares);
	
	e.target.innerText = (theSquares)

}*/



//one idea 
/*
const eachSection = ['🎀','🎀','🌸','🌸','💅','💅','👛','👛','🛍️','🛍️']
const randomEachSection = []

// function each randomizing the board
function eachSectionReturn() {
	//while (eachSection.length <=0)
	for (let i = 0; i < 10;i++)
		{
	//let randomNumber = Math.floor(Math.random() * eachSection.length )
	let theCards = eachSection.splice(Math.floor(Math.random()* eachSection.length), 1)//mdn splice : The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
	randomEachSection.push(theCards)
}
return randomEachSection


}

document.querySelectorAll('.card').forEach((section, i) => section.addEventListener('click', (e)=> theGame(e,i)))//note to self: i is for index, ()=>, allows you pass additional arguements to fx & e is for an event 
 function theGame(e, i) {
 
 console.log(i);

 
   
	
	let theSquares = eachSectionReturn()
	e.target.innerText = theSquares[i]
console.log(theSquares[i]);


 }




//one idea 
/*
const eachSection = ['🎀','🎀','🌸','🌸','💅','💅','👛','👛','🛍️','🛍️']
const randomEachSection = []

// function each randomizing the board
function eachSectionReturn() {
	//while (eachSection.length <=0)
	for (let i = 0; i < 10;i++)
		{
	let randomNumber = Math.floor(Math.random() * eachSection.length )
	let theCards = eachSection.splice(randomNumber,1)[0];//mdn splice : The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
	randomEachSection.push(theCards)
}
return randomEachSection


}

document.querySelectorAll('.card').forEach((section, i) => section.addEventListener('click', (e)=> theGame(e,i)))//note to self: i is for index, ()=>, allows you pass additional arguements to fx & e is for an event 
 function theGame(e, i) {
 
 console.log(i);

 
   
	
	let theSquares = eachSectionReturn()
	e.target.innerText = theSquares[i]
console.log(theSquares[i]);


 }

function theMatch() {
	let one = document.querySelector('#one').innerHTML
	let two = document.querySelector('#two').innerHTML
	let three = document.querySelector('#three').innerHTML
	let four = document.querySelector('#four').innerHTML
	let five = document.querySelector('#five').innerHTML
	let six = document.querySelector('#six').innerHTML
	let seven = document.querySelector('#seven').innerHTML
	let eight = document.querySelector('#eight').innerHTML
	let nine = document.querySelector('#nine').innerHTML
	let ten = document.querySelector('#nine').innerHTML
	


   
	if (one === two  || one === two || one === three || one === four || one === five || one === six|| one === seven || one === eight|| one === nine || one === ten || one !== '' ||
		two === three || two === four ||  two === five || two === six|| two === seven || two === eight|| two === nine || two === ten || two !== '' ||
		three === four ||  three === five || three === six|| three === seven || three === eight|| three === nine || three === ten || three !== '' ||
		four === five || four === six|| four === seven || four === eight|| four === nine || four === ten || four !== '' ||
		five === six|| five === seven || five=== eight|| five === nine || five=== ten || five !== '' ||
		six === seven || six== eight|| six === nine || six === ten || six !== '' ||
		seven == eight|| seven === nine || seven === ten || seven !== '' ||
		 eight === nine || eight === ten || eight !== '' || nine  === ten || nine !== '')
		 
		 {
			document.querySelector('#results').innerText = ('Its a MATCH')
		 }
	else
	{
		document.querySelector('#results').innerText = ('TRY AGAIN!')
	}
   }

*/
//

/*Note: I was very frustated with this project, I had multiple request for help and tried asking for help on stackoverflow, below is my new understanding on how to do project 
here is the link to the stackoverflow: https://stackoverflow.com/a/79559582/29576377

//const eachSection = ['🎀','🎀','🌸','🌸','💅','💅','👛','👛','🛍️','🛍️']
//const theMatches = eachSection[Math.random() * eachSection.length]
//console.log(theMatches);

const letMakeCards = {
	bow : "🎀",
	bowone : "🎀",
	flower : "🌸",
	flowerone : "🌸",
	nails: "💅",
	nailsone: "💅",
	purse: "👛",
	purseone: "👛",
	shopping: "🛍️",
	shoppingone: "🛍️",
}
console.log(letMakeCards);

const cards =Object.values(letMakeCards)
console.log(cards);

//const theCardsArray = cards[Math.random() * cards.length]
//console.log(theCardsArray);

function cardReturn() {
	return cards[Math.random() * cards.length]
}




/*const slotMachine = {
	cherry: "🍒",
	lemon: "🍋",
	watermelon: "🍉",
	star: "⭐",
	orange: "🍊",
	bell: "🔔"
	

}
console.log(slotMachine)
const slots = Object.values(slotMachine)
console.log(slots)

function slotReturn() {
	return slots[Math.random() * slots.length]
}
const randomEachSection = []
//slots[Math.random() * slots.length]
// function each randomizing the board
function eachSectionReturn() {
	//while (eachSection.length <=0)
	for (let i = 0; i < 10;i++)
		{
	//let randomNumber = Math.floor(Math.random() * eachSection.length )
	let theCards = Array.splice(0,1);//mdn splice : The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
	randomEachSection.push(theCards)
}
return randomEachSection


}

document.querySelectorAll('.card').forEach((section, i) => section.addEventListener('click', (e)=> theGame(e,i)))//note to self: i is for index, ()=>, allows you pass additional arguements to fx & e is for an event 
 function theGame(e, i) {
 
 console.log(i);

 
   
	
	let theSquares = eachSectionReturn()
	e.target.innerText = theSquares[i]
console.log(theSquares[i]);


 }

function theMatch() {
	let one = document.querySelector('#one').innerHTML
	let two = document.querySelector('#two').innerHTML
	let three = document.querySelector('#three').innerHTML
	let four = document.querySelector('#four').innerHTML
	let five = document.querySelector('#five').innerHTML
	let six = document.querySelector('#six').innerHTML
	let seven = document.querySelector('#seven').innerHTML
	let eight = document.querySelector('#eight').innerHTML
	let nine = document.querySelector('#nine').innerHTML
	let ten = document.querySelector('#nine').innerHTML
	


   
	if (one === two  || one === two || one === three || one === four || one === five || one === six|| one === seven || one === eight|| one === nine || one === ten || one !== '' ||
		two === three || two === four ||  two === five || two === six|| two === seven || two === eight|| two === nine || two === ten || two !== '' ||
		three === four ||  three === five || three === six|| three === seven || three === eight|| three === nine || three === ten || three !== '' ||
		four === five || four === six|| four === seven || four === eight|| four === nine || four === ten || four !== '' ||
		five === six|| five === seven || five=== eight|| five === nine || five=== ten || five !== '' ||
		six === seven || six== eight|| six === nine || six === ten || six !== '' ||
		seven == eight|| seven === nine || seven === ten || seven !== '' ||
		 eight === nine || eight === ten || eight !== '' || nine  === ten || nine !== '')
		 
		 {
			document.querySelector('#results').innerText = ('Its a MATCH')
		 }
	else
	{
		document.querySelector('#results').innerText = ('TRY AGAIN!')
	}
   }*/

//note to self: I wrote my question on stackoverflow, and was given feedback on how to look at this problem a different way will give it a try 
//Here I have to assign the cards a random value which was the issue I was having because each time the images were not correlating w the #

/*const shuffleTheCards = (theArray) => theArray
.map (value => ( {rank : Math.random(),value})) //mdn .map , The map() method on an array creates a new array by applying a given function to each element of the original array
.sort ((a, b) => a.rank -b.rank) //mdn, The sort() method sorts an array in place and returns the same array. 
.map (a => a.value)

const repeatTheArray = (theArray) => theArray
.concat (theArray)

//here I need to define the cards, and i had done that before 
const eachSection = ['🚕','🗽','🌃','🍕','🍎']

const cardsRepeat = repeatTheArray(eachSection)

//make the card 
const theGame =  shuffleTheCards(repeatTheArray(eachSection))
console.log(theGame);//cards were doubled 

//now i have to make the board into a grid, i had that done that as well , i had this in my previous code 
let gameCards = null; 
document.querySelectorAll('.card').forEach((card, index) => {
	card.addEventListener ('click', e => {
		if (gameCards === index) {
			return ;
		}
		if (gameCards === null) {
			gameCards = index ; 
			console.log(`The first card chosen is ${gameCards}`);
		}
			else {
				console.log(`${gameCards} and ${index}`);
				gameCards = null ;
			}

				
			})
			
		})
	//mdn : The null value represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations.
	
	//next part is the logic- i really struggling with the logic part need to keep working on it 
	const whatIsOnTheCard = document.querySelectorAll('.card')
	let letsPlay = Array
	.from(whatIsOnTheCard)
	.map((e,i) => ({
		symbol: theGame[i],
		e,
		state: "hidden"
	}))
// now is how to do the flip part, need to keep working on this -but I am learning how to do this following the post I had asked a question on in Stackoverflow
const whenCardIsClicked = (card) => {
	if (whatIsOnTheCard.some (card => card.state === "incorrect")) return; 
	if (card.state === "hidden"){
		card.state = "turned";
	}
	const whatIsTurned = whatIsOnTheCard.filter (card => card.state === "turned")
	if (whatIsTurned.length === 2){
		const [a, b] = turned ;
	}
	if (a.eachSection === b.eachSection) {
		a.state = "incorrect";
		b.state = "incorrect" 
	}
	setTimeout (() => {
		a.state = "hidden";
		b.state = "hidden";
		render ();
	}, 2100);
	render ()
}

//now to play the game 
const render = () => {
	letsPlay.forEach(card => {
		const theText = card.state === " hidden" ? "" : card.symbol;
		const theColor = (
			card.state === "correct" ? "white":
			card.state === "incorrect" ?  "white": "white"
	);
	card.e.innerText = theText;
	card.e.style.background = theColor;

});
}

  
  
 letsPlay. forEach(card => {
	card.e.addEventListener('click', () => whenCardIsClicked (card));})
 
  

render()
  




/*const eachSection = ['🚕','🚕','🗽','🗽','🌃','🌃','🍕','🍕','🍎','🍎']

const randomEachSection = []




function eachSectionReturn() {
	//while (eachSection.length <=0)
	for (let i = 0; i < 10;i++)
		{
	let randomNumber = Math.floor(Math.random() * eachSection.length )
	let theCards = eachSection.splice(randomNumber,1)[0];//mdn splice : The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
	randomEachSection.push(theCards)
}
return randomEachSection
}
document.querySelectorAll('.one').forEach((section, i) => section.addEventListener('click', (e)=> theGame(e,i)))//note to self: i is for index, ()=>, allows you pass additional arguements to fx & e is for an event 
 function theGame(e, i) {
 
 console.log(i);
 //console.log(e);
 
   
	
	let theSquares = eachSectionReturn()
	e.target.innerText = theSquares[i]
	//theMatch()
	

	


 }

 /*function theMatch() {
 let one = document.querySelector('#one').innerHTML
 let two = document.querySelector('#two').innerHTML
 let three = document.querySelector('#three').innerHTML
 let four = document.querySelector('#four').innerHTML
 let five = document.querySelector('#five').innerHTML
 let six = document.querySelector('#six').innerHTML
 let seven = document.querySelector('#seven').innerHTML
 let eight = document.querySelector('#eight').innerHTML
 let nine = document.querySelector('#nine').innerHTML
 let ten = document.querySelector('#nine').innerHTML

 if (one === two || one === two || one === three || one === four || one === five || one === six|| one === seven || one === eight|| one === nine || one === ten || one !== '' ||
	 two === three || two === four ||  two === five || two === six|| two === seven || two === eight|| two === nine || two === ten || two !== '' ||
	 three === four ||  three === five || three === six|| three === seven || three === eight|| three === nine || three === ten || three !== '' ||
	 four === five || four === six|| four === seven || four === eight|| four === nine || four === ten || four !== '' ||
	 five === six|| five === seven || five=== eight|| five === nine || five=== ten || five !== '' ||
	 six === seven || six== eight|| six === nine || six === ten || six !== '' ||
	 seven == eight|| seven === nine || seven === ten || seven !== '' ||
	  eight === nine || eight === ten || eight !== '' || nine  === ten || nine !== '')
	  
	  {
		 document.querySelector('#results').innerText = ('Its a MATCH')
	  }
 else
 {
	 document.querySelector('#results').innerText = ('TRY AGAIN!')
 }
}



 




 /*function theMatch() {
	let one = document.querySelector('#one').innerText
	let two = document.querySelector('#two').innerText
	let three = document.querySelector('#three').innerText
	let four = document.querySelector('#four').innerText
	let five = document.querySelector('#five').innerText
	let six = document.querySelector('#six').innerText
	let seven = document.querySelector('#seven').innerText
	let eight = document.querySelector('#eight').innerText
	let nine = document.querySelector('#nine').innerText
	let ten = document.querySelector('#nine').innerText

	if (one === two || one === two || one === three || one === four || one === five || one === six|| one === seven || one === eight|| one === nine || one === ten || one !== '' ||
		two === three || two === four ||  two === five || two === six|| two === seven || two === eight|| two === nine || two === ten || two !== '' ||
		three === four ||  three === five || three === six|| three === seven || three === eight|| three === nine || three === ten || three !== '' ||
		four === five || four === six|| four === seven || four === eight|| four === nine || four === ten || four !== '' ||
		five === six|| five === seven || five=== eight|| five === nine || five=== ten || five !== '' ||
		six === seven || six== eight|| six === nine || six === ten || six !== '' ||
		seven == eight|| seven === nine || seven === ten || seven !== '' ||
		 eight === nine || eight === ten || eight !== '' || nine  === ten || nine !== '')
	
		
		
		
		{
		displayWinningResults()

	}
	else {
	  //displayLosingResults()
	}

}

function displayLosingResults() {
document.querySelector('#results').innerText = ('TRY AGAIN!')
}
function displayWinningResultsOne() {
	document.querySelector('#results').innerText = ('Its a MATCH')
	
}





 note to self: thought process
let cards = ["🚕","🗽", "🌃","🍕", "🍎" ]
for (let i = 0; i < cards.length; i++)
/* notes to self: use async/await ?

pseudo code notes;
1. make board (index/css)-done
2. 10 cards shuffled in each slot-done
3. use .toggle to hide, display: none

/*function checkMatch() {
	//if the random is = to the array 
	/*let taxi = eachSection[0]
	let ladyLiberty = eachSection[1]
	let skyLine = eachSection[2]
	let pizza = eachSection[3]
	let bigApple = eachSection[4]*/
	/*if (theSquares === eachSection) {
		//keep it flip 
		document.querySelector('h2').innerText = "It's a match"
	}
	else {
		//flip it back over => .toggle or display none 
		document.querySelector('h2').innerText = "Try Again"
	}


}
//draft one :
onst theFlipSide = {
	cardOne: "🚕",
	cardTwo: "🗽",
	cardThree: "🌃",
	cardFour: "🍕",
	cardFive: "🍎"

}
console.log(theFlipSide);
const eachSection = Object.values(theFlipSide)




function eachSectionReturn() {
	
	return eachSection[Math.floor(Math.random() * eachSection.length)]
	// allow that item to be outputted twice and then remove it from list 
}
document.querySelectorAll('.one').forEach(section => section.addEventListener('click', theGame))
function theGame(e) {
	

	let theSquares = eachSectionReturn()
	e.target.innerText = (theSquares)




}
//draft two: more thoughts
let cards = ["🚕","🗽", "🌃","🍕", "🍎" ]

for (let i = Array.length -1; i > 0 ; i -- ){

}

function eachSectionReturn(cards) {
	for (let i = cards.length -1; i > 0 ; i -- ){

	}


}*/

	
	/*return eachSection[Math.floor(Math.random() * eachSection.length)]
	// allow that item to be outputted twice and then remove it from list 
}*/

//notes from stackoverflow
//if (theIndex.length >= 0)
/*let array = [1,2,3,4,5]
function duplicateArray (){
for ()// the goal is another array all of pair in random order

}

/*function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
console.log */
/*function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
console.log */

//draft 3:  on how to make a matching card game 
/*const theFlipSide = {
	cardOne: "🚕",
	cardTwo: "🗽",
	cardThree: "🌃",
	cardFour: "🍕",
	cardFive: "🍎"

}
 console.log(theFlipSide);
 //const eachSection = Object.values(theFlipSide)
 console.log(eachSection);
 
 let theIndex = [0,1,2,3,4]

 
 eachSectionReturn()
 function eachSectionReturn() {
 
	let randomNumber = Math.floor(Math.random() * eachSection.length )
	let theIndex = [0,1,2,3,4]
	let randomEachSection = []
	console.log(randomNumber, 'Random number');
	console.log(theIndex, 'The index');
	console.log(randomEachSection, 'random each section');
 
	//index length is > 0 , for it to keep running
	//for (let i = theIndex.length ; i > 4;i++)
		//{
 
 
 
		if (theIndex.find((e) => e == randomNumber) != undefined){
			randomEachSection.push(eachSection[randomNumber] )
			//theIndex = theIndex.filter((e) => e != randomNumber)
 console.log(theIndex,'filtered');
 console.log(randomNumber, 'w/n if');
 
 
 
 }
 theIndex = theIndex.filter((e) => e != randomNumber)
	}
	
	//return eachSection[Math.floor(Math.random() * eachSection.length )]
 
	// allow that item to be outputted twice and then remove it from list
 
 //const map = eachSection.map((x) => x * 2);
 //console.log(map);
 
 
 document.querySelectorAll('.one').forEach(section => section.addEventListener('click', theGame))
 function theGame(e) {
 
 
	let theSquares = eachSectionReturn()
	e.target.innerText = (theSquares)
 }

//draft four:

// const theFlipSide = {
	cardOne: "🚕",
	cardTwo: "🗽",
	cardThree: "🌃",
	cardFour: "🍕",
	cardFive: "🍎"

}
console.log(theFlipSide);
const eachSection = Object.values(theFlipSide)
console.log(eachSection);
eachSectionReturn()


function eachSectionReturn(){
	let randomNumber = Math.floor(Math.random() * eachSection.length )
	let theIndex = [0,1,2,3,4]
	let randomEachSection = []
	console.log(randomNumber, 'Random number');
	console.log(theIndex, 'The index');
	console.log(randomEachSection, 'random each section');

}

if (theIndex.find((e) => e == randomNumber) != undefined)
	{
	randomEachSection.push(eachSection[randomNumber] )
	
	console.log(theIndex,'filtered');
	console.log(randomNumber, 'w/n if');
}
document.querySelectorAll('.one').forEach(section => section.addEventListener('click', theGame))
function theGame(e) {
	

	let theSquares = eachSectionReturn()
    e.target.innerText = (theSquares)

}


//draft 5
/*const theFlipSide = {
	cardOne: "🚕",
	cardTwo: "🗽",
	cardThree: "🌃",
	cardFour: "🍕",
	cardFive: "🍎"

}
function matchGame (){
	const itemsUsed = {}
}*/


//draft 6
/*const theFlipSide = {
	cardOne: "🚕",
	cardTwo: "🗽",
	cardThree: "🌃",
	cardFour: "🍕",
	cardFive: "🍎"

}


function eachSectionReturn (){

console.log(theFlipSide);
const theCard = (theFlipSide) => {
	theFlipSide.sort(_ => Math.random() - 0.5);
	return theCard
}

}
document.querySelectorAll('.one').forEach(section => section.addEventListener('click', theGame))
function theGame(e) {
	

	let theSquares = eachSectionReturn()
    e.target.innerText = (theSquares)

}

//draft 7: 
const theFlipSide = {
	cardOne: "🚕",
	cardTwo: "🗽",
	cardThree: "🌃",
	cardFour: "🍕",
	cardFive: "🍎"

}
console.log(theFlipSide);
const eachSection = Object.values(theFlipSide)
console.log(eachSection);
eachSectionReturn()

function eachSectionReturn() {
	let items = {
		0 : 0,
		1 : 0,
		2 : 0,
		3 : 0,
		4 : 0
	}
	let usedNumber =  (Object.keys(_, [index])?

	



	let randomNumber = Math.floor(Math.random() * eachSection.length )
	let theIndex = [0,1,2,3,4]
	let randomEachSection = []
	console.log(randomNumber, 'Random number');
	console.log(theIndex, 'The index');
	console.log(randomEachSection, 'random each section');
	
		{
	
	
		
		if (theIndex.find((e) => e == randomNumber) != undefined){
			randomEachSection.push(eachSection[randomNumber] )
			theIndex = theIndex.filter((e) => e != randomNumber) 
console.log(theIndex,'filtered');
console.log(randomNumber, 'w/n if');
		
	
	

	//return eachSection[Math.floor(Math.random() * eachSection.length)]
	// allow that item to be outputted twice and then remove it from list 
	//_ => Math.random() - 0.5);
}
		}


document.querySelectorAll('.one').forEach(section => section.addEventListener('click', theGame))
function theGame(e) {
	

	let theSquares = eachSectionReturn()
    e.target.innerText = (theSquares)

}
}

/*  pseudo code 
1. something to populate the cards - board needs to be set 
2. 


// draft 8
const theFlipSide = {
	cardOne: "🚕",
	cardTwo: "🗽",
	cardThree: "🌃",
	cardFour: "🍕",
	cardFive: "🍎"

}
console.log(theFlipSide);





const eachSection = Object.values(theFlipSide)
console.log(eachSection);


//let theIndex = [0,1,2,3,4]

eachSectionReturn()
function eachSectionReturn() {
	
	let randomNumber = Math.floor(Math.random() * eachSection.length )
	let theIndex = [0,1,2,3,4]
	let randomEachSection = []
	console.log(randomNumber, 'Random number');
	console.log(theIndex, 'The index');
	console.log(randomEachSection, 'random each section');
	
	//index length is > 0 , for it to keep running
	//for (let i = theIndex.length ; i > 4;)
		{
	
	
		
		if (theIndex.find((e) => e == randomNumber) != undefined){
			randomEachSection.push(eachSection[randomNumber] )
			//theIndex = theIndex.filter((e) => e != randomNumber) 
console.log(theIndex,'filtered');
console.log(randomNumber, 'w/n if');

		
	
}
	}
	theIndex = theIndex.filter((e) => e != randomNumber) 
	//return eachSection[Math.floor(Math.random() * eachSection.length )]

	// allow that item to be outputted twice and then remove it from list 
}
//const map = eachSection.map((x) => x * 2);
//console.log(map);



document.querySelectorAll('.one').forEach(section => section.addEventListener('click', theGame))
function theGame(e) {
	

	let theSquares = eachSectionReturn()
	e.target.innerText = (theSquares)

}*/
