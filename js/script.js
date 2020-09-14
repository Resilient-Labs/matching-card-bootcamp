let arrClick = [];
const board = {
  count: 0,
  cards: document.querySelectorAll("img"),
  msg: document.getElementById("msg"),
  chooseCard(){
    let cards = Array.from(board.cards)
    cards.forEach((card) =>{
      card.addEventListener("click", (e) =>{
        board.msg.innerHTML = ""
        e.target.style.filter = "brightness(100%)"
        if(e.target == arrClick[0]){
          board.msg.innerHTML = "Please click another card"
        }
        else{
          if(e.target.classList.contains('matched')){
            return;
          }else{
            board.count++
            arrClick.push(e.target)
            if(!e.target.dataset.id){
                e.target.dataset.id = 1;
            }else{
                e.target.dataset.id = 2;
            }
            // console.log(arrClick, board.count)
            if((board.count%2 == 0) && (board.count>0)){
              board.checkMatch(cards)
            }
          }
        }
      })
    })
  },
  checkMatch(cards){
    let checkClicks = arrClick.slice()
    if ((checkClicks[0] != checkClicks [1]) && (checkClicks[0].src === checkClicks[1].src)){
      checkClicks[0].classList.add("matched")
      checkClicks[1].classList.add("matched")
      let matched =document.querySelectorAll(".matched");
        matched = Array.from(matched)
        arrClick = []
      }else{
        setTimeout(function() {
            if(checkClicks[0].dataset.id <= 1){
                    checkClicks[0].style.filter = "brightness(0%)"
                    checkClicks[0].dataset.id = ""
            }else{
                checkClicks[0].dataset.id = 1
            }
            if(checkClicks[1].dataset.id <= 1){
                    checkClicks[1].style.filter = "brightness(0%)"
                    checkClicks[1].dataset.id = ""
            }else{
                checkClicks[1].dataset.id = 1
            }
        }, 250)
        arrClick = []
      }
  },
  //This will grab the card array and fill it with 5 seperate pairs
  fillCardArray(){
      let htmlArray = [...document.getElementsByTagName("img")]
      //Fill the following with your image sources
      let cardElements = [
          "./images/carrot.gif",
          "./images/cherry.png",
          "./images/coconut.png",
          "./images/strawberry.png",
          "./images/bananapeel.png"]
      let imgChosen = 0

      //Re-ordering htmlArray using the Fisher-Yates Shuffle algorithm
      let currentIndex = htmlArray.length, tempValue, ranIndex
      while(0 !== currentIndex){
          ranIndex = Math.floor(Math.random() * currentIndex)
          currentIndex -= 1

          tempValue = htmlArray[currentIndex]
          htmlArray[currentIndex] = htmlArray[ranIndex]
          htmlArray[ranIndex] = tempValue
      }

      //Assign cardElements to the newly randomized array, in pairs
      for(let i = 0; i < htmlArray.length; i += 2){
          let newI = i + 1
          htmlArray[i].src = cardElements[imgChosen]
          htmlArray[i].alt = cardElements[imgChosen]
          htmlArray[newI].src = cardElements[imgChosen]
          htmlArray[newI].alt = cardElements[imgChosen]
          imgChosen++

          htmlArray[i].classList.remove("matched")
          htmlArray[newI].classList.remove("matched")
          htmlArray[i].dataset.id = ""
          htmlArray[newI].dataset.id = ""
          htmlArray[i].style.filter = ""
          htmlArray[newI].style.filter = ""
          board.msg.innerHTML = ""
      }
  }
}

document.getElementById("resetButton").onclick = ()=> board.fillCardArray();
board.fillCardArray();
board.chooseCard();
