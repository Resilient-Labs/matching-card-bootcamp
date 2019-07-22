// Image factory
let createImage = function(src, title) {
  let img   = new Image();
  img.src   = src;
  img.alt   = title;
  img.title = title;
  return img;
};

// array of images
let images = [];

// push two images to the array
images.push(createImage("images/charizard.jpg", "charizard"));
images.push(createImage("images/dragonite.jpg", "dragonite"));
images.push(createImage("images/mewtwo.jpg", "mewtwo"));
images.push(createImage("images/pikachu.jpg", "pikachu"));
images.push(createImage("images/snorlax.jpg", "snorlax"));

// output
document.getElementById('front').src = images[0]
console.log(images);


// let imageArray = [];
// imageArray[0] = {
//     image01 : new Image(),
//     src : "images/charizard.jpg",
//     imageCaption : "Image of charizard"
// };
// imageArray[1] = {
//     image01 : new Image(),
//     src : "images/dragonite.jpg",
//     imageCaption : "Image of dragonite"
// };
//
// for(x = 0; x < imageArray.length; x++) {
//     console.log(imageArray[x].src);
//     document.querySelector("img").src = imageArray[x]
// }
