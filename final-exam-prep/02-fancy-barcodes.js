function fancyBarcodes(input) {

    let [, ...barcodes] = input;
    barcodes.forEach(barcode => {
        let pattern = /@#+[A-Z]+?[A-Za-z0-9]{4,}[A-Z]+@#+/g;
        let match = barcode.match(pattern);
        if (match === null) {
            console.log("Invalid barcode");
        } else {
            let barc = [...match][0];
            let productGroup = barc.match(/\d+/g);
            if (productGroup === null) {
                console.log('Product group: 00');
            } else {
                console.log(`Product group: ${productGroup.join('')}`);
            }

        }
    });
}

fancyBarcodes([
    "3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"
]);
console.log('++++++++++++');
fancyBarcodes([
    "6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"
]);