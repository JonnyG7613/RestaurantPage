import './style/style.css'
import { homePage } from './homepage.js'
import { menuPage } from './menupage.js'
import { contactPage } from './contact.js'

const homepageButton = document.createElement('button')
const menupageButton = document.createElement('button')
const contactButton = document.createElement('button')
const content = document.getElementById('content')

const home = homePage()
const menu = menuPage()

homepageButton.addEventListener('click', () => {
    content.innerHTML = ''
    content.appendChild(homepageButton)
    content.appendChild(menupageButton)
    content.appendChild(contactButton)
    Object.keys(home).forEach(e => {
        content.appendChild(home[e])
    })
})

menupageButton.addEventListener('click', () => {
    content.innerHTML = ''
    content.appendChild(homepageButton)
    content.appendChild(menupageButton)
    content.appendChild(contactButton)
    Object.keys(menu).forEach(e => {
        content.appendChild(menu[e])
    })
})

contactButton.addEventListener('click', () => {
    content.innerHTML = ''
    content.appendChild(homepageButton)
    content.appendChild(menupageButton)
    content.appendChild(contactButton)
    content.appendChild(contactPage())
})

homepageButton.setAttribute('class', 'tabLinks')
homepageButton.innerText = 'Home'

contactButton.setAttribute('class', 'tabLinks')
menupageButton.innerText = 'Menu'

menupageButton.setAttribute('class', 'tabLinks')
contactButton.innerText = 'Contact Us'

Object.keys(homePage).forEach(e => {
    content.appendChild(homePage[e])
})

content.appendChild(homepageButton)
content.appendChild(menupageButton)
content.appendChild(contactButton)

function openPage(tab) {
    content.innerHTML = ''
    content.appendChild(homepageButton)
    content.appendChild(menupageButton)
    content.appendChild(contactButton)
    switch (tab) {
        case 'contactUs':
            content.appendChild(contactPage())
            break
        case 'home':
            Object.keys(home).forEach(e => {
                content.appendChild(home[e])
            })
            break
        case 'menu':
            Object.keys(menu).forEach(e => {
                content.appendChild(menu[e])
            })
            break
    }

}


openPage('home')