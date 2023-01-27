function equals(arr1, arr2) {

    let equality = true;
    let index = 0;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            continue;
        } else {
            index = i;
            equality = false;
            break;
        }
    }

    if (equality) {
        let sum = 0;
        for (const el of arr1) {
            sum += Number(el);
        }
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    }
}

equals(['10', '20', '30'], ['10', '20', '30']);
equals(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equals(['1'], ['10']);