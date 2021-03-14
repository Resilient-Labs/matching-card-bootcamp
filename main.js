// Worked with Juan, Rodas, Miggie, Jerry, and Khorally
// Worked with Maddie at Community


document.querySelector('button').addEventListener('click', resetCards)

const cards = document.querySelectorAll('.card')
cards.forEach(card => card.addEventListener('click', color))

//Think of this as memory (example: i am going to click 1 and see if it is equal to 1 if not it is reset)
let firstClicked = 0

/******
Flips Card and change image
******/
let url = ["url('images/cy.jpg')","url('images/pastel.jpg')","url('images/party-planning.jpg')","url('images/kindness.jpg')","url('images/coo.jpg')","url('images/cy.jpg')","url('images/pastel.jpg')","url('images/party-planning.jpg')","url('images/kindness.jpg')","url('images/coo.jpg')"]
// create an array of images, then use math.floor(math.random())so that each section is assigned a random color
function color(e) {
  //returns the HTML Element that was clicked
  // const currentCard = e.currentTarget
  if (e.currentTarget.innerText === "1") {
    e.currentTarget.style.backgroundImage = "url('images/cy.jpg')"

    console.log(e.currentTarget.innerText);
  }
  if (e.currentTarget.innerText === "2") {
    e.currentTarget.style.backgroundImage = "url('images/pastel.jpg')"

    console.log(e.currentTarget.innerText);
  }
  if (e.currentTarget.innerText === "3") {
    e.currentTarget.style.backgroundImage = "url('images/party-planning.jpg')"
  }
  if (e.currentTarget.innerText === "4") {
    e.currentTarget.style.backgroundImage = "url('images/kindness.jpg')"

  }
  if (e.currentTarget.innerText === "5") {
    e.currentTarget.style.backgroundImage = "url('images/coo.jpg')"

}
    console.log(e.currentTarget);

    if (firstClicked === 0) {
      //this is holding the firs thing you click on like a box in memory
      firstClicked = e.currentTarget

      //makes memory into what was  just clicked
      //When I see item.currentTarget think of the first thing you clicked on
      // document.querySelector('#prompt').innerText = firstClicked.innerText
      // this above line lets you know what you clicked on..

      if (firstClicked.innerText === "1") {
        firstClicked.style.backgroundImage = url[0]
      }
      if (firstClicked.innerText === "2") {
        firstClicked.style.backgroundImage = url[1]
      }
      if (firstClicked.innerText === "3") {
        firstClicked.style.backgroundImage = url[2]

      }
      if (firstClicked.innerText === "4") {
        firstClicked.style.backgroundImage = url[3]
      }
      if (firstClicked.innerText === "5") {
        firstClicked.style.backgroundImage = url[4]
      }

      // add if statements
    }
    //Otherwise compare the two inner text values
    else {
      console.log("hello");
      let original = firstClicked
      if (original.innerText === e.currentTarget.innerText) {


      } else {
        let secClicked = e.currentTarget
        setTimeout(() => {
          secClicked.style.background = "blue"
          original.style.background = "blue"


        }, 2000)

      }
      // reset
      firstClicked = 0
      // document.querySelector('#prompt').innerText = ""
    }


  }

  // Juan helped
  function resetCards() {
    // converts nodelist into an
    let newArray = [ 1, 2, 3, 4, 5, 1 ,2 ,3 ,4 ,5 ]


    // console.log(url);
    // knuth shuffle
    var currentIndex = newArray.length, temporaryValue, randomIndex;
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = newArray[currentIndex];
        newArray[currentIndex] = newArray[randomIndex];
        newArray[randomIndex] = temporaryValue;

      }
      let url1 = Array.from(document.querySelectorAll('.card'))
      url1.forEach((item, i) => {
        item.style.background = 'blue'
        item.innerText = newArray.pop()
      });

    // cards[i].style.background = "blue"
      // let temporaryUrls = url
    // going through each element
    console.log(url);

    // for each item in url
    // url.forEach((item, i) => {
    //   console.log(item);
    //
    //   item.style.backgroundImage = temporaryUrls.pop()
    //
    // });

  }


resetCards()
