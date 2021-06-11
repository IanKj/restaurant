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
        beerImg.src = `../src/images/beer${index}.png`
        beerImg.classList.add('beer')
        beerWrapper.appendChild(beer)
        beerWrapper.appendChild(beerImg)
        beerContainer.appendChild(beerWrapper)

    })

}