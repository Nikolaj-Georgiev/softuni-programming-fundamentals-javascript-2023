function formatGrade(grade) {

    let gradeString = '';

    if (grade < 3.00) {
        gradeString = 'Fail';
    } else if (grade < 3.50) {
        gradeString = 'Poor';
    } else if (grade < 4.50) {
        gradeString = 'Good';
    } else if (grade < 5.50) {
        gradeString = 'Very good';
    } else if (grade <= 6.00) {
        gradeString = 'Excellent';
    }

    let formattedGrade = (grade < 3.00) ? '2' : grade.toFixed(2);

    let result = `${gradeString} (${formattedGrade})`;

    return result
}

console.log(formatGrade(3.33));
console.log(formatGrade(4.50));
console.log(formatGrade(2.99));