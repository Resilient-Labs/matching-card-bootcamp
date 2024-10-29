// grab things we need
const section = document.querySelector('section');
const playerLivesCount = document.querySelector("span");
let playerLives = 11;

//Link text 
playerLivesCount.textContent = playerLives;

// generate data for cards
// array of multiple objs

const getData = () => [  // create function, add array of objs
    { imgSrc: "./images/adoree.jpg", name: "adoree" },
    { imgSrc: "./images/bush.jpg", name: "bush" },
    { imgSrc: "./images/caleb.jpg", name: "caleb" },
    { imgSrc: "./images/carson.jpg", name: "carson" },
    { imgSrc: "./images/darnold.jpg", name: "darnold" },
    { imgSrc: "./images/polamalu.jpg", name: "polamalu" },
    { imgSrc: "./images/leinart.jpg", name: "leinart" },
    { imgSrc: "./images/lendale.jpg", name: "lendale" },
    { imgSrc: "./images/adoree.jpg", name: "adoree" },
    { imgSrc: "./images/bush.jpg", name: "bush" },
    { imgSrc: "./images/caleb.jpg", name: "caleb" },
    { imgSrc: "./images/carson.jpg", name: "carson" },
    { imgSrc: "./images/darnold.jpg", name: "darnold" },
    { imgSrc: "./images/polamalu.jpg", name: "polamalu" },
    { imgSrc: "./images/leinart.jpg", name: "leinart" },
    { imgSrc: "./images/lendale.jpg", name: "lendale" },
];

// function to randomize
const randomize = () => {
    const cardData = getData();
    console.log(cardData);
    cardData.sort(() => Math.random() - 0.5); // sort randomizes array
    return cardData;

};

// card generator function
const cardGenerator = () => {
    const cardData = randomize();
    // generate HTML
    // need to loop to run all 16 cards
    cardData.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";

        // attach info to cards (name & img source)
        face.src = item.imgSrc;
        card.setAttribute("name", item.name);
        // attach cards to section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener("click", (e) => {
            card.classList.toggle("toggleCard");
            checkCards(e);
        });
    });
};

const checkCards = (e) => {
    console.log(e);
    const clickedCard = e.target;
    clickedCard.classList.add("flipped"); // if two match keep flipped, if NOT turn back around
    const flippedCards = document.querySelectorAll('.flipped');
    const toggleCard = document.querySelectorAll(".toggleCard");
    console.log(flippedCards);

    //logic
    if (flippedCards.length === 2) {
        if (
            flippedCards[0].getAttribute("name") ===
            flippedCards[1].getAttribute("name")
        ) {
            console.log("match");
            flippedCards.forEach(card => {
                card.classList.remove('flipped');
                card.style.pointerEvents = "none"; // makes matched cards unclickable
            })
        } else {
            console.log("wrong");
            flippedCards.forEach((card) => {
                card.classList.remove('flipped'); // comparison to see if index 0 and 1 match
                setTimeout(() => card.classList.remove("toggleCard"), 1000);
            });
            // logic for player lives
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if (playerLives === 0) {
                restart("EWWWWW... You must be a bruin. Don't be a bruin! #FUCLA 👎🏾");
            }
        }
    }
    // run check to see if we won
    if(toggleCard.length === 16){
        restart("✌🏾FIGHT ON FOR VICTORY!");
    }
};

// restart function
const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";  // nothing is clickable until game completely resets
    cardData.forEach((item, index) => {
        cards[index].classList.remove('toggleCard');

        setTimeout(() => {
            //randomize, add back pointer events once game is restarted
            cards[index].style.pointerEvents = "all";
            faces[index].src = item.imgSrc; // update image
            cards[index].setAttribute('name', item.name);
            section.style.pointerEvents = "all";
        },1000);


    });

    // reset player lives once we hit 0 lives
    playerLives = 11;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text), 100);
};

cardGenerator();