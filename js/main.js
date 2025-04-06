class ApiRequest {
  constructor() {
    this.cardElements = document.querySelectorAll(".card");
    this.cardContainer = document.querySelector(".cards");
    this.winPopup = document.querySelector(".win-popup");
    const restartButton = document.querySelector(".restart-button");
  
    restartButton.addEventListener("click", this.restart);

    this.cardElements.forEach((e, i) => e.addEventListener("click", () => this.guessCard(i)));

    this.startGame();
  }

  startGame() {
    fetch("startGame")
  }

  updateBoard() {
    this.cardElements.forEach((e,i) => e.querySelector("div").innerText = this.board[i]);
  }

  guessCard(index) {
    fetch(`pickCard?index=${index}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      if (data.duplicateClick) return;

      this.cardElements[index].querySelector("div").innerText = data.cardNum;

      if (data.previousGuess) {
        const card1 = this.cardElements[index].querySelector("div");
        const card2 = this.cardElements[data.previousGuess].querySelector("div");
      
        if (data.guessResult === true) {
          card1.parentNode.classList.add("inverted");
          card2.parentNode.classList.add("inverted");

          if (data.winResult) {
            this.cardContainer.classList.add("fade");
            setTimeout(() => {
              this.winPopup.classList.remove("hidden");
              this.cardContainer.classList.add("hidden");  
            }, 500)
          }

        }
        else if (data.guessResult === false) {
          setTimeout(() => {
            card1.innerText = "";
            card2.innerText = "";
          }, 500);
        }
        
      }
    });
  }


  restart() {
    location.reload();
  }
}

const apiRequest = new ApiRequest;