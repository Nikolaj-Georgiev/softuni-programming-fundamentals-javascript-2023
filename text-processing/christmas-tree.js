function solve(number) {

    let tree = '|';
    let padder = 2;
    let christmasTree = '';
    console.log(' '.repeat(number + 1) + '@');
    console.log(' '.repeat(number + 1) + '|');

    for (let i = 0; i <= number; i++) {
        tree = tree.padStart((padder + i), '*');
        tree = tree.padEnd((i + ++padder), '*');
        christmasTree = (' '.repeat(number - i)) + tree;
        console.log(christmasTree);
    }
}

solve(10);