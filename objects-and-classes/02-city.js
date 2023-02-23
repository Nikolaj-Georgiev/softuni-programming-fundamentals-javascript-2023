function city(cityObject) {

    // for (let el of Object.keys(cityObject)) {
    //     console.log(`${el} -> ${cityObject[el]}`);
    // }

    for (const [keys, values] of Object.entries(cityObject)) {
        console.log(`${keys} -> ${values}`);
    }

}

console.log(city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}));