let contentsList = []
const sendBtn = document.querySelector('#send-btn')

sendBtn.addEventListener('click', function(){
    let writed = document.querySelector('#note')

    if (writed.value !== '') {
        const notebook = document.querySelector('#notebook')

        let span = document.createElement('span')
        span.appendChild(document.createTextNode(writed.value))

        let button = document.createElement('button')
        button.setAttribute('id', `${contentsList.length}`)
        button.setAttribute('onclick', 'removeNote(this.id)')

        let img = document.createElement('img')
        img.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/109/109602.png')
        button.appendChild(img)

        let li = document.createElement('li')
        li.setAttribute('id', `note-${contentsList.length}`)

        li.appendChild(span)
        li.appendChild(button)

        notebook.appendChild(li)
        contentsList.push(`note-${contentsList.length}`)

        writed.value = ''

    } else {
        writed.classList.toggle('shakeAnimation')
    }

})

function removeNote(i) {
    let removed = document.querySelector(`#note-${i}`)

    let position = contentsList.indexOf(removed)
    let deleted = contentsList.splice(position, 1)

    removed.remove()
    
}
























