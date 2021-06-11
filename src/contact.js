export function genContactPage() {
    console.log('inside contact page')
    const content = document.querySelector('#content')
    const header = document.createElement('h1')
    const formField = document.createElement('div')
    const note = document.createElement('p')

    header.innerText = 'Get in touch with us!'
    note.innerText = 'We look foward to hearing from you soon!'

    content.appendChild(header)
    content.appendChild(note)

}