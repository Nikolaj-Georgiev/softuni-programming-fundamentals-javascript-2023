function cone(radius, height) {

    let volume = (1 / 3) * Math.PI * (radius ** 2) * height;
    let totalArea = Math.PI * radius * (radius + Math.sqrt((radius ** 2) + (height ** 2)));
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalArea.toFixed(4)}`);

}

cone(3, 5);
cone(3.3, 7.8);