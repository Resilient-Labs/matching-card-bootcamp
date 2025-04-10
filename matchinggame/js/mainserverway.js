/*Note to self: At first, I thought it may be easier to do the matching server side, will revisit later

const eachSection = ['🚕','🚕','🗽','🗽','🌃','🌃','🍕','🍕','🍎','🍎']
const randomEachSection = []

function eachSectionReturn() {
	//while (eachSection.length <=0)
	for (let i = 0; i < 10;i++)
		{
	let randomNumber = Math.floor(Math.random() * eachSection.length )
	let theCards = eachSection.splice(randomNumber,1)[0];
	randomEachSection.push(theCards)
}
return randomEachSection

}
console.log(randomEachSection)
document.querySelectorAll('.cards').forEach((section, i) => section.addEventListener('click', (e)=> theGame(e,i)))//note to self: i is for index, ()=>, allows you pass additional arguements to fx
 function theGame(e, i) {
 
 console.log(i);
 
	let theSquares = eachSectionReturn()
	e.target.innerText = theSquares[i]
  console.log(theSquares[i])


  fetch(`/api?pick=${(theSquares[i])}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      //e.target.innerText = theSquares[i]

    });

}

 


document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq(){

  const userName = document.querySelector("#userName").value;

  fetch(`/api?student=${userName}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#personName").textContent = data.name
      document.querySelector("#personStatus").textContent = data.status
      document.querySelector("#personOccupation").textContent = data.currentOccupation
    });

}*/

