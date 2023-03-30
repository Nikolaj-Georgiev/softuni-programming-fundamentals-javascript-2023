function destinationMapper(string) {
    let destinations = [];
    let travelPoints = 0;
    let pattern = /([\/=])[A-Z]+?[A-Za-z]{2,}\1/g;
    let match = pattern.exec(string);
    while (match !== null) {
        destinations.push(match[0].split(match[1]).join(''));
        travelPoints += destinations[destinations.length - 1].length;
        match = pattern.exec(string);
    }
    console.log(`Destinations: ${destinations.join(' ').split(' ').join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");