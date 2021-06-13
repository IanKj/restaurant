import beer0 from "../src/images/beer0.png"
import beer1 from "../src/images/beer1.png"
import beer2 from "../src/images/beer2.png"
import beer3 from "../src/images/beer3.png"
import beer4 from "../src/images/beer4.png"

const beerImages = [beer0, beer1, beer2, beer3, beer4]

export function genMenu() {
    const content = document.querySelector('#content')
    const header = document.createElement('h1')
    const beerContainer = document.createElement('div')
    beerContainer.classList.add('beerContainer')
    header.innerText = 'Our selection'

    content.appendChild(header)
    content.appendChild(beerContainer)

    const ipa = document.createElement('p')
    ipa.innerText = 'IPA'

    const lager = document.createElement('p')
    lager.innerText = 'Lager'

    const hefeweizen = document.createElement('p')
    hefeweizen.innerText = 'Hefeweizen'

    const hazyIpa = document.createElement('p')
    hazyIpa.innerText = 'Hazy IPA'

    const cider = document.createElement('p')
    cider.innerText = 'Cider'

    const beers = [ipa, lager, hefeweizen, hazyIpa, cider]

    beers.forEach((beer, index) => {
        const beerWrapper = document.createElement('div')
        beerWrapper.classList.add('beerWrapper')
        beerContainer.appendChild(beerWrapper)
        const beerImg = document.createElement('img')
        beerImg.src = beerImages[index]
        beerImg.classList.add('beer')
        beerWrapper.appendChild(beer)
        beerWrapper.appendChild(beerImg)
        beerContainer.appendChild(beerWrapper)

    })

}