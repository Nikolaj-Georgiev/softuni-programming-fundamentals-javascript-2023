function matchFullName(stringOfNames) {

    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let result = stringOfNames.match(regex);
    console.log(result.join(' '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");