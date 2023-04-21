
const boxes = [document.querySelector('#box1'), document.querySelector('#box2'), document.querySelector('#box3'), document.querySelector('#box4'), document.querySelector('#box5'), document.querySelector('#box6'), document.querySelector('#box7'), document.querySelector('#box8'), document.querySelector('#box9'), document.querySelector('#box10')]

const memoryCard = ['img/aang.png', 'img/alpha.png', 'img/katara.png', 'img/momo.png', 'img/sokka.png', 'img/aang.png', 'img/alpha.png', 'img/katara.png', 'img/momo.png', 'img/sokka.png']

const startGame= document.querySelector('#Reset')



function shuffle(){
    boxes.forEach(box => {
    let random = Math.floor(Math.random() * memoryCard.length)
    box.querySelector('img').src = memoryCard[random]
    memoryCard.splice(random, 1)
    
  });

}


boxes.forEach(addEventListener('click', shuffle))