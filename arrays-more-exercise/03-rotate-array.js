function rotateArrray(arr) {

    let workArr = arr.slice(0);
    let rotations = Number(workArr.pop());
    let index = 0;
    while (index < rotations) {
        let popedElement = workArr.pop();
        workArr.unshift(popedElement);
        index++;
    }

    console.log(workArr.join(' '));

}

rotateArrray(['1', '2', '3', '4', '2']);
rotateArrray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);