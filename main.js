const fronts= document.querySelectorAll(".front");
const backs= document.querySelectorAll(".back");
const container= document.querySelector("#gameContainer");
const cards= document.querySelectorAll(".cards");
let cardArray= [];


container.addEventListener("click", (event)=> {
  
   if(event.target.className === "back"){
     event.target.classList.add("hide");
     let frontCard= event.target.parentElement.children[0].classList.add("show"); 
//    cardArray.push(event.target.parentElement.children[0]);

   }

   let shownCards=document.querySelectorAll(".show");

   setTimeout(()=> {
    if(shownCards.length > 0 && (shownCards[0].src !== shownCards[1].src)){
        shownCards.forEach(card=> {
            card.classList.remove("show");
            card.parentElement.children[1].classList.remove("hide");
        })
    }
    else{
        shownCards.forEach(card=> {
            card.classList.remove("show");
        })
    }
 }, 500)
     

})

document.querySelector(".reshuffle").addEventListener("click", ()=> {
       backs.forEach(back=> {
        back.classList.remove("hide");
       })

     fronts.forEach(front=> {
        cardArray.push(front.src); 

        front.src= cardArray[Math.floor(Math.random() * cardArray.length)];

     })   

})
