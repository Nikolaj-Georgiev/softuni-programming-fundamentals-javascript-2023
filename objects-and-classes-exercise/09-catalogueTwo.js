function catalogue(input) {

    let catalogueObj = {};

    input.forEach(element => {
        let [key, value] = element.split(' : ');
        catalogueObj[key] = Number(value);
    });

    let sortedKeys = Object.keys(catalogueObj).sort((a, b) => a.localeCompare(b));
    let startLetter = '';
    let result = '';
    sortedKeys.forEach(key => {
        let firstLetter = key.substring(0,1);
        if(startLetter !== firstLetter) {
            startLetter = firstLetter;
            result += `${startLetter}\n`;
        } 
           result += `  ${key}: ${catalogueObj[key]}\n`;
    });

    return result;
}

console.log(catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]));