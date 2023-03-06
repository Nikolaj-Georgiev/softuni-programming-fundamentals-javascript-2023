function personInfo(fName, lName, personAge) {

    let person = {
        firstName: fName,
        lastName: lName,
        age: personAge,
    }

    return person;

}

console.log(personInfo("Peter",
    "Pan",
    "20"
));

function secondPerson(firstName, lastName, age) {

    let person = {
        firstName,
        lastName,
        age,
    }

    return person;
}

secondPerson("Peter",
    "Pan",
    "20");

function thirdPerson(fName, lName, age) {

    let person = {
        'firstName': fName,
        'lastName': lName,
        'age': Number(age),
    }

    return person;
}

thirdPerson("Peter",
    "Pan",
    "20");

function forthPerson(firstName, lastName, age) {

    let person = {};

    person.firstName = firstName;
    person.lastName = lastName;
    person.age = Number(age);

    return person;
}

forthPerson("Peter",
    "Pan",
    "20");