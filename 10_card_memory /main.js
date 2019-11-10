let tableElements = document.querySelectorAll("th");
let classes=["haiti","eritrea","colombia","usa","haiti","colombia","salvador","usa","salvador","eritrea"];
let newClasses = [];
let length = classes.length,randomIndex;
while(length!==0){
  let random = Math.random();
  let sectionOfRandom = 1/length;
  for(let i=1;i<=length;i++){
    if(random<=(sectionOfRandom*i) && random > sectionOfRandom * (i - 1)){
      let temp = classes.splice(i - 1,1);
      newClasses.push(temp);
    }
  }
  length--;
}

tableElements.forEach((el, ind)=>{
  el.className = newClasses[ind];
});

const game = {
  turn1 : null,
  numberOfMatches: 0,
  changeTurn1(className){
    this.turn1 = className;
  },
  checkIfSame(para){
    if (para[0]===game.turn1[0]){
      this.turn1= null;
      this.numberOfMatches++;
      if(this.numberOfMatches===5){
        alert("Winner!")
        setTimeout(function(){location.reload()}, 4000);
      }
      return;
    }else{
      document.querySelector(`#${para[1]}`).style.backgroundImage = "none";
      document.querySelector(`#${game.turn1[1]}`).style.backgroundImage = "none";
      this.turn1 = null;
    }
  }
};
let table = document.querySelector("table");
table.addEventListener("click", function(){
  if(game.turn1 === null){
    let id = event.target.id;
    let clas = event.target.className;
    console.log(clas,id)
    game.changeTurn1([clas,id]);
    if(clas=="haiti"){
      document.getElementById(id).style.backgroundImage= "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F56%2FFlag_of_Haiti.svg%2F1024px-Flag_of_Haiti.svg.png&f=1&nofb=1)"
    }else if(clas=="salvador"){
      document.getElementById(id).style.backgroundImage = "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F34%2FFlag_of_El_Salvador.svg%2F1280px-Flag_of_El_Salvador.svg.png&f=1&nofb=1)"
    }else if(clas=="colombia"){
      document.getElementById(id).style.backgroundImage = "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FtgGWMBHAwcg%2Fmaxresdefault.jpg&f=1&nofb=1)"
    }else if(clas=="usa"){
      document.getElementById(id).style.backgroundImage = "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flv.usembassy.gov%2Fwp-content%2Fuploads%2Fsites%2F58%2F2016%2F05%2FUS20Flag20Color20High.jpg&f=1&nofb=1)"
    }else if(clas=="eritrea"){
      document.getElementById(id).style.backgroundImage = "url(https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbecomingellipsismark.files.wordpress.com%2F2012%2F10%2Feritrea-flag.gif&f=1&nofb=1"
    }
  }else {
    let clas = event.target.className;
    let id = event.target.id;
    if(clas=="haiti"){
      document.getElementById(id).style.backgroundImage= "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F56%2FFlag_of_Haiti.svg%2F1024px-Flag_of_Haiti.svg.png&f=1&nofb=1)"
    }else if(clas=="salvador"){
      document.getElementById(id).style.backgroundImage = "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F34%2FFlag_of_El_Salvador.svg%2F1280px-Flag_of_El_Salvador.svg.png&f=1&nofb=1)"
    }else if(clas=="colombia"){
      document.getElementById(id).style.backgroundImage = "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FtgGWMBHAwcg%2Fmaxresdefault.jpg&f=1&nofb=1)"
    }else if(clas=="usa"){
      document.getElementById(id).style.backgroundImage = "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flv.usembassy.gov%2Fwp-content%2Fuploads%2Fsites%2F58%2F2016%2F05%2FUS20Flag20Color20High.jpg&f=1&nofb=1)"
    }else if(clas=="eritrea"){
      document.getElementById(id).style.backgroundImage = "url(https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbecomingellipsismark.files.wordpress.com%2F2012%2F10%2Feritrea-flag.gif&f=1&nofb=1"
    }
    setTimeout(()=>{game.checkIfSame([clas,id])},500);
  }
});
