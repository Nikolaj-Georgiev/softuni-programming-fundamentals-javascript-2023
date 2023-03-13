function partyTime(input) {

    let workArr = [...input];
    let indexOfParty = workArr.indexOf('PARTY');

    let guestListArr = workArr.slice(0, indexOfParty);
    let arrivedGuestsArr = workArr.slice(indexOfParty + 1);

    for (let el of arrivedGuestsArr) {
        if (guestListArr.includes(el)) {
            guestListArr.splice(guestListArr.indexOf(el), 1);
        }
    }

    console.log(guestListArr.length);
    let vipArr = guestListArr.filter(x => (!isNaN(x[0][0])));
    let regularArr = guestListArr.filter(x => isNaN(x[0][0]));
    guestListArr = vipArr.concat(regularArr).forEach(guest => console.log(guest));


}

partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);
console.log('++++++++++++++');
partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);