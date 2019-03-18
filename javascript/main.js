let cards = document.querySelectorAll('.card'),
matched=0, counter=0;
cards.forEach(function(card){
   card.addEventListener('click', cardClick)
  })
function cardClick(){
  this.classList.add("selected");
  Compare();
  document.getElementById('matches').innerText= matched;
  document.getElementById('attempts').innerText= counter;
  winLose();
}
function Compare(){
  let selected = document.querySelectorAll('.selected'),
   totalLength = selected.length;
  if(totalLength === 2){
    if(selected[0].className === selected[1].className){
      selected.forEach(function(sel){
        //changes the class of the two selected items to matched and removed
        //the selected class so they can't be clicked again
        sel.classList.add('matched')
        counter += .5;
        matched += .5;
        sel.classList.remove('selected')
      })
      }else{
        selected.forEach(function(sel){
          counter += .5;
          //If we didn't use setTimeout, it looks like the game doesn't work because when 2 cards are selected, the comparisan is immediately run and it looks like the card is never flipped. delay needed to be able to see it.
          setTimeout(function(){
            sel.classList.remove('selected')
          }, 800);
      })
    }
  }
}
function winLose(){
  if(matched===5){
      document.querySelector('h2').innerText= "Congratulations, you win! "
    }else if(counter >=20){
      document.querySelector('h2').innerText= "Ok, that's enough. You're done.";
      cards.forEach(function(card){
        card.classList.add('matched');
      })
    }else if(counter>=15){
      document.querySelector('h2').innerText= "Woooow, seriously, how have you not won yet?"
    }else if(counter>=10){
      document.querySelector('h2').innerText= "Wow, you're not very good at this"
  }
}
