function sumEvens(arr) {

    let filteredArr = arr.map(x => Number(x)).filter(x => x % 2 === 0).map(x => x = x + x);
    console.log(filteredArr);
    // let result = 0;
    // for (const el of filteredArr) {
    //     result += el
    // }
    // console.log(result);

}

sumEvens(['1', '2', '3', '4', '5', '6']);
sumEvens(['3', '5', '7', '9']);
sumEvens(['2', '4', '6', '8', '10']);