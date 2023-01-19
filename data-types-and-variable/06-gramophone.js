function gramophone(bandName, albumName, songName) {

    let bandNameLength = bandName.length;
    let albumNameLength = albumName.length;
    let songNameLength = songName.length;

    let songDurationInSeconds = (bandNameLength * albumNameLength) * songNameLength / 2;

    let rotations = Math.ceil(songDurationInSeconds / 2.5);
    console.log(`The plate was rotated ${rotations} times.`);

}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');