function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let totalRepairCosts = 0;

    for (let i = 1; i <= lostFightsCount; i++) {
        if (i % 2 === 0) {
            totalRepairCosts += helmetPrice;
        }
        if (i % 3 === 0) {
            totalRepairCosts += swordPrice;
        }
        if (i % 6 === 0) {
            totalRepairCosts += shieldPrice;
        }
        if (i % 12 === 0) {
            totalRepairCosts += armorPrice;
        }
    }

    console.log(`Gladiator expenses: ${totalRepairCosts.toFixed(2)} aureus`);
}

gladiatorExpenses(7,
    2,
    3,
    4,
    5
);
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
);