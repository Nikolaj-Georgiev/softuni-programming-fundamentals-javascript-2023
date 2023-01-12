function languageChecker(countryString) {

    let language = '';

    switch (countryString) {
        case 'USA':
        case 'England':
            language = 'English';
            break;
        case 'Argentina':
        case 'Spain':
        case 'Mexico':
            language = 'Spanish';
            break;
        default:
            language = 'unknown';
            break;
    }
    console.log(language);

}

languageChecker('USA');
languageChecker('Argentina');
languageChecker('Germany');