// import what you need



// start
document.addEventListener('DOMContentLoaded', () => {
    // add event to save button
    const addButton = document.querySelector('#addButton')
    addButton.addEventListener('click', (e)=>{
        e.preventDefault() // empeche le formulaire de s'envoyer, afin que vous le manipuliez comme VOUS voulez (via handleAdd)
        handleAdd()
    })
})



// when clicked on add button
// create an object with all the inputs' value there, then send Post request !
// if an error occured, print it to console
// Finally (gg li fahmo), go to homePage wether an error occured or not ! (check la doc to see how)
const handleAdd = () => {
    alert('add button clicked!')
    // TO DO

}