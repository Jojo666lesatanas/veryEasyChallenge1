const counter = document.getElementById("counter")
const button = document.getElementById("button")
const audio = new Audio("assets/buttonSFX.mp3") 
let count = 0

function IncrementCounter() {
    count += 1
    audio.play().catch(error => console.error("Audio playback failed:", error))
    counter.textContent = JSON.stringify(count)
}

