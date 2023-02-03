function orders(product, orderQuantity) {

    let water = 1.00;
    let coffee = 1.50;
    let coke = 1.40;
    let snacks = 2.00;

    let result = 0;

    switch (product) {
        case 'water':
            result = orderQuantity * water;
            break;
        case 'coffee':
            result = orderQuantity * coffee;
            break;
        case 'coke':
            result = orderQuantity * coke;
            break;
        case 'snacks':
            result = orderQuantity * snacks;
            break;
    }

    return result;
}

console.log(orders("water", 5));
console.log(orders("coffee", 2));