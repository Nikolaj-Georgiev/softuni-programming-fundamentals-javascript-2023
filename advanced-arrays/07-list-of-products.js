function listOfProducts(input) {

    let workArr = [...input];
    workArr.sort();

    for (let i = 0; i < workArr.length; i++) {
        workArr[i] = `${(i + 1)}.` + workArr[i];
    }

    return workArr.join('\n');
}

console.log(listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']));
console.log(listOfProducts(['Watermelon', 'Banana', 'Apples']));