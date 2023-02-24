function storeProvision(storeProducts, orderedProducts) {

    let storeObj = {};

    for (let i = 0; i < storeProducts.length - 1; i += 2) {
        let currentKey = storeProducts[i];
        let currentValue = Number(storeProducts[i + 1]);
        storeObj[currentKey] = currentValue;
    }

    for (let i = 0; i < orderedProducts.length - 1; i += 2) {
        let currentKey = orderedProducts[i];
        let currentValue = Number(orderedProducts[i + 1]);
        if (currentKey in storeObj) {
            storeObj[currentKey] += currentValue;
        } else {
            storeObj[currentKey] = currentValue;
        }
    }

    for (let entries of Object.entries(storeObj)) {
        let [key, value] = entries;
        console.log(`${key} -> ${value}`);
    }

}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
], [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
]);
console.log('+++++++++++++++++++++++');
storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
], [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
]);

function storeProvisionTwo(arr1, arr2) {

    let arr1Length = arr1.length;
    let arr2Length = arr2.length;
    let storeObj = {};

    for (let i = 0; i < arr1Length - 1; i += 2) {
        for (let j = 0; j < arr2Length - 1; j += 2) {
            if (arr1[i] === arr2[j]) {
                arr2.splice(j, 1);
                let added = arr2.splice(j, 1);
                arr1[i + 1] = Number(arr1[i + 1]);
                arr1[i + 1] += Number(added);
            }
        }

    }

    fillingObj(storeObj, arr1);
    fillingObj(storeObj, arr2);

    return printingObj(storeObj);

    function fillingObj(obj, arr) {
        for (let i = 0; i < arr.length - 1; i += 2) {
            let currentKey = arr[i];
            let currentValue = Number(arr[i + 1]);
            obj[currentKey] = currentValue;
        }
    }

    function printingObj(obj) {
        for (let entries of Object.entries(obj)) {
            let [key, value] = [...entries];
            console.log(`${key} -> ${value}`);
        }
    }
}
storeProvisionTwo([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
], [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
]);
console.log('+++++++++++++++++++++++++');
storeProvisionTwo([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
], [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
]);