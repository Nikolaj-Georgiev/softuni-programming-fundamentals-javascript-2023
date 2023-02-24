function movies(input) {
    let moviesInfo = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i].startsWith("addMovie")) {
            let movieName = input[i].substring(9);
            moviesInfo.push({ name: movieName });
        } else if (input[i].includes("directedBy")) {
            let [movieName, director] = input[i].split(" directedBy ");
            let movie = moviesInfo.find((m) => m.name === movieName);
            if (movie) {
                movie.director = director;
            }
        } else if (input[i].includes("onDate")) {
            let [movieName, date] = input[i].split(" onDate ");
            let movie = moviesInfo.find((m) => m.name === movieName);
            if (movie) {
                movie.date = date;
            }
        }
    }

    moviesInfo = moviesInfo.filter(
        (m) => m.name && m.director && m.date
    );

    for (let ob of moviesInfo) {
        console.log(JSON.stringify(ob));

    }

    // console.log(JSON.stringify(moviesInfo));
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);
console.log('+++++++++++++++++++++++');
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]);