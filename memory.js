    //array of possible matches
    let imgs =["img/hardenmem.jpg", "img/lebronmem.jpg", "img/durantmem.jpg", "img/lillardmem.jpg","img/memkobe.jpg"]
    imgs = imgs.concat(imgs);
    shuffle(imgs);
    const boxes = document.querySelectorAll('.box')
    let img = document.querySelector("img")

  
    let clicks = 0;
    let array = [];
    let first,
    second;
    boxes.forEach((box) =>{
    box.addEventListener('click', function (){
        clicks++
        array.push(box)
        box.classList.add('clicked');
        let imageForBox;
        switch(box.id) {
            case "box1":
                imageForBox = imgs[0];
                break;
            case "box2":
                imageForBox = imgs[1];
                break;
            case "box3":
                imageForBox = imgs[2];
                break;
            case "box4":
                imageForBox = imgs[3]
                break;
            case "box5": 
                imageForBox = imgs[4]
                break;
            case "box6":
                imageForBox = imgs[5]
                break;
            case "box7":
                imageForBox = imgs[6]
                break;
            case "box8":
                imageForBox = imgs[7]
                break;
            case "box9":
                imageForBox = imgs[8]
                break;
            case "box10":
                imageForBox = imgs[9]
        }
        box.style.backgroundImage = `url(${imageForBox})`;
            if (clicks === 1) {
            first = box.style.backgroundImage
           }
           if (clicks === 2) {
            second = box.style.backgroundImage
            setTimeout(()=>checkWin(), 500)
           }
            })
            })
function checkWin(){
    if (first === second){
    array = []
    clicks = 0;
 }else{
     for (let i = 0; i<array.length; i++){
     array[i].style.backgroundImage = "";
     array[i].style.backgroundImage = "";
    
     }
     array = []
     clicks = 0;
 }
}
    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

   
       