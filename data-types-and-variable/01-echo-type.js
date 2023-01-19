function echo(parameter) {

    if (typeof parameter === 'number' || typeof parameter === 'string') {
        console.log(typeof parameter);
        console.log(parameter);
    } else {
        console.log(typeof parameter);
        console.log('Parameter is not suitable for printing');
    }

}

echo('Hello, JavaScript!');
echo(18);
echo(null);