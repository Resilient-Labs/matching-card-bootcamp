document.querySelector('#start').addEventListener('click', ()=>{
    const cardArr = [
        {
            name: 'bar',
            img: 'assets/bar.png'
        },
        {
            name: 'bar',
            img: 'assets/bar.png'
        },
        {
            name: 'diamond',
            img: 'assets/diamond.png'
        },    
        {
            name: 'diamond',
            img: 'assets/diamond.png'
        },    
        {
            name: 'horseshoe',
            img: 'assets/horseshoe.png'
        },
        {
            name: 'horseshoe',
            img: 'assets/horseshoe.png'
        },
        {
            name: 'lemon',
            img: 'assets/lemon.png'
        },
        {
            name: 'lemon',
            img: 'assets/lemon.png'
        },
        {
            name: 'seven',
            img: 'assets/seven.png'
        },
        {
            name: 'seven',
            img: 'assets/seven.png'
        },
    ]
    let cardsPicked = []
    let cardsPickedId = []
    let correctCards = []
    
    cardArr.sort( () => .5 - Math.random() )
    
    const table = document.querySelector('#card_holder')

    function fillTable(){
        for(i=0; i<cardArr.length; i++){
            let card = document.createElement('img')
            card.setAttribute('src', 'assets/cardback.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', showCard)
            table.appendChild(card)
        }
    }
    
    function showCard(){
        cardId = this.getAttribute('data-id')
        cardsPicked.push(cardArr[cardId].name)
        cardsPickedId.push(cardId)
        this.setAttribute('src', cardArr[cardId].img)
    
        if(cardsPicked.length == 2){
            checkForAMatch()
        }
    }
    function checkForAMatch(){
        let cards = document.querySelectorAll('img')
        const cardOne = cardsPickedId[0]
        const cardTwo = cardsPickedId[1]
        if(cardsPicked[0] === cardsPicked[1]){
            correctCards.push(cardsPicked)
        }else{
            cards[cardOne].setAttribute('src', '/assets/cardback.png')
            cards[cardTwo].setAttribute('src', '/assets/cardback.png')
        }
        cardsPicked = []
        cardsPickedId = []
    }
    fillTable()
})
