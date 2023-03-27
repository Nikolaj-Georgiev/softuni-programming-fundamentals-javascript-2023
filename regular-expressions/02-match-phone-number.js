function matchPhoneNumber(input) {

    let stringOfPhoneNumbers = input[0];
    let pattern = /(?:\+359)([ -]+)2\1\d{3}\1\d{4}\b/g;
    let result = [];
    let resultOfExec = pattern.exec(stringOfPhoneNumbers);
    while (resultOfExec !== null) {
        result.push(resultOfExec[0]);
        resultOfExec = pattern.exec(stringOfPhoneNumbers);
    }

    console.log(result.join(', '));
}

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])
matchPhoneNumber(['+359 2 357 3351 +359 2 22 2222 +359 2 173 3408 +359-2-789-2584 +359 2 193 3953 +359-2-961-0248 +359-2-789-2584 +359 2 222 222 +360 2 222 2222 +359 2 727 9740 +359-2-854-2280 +359 2 193 3953 +359 2 357 3351 +359 2 558 8560 +359 2 222 222'])
console.log('++++++++++++++++++');

function matchPhoneNumber1(input) {

    let stringOfPhoneNumbers = input[0];
    let pattern = /(?:\+359)([ -]+)2\1\d{3}\1\d{4}\b/g;
    let result = stringOfPhoneNumbers.match(pattern);

    console.log(result.join(', '));
}

matchPhoneNumber1(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])
matchPhoneNumber1(['+359 2 357 3351 +359 2 22 2222 +359 2 173 3408 +359-2-789-2584 +359 2 193 3953 +359-2-961-0248 +359-2-789-2584 +359 2 222 222 +360 2 222 2222 +359 2 727 9740 +359-2-854-2280 +359 2 193 3953 +359 2 357 3351 +359 2 558 8560 +359 2 222 222'])