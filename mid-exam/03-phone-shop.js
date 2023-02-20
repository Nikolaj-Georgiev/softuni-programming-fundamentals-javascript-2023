function phoneShop(input) {

    let workArr = [...input];

    let phonesList = workArr.shift().split(', ');
    let command = workArr.shift();

    while (command !== 'End') {
        let currentLine = command.split(' - ');
        let action = currentLine[0];
        let phone = currentLine[1];

        switch (action) {
            case 'Add':
                add(phonesList, phone);
                break;
            case 'Remove':
                remove(phonesList, phone);
                break;
            case 'Bonus phone':
                bonusPhone(phonesList, phone);
                break;
            case 'Last':
                last(phonesList, phone);
                break;
        }

        command = workArr.shift();
    }

    return phonesList.join(', ')

    function add(arr, phone) {
        if (arr.indexOf(phone) === -1) {
            arr.push(phone);
        }
    }

    function remove(arr, phone) {
        let index = arr.indexOf(phone);
        if (index !== -1) {
            arr.splice(index, 1);
        }
    }

    function bonusPhone(arr, phone) {
        let phones = phone.split(':');
        let oldPhone = phones[0];
        let newPhone = phones[1];
        let index = arr.indexOf(oldPhone);
        if (index !== -1) {
            arr.splice(index + 1, 0, newPhone);
        }
    }

    function last(arr, phone) {
        let index = arr.indexOf(phone);
        if (index !== -1) {
            arr.splice(index, 1);
            arr.push(phone);
        }
    }
}

console.log(phoneShop(["SamsungA50, MotorolaG5, IphoneSE",
    "Add - Iphone10",
    "Remove - IphoneSE",
    "End"
]));
console.log('+++++++++++++++');
console.log(phoneShop(["HuaweiP20, XiaomiNote",
    "Remove - Samsung",
    "Bonus phone - XiaomiNote:Iphone5",
    "End"
]));
console.log('+++++++++++++++++');
console.log(phoneShop(["SamsungA50, MotorolaG5, HuaweiP10",
    "Last - SamsungA50",
    "Add - MotorolaG5",
    "End"
]));