import './style.css'
import { genNavBar, navLinks } from "./navbar.js"
import { genHomePage } from "./home.js"
import { genMenu } from "./menu.js"
import { genContactPage } from "./contact.js"
const content = document.querySelector('#content')

let currentPage = 'Home'
genNavBar();
genHomePage()

import cheers from "../src/images/cheers.svg"
const menuSelection = document.createElement('img')
menuSelection.src = cheers
content.appendChild(menuSelection)

const navElements = [
    {
        location: 'Home',
        func: genHomePage
    },
    {
        location: 'Menu',
        func: genMenu
    },
    {
        location: 'Contact',
        func: genContactPage
    }

]

navElements.forEach(element => {
    navLinks.forEach(link => {
        if (link.innerText === element.location) {
            link.addEventListener('click', function (e) {
                clearCheers()
                content.innerHTML = "";
                element.func();
                currentPage = e.target.innerText
                link.firstChild.classList.remove('hidden')
                link.classList.add('selected', 'disabled')
            })
        }
    })
})

function clearCheers() {
    navLinks.forEach(link => {
        link.firstChild.classList.add('hidden')
        link.classList.remove('selected', 'disabled')
    })
}
