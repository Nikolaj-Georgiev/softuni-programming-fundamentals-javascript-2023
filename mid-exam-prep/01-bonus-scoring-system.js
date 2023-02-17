function bonusScoringSystem(input) {

    let workArr = [...input].map(Number);
    workArr.shift();
    let courseLectures = workArr.shift();
    let additionalBonus = workArr.shift();

    let maxAttendances = (!workArr.length) ? 0 : workArr.sort((a, b) => b - a).shift();

    let totalBonus = (courseLectures === 0) ? 0 : maxAttendances / courseLectures * (5 + additionalBonus);

    return `Max Bonus: ${Math.round(totalBonus)}.\nThe student has attended ${maxAttendances} lectures.`;

}
console.log(bonusScoringSystem([
    '1', '0', '0',
]));

console.log(bonusScoringSystem([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]));
console.log('+++++++++++++++++++++++');
console.log(bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]));