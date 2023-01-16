function pyramidBuilder(base, increment) {

    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let height = 0;
    let steps = 0;

    for (let i = base; i >= 1; i -= 2) {
        height += (1 * increment);
        steps++;
        if (i === 2 || i === 1) {
            gold = (i * i) * increment;
        } else {
            stone += (Math.pow((i - 2), 2) * increment);
            if (steps % 5 === 0) {
                lapisLazuli += ((i - 1) * 4) * increment
            } else {
                marble += ((i - 1) * 4) * increment;
            }
        }
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}

pyramidBuilder(23, 0.5);
console.log('-----------------');
pyramidBuilder(11, 0.75);
console.log('-----------------');
pyramidBuilder(12, 1);
console.log('-----------------');
pyramidBuilder(23, 0.5);
console.log('-----------------');
pyramidBuilder(100, 100);