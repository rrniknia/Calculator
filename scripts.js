const calcButtons = document.querySelectorAll('.calcButton');
    const divCalc = document.querySelector('#divCalc');
    const children = [].slice.call(divCalc.children);
    const divCurrentOperand = document.querySelector('#current-operand')
    const divPreviousOperand = document.querySelector('#previous-operand')
    const equalsButton = document.querySelector('.equalsButton')
    const operatorButtons = document.querySelectorAll('.operatorButton')
    const numButtons = document.querySelectorAll('.numButton')
    const clearButton = document.querySelector('.clearButton')

    let currentOperand = '';
    let previousOperand;
    let operator;
    let justOperated = false;

    function updateDivCurrentOperand() {
        divCurrentOperand.textContent = currentOperand;
    }
    function clearCurrentOperand() {  //change currentOperand to '', then updateDivCurrentOperand
        currentOperand = '';
        updateDivCurrentOperand();
    }
    function updateDivPreviousOperand() {
        divPreviousOperand.textContent = previousOperand + ' ' + operator;
    }
    function clearPreviousOperand() {  //change previousOperand to '', then updateDivPreviousOperand
        previousOperand = '';
        updateDivPreviousOperand();
    }

    function allClear() {
        operator = '';
        clearCurrentOperand();
        clearPreviousOperand();
    }

    function performOperation() {
        if (!currentOperand) { //if there is no currentOperand entered, set it to 0 to avoid a NaN output
            currentOperand = 0;
        }
        switch(operator) {
            case '+':
                currentOperand = parseInt(previousOperand) + parseInt(currentOperand);
                break;
            case '-':
                currentOperand = parseInt(previousOperand) - parseInt(currentOperand);
                break;
            case '*':
                currentOperand = parseInt(previousOperand) * parseInt(currentOperand);
                break;
            case '/':
                if (currentOperand == 0) {
                    currentOperand = 'No dividing by 0 - Nice try!';
                }
                else currentOperand = parseInt(previousOperand) / parseInt(currentOperand);
                break;
        }
        justOperated = true;
    }

    operatorButtons.forEach(button => { //add functionality to operator buttons
        button.addEventListener('mousedown', () => {
            if (justOperated == false) {
                if (currentOperand && previousOperand) {
                    performOperation();
                }
                operator = button.textContent;
                previousOperand = currentOperand;
                updateDivPreviousOperand();
                clearCurrentOperand();
                }
            justOperated = true; //make it so that you can't press an operator button twice without entering a new operand
        });
    });
    
    equalsButton.addEventListener('mousedown', () => {  //add equals button functionality 
        performOperation();
        //reset operator, clear divPreviousOperand and update divCurrentOperand with new value, set justOperated to true
        operator = ''; 
        clearPreviousOperand();
        updateDivCurrentOperand();
        justOperated = false;
    }); 

    clearButton.addEventListener('mousedown', allClear);  //AC Button functionality
    
    numButtons.forEach(button => { //each number button will append its text content to currentOperand
        button.addEventListener('mousedown', () => {
            if (justOperated == true) { //if an operation has just been made, pressing a number button will cause the currentOperand to clear
                clearCurrentOperand();
                justOperated = false;
            }
            if (currentOperand.length < 10) {
                currentOperand = currentOperand + button.textContent;
                updateDivCurrentOperand();
            }
        });
    });
    
    calcButtons.forEach(button => { //adds responsive styling to all calculator buttons
        button.addEventListener('mousedown', () => {
            button.classList.add('pressed-down');
        });
        button.addEventListener('mouseup', () => {
            button.classList.remove('pressed-down');
        });
        button.addEventListener('mouseenter', () => {
            button.classList.add('moused-over');
        });
        button.addEventListener('mouseleave', () => {
            button.classList.remove('pressed-down');
            button.classList.remove('moused-over');
        });
    });
    
    children.forEach(div => { //makes text inside of calculator divs unselectable
        div.classList.add('unselectable');
    })