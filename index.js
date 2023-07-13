const test =document.getElementById("btn-tel")
const convert = document.getElementById("btn-el")
let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")

convert.addEventListener("click", function() {
    conLen()
    conVol()
    conMas()
})

function conLen() {
    let unitS = document.getElementById("input").value
    if (unitS > 0) {
        ans = unitS * 3.28084
        ansT = unitS / 3.28084
        length.textContent = `${unitS} meter(s) = ${ans.toFixed(3)} feet | ${unitS} feet/foot = ${ansT.toFixed(3)} meters`
    } else {
        length.textContent = "Error! Input must be a NUMBER and BIGGER then 0"
    }
        
}

function conVol(unit) {
    let unitS = document.getElementById("input").value
    if (unitS > 0 ) {
    ansT = unitS / 0.264172
    ans = unitS * 0.264172
    volume.textContent = `${unitS} liter(s) = ${ans.toFixed(3)} gallons | ${unitS} gallon(s) = ${ansT.toFixed(3)} liters`  
    } else {
        volume.textContent = "Error! Input must be a NUMBER and BIGGER then 0"
    }
}
function conMas(unit) {
    let unitS = document.getElementById("input").value
    if (unitS >0 ) {
        ans = unitS * 2.20462
        ansT = unitS / 2.20462    
        mass.textContent = `${unitS} kilo(s) = ${ans.toFixed(3)} pounds | ${unitS} pounds = ${ansT.toFixed(3)} kilos`
    } else {
        mass.textContent = "Error! Input must be a NUMBER and BIGGER then 0"
}
}