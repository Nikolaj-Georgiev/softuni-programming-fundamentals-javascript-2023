function bookShelf(input) {

    let bookShelf = {};

    input.forEach(line => {
        if (line.includes(' -> ')) {
            let [iD, genre] = line.split(' -> ');
            if (!bookShelf.hasOwnProperty(iD)) {
                bookShelf[iD] = {
                    [genre]: []
                };
            }
        } else {
            let [bookName, genre] = line.split(", ")
            for (let key in bookShelf) {
                if (bookShelf[key].hasOwnProperty(genre)) {
                    bookShelf[key][genre].push(bookName)
                    break;
                }
            }

        }

    })
    Object.keys(bookShelf).sort((a, b) => Object.entries(bookShelf[b])[0][1].length - Object.entries(bookShelf[a])[0][1].length)
        .forEach(id => {
            console.log(`${id} ${Object.keys(bookShelf[id])}: ${Object.values(bookShelf[id])[0].length}`);
            Object.values(bookShelf[id]).forEach(values => {
                values.sort((a, b) => a.localeCompare(b)).forEach(v => {
                    console.log(`--> ${v}`);
                });
            });
        });
}

bookShelf([
    '1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'
]);
console.log('++++++++++++++++');
bookShelf([
    '1 -> mystery', '2 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Lions and Rats: Gabe Roads, history',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi'
]);