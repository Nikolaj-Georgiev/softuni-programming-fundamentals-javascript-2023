function simpleCalculator(numberOne, numberTwo, operator) {

    console.log(operation(operator, numberOne, numberTwo));


    function operation(operator, a, b) {
        let result = 0;
        switch (operator) {
            case 'multiply':
                result = a * b;
                break;
            case 'divide':
                result = a / b;
                break;
            case 'add':
                result = a + b;
                break;
            case 'subtract':
                result = a - b;
                break;
        }

        return result;
    }
}

simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');