function login(input) {

    let user = input[0];
    let password = '';

    for (let i = user.length - 1; i >= 0; i--) {
        password += user[i];
    }

    let unsuccessfulTriesCounter = 0;

    for (let j = 1; j < input.length; j++) {
        if (password === input[j]) {
            console.log(`User ${user} logged in.`);
        } else {
            unsuccessfulTriesCounter++;
            if (unsuccessfulTriesCounter === 4) {
                console.log(`User ${user} blocked!`);
            } else {
                console.log("Incorrect password. Try again.");
            }
        }
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['momo', 'omom']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);

function loginNew(array) {

    let username = array.shift();
    let password = username.split('').reverse().join('');
    let mistakeCounter = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i].includes(password)) {
            console.log(`User ${username} logged in.`);
        } else {
            mistakeCounter++;
            if (mistakeCounter === 4) {
                console.log(`User ${username} blocked!`);
            } else {
                console.log("Incorrect password. Try again.");
            }
        }
    }
}

loginNew(['Acer', 'login', 'go', 'let me in', 'recA']);