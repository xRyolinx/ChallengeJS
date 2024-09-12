
// return the hash ID from url
export const getIdFromUrl = () => {
    return window.location.hash.replace('#', '');
}

// change title of web page
export const changeTitle = (newTitle) => {
    document.title = newTitle
}


// change location
export const navigate = (path) => {
    if (path[0] != '/')
        path = `/${path}`
    window.location.href = `${window.location.origin}${path}`
}