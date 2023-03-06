function schoolRegister(students) {
    const grades = {};

    for (const student of students) {
        const [name, grade, score] = student.split(', ');
        const numericGrade = parseInt(grade.match(/\d+/)[0]);

        if (score.match(/([\d.]+)/)[0] >= 3) {
            if (!grades[numericGrade]) {
                grades[numericGrade] = {
                    students: [],
                    scores: [],
                };
            }

            grades[numericGrade].students.push(name.split(': ')[1]);
            grades[numericGrade].scores.push(parseFloat(score.match(/([\d.]+)/)[0]));
        }
    }

    const sortedGrades = Object.keys(grades).sort((a, b) => a - b);
    for (const grade of sortedGrades) {
        const gradeInfo = grades[grade];
        const averageScore = (gradeInfo.scores.reduce((acc, score) => acc + score, 0) / gradeInfo.scores.length).toFixed(2);

        console.log(`${parseInt(grade) + 1} Grade`);
        console.log(`List of students: ${gradeInfo.students.join(', ')}`);
        console.log(`Average annual score from last year: ${averageScore}`);
        console.log();
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