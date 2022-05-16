
// COllab with Alex Harley 
// create an event listener that checks that all of the option values are filled when the user presses the button
// OOP => create an object to house the properties and methods
const wuTangName = {
    // create an array of 24 wu-tang clan names
    names: ["Please answer all the questions ", "Please answer all the questions", "Please answer all the questions","Please answer all the questions",'RZA Gig', 'Lexi Dexi', 'Diamond Man', 'Chef Noodles', 'Masta Genius', 'Method Ol\'God', 'High Chillah', 'Childish Love', 'Tang the inspector', "Wu Starks","U-Chillah",'Gambin Shallahlah',"SZA RZA GIZZA","killah Tang", "Lexi Lover Love", "Dr Inspector Wu" ,"Doggy Dill" ],
    // pull the answers from the form
    getMyName() {
        
        const questionOne = document.querySelector('#questionOne').value
        const questionTwo = document.querySelector('#questionTwo').value
        const questionThree = document.querySelector('#questionThree').value
        const questionFour = document.querySelector('#questionFour').value
        const questionFive = document.querySelector('#questionFive').value
        console.log(Number(questionOne) + Number(questionTwo) + Number(questionThree) + Number(questionFour) + Number(questionFive))
        
       document.querySelector('#resultName').innerText = wuTangName.names[Number(questionOne) + Number(questionTwo) + Number(questionThree) + Number(questionFour) + Number(questionFive)]}

    
    // questions one and two will be added together for the first part of the name

    // questions 

    // questions four and five will be added together for the second part of the name 

    // once answers are submitted and name is generated, createElement button to the DOM to reset the page append child to reset button section

    // else all answers not filled in, function will return a message to complete the survey
}

document.querySelector('.submit').addEventListener('click', wuTangName.getMyName)