function daysOfWeek(dayAsNum) {

    let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (dayAsNum < 1 || dayAsNum > 7) {
        console.log("Invalid day!");
    } else {
        console.log(weekDays[dayAsNum - 1]);
    }

}

daysOfWeek(3);
daysOfWeek(6);
daysOfWeek(11);