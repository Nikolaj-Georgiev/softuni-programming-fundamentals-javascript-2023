let arr = ['abcd', 'abc'];
arr = arr.sort((a, b) => {
    // taking the shorter string to iterate
    let shorterString = a.length < b.length ? a : b;
    // iterating and checking by ASCII table character value
    for (let i = 0; i < shorterString.length; i++) {
        let aCode = a.charCodeAt(i);
        let bCode = b.charCodeAt(i);
        let res = aCode - bCode;
        if (res != 0) {
            return res;
        }
    }
    // if both strings are with equal chars, return the one with smaller length first
    return a.length - b.length;
});

console.log(arr);