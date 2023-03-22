function extractFile(text) {

    let workArr = (text.split('\\'));
    let neededText = workArr[workArr.length - 1];
    workArr = neededText.split('.');

    if (workArr.length > 2) {
        console.log(`File name: ${workArr[0] + '.' + workArr[1]}`);
    } else {
        console.log((`File name: ${workArr[0]}`));
    }

    console.log(`File extension: ${workArr[workArr.length - 1]}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
console.log('++++++++++++++++');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');