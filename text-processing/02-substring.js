function substring(string, startIndex, count) {

    let result = string.substring(startIndex, startIndex + count);
    return result;
}

console.log(substring('ASentence', 1, 8));
console.log('+++++++++++++++++++');
console.log(substring('SkipWord', 4, 7));