function emojiDetector(input) {

    let coolEmojiArr = [];
    let emojiPattern = /(::|\*\*)([A-Z][a-z]{2,})\1/g;
    let coolPattern = /\d+?/g;
    let emojiArr = input[0].match(emojiPattern);
    let coolThreshold = input[0].match(coolPattern).reduce((a, c) => a * Number(c), 1);
    console.log(`Cool threshold: ${coolThreshold}`);
    if (emojiArr !== null) {
        emojiArr.forEach(emo => {
            let emoCoolness = emo.replace(new RegExp((/[*:]{2}/), 'g'), '').split('').map(x => x = x.charCodeAt(0)).reduce((a, c) => a + c, 0);
            if (emoCoolness >= coolThreshold) {
                coolEmojiArr.push(emo);
            }
        });
    }
    console.log(`${(emojiArr !== null)? emojiArr.length: 0} emojis found in the text. The cool ones are:`);
    if (coolEmojiArr.length > 0) {
        coolEmojiArr.map(x => console.log(`${x} `));
    }
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
console.log('+++++++++++++++++++');
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
console.log('++++++++++++++++');
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);
console.log('++++++++++++++++');
emojiDetector(['0']);