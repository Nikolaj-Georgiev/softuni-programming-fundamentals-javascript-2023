function carWash(input) {

    let cleanValue = 0;

    for (const el of input) {
        switch (el) {
            case 'soap':
                cleanValue = cleanValue + 10;
                break;
            case 'vacuum cleaner':
                cleanValue = cleanValue * 1.25;
                break;
            case 'mud':
                cleanValue = cleanValue * 0.9;
                break;
            case 'water':
                cleanValue = cleanValue * 1.2;
                break;
        }
    }

    result = `The car is ${cleanValue.toFixed(2)}% clean.`
    return result;
}

console.log(carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']));
console.log(carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]));