function softUniReception(input) {

    let workArr = [...input];
    let workers = workArr.slice(0, 3);
    workers = workers.map(x => parseInt(x)).reduce((acc, curr) => acc + curr, 0);
    let students = Number(workArr[3])
    let hoursCount = 1;

    while (students > 0) {
        if (hoursCount % 4 === 0) {
            hoursCount++;
            continue;
        }
        students -= workers;
        if (students <= 0) {
            break;
        }
        hoursCount++;
    }

    return (workArr[3] === '0') ? `Time needed: ${0}h.` : `Time needed: ${hoursCount}h.`

}

console.log(softUniReception(['5', '6', '4', '0']));
console.log(softUniReception(['1', '2', '3', '45']));
console.log(softUniReception(['3', '2', '5', '40']));