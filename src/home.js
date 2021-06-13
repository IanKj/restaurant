import beerIcon from "../src/images/beer.svg"
import beerIcon2 from "../src/images/beer.svg"
import brewery from "../src/images/beer.jpg"

export function genHomePage() {
    const content = document.querySelector('#content')
    const headerWrapper = document.createElement('div')
    const beerSVG = document.createElement('img')
    const beerSVG2 = document.createElement('img')
    const header = document.createElement('h1')
    const image = document.createElement('img')
    const summary = document.createElement('p')

    beerSVG.src = beerIcon
    beerSVG.alt = "beer icon"
    beerSVG2.src = beerIcon2
    beerSVG2.alt = "beer icon"
    header.innerText = 'Jaspbrew'
    image.src = brewery
    image.id = "mainImage"
    image.alt = "brewery"
    summary.innerText = 'At Jaspbrew we take special care to offer a diverse selection of refresshing adult beverages'

    headerWrapper.classList.add('headerWrapper')
    headerWrapper.appendChild(beerSVG)
    headerWrapper.appendChild(header)
    headerWrapper.appendChild(beerSVG2)
    content.appendChild(headerWrapper)
    content.appendChild(image)
    content.appendChild(summary)

}
