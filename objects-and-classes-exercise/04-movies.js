function movies(input) {

    let matrixInput = [];
    let matrixObj = [];
    for (let el of input) {
        let newArr = el.split(' ');
        matrixInput.push(newArr);
    }

    for (let arr of matrixInput) {
        if (arr.includes('addMovie')) {
            let concat = arr.filter(x => x !== 'addMovie');
            let movieName = concat.join(' ');
            let localObj = { name: movieName };
            matrixObj.push(localObj);
        } else if (arr.includes('directedBy')) {
            let indexOfDirector = arr.indexOf('directedBy');
            let movieName = arr.slice(0, indexOfDirector).join(' ');
            let directorName = arr.slice(indexOfDirector + 1).join(' ');
            let exist = false;
            for (let obj of matrixObj) {
                let values = Object.values(obj);
                if (values[0] === movieName) {
                    obj['director'] = directorName;
                    exist = true;
                    break;
                }
            }

            if (exist) {
                continue;
            }

        } else if (arr.includes('onDate')) {
            let indexOfDate = arr.indexOf('onDate');
            let movieName = arr.slice(0, indexOfDate).join(' ');
            let dateOfShooting = arr.slice(indexOfDate + 1).join(' ');
            let exist = false;
            for (let obj of matrixObj) {
                let values = Object.values(obj);
                if (values[0] === movieName) {
                    obj['date'] = dateOfShooting;
                    exist = true;
                    break;
                }
            }

            if (exist) {
                continue;
            }

        }
    }

    matrixObj = matrixObj.filter(m => m.name && m.director && m.date);

    for (let ob of matrixObj) {
        console.log(JSON.stringify(ob));

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