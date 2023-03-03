function schoolRegister(input) {

    let workArr = [];
    let studentsArr = [];

    input.forEach(element => {
        workArr.push(element.split(', '));
    });

    for (let i = 0; i < workArr.length; i++) {
        let localObj = {};

        let nameArr = workArr[i][0].split(': ');
        localObj.name = nameArr[1];

        let gradeArr = workArr[i][1].split(': ');
        localObj.grade = Number(gradeArr[1]);

        let averageArr = workArr[i][2].split(': ');
        localObj.score = Number(averageArr[1]);

        studentsArr.push(localObj)

    }

    let keys = [];

    studentsArr.forEach(element => {
        let keysLocale = Object.keys(element);
        keys.push(keysLocale);
    });
    let sortedArr = studentsArr.filter(a => a['score'] > 3).sort((a, b) => a.grade - b.grade);
    let firstGrade = sortedArr[0]['grade'];

    // let listOfNewGrades = [];
    let listOfStudents = [];
    let list = [];
    let flag = false;


    for (obj of sortedArr) {

        let grade = obj.grade;

        if (grade === firstGrade) {
            if (flag) {
                continue;
            }
            grade++;
            let newListOfStudents = {};
            newListOfStudents[grade] = 'Grade';
            listOfStudents = sortedArr.filter(x => x.grade === firstGrade);
            let localArr = [];
            let averageScore = 0;
            listOfStudents.forEach(el => {
                localArr.push(el.name);
                averageScore += el.score;
            });
            averageScore /= listOfStudents.length;
            newListOfStudents.students = localArr.join(', ');
            newListOfStudents.average = averageScore.toFixed(2);
            list.push(newListOfStudents);
            flag = true;
        } else {
            firstGrade = grade;
            let newListOfStudents = {};
            grade++;
            newListOfStudents[grade] = 'Grade';
            listOfStudents = sortedArr.filter(x => x.grade === firstGrade);
            let localArr = [];
            let averageScore = 0;
            listOfStudents.forEach(el => {
                localArr.push(el.name);
                averageScore += el.score;
            });
            averageScore /= listOfStudents.length;
            newListOfStudents.students = localArr.join(', ');
            newListOfStudents.average = averageScore.toFixed(2);
            list.push(newListOfStudents);
        }
    }

    for (let obj of list) {
        let [key1, key2, key3] = Object.keys(obj);
        let [value1, value2, value3] = Object.values(obj);

        console.log(`${key1} Grade\nList of students: ${value2}\nAverage annual score from last year: ${value3}\n`)
    }


}

schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]);