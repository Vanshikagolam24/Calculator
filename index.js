const buttonEl = document.querySelectorAll("button");

const  FieldEl = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
    buttonEl[i].addEventListener("click", () => {
        const buttonValue = buttonsEl[i].textContent;
        if (buttonValue === "C") {
            clearResult();
        } else if (buttonValue === "=") {
            calculateResult();
        } else {
            appendValue(buttonValue);
        }
    });
}

function clearResult() {
    inputField.value = "";
}

function calculateResult0() {
    inputFieldEl.value = eval(inputFieldEl.value);
}

function appendValue(buttonValue) {
    inputFieldEl.value += buttonValue;
    //inputFieldEl.value = inputFieldEl.value+buttonValue;
}