function blackFlag(array) {

    let plunderingDays = Number(array[0]);;
    let dailyPlunder = Number(array[1]);;
    let targetPlunder = Number(array[2]);;

    let totalPlunder = 0;

    for (let i = 1; i <= plunderingDays; i++) {
        if (i % 3 === 0) {
            totalPlunder += dailyPlunder * 1.5;
        } else {
            totalPlunder += dailyPlunder;
        }

        if (i % 5 === 0) {
            totalPlunder = totalPlunder * 0.7;
        }
    }

    if (totalPlunder >= targetPlunder) {
        return `Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`
    } else {
        return `Collected only ${((totalPlunder / targetPlunder) * 100).toFixed(2)}% of the plunder.`
    }


}

console.log(blackFlag(["5",
    "40",
    "100"
]));
console.log('+++++++++++++++++++++');
console.log(blackFlag(["10",
    "20",
    "380"
]));