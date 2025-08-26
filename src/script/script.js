// Inicializacion de variable globales

let timeoutID
let intervalID
let startTime
let remainingTime
let isPaused = false

// TimerDisplay (HTML)

let TimerDisplay = document.getElementById('timerDisplay')

//Sonido de alarma para temporizador
const notificationSound = new Audio('/src/sounds/timerSound.mp3');

// Funcion de Inicio de temporizador

function startTimer() {
    // Oculta los botones de inicio y reanudar
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('resumeBtn').style.display = 'none';

    //date now
    startTime = Date.now()

    //DOM para los inputs
    const hours = document.getElementById("Hours")
    const minutes = document.getElementById("Minutes")
    const seconds = document.getElementById("Seconds")

    //Conversion de los valores del input a Number
    let hoursValue = Number(hours.value)
    let minutesValue = Number(minutes.value)
    let secondsValue = Number(seconds.value)

    //Conversion de los valores del input a milisegundos
    let timeHours = (hoursValue * 3600000)
    let timeMinutes = (minutesValue * 60000)
    let timeSeconds = (secondsValue * 1000)

    //Sumatoria de las horas, minutos y segunods
    remainingTime = timeHours + timeMinutes + timeSeconds

    // Código modificado
    intervalID = setInterval(() => {
        // Primero, resta el tiempo
        remainingTime -= 1000;

        if (remainingTime > 0) {
            // Luego, formatea el tiempo restante y muéstralo
            TimerDisplay.textContent = formatTime(remainingTime);
        } else {
            // Asegúrate de que al llegar a 0 se muestre correctamente
            TimerDisplay.textContent = "</00:00:00>";
            clearInterval(intervalID);
        }
    }, 1000);

    //Inicializacion de setTimeOut
    timeoutID = setTimeout(() => {
        clearInterval(intervalID)
        TimerDisplay.textContent = "</00:00:00>";
        notificationSound.play();
    }, remainingTime);

}

const startBtn = document.getElementById("startBtn")
startBtn.addEventListener("click", startTimer)


//Funcion para reset del temporizador

function restartTimer() {
    //Limpieza de los valores en los inputs
    const hours = document.getElementById("Hours").value = ""
    const minutes = document.getElementById("Minutes").value = ""
    const seconds = document.getElementById("Seconds").value = ""

    //Limpieza del setTimeOut declarado e inicializado en la funcion startTimer()
    clearTimeout(timeoutID)
    clearInterval(intervalID)
    TimerDisplay.textContent = "</00:00:00>"
    alert("El temporizador se ha restaurado")

    document.getElementById('startBtn').style.display = ''
    document.getElementById('pauseBtn').style.display = ''
    document.getElementById('resumeBtn').style.display = ''
    document.getElementById('restartBtn').style.display = ''
}


const restartBtn = document.getElementById("restartBtn")
restartBtn.addEventListener("click", restartTimer)


//Funcion para pausar el temporizador

function pauseTimer() {
    // Muestra los botones de inicio y reanudar al pausar
    isPaused = true
    if (isPaused) {
        clearTimeout(timeoutID)
        clearInterval(intervalID)
        alert("el temporizador se ha pausado")
        document.getElementById('resumeBtn').style.display = '';
    }
}

const pauseBtn = document.getElementById("pauseBtn")
pauseBtn.addEventListener("click", pauseTimer)


// Funcion para reanudar el temporizador

function resumeTimer() {
    if (isPaused === true && remainingTime > 0) {

        document.getElementById('startBtn').style.display = 'none';
        document.getElementById('resumeBtn').style.display = 'none';

        startTime = Date.now()
        clearInterval(intervalID)

        timeoutID = setTimeout(() => {
            notificationSound.play()
        }, remainingTime);

        intervalID = setInterval(() => {
            // Primero, resta el tiempo
            remainingTime -= 1000;

            if (remainingTime > 0) {
                // Luego, formatea el tiempo restante y muéstralo
                TimerDisplay.textContent = formatTime(remainingTime);
            } else {
                // Asegúrate de que al llegar a 0 se muestre correctamente
                TimerDisplay.textContent = "</00:00:00>";
                clearInterval(intervalID);
            }
        }, 1000);
    }

    isPaused = false
}

const resumeBtn = document.getElementById("resumeBtn")
resumeBtn.addEventListener("click", resumeTimer)

// Funcion para dar formato al tiempo

function formatTime(ms) {
    // Calcula el total de segundos
    let totalSeconds = Math.floor(ms / 1000)

    // Calcula horas, minutos y segundos a partir del total
    let hours = Math.floor(totalSeconds / 3600)
    let minutes = Math.floor((totalSeconds % 3600) / 60)
    let seconds = totalSeconds % 60

    // Añade un cero a la izquierda si el número es menor que 10
    hours = String(hours).padStart(2, '0')
    minutes = String(minutes).padStart(2, '0')
    seconds = String(seconds).padStart(2, '0')

    // Retorna el formato final
    return `</${hours}:${minutes}:${seconds}>`
}

