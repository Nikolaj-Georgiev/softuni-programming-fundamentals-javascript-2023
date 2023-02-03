function charactersInRange(charOne, charTwo) {

    let start = Math.min(charOne.charCodeAt(0), charTwo.charCodeAt(0));
    let end = Math.max(charOne.charCodeAt(0), charTwo.charCodeAt(0));

    let result = '';

    for (let i = start + 1; i < end; i++) {
        result += String.fromCharCode(i) + ' ';
    }

    return result;
}

console.log(charactersInRange('a', 'd'));
console.log(charactersInRange('#', ':'));
console.log(charactersInRange('C', '#'));