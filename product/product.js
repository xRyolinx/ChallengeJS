import { fetchProduct, deleteProduct } from "../helper/fetchProd.js"
import { getIdFromUrl, changeTitle, navigate } from "../helper/utils.js"


// reload window when changing product, a ne pas toucher
window.addEventListener('hashchange', ()=> {
    window.location.reload(true) // ca actualise la page berk
})

// get id of product from url
const id = getIdFromUrl()


// info section
const Section = (produit) => {
    const html = `
    <div class="info">
        <div>
            <a href="/">Go Home</a>
            <h2>Title: __TITRE_HERE__</h2>
        </div>
        <img src="__IMG_HERE__" alt="">
        <p>Category: <b>__CATEGORY_HERE__</b></p>
        <p>Price: <b>__PRICE_HERE__ DA</b></p>

        <div id='buttons'>
            <button id='edit'>Edit</button>
            <button id='del'>Delete</button>
        </div>
    </div>
    `
    return new DOMParser().parseFromString(html, "text/html").body.firstChild
}


// get edit button fron the section
const getEditButton = (section) => {
    return section.children[4].children[0]
}
// get delete button fron the section
const getDeleteButton = (section) => {
    return section.children[4].children[1]
}


// on click handle of edit button
const handleEdit = () => {
    navigate(`/product/edit/#${id}`)
}

// on click handle of delete button
const handleDelete = () => {
    // alert('Delete button clicked!')

    // a faire
    deleteProduct(id)
    .then(()=>{
        navigate(`/`)
    })
}


// start
document.addEventListener('DOMContentLoaded', ()=>{
    // fetch and show infos
    fetchProduct(id)
    .then((data) => {
        // change title
        changeTitle(data.title)

        // load section
        const info = Section(data)

        // load event listeners in buttons
        const editButton = getEditButton(info)
        editButton.addEventListener('click', handleEdit)
        
        const deleteButton = getDeleteButton(info)
        deleteButton.addEventListener('click', handleDelete)

        // add section to DOM
        document.querySelector('#main').append(info)
    })
})