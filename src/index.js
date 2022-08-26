import './style/style.css'
import { homePage } from './homepage.js'
import { menuPage } from './menupage.js'
import { contactPage } from './contact.js'

const homepage = document.createElement('button')
const menupage = document.createElement('button')
const contact = document.createElement('button')

let homepageTab = {
    class: 'tabLinks',
    onclick: 'openPage("home")',
    innerText: 'Home'
}

let menupageTab = {
    class: 'tabLinks',
    onclick: 'openPage("menu")',
    innerText: 'Menu'
}

let contactsTab = {
    class: 'tabLinks',
    onclick: 'openPage("contactUs")',
    innerText: 'Contact Us'
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
    // innerHTML: 
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
    console.log(`openPage function ${tab}`)
}

document.body.appendChild(homepage)
document.body.appendChild(menupage)
document.body.appendChild(contact)