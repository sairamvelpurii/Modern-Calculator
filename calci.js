
document.addEventListener('DOMContentLoaded', function () {
    const btn_1 = document.querySelector('#btn-1');
    const resetBtn = document.querySelector('.btn-2');
    const resultDisplay = document.querySelector('.result');

    btn_1.addEventListener('click', function () {
        const input1 = Number(document.querySelector('#input-11').value);
        const input2 = Number(document.querySelector('#input-22').value);
        const operator = document.querySelector('#operator-in').value.trim();

        let result;

     
        if (operator === '+') {
            result = input1 + input2;
        } else if (operator === '-') {
            result = input1 - input2;
        } else if (operator === '*') {
            result = input1 * input2;
        } else if (operator === '/') {
            result = input2 !== 0 ? input1 / input2 : "Cannot divide by zero";
        } else {
            result = "Invalid operator";
        }

        resultDisplay.textContent = `Result : ${result} ` ;
    });

    resetBtn.addEventListener('click', function () {
        document.querySelector('#input-11').value = '';
        document.querySelector('#input-22').value = '';
        document.querySelector('#operator-in').value = '';
        resultDisplay.textContent = '';
    });
});
