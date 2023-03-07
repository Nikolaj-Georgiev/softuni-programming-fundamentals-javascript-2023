function oddOcc(string) {

    let holdingObject = {};

    string.toLowerCase().split(' ').forEach(string => {
        if (string in holdingObject) {
            holdingObject[string]++;
        } else {
            holdingObject[string] = 1;
        }
    });;

    let resultArr = [];
    resultArr = Object.entries(holdingObject)
        .filter(x => x[1] % 2 !== 0)
        .sort((a, b) => b[1] - a[1])
        .map(x => x.splice(0, 1));

    console.log(resultArr.join(' '));
}

oddOcc('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
console.log('++++++++++++++++++++++++++');
oddOcc('Cake IS SWEET is Soft CAKE sweet Food');