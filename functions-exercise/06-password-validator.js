function passwordValidator(string) {

    let result = '';
    let isLength = (string.length >= 6 && string.length <= 10);
    let isLettersAndDigits = (string) => {
        let result = false;
        for (let i = 0; i < string.length; i++) {
            if ((string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) ||
                (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) ||
                (string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57)) {
                result = true;
            } else {
                result = false;
                break;
            }
        }

        return result;
    }
    let isAtLeastTwoDigits = (string) => {
        let result = false;
        let counter = 0;
        for (let i = 0; i < string.length; i++) {
            if ((string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57)) {
                counter++
            }
        }
        if (counter >= 2) {
            result = true;
        }

        return result;
    }

    if (!isLength) {
        result += 'Password must be between 6 and 10 characters\n';
    }

    if (!isLettersAndDigits(string)) {
        result += 'Password must consist only of letters and digits\n';
    }

    if (!isAtLeastTwoDigits(string)) {
        result += 'Password must have at least 2 digits\n';
    }

    if (isLength && isLettersAndDigits(string) && isAtLeastTwoDigits(string)) {
        result += 'Password is valid';
    }

    return result;
}

console.log(passwordValidator('logIn'));
console.log(passwordValidator('MyPass123'));
console.log(passwordValidator('Pa$s$s'));