function cards(input) {

    let workArr = [...input];
    let cardDeck = workArr.shift().split(', ');
    let commandsCount = Number(workArr.shift());

    for (let i = 1; i <= commandsCount; i++) {
        let currentCommand = workArr.shift().split(', ');
        let action = currentCommand[0];
        let token = currentCommand[1];
        let newCard = currentCommand[2];

        switch (action) {
            case 'Add':
                add(cardDeck, token);
                break;
            case 'Remove':
                remove(cardDeck, token);
                break;
            case 'Remove At':
                removeAt(cardDeck, token);
                break;
            case 'Insert':
                insert(cardDeck, token, newCard);
                break;
        }
    }

    function add(arr, card) {
        let index = arr.indexOf(card);
        if (index !== -1) {
            if (arr[index] === card) {
                console.log('Card is already in the deck');
            }
        } else {
            arr.push(card);
            console.log('Card successfully added');
        }
    }

    function remove(arr, card) {
        let index = arr.indexOf(card);
        if (index !== -1) {
            if (arr[index] === card) {
                arr.splice(index, 1);
                console.log('Card successfully removed');
            } else {
                console.log('Card not found');
            }
        } else {
            console.log('Card not found');
        }
    }

    function removeAt(arr, index) {
        let localIndex = Number(index);
        if (localIndex < 0 || localIndex >= arr.length) {
            console.log('Index out of range');
        } else {
            arr.splice(localIndex, 1);
            console.log('Card successfully removed');
        }

    }

    function insert(arr, index, card) {
        let localIndex = Number(index);

        if (localIndex < 0 || localIndex >= arr.length) {
            console.log('Index out of range');
        } else {
            if (arr[localIndex] === card) {
                console.log('Card is already added');
            } else {
                arr.splice(localIndex, 0, card);
                console.log('Card successfully added');
            }
        }
    }

    return cardDeck.join(', ')
}

console.log(cards(["Ace of Diamonds, Queen of Hearts, King of Clubs",
    "3",
    "Add, King of Diamonds",
    "Insert, 2, Jack of Spades",
    "Remove, Ace of Diamonds"
]));
console.log('++++++++++++++++++++++');
console.log(cards(["Two of Clubs, King of Spades, Five of Spades, Jack of Hearts",
    "2",
    "Add, Two of Clubs",
    "Remove, Five of Hearts"
]));
console.log('++++++++++++++++++++++++');
console.log(cards(["Jack of Spades, Ace of Clubs, Jack of Clubs",
    "2",
    "Insert, -1, Queen of Spades",
    "Remove At, 1"
]));