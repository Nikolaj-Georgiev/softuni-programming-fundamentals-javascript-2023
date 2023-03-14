function companyEmployees(arr) {
    const companyData = {};

    for (const entry of arr) {
        const [companyName, employeeId] = entry.split(' -> ');

        if (!companyData.hasOwnProperty(companyName)) {
            companyData[companyName] = {};
        }

        if (!companyData[companyName].hasOwnProperty(employeeId)) {
            companyData[companyName][employeeId] = true;
        }
    }

    const sortedCompanies = Object.keys(companyData).sort();

    for (const company of sortedCompanies) {
        console.log(company);
        const employees = Object.keys(companyData[company]);
        for (const employee of employees) {
            console.log(`-- ${employee}`);
        }
    }
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