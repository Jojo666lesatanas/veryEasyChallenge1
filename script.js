const counter = document.getElementById("counter")
const button = document.getElementById("button")

let count = 0

function IncrementCounter() {
    count += 1
    counter.textContent = JSON.stringify(count)
}

