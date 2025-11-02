//Goal: Make a 10 card memory game - users must be able to select two cards and check if they are a match. If they are a match, they stay flipped. If not, they flip back over. Game is done when all cards are matched and flipped over.


    
       const emojis = ["🏀","⚾️","🎾","🏉","⚽️","🏀","⚾️","🎾","🏉","⚽️"]; //Created array of emojis with pairs of matching emojis
    var shufEmojis = emojis.sort(() => (Math.random() > 0.5) ? 2 : -1); //shuffle the array of emojis
    for ( var i=0; i<emojis.length; i++){
        
       let box = document.createElement("div")
       box.className = "item";
       box.innerHTML = shufEmojis[i]

       box.onclick= function onclick(){ //onclick function to flip emoji cards
        this.classList.add("cardOpen")
        setTimeout(function(){
            if(document.querySelectorAll(".cardOpen").length > 1){
                if(document.querySelectorAll(".cardOpen")[0].innerHTML ==
            document.querySelectorAll(".cardOpen")[1].innerHTML){
                document.querySelectorAll(".cardOpen")[0].classList.add("cardMatched") //flip the emoji card
                document.querySelectorAll(".cardOpen")[1].classList.add("cardMatched") //remain flipped if it matches with the first one
                document.querySelectorAll(".cardOpen")[1].classList.remove("cardOpen") //unflip the card if it does not match with the first one
                document.querySelectorAll(".cardOpen")[0].classList.remove("cardOpen")

                if(document.querySelectorAll(".cardMatched").length == emojis.length){ //Winning condition when all cards are flipped which means each of the will be having a pair
                    document.getElementById("display").textContent = `YOU WON!!!!`
        
                }
            }else{
                document.querySelectorAll(".cardOpen")[1].classList.remove("cardOpen")
                document.querySelectorAll(".cardOpen")[0].classList.remove("cardOpen")

            }
            }
        },300)
       }
        
       document.querySelector(".gameCards").appendChild(box);
    }

//Wathed these youtube videos before working on this

    // https://www.youtube.com/watch?v=QJWnbJ39nP4
    // https://www.youtube.com/watch?v=M0egyNvsN-Y&t=14s


    
        




