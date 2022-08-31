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

let homepageTab = {
    class: 'tabLinks',
    onclick: openPage('home')

}

let menupageTab = {
    class: 'tabLinks',
    onclick: 'openPage("menu")',
}

let contactsTab = {
    class: 'tabLinks',
    onclick: 'openPage("contactUs")',
}

let homepageContent = {
    id: 'home',
    class: 'tabContent'
}

let menupageContent = {
    id: 'menu',
    class: 'tabContent'
}

let contactContent = {
    id: 'contact',
    class: 'tabContent',
}

Object.keys(homepageTab).forEach(e => {
    homepageButton.setAttribute(e, homepageTab[e])
})
homepageButton.addEventListener('click', openPage("home"))

Object.keys(menupageTab).forEach(e => {
    menupageButton.setAttribute(e, menupageTab[e])
})

Object.keys(contactsTab).forEach(e => {
    contactButton.setAttribute(e, contactsTab[e])
})

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
openPage('menu')