export { genNavBar, navLinks }

const home = document.createElement('div')
const menu = document.createElement('div')
const contact = document.createElement('div')
const navLinks = [home, menu, contact]


function genNavBar() {
    const navBar = document.createElement('section');
    const navBarWrapper = document.createElement('div')
    navBarWrapper.appendChild(navBar)
    navBarWrapper.classList.add('navBarWrapper')
    document.body.prepend(navBarWrapper)
    navBar.classList.add('navbar')

    home.innerText = 'Home'
    menu.innerText = 'Menu'
    contact.innerText = 'Contact'


    navLinks.forEach(link => {
        navBar.appendChild(link)
    })

}