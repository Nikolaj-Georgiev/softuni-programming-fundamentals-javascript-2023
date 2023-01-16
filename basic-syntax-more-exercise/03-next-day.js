function nextDay(year, month, day) {

    let date = new Date(year, month - 1, day + 1);
    let newYear = date.getFullYear();
    let newMonth = date.getMonth();
    let newDay = date.getDate();
    console.log(`${newYear}-${newMonth + 1}-${newDay}`);
}

nextDay(2016, 9, 30);
nextDay(2020, 3, 24);