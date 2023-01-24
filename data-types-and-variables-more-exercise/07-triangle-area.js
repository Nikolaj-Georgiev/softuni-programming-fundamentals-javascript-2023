function triangleArea(sideA, sideB, sideC) {
    let semiperimeter = (sideA + sideB + sideC) / 2;
    let area = Math.sqrt(semiperimeter * (semiperimeter - sideA) * (semiperimeter - sideB) * (semiperimeter - sideC));
    console.log(area);
}

triangleArea(2, 3.5, 4);
triangleArea(3, 5.5, 4);