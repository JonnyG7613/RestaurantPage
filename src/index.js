import './style/style.css'
import { homePage } from './homepage.js'
import { menuPage } from './menupage.js'
import { contactPage } from './contact.js'

const homepage = document.createElement('button')
const menupage = document.createElement('button')
const contact = document.createElement('button')
const content = document.getElementById('content')

let homepageTab = {
    class: 'tabLinks',
    onclick: 'openPage("home")',
    innerHTML: 'Home'
}

let menupageTab = {
    class: 'tabLinks',
    addEventListener: ('click', openPage("menu")),
    innerHTML: 'Menu'
}

let contactsTab = {
    class: 'tabLinks',
    onclick: 'openPage("contactUs")',
    innerHTML: 'Contact Us'
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

console.log(contactPage())
console.log(homePage())
console.log(menuPage())

Object.keys(homepageTab).forEach(e => {
    homepage.setAttribute(e, homepageTab[e])
})

Object.keys(menupageTab).forEach(e => {
    menupage.setAttribute(e, menupageTab[e])
})

Object.keys(contactsTab).forEach(e => {
    contact.setAttribute(e, contactsTab[e])
})

function openPage(tab) {
    content.append('')
    switch (tab) {
        case 'contactUs':
            content.appendChild(contactPage())
            break
        case 'home':
            Object.keys(homePage()).forEach(e => {
                content.appendChild(e)
            })
            break
        case 'menu':
            Object.keys(menuPage).forEach(e => {
                content.appendChild(menuPage[e])
            })
            console.log('cat')
            break
    }

}
console.log('test')

content.appendChild(homepage)
content.appendChild(menupage)
content.appendChild(contact)