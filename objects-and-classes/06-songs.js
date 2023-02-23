function songs(input) {

    let workArr = [...input];

    let songsCount = workArr.shift();
    let command = workArr.pop();

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songsArr = [];
    for (let element of workArr) {
        let [type, name, time] = element.split('_');
        let newSong = new Song(type, name, time);
        songsArr.push(newSong);
        let values = Object.values(newSong);
        if (values[0] === command) {
            console.log(values[1]);
        } else if (command === 'all') {
            console.log(values[1]);
        }
    }

}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
]);
console.log('++++++++++++++++++++++');
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'
]);
console.log('+++++++++++++++++++++++++');
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'
]);