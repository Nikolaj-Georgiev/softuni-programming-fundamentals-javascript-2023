function smallestOfThree(numOne, numTwo, numThree) {

    let result = 0;
    result = isSmallest(numOne, numTwo);
    result = isSmallest(result, numThree);

    return result;

    function isSmallest(a, b) {
        let result = (a < b) ? a : b;
        return result;
    }
}

smallestOfThree(2, 5, 3);
smallestOfThree(600, 342, 123);
smallestOfThree(25, 21, 4);
smallestOfThree(2, 2, 2);