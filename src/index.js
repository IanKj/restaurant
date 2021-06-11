import { genNavBar, navLinks } from "./navbar.js"
import { genHomePage } from "./home.js"
import { genMenu } from "./menu.js"
import { genContactPage } from "./contact.js"
const content = document.querySelector('#content')
let currentPage = 'Home'
genNavBar();
genHomePage()

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
    console.log(element)
    navLinks.forEach(link => {
        console.log(link)
        if (link.innerText === element.location) {
            console.log('match')
            link.addEventListener('click', function (e) {
                content.innerHTML = "";
                element.func();
                currentPage = e.target.innerText
            })
        }
    })
})