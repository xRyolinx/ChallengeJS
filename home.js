import { fetchAllProducts } from "./helper/fetchProd.js"
import { navigate } from "./helper/utils.js"

// dynamic html for our product card
const Product = (element) => {
    const html = `
    <div class="prod-card">
        <!-- /* img */ -->
        <div class="prod-img-container">
            <img
            class="prod-img"
            src="${element.img}" alt="" />
        </div>

        <!-- /* text */ -->
        <div class="prod-text-container">
            <div>
                <p class="prod-category">${element.category}</p>
                <p class="prod-title">${element.title}</p>
            </div>
            <b class="prod-price-container">
                <span class="prod-price">${element.price}</span>
            DA</b>
        </div>
    </div>
    `
    // au lieu de retourner de l'html en texte
    // had la methode va creer un DOM element b'hadak l'html.
    // vous pourrez donc la manipuler kima thabo (.style, .children, .addEventListnener, ..etc)
    return new DOMParser().parseFromString(html, "text/html").body.firstChild
}


// start
document.addEventListener('DOMContentLoaded', ()=>{
    // get list to append later
    const list = document.querySelector('#prod-list')

    // getting all products
    fetchAllProducts()
    .then((data)=>{
        // data est la variable (tableau, car on a fetch TOUS les produits)
        // qui contient ce qu'on a recuperer du fetch
        data.forEach(element => { //looping over each element dans le tableau
            // create new product card
            const newProd = Product(element)

            // go to product page info when clicked
            newProd.addEventListener('click', () => {
                navigate(`/product/#${element.id}`)
            })

            // insert card into the DOM list
            list.append(newProd)
        });
    })
})

