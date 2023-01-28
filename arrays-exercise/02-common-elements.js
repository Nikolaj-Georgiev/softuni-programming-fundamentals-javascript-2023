function commonElements(firstArray, secondArray) {

    for (let el of firstArray) {
        for (const iterator of secondArray) {
            if (el === iterator) {
                console.log(iterator);
            }
        }
    }


}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
console.log('---------------------------------------------');
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);