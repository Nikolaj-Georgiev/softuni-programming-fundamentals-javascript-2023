function comments(input) {

    let users = {};
    let articles = {};
    let comments = {};
    let workInputArr = [...input];

    workInputArr.forEach(line => {
        if (line.includes('user')) {
            addToUserOrArticle(line, users);
        } else if (line.includes('article')) {
            addToUserOrArticle(line, articles)
        } else if (line.includes('posts on')) {
            let [user, tokens] = line.split(' posts on ');
            if (user in users) {
                let [article, comment] = tokens.split(': ');
                let [commentName, commentContent] = comment.split(', ')
                if (article in articles) {
                    if (!comments.hasOwnProperty(article))
                        comments[article] = {};
                    if (!comments[article].hasOwnProperty(user)) {
                        comments[article][user] = {
                            [commentName]: commentContent
                        }
                    } else {
                        comments[article][user][commentName] = commentContent;
                    }
                };
            }
        }
    });

    Object.entries(comments)
        .sort(([name1, content1], [name2, content2]) => Object.keys(content2).length - Object.keys(content1).length)
        .forEach(token => {
            console.log('Comments on ' + token[0]);
            Object.keys(token[1])
                .sort((a, b) => a.localeCompare(b))
                .forEach(name => {
                    Object.entries(comments[token[0]][name])
                        .forEach(kvp => console.log(`--- From user ${name}: ${kvp[0]} - ${kvp[1]}`));
                });
        });

    function addToUserOrArticle(string, obj) {
        let userName = string.split(' ')[1];
        if (!(userName in obj)) {
            obj[userName] = {};
        }
    }
}

comments([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Books: sdfdsf, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
]);
console.log('++++++++++');
comments([
    'user Mark',
    'Mark posts on someArticle: NoTitle, stupidComment',
    'article Bobby',
    'article Steven',
    'user Liam',
    'user Henry',
    'Mark posts on Bobby: Is, I do really like them',
    'Mark posts on Steven: title, Run',
    'someUser posts on Movies: Like'
]);