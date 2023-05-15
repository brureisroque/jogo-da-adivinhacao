const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const randomnumber = Math.round(Math.random()*10)

let xAttemps = 1
// função callback
function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if (Number(inputNumber.value) == randomnumber) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

       screen2.querySelector("h2").innerText = `Você acertou em ${xAttemps} tentativas`
    }  

    inputNumber.value = ""
    xAttemps++
}
//Eventos
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function() {
    screen1.classList.remove("hide")
    screen2.classList.add("hide")  
    xAttemps = 1

})      