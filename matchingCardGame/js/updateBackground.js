//changes background of body every 15 seconds 
function background() {
    images = ["one.jpg", "two.jpg", "three.png", "four.jpg", "five.jpg", "six.jpg", "seven.jpg"]
    let selectedImage = images[Math.floor(Math.random() * images.length)]
    console.log(selectedImage)
    document.querySelector("body").style.backgroundImage = `url('./img/${selectedImage}')`
}

 setInterval(background, 15000)
 background()

 //changes card backs on page load
document.addEventListener('DOMContentLoaded', function changeCardBack() {
    backs = ["lor-back.webp", "lor-back2.webp", "lor-back3.webp", "lor-back4.webp", "lor-back5.webp", "lor-back6.webp", "lor-back7.webp"]
    let selectedBack = backs[Math.floor(Math.random() * backs.length)]
    console.log(selectedBack)

    document.querySelectorAll('.back-face').forEach(card => card.src = `img/${selectedBack}`);

    //.src = `img/${selectedBack}`
}, false);
