function matchDates(input) {

    let stringOfDates = input[0];
    let pattern = /\b\d{2}([.\/-]+?)(?<month>[A-Z][a-z]{2})\1(?<year>\d{4})\b/g;
    let execResult = pattern.exec(stringOfDates);
    while (execResult !== null) {
        let day = execResult[0].split(execResult[1])[0];
        console.log(`Day: ${day}, Month: ${execResult.groups.month}, Year: ${execResult.groups.year}`);
        execResult = pattern.exec(stringOfDates);
    }
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);
console.log('++++++++++++++');
matchDates(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014']);

function matchDates1(input) {

    let stringOfDates = input[0];
    let pattern = /\b(?<day>\d{2})([.\/-]+?)(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    let execResult = pattern.exec(stringOfDates);
    while (execResult !== null) {
        console.log(`Day: ${execResult.groups.day}, Month: ${execResult.groups.month}, Year: ${execResult.groups.year}`);
        execResult = pattern.exec(stringOfDates);
    }
}

matchDates1(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);
console.log('++++++++++++++');
matchDates1(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014']);