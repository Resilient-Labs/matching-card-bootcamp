const cards = document.querySelectorAll('.card')
const type = [
    "spy",
    "spy",
    "outlaw",
    "outlaw",
    "reaper",
    "reaper",
    "healer",
    "healer",
    "monk",
    "monk",
    "mountain",
    "mountain",
    "pilot",
    "pilot"
]
const type2 = [
    'ekko',
    'ekko',
    'thresh',
    'thresh',
    'lux',
    'lux',
    'pyke',
    'pyke',
    'udyr',
    'udyr',
    'irelia',
    'irelia',
    'ezreal',
    'ezreal',
]
console.log(cards, type)
cards.forEach(card => card.addEventListener("click", selected))

console.log(document.querySelector('.overwatch'))

const leaguecards = document.querySelectorAll('.heart')
const leaguecards2 = document.querySelectorAll('.mind') 
const leaguecards3 = document.querySelectorAll('.soul')
const mainleague = document.querySelectorAll('.body')
console.log(leaguecards, leaguecards2, leaguecards3)


leaguecards.forEach(card => card.addEventListener("click", selected2))
leaguecards2.forEach(card => card.addEventListener("click", selected2))
leaguecards3.forEach(card => card.addEventListener("click", selected2))

let first = null
let leaguefirst = null


function shuffle() {
    let randomOrder = [], randomNumber;
    do {
        do {
            randomNumber = Math.floor(Math.random() * 14);
        } while (randomOrder.includes(randomNumber));
        randomOrder.push(randomNumber);
    } while (randomOrder.length < 14);
    for(i = 0; i < 14; i++) {
        console.log(randomOrder[i])
        cards[randomOrder[i]].classList.add(type[i])
    }
}
function shuffle2() {
    let randomOrder = [], randomNumber;
    do {
        do {
            randomNumber = Math.floor(Math.random() * 14);
        } while (randomOrder.includes(randomNumber));
        randomOrder.push(randomNumber);
    } while (randomOrder.length < 14);
    for(i = 0; i < 14; i++) {
        console.log(randomOrder[i])
        mainleague[randomOrder[i]].classList.add(type2[i]) 
    }

}


function selected(item){
   item.currentTarget.classList.add("selected")
   if(first === null){
       first = item.currentTarget
   }else{
       if(first.classList[1] == item.currentTarget.classList[1]){
        let tempfirst = first
        let tempcurrent = item.currentTarget
        setTimeout(_=>{
        console.log(tempfirst.classList[1])
        console.log(tempcurrent.classList[1])
           tempfirst.style.backgroundImage = "url(gif/logo.gif)"
           tempcurrent.style.backgroundImage = "url(gif/logo.gif)"
           tempfirst.style.boxShadow = "none"
           tempcurrent.style.boxShadow = "none"
        }, 650)
       }else{
           let tempfirst = first
           let tempcurrent = item.currentTarget
           setTimeout(_=>{
        tempcurrent.classList.remove("selected")
        tempfirst.classList.remove("selected")
        }, 650)
       }
       first = null
   }

}

function selected2(item){
   item.currentTarget.classList.add("selected")
   if(leaguefirst === null){
       leaguefirst = item.currentTarget
   }else{
       if(leaguefirst.classList[2] == item.currentTarget.classList[2]){
        let tempfirst = leaguefirst
        let tempcurrent = item.currentTarget
        setTimeout(_=>{
        console.log(tempfirst.classList[2])
        console.log(tempcurrent.classList[2])
           tempfirst.style.backgroundImage = "url(gif/chest.gif)"
           tempcurrent.style.backgroundImage = "url(gif/chest.gif)"
           tempfirst.style.boxShadow = "none"
           tempcurrent.style.boxShadow = "none"
        }, 650)
        setTimeout(_=>{
            tempfirst.style.backgroundImage = "none"
            tempcurrent.style.backgroundImage = "none"
            tempfirst.style.background = "black"
            tempcurrent.style.background = "black"
        }, 7000)
       }else{
           let tempfirst = leaguefirst
           let tempcurrent = item.currentTarget
           setTimeout(_=>{
        tempcurrent.classList.remove("selected")
        tempfirst.classList.remove("selected")
        }, 1000)
       }
       leaguefirst = null
   }

}