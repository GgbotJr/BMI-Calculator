const $ = document

const weightInput = $.getElementById("weight")
const weightSpan = $.getElementById("weight-val")
const heightInput = $.getElementById("height")
const heightSpan = $.getElementById("height-val")
const resultElem = $.getElementById("result")
const categoryElem = $.getElementById("category")

function weightChange () {

    let weightValue = weightInput.value

    let calculatorBMI = weightValue / ((heightInput.value / 100) ** 2)

    resultElem.innerHTML = calculatorBMI.toFixed(1)

    if (calculatorBMI < 18.5) {
        resultElem.style.color = "#dada3a"
        categoryElem.innerHTML = "under Weight"
    } else if (calculatorBMI >= 18.5 && calculatorBMI < 25) {
        resultElem.style.color = "#0be881"
        categoryElem.innerHTML = "Normal Weight"
    } else if (calculatorBMI >= 25 && calculatorBMI < 29.9) {
        resultElem.style.color = "#e89e0b"
        categoryElem.innerHTML = "Ower Weight"
    } else if (calculatorBMI > 29.9) {
        resultElem.style.color = "#cc2020"
        categoryElem.innerHTML = "Obese"
    }
    
    weightSpan.innerHTML = weightValue + " kg"
    
    // console.log(calculatorBMI)
}

function heightChange () {
    
    let heightValue = heightInput.value
    
    let calculatorBMI = weightInput.value / ((heightValue / 100) ** 2)
    
    resultElem.innerHTML = calculatorBMI.toFixed(1)
    
    if (calculatorBMI < 18.5) {
        resultElem.style.color = "#dada3a"
        categoryElem.innerHTML = "under Weight"
    } else if (calculatorBMI >= 18.5 && calculatorBMI < 25) {
        resultElem.style.color = "#0be881"
        categoryElem.innerHTML = "Normal Weight"
    } else if (calculatorBMI >= 25 && calculatorBMI < 29.9) {
        resultElem.style.color = "#e89e0b"
        categoryElem.innerHTML = "Ower Weight"
    } else if (calculatorBMI > 29.9) {
        resultElem.style.color = "#cc2020"
        categoryElem.innerHTML = "Obese"
    }
    
    heightSpan.innerHTML = heightValue + " cm"
    
    // console.log(calculatorBMI)
}

weightInput.addEventListener("input", weightChange)
heightInput.addEventListener("input", heightChange)