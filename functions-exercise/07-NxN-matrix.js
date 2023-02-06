function NxNMatrix(number) {

    let result = '';

    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            if (j < (number - 1)) {
                result += number + ' ';
            } else {
                result += number;
            }
        }
        result += '\n';
    }

    return result;
}

NxNMatrix(3);
NxNMatrix(7);
NxNMatrix(2);