function reverseInPlace(arr) {

    for (let i = 0; i < arr.length / 2; i++) {
        let firstElement = arr[i];
        let lastElement = arr[arr.length - 1 - i];
        arr[i] = lastElement;
        arr[arr.length - 1 - i] = firstElement;
    }

    console.log(arr.join(' '));

}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reverseInPlace(['33', '123', '0', 'dd']);