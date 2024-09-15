import { getIdFromUrl, navigate } from '../../helper/utils.js'
import { fetchProduct, editProduct } from '../../helper/fetchProd.js'


// reload window when changing product
window.addEventListener('hashchange', ()=> {
    window.location.reload(true) // ca actualise la page berk
})

// get id
const id = getIdFromUrl()

// start
document.addEventListener('DOMContentLoaded', ()=>{
    // fetch
    fetchProduct(id)
    .then((data)=>{
        // create the form
        const form = Form(data)
        
        // add event to save button
        const saveButton = form.children[form.children.length - 1]
        saveButton.addEventListener('click', (e)=>{
            e.preventDefault()
            handleSave()
        })

        // add to the dom
        document.querySelector('#main').append(form)
    })

})

// load the form with old informations of product
const Form = (product) => {
    const html = `
    <form action="">
	  <div>
        <a href="/">Go Home</a>
      	<h2>Edit Product</h2>
	  </div>
      <div class="input-container">
        <p>Title</p>
        <input value="${product.title}" autocomplete="off" type="text" name="title" id="title" />
      </div>
      <div class="input-container">
        <p>Category</p>
        <input value="${product.category}" autocomplete="off" type="text" name="category" id="category" />
      </div>
      <div class="input-container">
        <p>Price</p>
        <input value="${product.price}" autocomplete="off" type="text" name="price" id="price" />
      </div>
      <div class="input-container">
        <p>Img path</p>
        <input value="${product.img}" autocomplete="off" type="text" name="img" id="img" />
      </div>

      <button>Save</button>
    </form>
    `
    return new DOMParser().parseFromString(html, "text/html").body.firstChild
}


// when click on save button
const handleSave = () => {
    // alert('save button clicked!')
    // TO DO
    let newProd = {};
    document.querySelectorAll('input').forEach((element)=>{
        newProd[element.name] = element.value
    })

    editProduct(id, newProd)
    .then(()=>{
        navigate(`/product/#${id}`)
    })
    .catch(()=>{
        navigate(`/`)
    })
}