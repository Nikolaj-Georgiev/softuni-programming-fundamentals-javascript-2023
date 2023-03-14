function schoolGrades(input) {

    let students = {};

    for (let line of input) {
        let tokens = line.split(' ');
        let student = tokens.shift();
        let grades = tokens.map(Number);
        if (student in students) {
            grades.map(x => students[student].push(x));
        } else {
            students[student] = grades;
        }
    }

    let sorted = Object.keys(students).sort((a, b) => a.localeCompare(b));

    for (let key of sorted) {
        console.log(`${key}: ${((students[key].reduce((a, c) => a + c, 0))/students[key].length).toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);
console.log('++++++++++++++++++');
schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3'
]);