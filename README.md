# ☕ Coffee & Strawberry Matcha Match
 
A café-themed memory card game built with plain HTML, CSS, and JavaScript. Flip two cards at a time and find all five matching pairs in as few moves as you can.
 
> A 10-card memory game. Users must be able to select two cards and check if they are a match. If they match, they stay flipped. If not, they flip back over. The game is done when all cards are matched and flipped over.
 
🔗 **Live Demo:** [kareemahb.github.io/matching-card](https://kareemahb.github.io/matching-card/)
 
<img width="1458" height="937" alt="Café memory game with a grid of coffee-themed cards and move and match counters" src="https://github.com/user-attachments/assets/4290f974-feca-4325-be26-865a3cd07460" />

 
## ✨ Features
 
- **10 cards, 5 café pairs**: ☕ coffee, 🍓 strawberry, 🍵 matcha, 🥐 croissant, and 🧋 strawberry matcha
- **New shuffle every game**, using the Fisher-Yates algorithm
- **Match logic**: matching pairs stay flipped, and wrong pairs flip back after a short pause
- **Move and match counters** that update as you play
- **Win screen** that shows how many moves you took, with a **Play Again** button
- **Click protection**: you can't flip a third card, re-click the same card, or click a matched card
- **Café visual theme** with a matcha background and a coffee-and-strawberry color palette

 
## 🔍 How It Works
 
1. `createBoard()` copies the card list, shuffles it, and builds a button for each card
2. `handleCardClick()` flips the first card, then the second, and counts a move
3. `checkForMatch()` compares the two cards' `data-name` values
4. A match locks both cards. A miss pauses clicks for 0.9 seconds, then flips both back.
5. After 5 matches, `endGame()` shows the win message

 
## 🛠️ Tech Stack
 
- HTML5
- CSS3 (CSS Grid)
- JavaScript (DOM manipulation, `dataset`, `setTimeout`, array shuffling)
No frameworks, dependencies, or build tools.
 

 
## 📁 Project Structure
 
```
matching-card/
├── index.html             # Header, counters, game board, and win message
├── main.css               # Café theme, card grid, and flip styles
├── matcha background.jpg  # Background image
└── js/
    └── main.js            # Shuffling, flipping, matching, and win logic
```
 

 
## 🚀 Getting Started
 
Try it live on **[GitHub Pages](https://kareemahb.github.io/matching-card/)**, or run it locally:
 
```bash
git clone https://github.com/kareemahb/matching-card.git
cd matching-card
```
 
Open `index.html` in your browser, or use the **Live Server** extension in VS Code.
 

 
## 💡 What I Learned
 
- Shuffling an array fairly with the Fisher-Yates algorithm
- Tracking game state (first card, second card, moves, matches) between clicks
- Storing data on elements with `data-` attributes
- Using a flag (`canFlip`) and `setTimeout` to stop extra clicks during an animation
- Resetting all game state cleanly for a new round

 
## 👩‍💻 Created By
 
**Kareemah Bahaadur**
[GitHub](https://github.com/kareemahb)





