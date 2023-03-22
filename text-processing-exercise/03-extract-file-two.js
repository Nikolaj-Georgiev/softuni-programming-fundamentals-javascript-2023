function extractFile(path) {

    let file = path.substring(path.lastIndexOf('\\') + 1);
    let fileName = file.substring(0, file.lastIndexOf('.'));
    let fileExtension = file.substring(file.lastIndexOf('.') + 1);
    let result = `File name: ${fileName}
File extension: ${fileExtension}`
    console.log(result);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
console.log('++++++++++++++++');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');