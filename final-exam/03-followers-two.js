function followers(input) {
    let followers = {};
    input.forEach(line => {
        let [command, name, count] = line.split(': ');
        switch (command) {
            case 'New follower':
                if (!followers.hasOwnProperty(name)) {
                    followers[name] = { likes: 0, comments: 0 };
                }
                break;
            case 'Like':
                if (!followers.hasOwnProperty(name)) {
                    followers[name] = { likes: Number(count), comments: 0 };
                    break;
                }
                followers[name].likes += Number(count);
                break;
            case 'Comment':
                if (!followers.hasOwnProperty(name)) {
                    followers[name] = { likes: 0, comments: 1 };
                    break;
                }
                followers[name].comments += 1;
                break;
            case 'Blocked':
                if (!followers.hasOwnProperty(name)) {
                    console.log(`${name} doesn't exist.`);
                    break;
                }
                delete followers[name];
                break;
            case 'Log out':
                break;
        }
    });
    let keys = Object.keys(followers);
    console.log(`${keys.length} followers`);
    keys.forEach(follower => {
        console.log(`${follower}: ${followers[follower].likes + followers[follower].comments}`);
    });
}

followers([
    "New follower: George",
    "Like: George: 5",
    "New follower: George",
    "Log out"
]);
console.log('++++++++++++');
followers([
    "Like: Katy: 3",
    "Comment: Katy",
    "New follower: Bob",
    "Blocked: Bob",
    "New follower: Amy",
    "Like: Amy: 4",
    "Log out"
]);
console.log("++++++++++++++++");
followers([
    "Blocked: Amy",
    "Comment: Amy",
    "New follower: Amy",
    "Like: Tom: 5",
    "Like: Ellie: 5",
    "Log out"
]);