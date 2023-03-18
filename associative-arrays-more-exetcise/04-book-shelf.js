function bookShelf(input) {

    let workInputArr = [...input];
    let bookShelf = {};
    let iD;
    let genre;
    let author;
    let bookName;

    workInputArr.forEach(line => {
        if (line.includes(' -> ')) {
            [iD, genre] = line.split(' -> ');
            if (!bookShelf.hasOwnProperty(iD)) {
                bookShelf[iD] = {
                    [genre]: {}
                };
            }
        }

        if (line.includes(': ')) {
            bookName = line.split(': ')[0];
            let tokens = line.split(': ')[1];
            [author, genre] = tokens.split(', ');
            let isGenre = false;
            Object.keys(bookShelf).forEach(shelf => {
                if (genre in bookShelf[shelf]) {
                    isGenre = true;
                    iD = shelf;
                }
            });
            if (isGenre) {
                bookShelf[iD][genre][bookName] = author;
            }
        }
    });
    // Create an array of shelves and their book counts
    let shelfCounts = Object.keys(bookShelf).map(shelf => {
        let count = 0;
        Object.keys(bookShelf[shelf]).forEach(genre => {
            count += Object.keys(bookShelf[shelf][genre]).length;
        });
        return [shelf, count];
    });

    // Sort the array by book count in descending order
    shelfCounts.sort((a, b) => b[1] - a[1]);

    // Print out the bookshelf information
    shelfCounts.forEach(shelf => {
        let shelfId = shelf[0];
        let bookCount = shelf[1];
        let shelfGenres = Object.keys(bookShelf[shelfId]).sort();
        console.log(`${shelfId} ${shelfGenres[0]}: ${bookCount}`);
        shelfGenres.forEach(genre => {
            let books = Object.keys(bookShelf[shelfId][genre]).sort();
            books.forEach(book => {
                console.log(`--> ${book}: ${bookShelf[shelfId][genre][book]}`);
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