function firstAndLastKNumber(input) {

    let kElement = input[0];
    let arrOfElements = input.slice(1);
    let firstKElements = arrOfElements.slice(0, kElement).join(' ');
    let lastKElements = arrOfElements.slice(-kElement).join(' ');

    return firstKElements + '\n' + lastKElements;
}

console.log(firstAndLastKNumber([2,
    7, 8, 9
]));
console.log(firstAndLastKNumber([3,
    6, 7, 8, 9
]));