function vacation(peopleCount, groupType, dayOfWeek) {

    let totalPrice = 0;

    switch (dayOfWeek) {
        case 'Friday':
            switch (groupType) {
                case 'Students':
                    totalPrice = peopleCount * 8.45;
                    if (peopleCount >= 30) {
                        totalPrice *= 0.85;
                    }
                    break;
                case 'Business':
                    totalPrice = peopleCount * 10.90;
                    if (peopleCount >= 100) {
                        totalPrice -= ((10 * peopleCount) * 10.90);
                    }
                    break;
                case 'Regular':
                    totalPrice = peopleCount * 15;
                    if (peopleCount >= 10 && peopleCount <= 20) {
                        totalPrice *= 0.95;
                    }
                    break;
            }
            break;
        case 'Saturday':
            switch (groupType) {
                case 'Students':
                    totalPrice = peopleCount * 9.80;
                    if (peopleCount >= 30) {
                        totalPrice = totalPrice * 0.85;
                    }
                    break;
                case 'Business':
                    totalPrice = peopleCount * 15.60;
                    if (peopleCount >= 100) {
                        totalPrice = (peopleCount - 10) * 15.60;
                    }
                    break;
                case 'Regular':
                    totalPrice = peopleCount * 20;
                    if (peopleCount >= 10 && peopleCount <= 20) {
                        totalPrice = (peopleCount * 20) * 0.95;
                    }
                    break;
            }
            break;
        case 'Sunday':
            switch (groupType) {
                case 'Students':
                    totalPrice = peopleCount * 10.46;
                    if (peopleCount >= 30) {
                        totalPrice *= 0.85;
                    }
                    break;
                case 'Business':
                    totalPrice = peopleCount * 16;
                    if (peopleCount >= 100) {
                        totalPrice -= ((peopleCount * 16) * 10);
                    }
                    break;
                case 'Regular':
                    totalPrice = peopleCount * 22.50;
                    if (peopleCount >= 10 && peopleCount <= 20) {
                        totalPrice *= 0.95;
                    }
                    break;
            }
            break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}

vacation(30,
    "Students",
    "Sunday"
);
vacation(40,
    "Regular",
    "Saturday"
);