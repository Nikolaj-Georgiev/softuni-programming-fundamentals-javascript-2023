function bitcoin(array) {

    let goldGramPrice = 67.51;
    let bitcoinPrice = 11949.16;

    let bitcoins = 0;
    let firstDayOfPurchase = 0;
    let money = 0;
    let counter = 0;

    for (let i = 0; i < array.length; i++) {
        counter++
        let diggedGold = array[i];
        if (counter % 3 === 0) {
            diggedGold *= 0.7;
        }
        money += diggedGold * goldGramPrice;
        while (money >= bitcoinPrice) {
            bitcoins++;
            if (firstDayOfPurchase === 0) {
                firstDayOfPurchase = counter;
            }
            money -= bitcoinPrice;
        }
    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins !== 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDayOfPurchase}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

bitcoin([100, 200, 300]);
console.log('--------------');
bitcoin([50, 100]);
console.log('--------------');
bitcoin([3124.15, 504.212, 2511.124]);