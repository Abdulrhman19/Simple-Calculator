const keys = document.querySelector(".calc-keys")
const display = document.getElementById("display")

const calculate = async (displayContnet) => {
    try {
        display.value = eval(displayContnet)
    } catch (error) {
        if(error instanceof SyntaxError) {
            display.value += ' invalid'
            display.style.color = "tomato"
            // Wait here for one second
            await new Promise(resolve =>  setTimeout(resolve, 1500))
            display.style.color = "#fff"
            clearDisplay()
        }
    }
}

const clearDisplay = () => {
    display.value = ""
}

keys.addEventListener('click', (event) => {
    let target = event.target
    if(!target.matches('button')){return false}

    // display.value[display.value.length-1] === '=' ? calculate(display.value) : ""
    // display.value[display.value.length-1] === 'c' ? clearDisplay() : ""
    
    if(target.classList.contains('equal')) {
        calculate(display.value)
    } else if(target.classList.contains('all-clear')) {
        clearDisplay()
    } else {
        display.value += target.value
    }
}) 