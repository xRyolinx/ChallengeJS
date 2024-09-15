import { createProduct } from "../../helper/fetchProd.js";
import { navigate } from "../../helper/utils.js";

// start
document.addEventListener('DOMContentLoaded', () => {
    // add event to save button
    const addButton = document.querySelector('#addButton')
    addButton.addEventListener('click', (e)=>{
        e.preventDefault()
        handleAdd()
    })
})



// when click on add button
const handleAdd = () => {
    // alert('add button clicked!')
    // TO DO
    let newProd = {};
    document.querySelectorAll('input').forEach((element)=>{
        newProd[element.name] = element.value
    })
    
    createProduct(newProd)
    .catch(()=>{
        alert('An error occured. Please check the server')
    })
    .finally(()=>{
        navigate('/')
    })
}