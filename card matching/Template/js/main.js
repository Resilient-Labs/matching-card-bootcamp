document.addEventListener('DOMContentLoaded',()=>{
  document.querySelector('section').addEventListener('click',()=>{
    document.querySelector('table').innerHTML=""
    const carPic=[
      {name:'Civic EG Hatch 1994',img:'img/egcivic.jpg',},{name:'Civic EG Hatch 1994',img:'img/egcivic.jpg',},
      {name:'BMW M3 1990s',img:'img/e30.jpg'},{name:'BMW M3 1990s',img:'img/e30.jpg'},
      {name:'Miata!',img:'img/force.jpg'},{name:'Miata!',img:'img/force.jpg'},
      {name:'Honda Prelude 2001',img:'img/prelude.jpg'},{name:'Honda Prelude 2001',img:'img/prelude.jpg'},
      {name:'Porsche RWB 911 1980s',img:'img/rbw.jpg'},{name:'Porsche RWB 911 1980s',img:'img/rbw.jpg'},
      {name:'Nissan Silvia 240sx',img:'img/s14.jpg'},{name:'Nissan Silvia 240sx',img:'img/s14.jpg'}]
// array with objects with 2 properties to access easier
// document.querySelector('body').style.background=`url(${carPic[1]})`
      const table =document.querySelector('table')
      var cardsChoosen=[]
// variable for the choosen cards, will only contain 2 at a time
      var cardChoID=[]
// the id's from each card based on data-id
      var cardsWon=[]
// counts the number of card pairs so we know when to win
      function createBoard(){
        for(let i=0; i<carPic.length;i++){
          let card = document.createElement('img')
          // creating an image tage for each item of carpic array
          card.setAttribute('src','img/bbs.png')
          // adding the src of the image associated with each image
          card.setAttribute('data-id',i)
          // giving an ID to each item of the array
          card.addEventListener('click',cardFlip)
          // each card will flip on click
          table.appendChild(card)
          // adding an image associated with the attributes added to each item of the array
          card.classList.add("wheel")
          // adding a css class of wheel to make it spin
        }
      }
      createBoard()

function checkforMatch(){
  var cards=document.querySelectorAll('img')
  const choice1ID=cardChoID[0]
  const choice2ID=cardChoID[1]
  // assigns a variable to the id of each choice each turn

  if (cardsChoosen[0]===cardsChoosen[1]){
    // alert(`Ayyyyy you got a ${cardsChoosen[0]}`)
    document.querySelector('h3').innerText=`Ayyyyy you got a ${cardsChoosen[0]}`
    cardsWon.push(cardsChoosen)
  }else{
    cards[choice1ID].setAttribute('src','img/bbs.png')
    cards[choice2ID].setAttribute('src','img/bbs.png')
    // resetting images
    document.querySelector('h3').innerText='Sorry you lost keep choosing'
  }
  cardsChoosen=[]
  cardChoID=[]
  console.log(cardsWon)
  // resetting arrays to maintain arrays at 2 items for each turn
  if (cardsWon.length===carPic.length/2){
    // alert("congradulations you won")
    document.querySelector('h3').innerText="Congradulations you won!! press the NRG Steering Wheel to Restart"
    // if all pairs are completed you win
  }
}
function cardFlip(){
  var cardID=this.getAttribute('data-id')
  cardsChoosen.push(carPic[cardID].name)
  // getting the name property associated with each item on carpic array
  cardChoID.push(cardID)
  this.setAttribute('src',carPic[cardID].img)
  // chaning the pic to the car pic
  if (cardsChoosen.length===2){
    setTimeout(checkforMatch,500)
  }
}
carPic.sort(()=> 0.5-Math.random())
// randomizes the array carPic each time it refreshes
})
})
