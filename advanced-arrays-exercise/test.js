function test() {


    let arr = [1, 2, 3, 4, 5];

    let smallest = Math.min.apply(Math, arr);

    console.log(smallest);
}

test();