// url of backend server
const baseUrl = 'http://localhost:3000'

// url of products
const productsUrl = `${baseUrl}/products`


// get all products from server
export const fetchAllProducts = async () => {
    const url = `${productsUrl}`

    // get response from server
    const response = await fetch(url)

    // convert to json data
    const data = await response.json()
    return data
}

// get one product
export const fetchProduct = async (id) => {
    const url = `${productsUrl}/${id}`

    // get response from server
    const response = await fetch(url)

    // convert to json data
    const data = await response.json()
    return data
}

// Delete product
export const deleteProduct = async (id) => {
    const url = `${productsUrl}/${id}`

    // get response from server
    const response = await fetch(url, {
        method: 'DELETE',
    })

    // get response back
    return response
}

// create new product
export const createProduct = async (product) => {
    const url = `${productsUrl}`

    // get response from server
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'Content-type': 'application/json',
        },
    })

    // get response back
    return response
}

// Edit product
export const editProduct = async (id, newFields) => {
    const url = `${productsUrl}/${id}`

    // get response from server
    const response = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(newFields),
        headers: {
            'Content-type': 'application/json',
        },
    })

    // get response back
    return response
}