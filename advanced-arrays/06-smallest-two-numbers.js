function smallestTwoNumbers(input) {

    input.sort((one, two) => one - two);
    let result = input.slice(0, 2).join(' ');

    return result;
}

console.log(smallestTwoNumbers([30, 15, 50, 5]));
console.log(smallestTwoNumbers([3, 0, 10, 4, 7, 3]));