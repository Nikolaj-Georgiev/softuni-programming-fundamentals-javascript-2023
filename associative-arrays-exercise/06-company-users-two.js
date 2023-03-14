function companyEmployees(arr) {
    const companyData = new Map();

    for (const entry of arr) {
        const [companyName, employeeId] = entry.split(' -> ');

        if (!companyData.has(companyName)) {
            companyData.set(companyName, new Set());
        }

        companyData.get(companyName).add(employeeId);
    }

    const sortedCompanies = Array.from(companyData.keys()).sort();

    for (const company of sortedCompanies) {
        console.log(company);
        const employees = Array.from(companyData.get(company));
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