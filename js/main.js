let attempts = 0; //number of total attempts to complete
let flip = 0; //counter for each card flip within each attempt
let flipped = { id: [], src: [] }; //object for the flipped cards
let numOfCards = 20
let numOfMatches = numOfCards / 2
const stopwatch = new Stopwatch()

//runs the randomize on page load
randomize();

//defines each div as a card that gets an on click event listener
const card = document.querySelectorAll('.card');
card.forEach((a) => { a.addEventListener('click', flipCard) });

document.querySelector('button').addEventListener('click', reset);

//gets the ID of each card that is clicked and then calls the round function
function flipCard(a) {
    let cardID = a.target.id;
    // console.log(cardID);
    round(cardID);
}


//runs a round
function round(cardID) {
    //makes sure that the card that is clicked is not already flipped
    // console.log(cardID);
    let cardImg = document.getElementById(`${cardID}`).children[0]
    if (cardImg.classList.contains('hidden')) {
        cardImg.classList.remove('hidden');
        if (flip === 0 || flip === 1) {
            // if there is no flipped card, or there is 1 flipped card, flip the card over, get the id and add it to the flipped array
            flipped.id.push(cardID)
            flipped.src.push(cardImg.src)
            flip++
            console.log(flip, 'flip')
            if (flip === 1) {
                console.log('1')
                attempts++
                if (attempts === 1) {
                    stopwatch.start()
                }
                document.querySelector('h4').innerText = `Number of attempts: ${attempts}`
            }
            if (flip === 2) {
                loading(300).then(() => {
                    // console.log(flipped, 'match')
                    flip = 0
                    // console.log('test')
                    // console.log(document.getElementById(`${flipped.id[0]}`))
                    if (flipped.src[0] === flipped.src[1]) {
                        document.getElementById(`${flipped.id[0]}`).classList.add('match')
                        document.getElementById(`${flipped.id[1]}`).classList.add('match')
                        console.log(numOfMatches)
                        numOfMatches--
                        document.querySelector('h3').innerText = `Matches Remaining: ${numOfMatches}`
                        if (numOfMatches === 0) {
                            end()
                        }
                    } else {
                        document.getElementById(`${flipped.id[0]}`).children[0].classList.add('hidden')
                        document.getElementById(`${flipped.id[1]}`).children[0].classList.add('hidden')
                    }
                    flipped = { id: [], src: [] }
                });
            }
        }
    }
}

//randomizes the location of images
function randomize() {
    let arrayOfCards = ['images/0.jpg', 'images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.png', 'images/7.png', 'images/8.jpg', 'images/9.jpg']
    let randomCards = []
    while (randomCards.length < numOfCards) {
        let randomCard = Math.floor(Math.random() * 20)
        console.log(randomCard)
        if (randomCards.indexOf(randomCard) < 0) {
            document.getElementById(`${randomCard}`).children[0].src = arrayOfCards[Math.floor(randomCards.length / 2)];
            randomCards.push(randomCard);
        }
    }
}

function end() {
    stopwatch.end()
    let time = stopwatch.duration
    console.log(document.querySelector('p').classlist)
    document.querySelector('p').classList.remove('hidden')
    document.querySelector('button').classList.remove('hidden')
    document.querySelector('p').innerHTML = `<strong>You finished!</strong></br> It took you <strong>${time}</strong> seconds and <strong>${attempts} attempts</strong>.`
}



function reset() {
    attempts = 0; //number of total attempts to complete
    flip = 0; //counter for each card flip within each attempt
    flipped = { id: [], src: [] }; //object for the flipped cards
    numOfCards = 20
    numOfMatches = numOfCards / 2
    document.querySelector('h3').innerText = `Matches Remaining: ${numOfMatches}`
    document.querySelector('h4').innerText = `Number of attempts: ${attempts}`
    stopwatch.reset()
    const images = document.querySelectorAll('img');
    images.forEach((a) => { a.classList.add('hidden') });
    document.querySelector('p').classList.add('hidden')
    document.querySelector('button').classList.add('hidden')
    randomize()
}




//Timeout function
function loading(ms) {
    return new Promise(loaded => setTimeout(loaded, ms));
}


//Stopwatch function
function Stopwatch() {
    let start, end, running, duration = 0;
    Object.defineProperty(this, 'duration', {
        get: function () { return duration }
    });
    this.reset = function () {
        start = null;
        end = null;
        running = false;
        duration = 0;
    }
    this.start = function () {
        if (running) {
            throw new Error('stopwatch started')
        }
        running = true;
        start = new Date();
    }
    this.end = function () {
        if (!running)
            throw new Error('stopwatch not started');
        running = false;
        end = new Date();
        const seconds = (end.getTime() - start.getTime()) / 1000;
        duration += seconds;
    }
}