setInterval(setClock, 1000)

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRate + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRate + CurrentDate.getHours()) / 12
}