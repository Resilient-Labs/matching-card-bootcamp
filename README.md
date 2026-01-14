# 🎴 Memory Card Matching Game

A fun and interactive memory matching card game built with vanilla JavaScript, HTML, and CSS. Test your memory skills by matching pairs of animal cards!

## 🎮 How to Play

1. **Start the Game**: The game begins with all cards face down, showing the card back design.
2. **Flip Cards**: Click on any card to flip it over and reveal the animal image.
3. **Find Matches**: Click on a second card to reveal another animal.
4. **Match or Reset**:
   - If the two cards match, they will stay flipped and you can no longer click them.
   - If they don't match, the cards will automatically flip back over after 1.5 seconds.
5. **Win**: Once all card pairs are matched, you'll see a congratulations message and a reset button to play again!

## ✨ Features

- **10 Cards Total**: 5 pairs of adorable animal cards (Sheep, Fox, Otter, Blue Whale, and Capybara)
- **Random Shuffle**: Cards are randomly shuffled at the start of each game
- **Smooth Animations**: Beautiful flip animations using CSS 3D transforms
- **Interactive Feedback**: Visual feedback when clicking cards
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Win Detection**: Automatic detection when all pairs are matched
- **Reset Functionality**: Easy reset button after completing the game

## 🛠️ Technologies Used

- **HTML5**: Semantic markup for game structure
- **CSS3**: 
  - Flexbox for layout
  - CSS 3D Transforms for card flip animations
  - Media queries for responsive design
  - Custom fonts (Finger Paint from Google Fonts)
- **Vanilla JavaScript**: 
  - DOM manipulation
  - Event listeners
  - Game logic and state management

## 📁 Project Structure

```
matching-card/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styling and responsive design
├── js/
│   └── app.js         # Game logic and functionality
├── img/
│   ├── back.png       # Card back image
│   ├── Sheep.png      # Animal images
│   ├── fox.png
│   ├── otter.png
│   ├── blue whale.png
│   └── capybara.png
└── README.md          # This file
```

## 🚀 Getting Started

1. **Clone or Download** this repository
2. **Open** `index.html` in your web browser
3. **Start Playing**! No build process or dependencies required.

## 🎯 Game Logic

The game uses a simple state management system:

- **Card State**: Tracks which cards are flipped, matched, or locked
- **Flip Logic**: Prevents flipping more than 2 cards at once
- **Match Detection**: Compares card data attributes to determine matches
- **Shuffle Algorithm**: Randomly orders cards on page load
- **Win Condition**: Checks when all pairs have been matched

## 📱 Responsive Design

The game is fully responsive and adapts to different screen sizes:

- **Desktop** (> 768px): Full-size game board with optimal spacing
- **Tablet** (≤ 768px): Adjusted card sizes and spacing
- **Mobile** (≤ 480px): Compact layout optimized for touch interaction
- **Small Mobile** (≤ 320px): Minimal spacing for small screens

## 🎨 Design Features

- Clean, modern UI with playful typography
- Smooth 3D card flip animations
- Hover and active states for better user feedback
- Shadow effects for depth
- Colorful button styling with hover effects

## 🔧 Browser Compatibility

Works on all modern browsers that support:
- CSS Flexbox
- CSS 3D Transforms
- ES6 JavaScript features

## 📝 Notes

- The game locks the board after two cards are flipped to prevent clicking too quickly
- Cards are unflipped after 1.5 seconds if they don't match
- Once matched, cards cannot be clicked again
- Each game starts with a fresh random shuffle

---

**Enjoy playing the Memory Card Matching Game!** 🎉
