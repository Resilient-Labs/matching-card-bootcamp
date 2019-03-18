// be able to click each section which has an image
//list of elements is an array we want to
//The Array.from() method creates a new, shallow-copied Array 
//instance from an array-like or iterable object.
let cards = document.querySelectorAll('.card');
cards.forEach(function(card){
//one of these cards that is passed through the parameter 
//   -- make it clickable and run function       
   card.addEventListener('click', cardClick)
  })
function cardClick(){
  console.log('hellow');
  this.classList.add("selected");
  var selected = document.querySelectorAll('.selected');
  var totalLength = selected.length;
  if(totalLength === 2){
    if(selected[0].className === selected[1].className){
      selected.forEach(function(sel){
        //changes the class of the two selected items to matched and removed
        //the selected class so they can't be clicked again
        sel.classList.add('matched')
        sel.classList.remove('selected')
      })
      }else{
      selected.forEach(function(sel){
        setTimeout(function(){

          sel.classList.remove('selected')
        }, 500); 
        
      })
    }
  }
    if(document.querySelectorAll('.matched').length === 8){
    alert('You win')
       }
    }
