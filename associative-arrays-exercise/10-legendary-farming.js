function legendaryFarming(stringInput) {

    let workInputArr = stringInput.split(' ');
    let junks = {};
    let legendaryMatts = {
        shards: 0,
        fragments: 0,
        motes: 0,
    };

    let isShadowmourne = false;
    let isValanyr = false;
    let isDragonwrath = false;
    let matHoldingArr = [];
    for (let i = 0; i < workInputArr.length; i += 2) {
        let quantity = workInputArr[i];
        let materialName = workInputArr[i + 1];
        matHoldingArr.push([quantity, materialName]);
    }

    for (const pair of matHoldingArr) {
        addQuantity(pair);
        if (isShadowmourne || isValanyr || isDragonwrath) {
            break;
        }
    }

    let legendaryItem = '';

    if (isShadowmourne) {
        legendaryItem = 'shards';
        console.log('Shadowmourne obtained!');
        legendaryMatts[legendaryItem] -= 250;
    } else if (isValanyr) {
        legendaryItem = 'fragments';
        console.log('Valanyr obtained!');
        legendaryMatts[legendaryItem] -= 250;
    } else if (isDragonwrath) {
        legendaryItem = 'motes';
        console.log('Dragonwrath obtained!');
        legendaryMatts[legendaryItem] -= 250;
    }

    let matts = Object.entries(legendaryMatts);
    let junkKeys = Object.keys(junks);
    sortAndPrintLegendaryMats(matts);
    sortPrintJunk(junkKeys);

    function sortAndPrintLegendaryMats(arr) {
        arr.sort(([m, q], [m1, q1]) => q1 - q || m.localeCompare(m1))
            .forEach(kvp => console.log(`${kvp[0]}: ${kvp[1]}`));
    }

    function sortPrintJunk(arr) {
        arr.sort((a, b) => a.localeCompare(b))
            .forEach(key => console.log(`${key}: ${junks[key]}`));
    }

    function addQuantity(arr) {
        let quantity = Number(arr[0]);
        let materialName = arr[1].toLowerCase();
        if (materialName === 'shards') {
            legendaryMatts.shards += quantity;
            if (legendaryMatts.shards >= 250) {
                isShadowmourne = true;
                return;
            }
        } else if (materialName === 'fragments') {
            legendaryMatts.fragments += quantity;
            if (legendaryMatts.fragments >= 250) {
                isValanyr = true;
                return;
            }
        } else if (materialName === 'motes') {
            legendaryMatts.motes += quantity;
            if (legendaryMatts.motes >= 250) {
                isDragonwrath = true;
                return;
            }
        } else {
            if (!junks.hasOwnProperty(materialName)) {
                junks[materialName] = 0;
            }
            junks[materialName] += quantity;
        }
    }
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
console.log('+++++++++++++++++++++++');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');