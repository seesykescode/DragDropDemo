const dragstart_handler = (ev) => {
    console.log("I'm draggin!")
    ev.dataTransfer.setData("text/plain", ev.target.id)
    ev.dataTransfer.setData("text/html", "<p>This has been dragged</p>")
}

const dragover_handler = (ev) => {
    ev.preventDefault()
    ev.dataTransfer.dropeffect = "move"
}

const drop_handler = (ev) => {

    var data = ev.dataTransfer.getData("text/plain")
    ev.target.appendChild(document.getElementById(data))

    newData = document.createElement('div')
    newData.innerHTML = data
    newData.className = "text"
    document.getElementById(data).appendChild(newData)
    ev.preventDefault()
}

