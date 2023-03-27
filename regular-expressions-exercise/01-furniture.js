function furniture(input) {

    let workArr = [...input];
    let pattern = /\B(?:>>)(?<item>[A-Z]*[a-z]*)(?:<<)(?<price>\d+\.?\d+)!(?<multiplier>\d+)\b/g
    let text = workArr.join(' ').split('Purchase').join(' ');
    let totalPrice = 0;
    let resultOfExec = pattern.exec(text);
    console.log('Bought furniture:');
    while (resultOfExec !== null) {
        console.log(resultOfExec.groups.item);
        totalPrice += (Number(resultOfExec.groups.price) * Number(resultOfExec.groups.multiplier));
        resultOfExec = pattern.exec(text);
    }

    console.log(`Total money spend: ${parseFloat((totalPrice + '')).toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
]);
console.log('+++++++++++++++++');
furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'
]);
console.log('+++++++++++++++++');
furniture(['>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase'
]);