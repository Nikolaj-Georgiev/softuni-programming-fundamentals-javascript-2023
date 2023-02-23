function convertToJSON(name, lastName, hairColor) {

    let person = {
        name,
        lastName,
        hairColor,
    }

    let stringJSON = JSON.stringify(person);

    console.log(stringJSON);
}

convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');