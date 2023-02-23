function cats(arrayOfCats) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = Number(age);
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    // let catsArr = [];
    for (let el of arrayOfCats) {
        let currentCat = el.split(' ');
        let newCat = new Cat(currentCat[0], currentCat[1]);
        newCat.meow();
        catsArr.push(newCat);
    }

    // console.table(catsArr);
    // for (const el of catsArr) {
    //     el.meow();

    // }
}

cats(['Mellow 2', 'Tom 5']);
console.log('++++++++++++++++++');
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);