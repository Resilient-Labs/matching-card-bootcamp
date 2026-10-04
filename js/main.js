const container=document.querySelector('.container')
container.addEventListener('click', pickCard)
document.querySelector("button").addEventListener('click', reset)

let flipOne=undefined
let flipTwo=undefined

function reset(){
    container.innerHTML=""
    let cards=['♥️','♠️','👑','♣️','♥️','♠️','♦️','♣️','👑','♦️']
    while(cards.length>0){
        const randomSpot=Math.floor(Math.random()*cards.length)
        const div=document.createElement('div')
        container.appendChild(div)
        div.classList.add(cards[randomSpot])
        div.innerText=""
        cards.splice(randomSpot, 1)
    }
        flipOne=undefined
        flipTwo=undefined
}
reset()

function pickCard(e){
    console.log(e.target)
    e.target.textContent=e.target.className

    if(flipOne!=undefined){
        flipTwo=e.target
    }
    else{
        flipOne=e.target
        return
    }

    if(flipOne.className===flipTwo.className){
        console.log('Cards Matched!')
    }
    else{
        console.log('No Match!')
        flipOne.innerText=""
        flipTwo.innerText=""
    }
    flipOne=undefined
    flipTwo=undefined
}

