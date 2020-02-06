setInterval(setClock, 1000)

function setClock() {
    const currentDate = new Date()
    const secondsRate = currentDate.getSeconds() / 60
    const minutesRate = (secondsRate + currentDate.getMinutes()) / 60
    const hoursRate = (minutesRate + CurrentDate.getHours()) / 12
}