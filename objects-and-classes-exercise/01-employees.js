function employees(arrOfNames) {

    class Employee {
        constructor(name, number) {
            this.name = name;
            this.number = number;
        }

        print() {
            console.log(`Name: ${this.name} -- Personal Number: ${this.number}`);
        }
    }

    for (let element of arrOfNames) {
        let number = element.length;
        let newEmployee = new Employee(element, number);
        newEmployee.print();
    }

}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
console.log('++++++++++++++++++');
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);