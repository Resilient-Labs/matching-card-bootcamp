//worked on this with classmates; https://aadaobi.medium.com/building-a-memory-matching-game-in-javascript-48e792c7b563


const letters = ["A","B","C","D","E","C","D","E","A","B"];
letters.sort(() => Math.random() - 0.5);

const ids = ["one","two","three","four","five","six","seven","eight","nine","ten"];
let flipped = [], flippedId = [], matches = 0, lock = false;

ids.forEach((id, i) => {
    const card = document.getElementById(id);
    card.dataset.value = letters[i];
    //card.innerText = "";

    card.onclick = function() {
        if (lock || card.classList.contains("matched") || flippedId.includes(id)) return;

        card.textContent = card.dataset.value;
        card.classList.add("flipped");
        flipped.push(card.dataset.value);
        flippedId.push(id);

        if (flipped.length === 2) {
            lock = true;
            setTimeout(checkMatch, 700);
        }
    }
});

//check if cards match
function checkMatch() {
    const card1 = document.getElementById(flippedId[0]);
    const card2 = document.getElementById(flippedId[1]);

    if (flipped[0] === flipped[1]) {
        card1.classList.add("matched");
        card2.classList.add("matched");
        matches++;
    } else {
        card1.textContent = "";
        card2.textContent = "";
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
    }
//reset the game
    flipped = [];
    flippedId = [];
    lock = false;

    if (matches === letters.length / 2) {
        document.getElementById("results").textContent = "It's a match.";
    } else {
        document.getElementById("results").textContent = `Matches: ${matches}`;
    }
}