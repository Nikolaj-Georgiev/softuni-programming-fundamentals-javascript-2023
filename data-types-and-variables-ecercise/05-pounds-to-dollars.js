function poundsToDollars(pounds) {

    let exchangeRate = 1.31;
    let dollars = pounds * exchangeRate;
    console.log(dollars.toFixed(3));

}

poundsToDollars(80);
poundsToDollars(39);