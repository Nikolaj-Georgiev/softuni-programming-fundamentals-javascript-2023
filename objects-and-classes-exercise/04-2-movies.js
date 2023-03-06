function movies(list) {

    let movies = [];

    list.forEach(line => {
        if (line.includes('addMovie ')) {
            let name = line.split('addMovie ')[1];
            movies.push({ name });
        } else if (line.includes('directedBy')) {
            let [name, director] = line.split(' directedBy ');
            let movie = movies.find(el => el.name === name);

            if (movie) {
                movie.director = director;
            }
        } else if (line.includes('onDate')) {
            let [name, date] = line.split(' onDate ');
            let movie = movies.find(el => el.name === name);

            if (movie) {
                movie.date = date;
            }
        }
    });

    for (let obj of movies) {
        if (obj.name && obj.date && obj.director) {
            console.log(JSON.stringify(obj));
        }
    }
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

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]);