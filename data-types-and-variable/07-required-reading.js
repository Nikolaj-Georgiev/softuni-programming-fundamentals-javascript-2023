function requiredReading(pagesOfTheBook, pagesPerHour, daysToReadTheBook) {

    let hourToReadPerDay = (pagesOfTheBook / pagesPerHour) / daysToReadTheBook;
    console.log(hourToReadPerDay);
}

requiredReading(212, 20, 2);
requiredReading(432, 15, 4);