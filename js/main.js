//*Collaborated with Finesse, Asiah, Vanessa, Zahmir, Nyah, Joshua  */

const grid = {
    cards: ["images/download.png", "images/download.png", "images/karp.png", "images/karp.png", "images/mudkip.png", "images/mudkip.png", "images/pichu.png", "images/pichu.png", "images/puff.png", "images/puff.png", "images/shrew.png", "images/shrew.png"],
    arr: [],
    node: document.querySelectorAll('.grid'),
    count: 0 
}
console.log(grid.card)

knuthShuffle(grid.cards, 12)

grid.node.forEach((element, index)=>{
    console.log(`been clicked`)
    element.onclick = function(){
        if( element.classList.contains("selected"))return
        element.src = grid.cards[index]
        grid.count += 1
        element.classList.add(`selected`)
        check()
    } 

})

function check(){
    if(grid.count % 2 == 0 ){
        checkMatch()
    }
}

function checkMatch(){
    let selected = document.querySelectorAll(`.selected`)
    if(selected[0].src === selected[1].src){
        selected.forEach(element=>{
           element.classList.add(`matched`)
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

grid.node.forEach((e)=> {

    e.addEventListener('click', (e) =>{
        let cardPick = e.target.getAttribute("value")
        eventTrigger(cardPick)
    })
})

function eventTrigger(pick){

    grid.arr.push(pick)

    console.log(grid.arr)

    if (grid.arr.length === 2){
        compare(grid.arr)
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

         

