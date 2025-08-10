let timeoutID

function startTimer() {
    const hours = document.getElementById("Hours")
    const minutes = document.getElementById("Minutes")
    const seconds = document.getElementById("Seconds")

    let hoursValue = Number(hours.value)
    let minutesValue = Number(minutes.value)
    let secondsValue = Number(seconds.value)

    let timeHours = (hoursValue * 120000)
    let timeMinutes = (minutesValue * 60000)
    let timeSeconds = (secondsValue * 1000)

    const totalTime = timeHours + timeMinutes + timeSeconds


    timeoutID = setTimeout(() => {
        console.log("Temporizador Finalizado.")
    }, totalTime);

}

const startBtn = document.getElementById("startBtn")
startBtn.addEventListener("click", startTimer)

window.startTimer = startTimer

function restartTimer() {
    const hours = document.getElementById("Hours").value=""
    const minutes = document.getElementById("Minutes").value=""
    const seconds = document.getElementById("Seconds").value=""

    clearTimeout(timeoutID)
    console.log("El temporizador se ha restaurado")
}

const restartBtn = document.getElementById("restartBtn")
restartBtn.addEventListener("click", restartTimer)

window.restartTimer = restartTimer
