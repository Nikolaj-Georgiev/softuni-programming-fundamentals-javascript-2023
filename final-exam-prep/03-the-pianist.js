function thePianist(input) {
    function piecesCreator(pieceName, composer, key) {
        let piece = {
            pieceName,
            composer,
            key,

            changeKey(pieceName, newKey) {
                this.key = newKey;
                console.log(`Changed the key of ${pieceName} to ${newKey}!`);
            },

            removePiece(pieceName) {
                delete piecesCollection[this.pieceName];
                console.log(`Successfully removed ${pieceName}!`);
            },

            toPrint() {
                console.log(`${this.pieceName} -> Composer: ${this.composer}, Key: ${this.key}`);
            }
        }
        return piece
    }

    let piecesCollection = {};
    let [initialPieces, ...commandsArr] = input;
    for (let i = 0; i < initialPieces; i++) {
        let [pieceName, composer, key] = commandsArr[i].split('|');
        let piece = piecesCreator(pieceName, composer, key);
        piecesCollection[pieceName] = piece;
    }

    commandsArr = commandsArr.slice(initialPieces);
    for (const line of commandsArr) {
        let [command, ...tokens] = line.split('|');
        let flag = false;
        switch (command) {
            case 'Add':
                {
                    let [pieceName, composer, key] = tokens;
                    if (pieceName in piecesCollection) {
                        console.log(`${pieceName} is already in the collection!`);
                        break;
                    }
                    let piece = piecesCreator(pieceName, composer, key);
                    piecesCollection[pieceName] = piece;
                    console.log(`${pieceName} by ${composer} in ${key} added to the collection!`);
                }
                break;
            case 'Remove':
                {
                    let pieceName = tokens[0];
                    let piece = piecesCollection[pieceName];
                    if (!(pieceName in piecesCollection)) {
                        console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
                        break;
                    }
                    piece.removePiece(pieceName);
                }
                break;
            case 'ChangeKey':
                {
                    let [pieceName, newKey] = tokens;
                    let piece = piecesCollection[pieceName];
                    if (!(pieceName in piecesCollection)) {
                        console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
                        break;
                    }
                    piece.changeKey(pieceName, newKey);
                }
                break;
            case 'Stop':
                flag = true;
                break;

        }
        if (flag) {
            break;
        }


    }
    for (const key in piecesCollection) {
        let piece = piecesCollection[key];
        piece.toPrint();
    }

}

// thePianist([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'
// ]);
// console.log('++++++++++++++++++');
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);