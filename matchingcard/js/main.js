const cards = document.querySelectorAll('img')
let click = 0;
let matches = 0;

function checkCards(card1, card2){
  card1.classList.remove('reveal')
  card2.classList.remove('reveal')
  if(card1.className != card2.className){
    card1.src = 'images/cover.png'
    card2.src = 'images/cover.png'
  }else{
    matches++;
  }
}

function matchCards(){
  if(this.classList.contains('A')){
    this.src = 'images/A-pic.jpg'
    this.classList.add('reveal')
    click++
  }else if(this.classList.contains('B')){
    this.src = 'images/B-pic.jpg'
    this.classList.add('reveal')
    click++
  }else if(this.classList.contains('C')){
    this.src = 'images/C-pic.jpg'
    this.classList.add('reveal')
    click++
  }else if(this.classList.contains('D')){
    this.src = 'images/D-pic.jpg'
    this.classList.add('reveal')
    click++
  }else if(this.classList.contains('E')){
    this.src = 'images/E-pic.jpg'
    this.classList.add('reveal')
    click++
  }
  if(click === 2){
    let card1 = document.querySelectorAll('.reveal')[0]
    let card2 = document.querySelectorAll('.reveal')[1]
    setTimeout(checkCards, 1000, card1, card2);
    click = 0;
  }
}

cards.forEach(card => card.addEventListener('click', matchCards))
