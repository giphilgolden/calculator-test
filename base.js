let NumberOne = document.querySelector("#Number-One")
let NumberTwo = document.querySelector("#Number-Two")
let Operation = document.querySelector("#Operation")
let Result = document.querySelector("#Result")
let AddButton = document.querySelector("#Add")
let SubractButton = document.querySelector("#Subtract")
let MultiplyButton = document.querySelector("#Multiply")
let DivideButton = document.querySelector("#Divide")
let ResetButton = document.querySelector("#Reset")
let ResultWords = document.querySelector("#Result-Words")

AddButton.addEventListener("click", function() {
    Result.innerHTML = (Number(NumberOne.value) + Number(NumberTwo.value))
    ResultWords.innerHTML = (Number(NumberOne.value) + " Plus " + Number(NumberTwo.value) + " Equals " + Result.innerHTML)
    Operation.innerHTML = "+"
})

SubractButton.addEventListener("click", function() {
    Result.innerHTML = (Number(NumberOne.value) - Number(NumberTwo.value))
    ResultWords.innerHTML = (Number(NumberOne.value) + " Subract " + Number(NumberTwo.value) + " Equals " + Result.innerHTML)
    Operation.innerHTML = "-"
})

MultiplyButton.addEventListener("click", function() {
    Result.innerHTML = Number(NumberOne.value) * Number(NumberTwo.value)
    ResultWords.innerHTML = (Number(NumberOne.value) + " Multiply " + Number(NumberTwo.value) + " Equals " + Result.innerHTML)
    Operation.innerHTML = "*"
})

DivideButton.addEventListener("click", function() {
    Result.innerHTML = Number(NumberOne.value) / Number(NumberTwo.value)
    ResultWords.innerHTML = (Number(NumberOne.value) + " Divide " + Number(NumberTwo.value) + " Equals " + Result.innerHTML)
    Operation.innerHTML = "/"
})

ResetButton.addEventListener("click", function() {
    NumberOne.value = ""
    NumberTwo.value = ""
    Result.innerHTML = 0
    ResultWords.innerHTML = "0 Plus 0 Equals 0"
    Operation.innerHTML = "+"
})