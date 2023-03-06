function schoolRegister(input) {
    // Create an object to store grades and their respective students
    const grades = {};

    // Iterate through each student
    for (let i = 0; i < input.length; i++) {
        // Extract the grade, name, and score from the student's information
        const [name, grade, score] = input[i]
            .replace("Student name: ", "")
            .replace(", Grade: ", ",")
            .replace(", Graduated with an average score: ", ",")
            .split(",");

        // If the student's score is less than 3, skip them
        if (parseFloat(score) < 3) {
            continue;
        }

        // Add the student to their respective grade in the grades object
        if (grades.hasOwnProperty(grade)) {
            grades[grade].push(name);
        } else {
            grades[grade] = [name];
        }
    }

    // Sort the grades object keys in ascending order
    const sortedGrades = Object.keys(grades).sort((a, b) => a - b);

    // Iterate through each grade and print the grade's information
    for (let i = 0; i < sortedGrades.length; i++) {
        const grade = sortedGrades[i];
        const students = grades[grade];
        const averageScore =
            students.reduce((total, student) => {
                const studentInfo = input.find((info) =>
                    info.includes(`Student name: ${student}`)
                );
                const score = parseFloat(
                    studentInfo.replace(
                        "Student name: ",
                        ""
                    ).replace(", Grade: ", ",")
                    .replace(", Graduated with an average score: ", ",")
                    .split(",")[2]
                );
                return total + score;
            }, 0) / students.length;
        console.log(`${Number(grade) + 1} Grade`);
        console.log(`List of students: ${students.join(", ")}`);
        console.log(
            `Average annual score from last year: ${averageScore.toFixed(2)}`
        );
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