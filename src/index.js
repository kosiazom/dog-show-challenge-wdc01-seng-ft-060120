const DOG_URL = "http://localhost:3000/dogs/"


document.addEventListener('DOMContentLoaded', () => {
    fetchDogs();
});

//fetch dogs by creating a function
function fetchDogs(){
    fetch(DOG_URL)
    .then(resp => resp.json())
    .then(dogsObjects => renderDogs(dogsObjects) )
}

//Render the Dogs to the page but in table format
//loop through the Object Array and grab a dog and place it in the HTML

function renderDogs(dogsObjects) {
 dogsObjects.forEach(dog => renderADog(dog))

}

function renderADog(dog) {
    let table = document.getElementById('table-body')
    let tableRow = document.createElement('tr')
    tableRow.dataset.number = dog.id
    tableRow.innerHTML = `<tr><td> ${dog.name}</td> <td>${dog.breed}</td> <td>${dog.sex}</td> <td><button>Edit Dog</button></td></tr>`  
    table.append(tableRow)
    //make a listener for the button
    let editButton = document.querySelector('button')
    console.log(editButton)
    editButton.addEventListener('click', () => {
        populateForm(dog)
        console.log(editButton) //only one button was working
        //when i click this button what do i want it to do?
        //the button should take me to the form 
    })
}
    function populateForm(dog){
  let dogForm = document.getElementById('dog-form')
  dogForm.name.value = dog.name
  dogForm.breed.value = dog.breed
  dogForm.sex.value = dog.sex
    }
