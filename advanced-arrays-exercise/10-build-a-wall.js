function buildAWall(array) {

    let workArr = [...array].map(Number);
    let end = 30;
    let start = Math.min.apply(Math, workArr);
    let resultDailyPesos = [];
    let totalPesos = 0;
    let counter = 0;

    for (let i = start; i < end; i++) {
        let tempArr = workArr.map(x => x + counter);
        workArr = tempArr.filter(x => x < 30);
        let dailyPesos = workArr.length * 195;
        totalPesos += dailyPesos;
        resultDailyPesos.push(dailyPesos);
        counter = 1;
    }

    let result = `${resultDailyPesos.join(', ')}\n${totalPesos * 1900} pesos`
    return result;
}

console.log(buildAWall([21, 25, 28]));
console.log(buildAWall([17]));
console.log(buildAWall([17, 22, 17, 19, 17]));