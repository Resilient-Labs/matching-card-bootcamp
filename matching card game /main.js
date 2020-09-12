// const cells = [...document.getElementsByTagName('img')]
//



let object = {
  cells:  [...document.getElementsByTagName('img')],
  imageAray: ["images/lucyB.jpg", "images/bianca.jpg", "images/beach.jpg", "images/water.jpg", "images/sky.jpg", "images/tree.jpg"],
  temp: []
};
// ItemAray is storing images that is from my folder called images to be use later for randomizing

// let imageAray = ["images/abra.png", "images/charizard.png", "images/pikachu.png", "images/charmander.png", "images/snorlax.png", "images/squirtle.png"];
// temp is currently empty at of this moment to be use later on to store the imageAray
// let temp = [];

// looping through the imageArray by using for in
// array starts at line 11  then end at line 31       \
for (var i in object.imageAray) { /*--------------------------------------------- */
  // getting random number from zero to 11 and storing inside insert      /*|*/
  let insert = Math.floor(Math.random() * 12);                            /*|*/
                                                                          /*|*/
  /*checking  if  temp  array is empty*/                                  /*|*/
  while (object.temp[insert] !== undefined) {                             /*|*/
    insert++;                                                             /*|*/
    if (insert == 12) {                                                   /*|*/
      insert = 0;                                                         /*|*/
    }                                                                     /*|*/
  }                                                                       /*|*/
  object.temp[insert] = object.imageAray[i];                              /*|*/
  insert = Math.floor(Math.random() * 12);                                /*|*/                                                                        /*|*/
  while (object.temp[insert] !== undefined) {                             /*|*/
    insert++;                                                             /*|*/
    if (insert == 12) {                                                   /*|*/
      insert = 0;                                                         /*|*/
    }                                                                     /*|*/
  }                                                                       /*|*/
  object.temp[insert] = object.imageAray[i];                                            /*|*/
}
                                                                     /*|*/
// trackingImage is being set to globlal for updating because
let trackingImage = 0;
let previous = "";
let id;
object.cells.forEach(function first(x) {
  return x.addEventListener('click', second)
})

// create varible that is to hold the first  value
// create second varible to check second
function second(e) {
  // trackingImage condition
  if (trackingImage <= 1) {
    // giving a value that is inside the image array it gives a new src
    e.target.src = object.temp[parseInt(e.target.id)]

    if(trackingImage === 0){
      // the first flip card source is being stored in the previous that was assign to line 47
      previous = e.target.src //previous = 'img/pookeoke.jpg'
      id = e.target.id; //store the id
    }
    else if(trackingImage ===1){
         if (previous === e.target.src) {
           //remove those cards
           document.getElementById(id).remove();
           document.getElementById(e.target.id).remove();
           previous = "";
         }
    }
    trackingImage++;
  } else {
    let reset = document.getElementsByTagName('img')
    for (var i = 0; i < reset.length; i++) {
      reset[i].src = "images/lucy.jpg"
    }
    trackingImage = 0;
  }
}
