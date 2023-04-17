const card = document.querySelectorAll('td');
let flippedCards = [];
let matchedCards = [];

card.forEach(td => {
    td.addEventListener('click', () => {
        if (td.classList.contains('rotated') || flippedCards.length === 2) {
            return;
        }
        td.classList.add('rotated');
        td.classList.add('rotate');
        flippedCards.push(td);
        if (flippedCards.length === 2) {
            const firstValue = flippedCards[0].getAttribute('data-value');
            const secondValue = flippedCards[1].getAttribute('data-value');
            if (firstValue === secondValue) {
                flippedCards.forEach(card => {
                    card.classList.add('matched');
                    matchedCards.push(card);
                });
                flippedCards = [];
            } else {
                setTimeout(() => {
                    flippedCards.forEach(card => {
                        card.classList.remove('rotated');
                        card.classList.remove('rotate');
                    });
                    flippedCards = [];
                }, 1000);
            }
            if (matchedCards.length === 10) {
                document.querySelector("h2").innerText = 'Congratulations, you have matched all the cards!'
            }
        }
    });
});