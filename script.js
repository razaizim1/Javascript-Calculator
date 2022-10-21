const inputScreen = document.getElementById('screen');
const buttons = document.querySelectorAll('button');
let inputScreenValue = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;

        if (buttonText == 'x') {
            buttonText = '*';
            inputScreenValue += buttonText;
            inputScreen.value = inputScreenValue;
        } else if (buttonText == 'C') {
            inputScreenValue = '';
            inputScreen.value = inputScreenValue;
        } else if (buttonText == '=') {
            inputScreen.value = eval(inputScreenValue);
        } else {
            inputScreenValue += buttonText
            inputScreen.value = inputScreenValue;
        }
    })

}