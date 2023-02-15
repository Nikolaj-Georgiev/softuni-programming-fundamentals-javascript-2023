function guineaPig(arr) {

    let foodGr = Number(arr[0]) * 1000;
    let hayGr = Number(arr[1]) * 1000;
    let coverGr = Number(arr[2]) * 1000;
    let pigGr = Number(arr[3]) * 1000;
    let flag = false;

    for (let i = 1; i <= 30; i++) {
        foodGr -= 300;
        if (i % 2 === 0) {
            hayGr -= (foodGr * 0.05);
        }

        if (i % 3 === 0) {
            coverGr -= (pigGr / 3);
        }

        if (foodGr <= 0 || hayGr <= 0 || coverGr <= 0) {
            flag = true;
        }

        if (flag) {
            break;
        }
    }

    if (flag) {
        return 'Merry must go to the pet store!';
    } else {
        return `Everything is fine! Puppy is happy! Food: ${(foodGr / 1000).toFixed(2)}, Hay: ${(hayGr / 1000).toFixed(2)}, Cover: ${(coverGr / 1000).toFixed(2)}.`
    }
}

console.log(guineaPig(["10",
    "5",
    "5.2",
    "1"
]));
console.log('+++++++++++++++++++++++++++++');
console.log(guineaPig(["1",
    "1.5",
    "3",
    "1.5"
]));
console.log('+++++++++++++++++++++++++++++');
console.log(guineaPig(["9",
    "5",
    "5.2",
    "1"
]));