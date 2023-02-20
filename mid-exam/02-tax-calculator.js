function taxCalculator(input) {

    let workArr = [...input];
    let carsArr = workArr.shift().split('>>');
    let totalTaxes = 0;
    let familyArr = [50, 5, 12, 3000];
    let heavyDutyArr = [80, 8, 14, 9000];
    let sportsArr = [100, 9, 18, 2000];

    for (let el of carsArr) {
        currentCar = el.split(' ');
        let car = currentCar[0];
        let years = Number(currentCar[1]);
        let kilometers = Number(currentCar[2]);

        switch (car) {
            case 'family':
                totalTaxes += taxation(car, years, kilometers, familyArr);
                break;
            case 'heavyDuty':
                totalTaxes += taxation(car, years, kilometers, heavyDutyArr);
                break;
            case 'sports':
                totalTaxes += taxation(car, years, kilometers, sportsArr);
                break;
            default:
                console.log('Invalid car type.');
                break;
        }
    }

    return `The National Revenue Agency will collect ${totalTaxes} euros in taxes.`;

    function taxation(car, years, kilometers, carArr) {
        let localTax = 0
        localTax += carArr[0];
        let decliner = carArr[1] * years;
        let incrementor = Math.floor(kilometers / carArr[3]) * carArr[2];
        localTax -= decliner;
        localTax += incrementor;
        console.log(`A ${car} car will pay ${localTax.toFixed(2)} euros in taxes.`);
        return localTax;

    }
}

console.log(taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']));
console.log('++++++++++++++++++++');
console.log(taxCalculator(['family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012']));