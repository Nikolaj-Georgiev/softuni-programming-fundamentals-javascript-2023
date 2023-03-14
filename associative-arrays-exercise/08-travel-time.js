function travelTime(input) {

    let travelInfo = {};

    input.forEach(line => {
        let [country, town, cost] = line.split(' > ');
        if (!(country in travelInfo)) {
            travelInfo[country] = {};
        }
        if (!(travelInfo[country][town])) {
            travelInfo[country][town] = Number.MAX_SAFE_INTEGER;
        }
        if (travelInfo[country][town] > (Number(cost))) {
            travelInfo[country][town] = Number(cost);
        }
    });

    Object.entries(travelInfo).sort((a, b) => a[0].localeCompare(b[0])).forEach(element => {
        let country = element[0];
        let resultArr = [];
        resultArr.push(`${country} ->`);
        Object.entries(travelInfo[country]).sort(([town, cost], [townB, costB]) => cost - costB).forEach(kvp => {
            let [town, cost] = kvp;
            resultArr.push(`${town} -> ${cost}`);
        });
        console.log(resultArr.join(' '));
    });
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);
console.log('++++++++++++++++');
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]);