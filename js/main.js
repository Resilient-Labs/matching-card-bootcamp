// Goal: Make a 10 card memory game - users must be able to select two cards and check if they are a match. 
// If they are a match, they stay flipped. If not, they flip back over. Game is done when all cards are matched and flipped over.

// CONSTANT VARIABLE - CLASS OF CARD (HTML)
const characters = document.querySelectorAll('.Card')

// GIVE IT A FUNCTION - ASSIGNED NAMES TO VARIABLES - CREATE AN ARRAY WITH CHARACTER VARIABLES / VALUES
function shuffleCards() {
    let character1 = 'CDwayne',
        character2 = 'CWhitley',
        character3 = 'CFreddie',
        character4 = 'CRon',
        character5 = 'CLena',
        characterNames = [character1, character2, character3, character4, character5]

    // CONCATENATION WILL RETURN AND MERGE CHARACTER NAMES - TWO POSITIONS OF CHARACTER NAMES
    // SORTING WITH MATH.RANDOM (RETURNS NUMBER BETWEEN 0-1), SORT RETURNS A NUMBER BETWEEN -.5 AND .5, ASSIGNING NUMBER TO EACH NUMBER BY THE ARRAY, COMPARING NUMBERS 
    // ASSIGNS A VALUE TO EACH ELEMENT - DETERMINES WHERE IT GOES BASED ON THAT VALUE
    // WHICHEVER HAS THE SMALLER VALUE - MOVES TO THE BACK - VICE VERSA 
    characterNames = characterNames.concat(characterNames).sort(() => Math.random() - 0.5)

    // ELEMENT (VARIABLES STORING VALUES) AND INDEX (NUMBER OF ARRAY 'NAMES')
    // FOR EACH CHARACTER, WE'RE RETRIVING THE DATA-VALUE (IDs)
    characters.forEach((el, i) => {
        //pick element, add dataset looping through variable characters, created a tag called value by using dataset 
        // notation and setting it by the element's index assigning the array - theindex of for each
        // pulling '.card', loop through the
        el.dataset.value = characterNames[i]
        // console.log("dataset value = " + el.dataset.value)
    })
}

shuffleCards()

// GET ALL THE CHARACTERS

let arrImg = [
    'cdwayne.png',
    'cwhitley.png',
    'cfreddie.png',
    'cron.png',
    'clena.png',
]
// EVERY CLICK RUNS THE FUNCTION ===================
characters.forEach(el => el.addEventListener('click', checkForMatch))

// USING DATA-VALUE TO STORE CHARACTER NAME IN THE HTML
// USE IF STATEMENTS IN THE MATCHING FUNCTION TO CHECK IF DATA VALUES OF CLICKED ELEMENTS ARE THE SAME

// CREATE ARRAY (CLICKED), 
let clicked = []
let count = 0

function checkForMatch(click) {
    // ALLOWS US TO USE THE SPECIFIC ELEMENT - WHICH IS IMAGE 
    // CHARACTERS IS THE TARGET, AND SET THE SOURCE TO THE VALUE OF CHARACTER (TEMPLATE LITERAL)
    click.target.src = `img/${click.target.dataset.value}.png`

    // PUSHED AND STORED CLICKED IMAGE INTO THAT EMPTY ARRAY
    clicked.push(click.target)
    // CHECK CONDITIONAL - WHEN THE LENGTH = 2, WE'RE GOING TO SEE IF THOSE DATASET VALUES ARE THE SAME - RUN THE CONDITIONAL INSIDE OF IT 
    // CHECKING IF THEIR CLASS LIST IS THE SAME - LIST OUT ALL THE CLASSES IN THE ELEMENT
    // 
    if (clicked.length === 2) {
        if (clicked[0].dataset.value === clicked[1].dataset.value) // && clicked[0].classList !== clicked[1].classList) 
        {
            count++
            // putting delays before the cards are flipped
        } else {
            setTimeout(() => {
                clicked.forEach(el =>
                    el.src = `img/cback.png`)
            }, 500);

            console.log('change')
        }
        // create timeout to put array back to 0 - loops through right before the first one
        setTimeout(() => {
            clicked = []
        }, 501)
        // RESETTING THE CARD, RESETTING THE CARD BACK TO 0
    }

    /* console.log("clicked array", clicked)
     console.log(click.target.dataset.value) */

    if (count === 5) {
        setTimeout(() => {
            alert('You Win!')
        }, 310)

    }
}

const reset = document.getElementById('reset');
reset.addEventListener('click', () => location.reload());


// check length of array 
// if array = two we check if the length is two. 
// if its two we run a compare function
// if theyre the same then we disable does two and add one to a counter 
// when counter is a certain length the game is over 


//define a card and set the innerHTML of that card to one of the city names
    // wrap it in the function
// Define a function by putting an eventListener on each of the cards
        // expect that the value will show how many times you clicked on the console
        // keep track of how many cards we have flipped over
        // If we have 2 cards flipped over we want to check if they're equal
        // If they're not equal it would be not a match and the cards will just flip back over
        // If they are equal they stay flipped
// Define a check game over function
        // When there is no more cards the game will be over
// Write a function to shuffle the cards after











