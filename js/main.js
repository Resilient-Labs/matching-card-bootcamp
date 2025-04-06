let selected = 0;

function getCards() {
  fetch('/api/cards')
    .then(res => res.json())
    .then(data => {
      placeCards(data.shuffled);
    })
    .catch(err => {
      console.log(err)
    });
}


function placeCards(shuffled) {
  const cards = document.querySelector('.cards');
  cards.innerHTML = '';
  shuffled.forEach((item, index) => {
    cards.innerHTML += `
			<div class="card" key="${index}">
				<img src="/img/card.png" alt="card">
			</div>
    `;
  });
  document.querySelectorAll('div.card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (selected < 2) {
        const select = card.classList.toggle('selected');
        if (select) selected += 1; else selected -= 1;
        if (selected == 2) {
          checkCards();
        }
      } else if (selected == 2 && card.classList.contains('selected')) {
        card.classList.toggle('selected');
        selected -= 1;
      }
    });
  });
}


function checkCards() {
  const selection = document.querySelectorAll('div.selected');
  const card = selection[0].getAttribute('key');
  const mirror = selection[1].getAttribute('key');
  fetch(`/api/check?card=${card}&mirror=${mirror}`)
    .then(res => res.json())
    .then(data => {
      if (data.match) {
        selection.forEach(card => {
          card.classList.remove('selected', 'card');
          card.classList.add('disabledCard');
          card.innerHTML = `<p>${data.match}</p>`
        });
        selected = 0;
      } else {
        selection.forEach(card => {
          card.classList.remove('selected');
        });
        selected = 0;
      }
    })
    .catch(err => {
      console.log(err);
    })
}


getCards();