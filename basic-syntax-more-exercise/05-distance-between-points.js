function distanceAToB(x1, y1, x2, y2) {

    let sideA = Math.abs(x1 - x2);
    let sideB = Math.abs(y1 - y2);

    let hypotenuse = Math.sqrt((sideA ** 2) + (sideB ** 2));

    console.log(hypotenuse);

}

distanceAToB(2, 4, 5, 0);
distanceAToB(2.34, 15.66, -13.55, -2.9985);