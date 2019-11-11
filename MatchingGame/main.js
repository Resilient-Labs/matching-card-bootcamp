// let table = document.querySelector("table")
// const game = {
//   turn1: null,
//   turn2: null,
//   changeTurn1(className){
//     game.turn1 = className
//   }
// }
//
// table.addEventListener('click', function() {
// if(game.turn1===null){
//   let id =
//   let clas = event.target.className;
//   // game.changeTurn1(clas)
//   if(clas="haiti"){
//     document.querySelector(`#${id}`).style.backgroundImage = "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F56%2FFlag_of_Haiti.svg%2F1280px-Flag_of_Haiti.svg.png&f=1&nofb=1)"
//   }else if(clas="colombia"){
//     document.querySelector(`#${event.target.id}`).style.backgroundImage = "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F56%2FFlag_of_Haiti.svg%2F1280px-Flag_of_Haiti.svg.png&f=1&nofb=1)"
//   }
//   else if(clas="eritrea"){
//     document.querySelector(`#${event.target.id}`).style.backgroundImage = "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F56%2FFlag_of_Haiti.svg%2F1280px-Flag_of_Haiti.svg.png&f=1&nofb=1)"
//   }
//   else if(clas="usa"){
//     document.querySelector(`#${event.target.id}`).style.backgroundImage = "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F56%2FFlag_of_Haiti.svg%2F1280px-Flag_of_Haiti.svg.png&f=1&nofb=1)"
//   }
//   else if(clas="salvador"){
//     document.querySelector(`#${event.target.id}`).style.backgroundImage = "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F56%2FFlag_of_Haiti.svg%2F1280px-Flag_of_Haiti.svg.png&f=1&nofb=1)"
//     }
//   }
// })
// //else{
//   // let clas = event.target.className;
//   // game.changeTurn2(clas);
//   // if(clas="haiti"){
//   //   document.querySelector(`#${event.target.id}`).style.backgroundImage = url(imgs/haiti.png)
//   // else if(clas="colombia"){
//   //   document.querySelector(`#${event.target.id}`).style.backgroundImage = url(imgs/haiti.png)
//   // }
//   // else if(clas="eritrea"){
//   //   document.querySelector(`#${event.target.id}`).style.backgroundImage = url(imgs/haiti.png)
//   // }
//   // else if(clas="usa"){
//   //   document.querySelector(`#${event.target.id}`).style.backgroundImage = url(imgs/haiti.png)
//   // }
//   // else if(clas="salvador"){
//   //   document.querySelector(`#${event.target.id}`).style.backgroundImage = url(imgs/haiti.png)
//   //   }
//   // }
//   // }
// })
const game = {
  turn1 : null,
  numberOfMatches: 0,
  changeTurn1(className){
    game.turn1 = className;
  },
  checkIfSame(para){
    if (para[0]===game.turn1[0]){
      game.turn1= null;
      game.numberOfMatches++;
      return;
    }else{
      document.querySelector(`#${para[1]}`).style.backgroundImage = "none";
      document.querySelector(`#${game.turn1[1]}`).style.backgroundImage = "none";
      game.turn1 = null;
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
  }else{
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
    // setTimeout(game.checkIfSame([clas,id]),10000);
    setTimeout(()=>{game.checkIfSame([clas,id])},500);

  }
});
