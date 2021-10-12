//made with assistance from this youtube tutorial by dev-ed
//https://www.youtube.com/watch?v=-tlb4tv4mC4


//grabs a couple of things

const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span')
let playerLives = 5

//link text
playerLivesCount.textContent = playerLives

//12 images
let images = [
//image set 1
{imgSrc: './images/sofiaFall.png', name : 'sofiaFall'},
{imgSrc: './images/sofiaFlorida.png', name : 'sofiaFlorida'},
{imgSrc: './images/sofiaPlayGround.png', name : 'sofiaPlayGround'},
{imgSrc: './images/sofiaSpring.png', name : 'sofiaSpring'},
{imgSrc: './images/sofiaSummer.png', name : 'sofiaSummer'},
{imgSrc: './images/sofiaWinter.png', name : 'sofiaWinter'},
//image set 2
{imgSrc: './images/sofiaFall.png', name : 'sofiaFall'},
{imgSrc: './images/sofiaFlorida.png', name : 'sofiaFlorida'},
{imgSrc: './images/sofiaPlayGround.png', name : 'sofiaPlayGround'},
{imgSrc: './images/sofiaSpring.png', name : 'sofiaSpring'},
{imgSrc: './images/sofiaSummer.png', name : 'sofiaSummer'},
{imgSrc: './images/sofiaWinter.png', name : 'sofiaWinter'},
]

//randomize
const randomize = () =>{
    const cardData = images;
    cardData.sort(() => Math.random() - 0.5); // algorithm to randomize images array
    return cardData // captures new set of randomized images array
}

//card generator function
const cardGenerator = () => {
    const cardData = randomize() 
    //generate html
    cardData.forEach( item =>{
        const card = document.createElement('div'); //creates div element , box
        const face = document.createElement('img'); // creates img element , image
        const back = document.createElement('div'); // creates div element, white square
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';
        //attach image to cards
        face.src = item.imgSrc 
        //adds name property to card objects
        card.setAttribute('name', item.name);
        //attach cards to Section in HTML
        section.appendChild(card);
        card.appendChild(face)
        card.appendChild(back)

        card.addEventListener('click', (e) =>{
            card.classList.toggle('toggleCard');
            checkCards(e) 
        });
    });

}; 

//check cards
const checkCards = (e) => {
    const clickedCard = e.target;
    console.log(clickedCard)
    clickedCard.classList.add('flipped') //adds flipped class
    const flippedCards = document.querySelectorAll('.flipped'); //creates array for flipped cards
    const toggleCard = document.querySelectorAll('.toggleCard') //grabs all toggles cards and puts them in an array. will be used for win alert when togglecards === 12 ie all cards flipped over 
    //logic
    if(flippedCards.length === 2){
        if(flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')){
            console.log('match')
            flippedCards.forEach((card)=> {
                card.classList.remove('flipped') // so we can clear the array
                card.style.pointerEvents = 'none'  //makes the correct card unclickable
            })
        }else{
            console.log( 'no match')
            flippedCards.forEach( card => {  //removes flip class and reverts 180 flip
                card.classList.remove('flipped');  // so we can clear the array
                setTimeout(() => card.classList.remove('toggleCard'), 1000);
            });
            playerLives --;  //decrease lives by 1
            playerLivesCount.textContent = playerLives; //update UI
            if(playerLives === 0){ //run if lost game
                restart('(╬⁰  Д  ⁰ ) noooooo! No... more... lives.. YOU LOSE!!!');
            }
        }
    }
    if(toggleCard.length === 12 ){
        restart('(๑ ˃̵ᴗ˂̵ )و Yessssss! Sucess!! YOU WIN!!!');
    }
    
};

//restart
const restart = (text) => {
   let cardData = randomize(); //stores randomized images in variable
   let faces = document.querySelectorAll('.face'); //
   let cards = document.querySelectorAll('.card');
   section.style.pointerEvents = 'none'; //when restarting, the board is not clickable
   cardData.forEach((item,index)=>{
       cards[index].classList.remove('toggleCard'); //remove all toggle classes, flipping everything over
       //randomization and updates
       setTimeout(() => {  //wait for all cards to flip and then randomize
        cards[index].style.pointerEvents = 'all'; //add back pointer events for correct clicks, issue: when correct pointer events are removed
        faces[index].src = item.imgSrc; // randomized images
        cards[index].setAttribute('name', item.name); //sets name to image
        section.style.pointerEvents = 'all'; //board is clickable again
       },1000);
       
    })
   playerLives = 5;
   playerLivesCount.textContent = 5
   setTimeout(() => window.alert(text), 100)  //alert for win or lose
}

cardGenerator()