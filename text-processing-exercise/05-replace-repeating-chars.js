function replaceRepChars(input) {

    let result = input[0];
    for (let i = 1, len = input.length; i < len; i++) {
        if (input[i] !== input[i - 1]) {
            result += input[i];
        }
    }

    return result;
}

console.log(replaceRepChars('aaaaabbbbbcdddeeeedssaa'));