function companyEmployees(input) {

    let workInput = [...input];

    let companiesObj = {}

    workInput.forEach(line => {
        let [company, userId] = line.split(' -> ');
        if (!companiesObj.hasOwnProperty(company)) {
            companiesObj[company] = {};
        }
        companiesObj[company][userId] = true;
    });

    let sorted = Object.keys(companiesObj).sort((a, b) => a.localeCompare(b));

    sorted.forEach(key => {
        console.log(key);
        Object.keys(companiesObj[key]).map(el => console.log(`-- ${el}`));
    });
}

companyEmployees([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);
console.log('+++++++++++++++++++++');
companyEmployees([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);