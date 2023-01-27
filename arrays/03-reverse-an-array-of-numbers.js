function reverse(n, arr) {

    let resultArr = arr.splice(0, n).reverse().join(' ');
    console.log(resultArr);

}

reverse(3, [10, 20, 30, 40, 50]);
reverse(4, [-1, 20, 99, 5]);
reverse(2, [66, 43, 75, 89, 47]);