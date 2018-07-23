
function accept() {
    updateGuest({isAccept: true}, true)
}

function decline() {
    updateGuest({isAccept: false}, true)
}

async function updateGuest(payload, reload = false) {
    await fetch('', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    if (reload) window.location.reload()
}

function mountHandler(id, type, handler) {
    console.log(id)
    const elemnt = document.getElementById(id)
    if (elemnt) {
        elemnt.addEventListener(type, handler)
    }
}

const food = ["fish", "meat", "burger", "plants"]
const alcohol = ["weak", "strong", "all", "none"]

document.addEventListener('DOMContentLoaded', function (event) {
    mountHandler("accept", "click", accept)
    mountHandler("decline", "click", decline)

    food.forEach(id => {
        mountHandler(id, "change", (event) => updateGuest({food: event.target.value}))
    })
   
    alcohol.forEach(id => {
        mountHandler(id, "change", (event) => updateGuest({alcohol: event.target.value}))
    })

    mountHandler("whantsCeremony", "change", (event) => updateGuest({whantsCeremony: event.target.checked}))
    mountHandler("hasSpeech", "change", (event) => updateGuest({hasSpeech: event.target.checked}))
})
