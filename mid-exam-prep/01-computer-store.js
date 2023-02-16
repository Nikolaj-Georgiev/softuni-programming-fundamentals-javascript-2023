function computerStore(array) {

    let workArr = [...array];

    let priceWithoutTax = 0;
    let taxes = 0;
    let totalPriceWithTaxes = 0;

    let command = workArr.shift();

    while (command !== 'special' && command !== 'regular') {
        if (workArr.length === 0) {
            break;
        }

        let price = Number(command);
        if (price < 0) {
            command = workArr.shift();
            console.log('Invalid price!');
            continue;
        }

        priceWithoutTax += price;
        command = workArr.shift();
    }

    taxes = priceWithoutTax * 0.2;
    totalPriceWithTaxes = priceWithoutTax + taxes;

    if (priceWithoutTax === 0) {
        return 'Invalid order!';
    } else {
        return `Congratulations you've just bought a new computer!\nPrice without taxes: ${priceWithoutTax.toFixed(2)}$\nTaxes: ${taxes.toFixed(2)}$\n-----------\nTotal price: ${(command === 'special')? (totalPriceWithTaxes * 0.9).toFixed(2) : totalPriceWithTaxes.toFixed(2)}$`
    }
}

console.log(computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
]));
console.log('++++++++++++++++++++++++++++++++++++');
console.log(computerStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
]));
console.log('++++++++++++++++++++++++++++++++++++');
console.log(computerStore([
    'regular'
]));