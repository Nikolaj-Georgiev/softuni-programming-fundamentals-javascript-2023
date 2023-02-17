function theLift(array) {

    let workArr = [...array];
    let peopleInQueue = Number(workArr.shift());
    let liftArr = workArr.shift().split(' ').map(Number);
    let isQueEmpty = false;

    for (let i = 0; i < liftArr.length; i++) {
        let el = liftArr[i];
        if (el < 4) {
            let addedPeople = 4 - el;
            if (peopleInQueue - addedPeople > 0) {
                el += addedPeople;
                liftArr[i] = el;
            } else {
                el += peopleInQueue;
                liftArr[i] = el;
                peopleInQueue = 0;
                isQueEmpty = true;

            }
            if (isQueEmpty) {
                break;
            }
            peopleInQueue -= addedPeople;
        }

    }

    if (peopleInQueue > 0) {
        return `There isn't enough space! ${peopleInQueue} people in a queue!\n${liftArr.join(' ')}
        `
    } else {
        let checker = liftArr.filter(x => x !== 4);
        if (checker.length) {
            return `The lift has empty spots!\n${liftArr.join(' ')}`
        } else {
            return liftArr.join(' ');
        }
    }
}

console.log(theLift([
    "16",
    "0 0 0 0"
]))
console.log(theLift([
    "20",
    "0 2 0"
]))