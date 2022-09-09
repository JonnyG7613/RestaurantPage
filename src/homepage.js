export function homePage() {
    const title = document.createElement('div')
    const backgroundImage = document.createElement('img')
    const review = document.createElement('div')

    title.setAttribute('id', 'header')
    title.innerText = 'Generic Restaurant'

    backgroundImage.setAttribute('id', 'backgroundImage')
    backgroundImage.setAttribute('src', '/src/D69aQ0gk_400x400 (1).jpg')

    review.setAttribute('id', 'review')
    review.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iure sequi quod? Laudantium totam blanditiis et dolor ab enim tempore, explicabo temporibus quibusdam, aperiam accusamus provident dolorum doloribus assumenda repudiandae ?'

    return { title, backgroundImage, review }
}