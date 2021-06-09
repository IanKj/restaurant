export function genHomePage() {
    const content = document.querySelector('#content')
    const header = document.createElement('h1')
    const image = document.createElement('img')
    const summary = document.createElement('p')

    header.innerText = 'Jaspbrew'
    image.src = "/src/beer.jpg"
    image.alt = "brewery"
    summary.innerText = 'At Jaspbrew we take special care to offer a diverse selection of refresshing adult beverages'

    content.appendChild(header)
    content.appendChild(image)
    content.appendChild(summary)

}
