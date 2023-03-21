function getGrades(array) {

    let nameMap = new Map();
    for (const innerArr of array) {
        let name = innerArr[0];
        let grade = Number(innerArr[1]);
        let subject = innerArr[2];
        if (!nameMap.has(name)) {
            nameMap.set(name, new Map);
        }

        nameMap.get(name).set(subject, grade);
    }

    for (const [name, innerMap] of nameMap) {
        let entries = innerMap.entries();
        let sortedEntries = [...entries].sort(([aSubject, aGrade], [bSubject, bGrade]) => aSubject.localeCompare(bSubject));
        for (const [subject, grade] of sortedEntries) {
            console.log(`${name} -> ${subject}: ${grade}`);
        }

    }

}

let inputHere = [
    ['Petar Peshev', '5.70', 'JS'],
    ['Petar Peshev', '5.50', 'C#'],
    ['Petar Peshev', '5.80', 'JS'],
    ['Ivan Ivanov', '6', 'JS'],
]

getGrades(inputHere)