function arrayRotation(array, rotations) {

    for (let i = 0; i < rotations; i++) {
        let workArray = [];
        let element = array[0];
        for (let j = 1; j < array.length; j++) {
            workArray.push(array[j]);
        }
        workArray.push(element);
        array = workArray;
    }
    console.log(array.join(' '));
}


arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);