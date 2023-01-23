function binaryToDecimal(binaryNumber) {

    let stringFromBinary = binaryNumber.toString();
    let test = parseInt(stringFromBinary, 2)
    console.log(test);

}

binaryToDecimal(00001001);
binaryToDecimal(11110000);