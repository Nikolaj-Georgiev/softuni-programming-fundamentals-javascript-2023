function adAstra(input) {

    let pattern = /([#|])(?<foodType>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    let totalCalories = 0;
    let foodHolderArray = [];
    let match = pattern.exec(input);
    while (match !== null) {
        foodHolderArray.push({ food: match.groups.foodType, date: match.groups.date, calories: Number(match.groups.calories) });
        totalCalories += Number(match.groups.calories);
        match = pattern.exec(input);
    }
    console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);

    for (const food of foodHolderArray) {
        console.log(`Item: ${food.food}, Best before: ${food.date}, Nutrition: ${food.calories}`);
    }

}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
console.log('+++++++++++++++++++');
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
console.log('+++++++++++++++++++');
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);