export function genMenu() {
    const content = document.querySelector('#content')

    const ipa = document.createElement('p')
    ipa.innerText = 'IPA'

    const lager = document.createElement('p')
    lager.innerText = 'Lager'

    const beers = [ipa, lager]

    beers.forEach(beer => {
        content.appendChild(beer)
    })

}