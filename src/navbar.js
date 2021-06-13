export { genNavBar, navLinks }
import cheers from "../src/images/cheers.svg"

const home = document.createElement('div')
const menu = document.createElement('div')
const contact = document.createElement('div')
const homeText = document.createElement('p')
const menuText = document.createElement('p')
const contactText = document.createElement('p')
home.appendChild(homeText)
menu.appendChild(menuText)
contact.appendChild(contactText)
const navLinks = [home, menu, contact]


function genNavBar() {
    const navBar = document.createElement('section');
    const navBarWrapper = document.createElement('div')
    navBarWrapper.appendChild(navBar)
    navBarWrapper.classList.add('navBarWrapper')
    document.body.prepend(navBarWrapper)
    navBar.classList.add('navbar')

    homeText.innerText = 'Home'
    menuText.innerText = 'Menu'
    contactText.innerText = 'Contact'


    navLinks.forEach(link => {
        let menuSelection = document.createElement('img')
        menuSelection.src = "../src/images/cheers.svg"
        menuSelection.src = cheers
        menuSelection.classList.add('cheers')
        menuSelection.classList.add('hidden')

        link.prepend(menuSelection)
        navBar.appendChild(link)
    })

}