// Inicializacion de variable para el setTimeOut
let timeoutID

// Funcion de Inicio de temporizador
function startTimer() {
    //DOM para los inputs
    const hours = document.getElementById("Hours")
    const minutes = document.getElementById("Minutes")
    const seconds = document.getElementById("Seconds")

    //Conversion de los valores del input a Number
    let hoursValue = Number(hours.value)
    let minutesValue = Number(minutes.value)
    let secondsValue = Number(seconds.value)

    //Conversion de los valores del input a milisegundos
    let timeHours = (hoursValue * 120000)
    let timeMinutes = (minutesValue * 60000)
    let timeSeconds = (secondsValue * 1000)

    //Sumatoria de las horas, minutos y segunods
    const totalTime = timeHours + timeMinutes + timeSeconds

    //Inicializacion de setTimeOut
    timeoutID = setTimeout(() => {
        console.log("Temporizador Finalizado.")
    }, totalTime);

}

/* addEventListener para ejecutar 
la funcion startTimer() 
al presionar el boton de start */
const startBtn = document.getElementById("startBtn")
startBtn.addEventListener("click", startTimer)

//Funcion para reset del temporizador
function restartTimer() {
    //Limpieza de los valores en los inputs
    const hours = document.getElementById("Hours").value=""
    const minutes = document.getElementById("Minutes").value=""
    const seconds = document.getElementById("Seconds").value=""

    //Limpieza del setTimeOut declarado e inicializado en la funcion startTimer()
    clearTimeout(timeoutID)
    console.log("El temporizador se ha restaurado")
}

/* addEventListener para ejecutar 
la funcion resetTimer() 
al presionar el boton de reset */
const restartBtn = document.getElementById("restartBtn")
restartBtn.addEventListener("click", restartTimer)
