//Pseudo Code
//User Clicks on 1st card=> diplayed
    /*click the box
    //on the click, display value (or number (which will be image later)) of the box
    */


//user clicks 2nd card => displayed
    /*click the box
    //on the click, display value (or number (which will be image later)) of the box
    */
//compare values/images---=>> see  slot machines
    //if value1==value2
    //if value1!== value2

//if cards match, keep images displayed=> also can't be clicked //
  //if value1==value2, permanently show number, add noclick element
  //if value1!== value2, hide number

//if values and images dont match, hide images---=>> see simple NASA API/ To Do List


//user starts the clicks again(1st few steps)


//When all cards match or are face up GAME OVER
// cards array holds all cards
//let card = document.getElementsByClassName("grid");
//let cards = [...card];
// loop to add event listeners to each card
//for (var i = 0; i < cards.length; i++){
//cards[i].addEventListener("click", displayCard);
//};
//displayCard is a function we'll talk about this soon
let cards = ["images/download.png", "images/download.png", "images/karp.png", "images/karp.png", "images/mudkip.png", "images/mudkip.png", "images/pichu.png", "images/pichu.png", "images/puff.png", "images/puff.png", "images/shrew.png", "images/shrew.png"]
let arr =[]
let node = document.querySelectorAll('.grid')
knuthShuffle(cards, 12)
let count = 0 

//early return
node.forEach((element, index)=>{
    element.onclick = function(){
        if( element.classList.contains("selected"))return
        element.src = cards[index]
        count += 1
        element.classList.add(`selected`)
        check()
    } 

})

function check(){
    if(count % 2 == 0 ){
        checkMatch()
    }
}

function checkMatch(){
    let selected = document.querySelectorAll(`.selected`)
    if(selected[0].src === selected[1].src){
        selected.forEach(element=>{
           element.classList.add(`matched`)
        //    removeClassSelected(`grid`)
           element.onclick = null
        })
        removeClassSelected(selected)
        
    }
    else{
        setTimeout(()=>{
            removeClassSelected(selected)
            selected.forEach(element =>{
                element.src = `images/backCard.jpeg`
            })
        },500)
    }
}

function removeClassSelected(element){
    element.forEach(element=>{
        element.classList.remove(`selected`)
    })
}

node.forEach((e)=> {

    e.addEventListener('click', (e) =>{
        let cardPick = e.target.getAttribute("value")
        eventTrigger(cardPick)
    })
})

function eventTrigger(pick){

    arr.push(pick)

    console.log(arr)

    if (arr.length === 2){
        compare(arr)
    }

}

function compare(array){

    if(array[0] === array[1]){

        console.log(`it's a match`)



    }else{
        console.log('not a match')
        //arr =[]
    }

    arr =[]
}

            //SAMPLE CODE
            //Targets individual boxes
            // let nodes = document.querySelectorAll('.grid')
            // nodes.forEach((e)=> {
            //     e.addEventListener('click', (e) =>{
            //      e.document.querySelectorAll(`.ones`).style.background = "red";
            //      })
            //    })





//Do Two Match? Matching Code
 //let clicks == 0
  //(ensure click event)
//if ones_grid == ones_grid || twos_grid==twos_grid || fives_grid==fives_grid ||fours_grid ==fours_grid || threes_grid == threes_grid
//let one=document.getElementById('one')
//let two=document.getElementById('two')
//let three=document.getElementById('three')
//let four=document.getElementById('four')
//let five=document.getElementById('five')
//let six=document.getElementById('six')
//let seven=document.getElementById('seven')
//let eight=document.getElementById('eight')
//let nine=document.getElementById('nine')
//let ten=document.getElementById('ten')
