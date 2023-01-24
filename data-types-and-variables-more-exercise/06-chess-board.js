function chessBoard(size) {

    let result = '<div class="chessboard">\n';

    for (let row = 0; row < size; row++) {
        result += ' <div>\n';
        for (let column = 0; column < size; column++) {
            if (row % 2 === 0) {
                if (column % 2 === 0) {
                    result += '\t<span class="black"></span>\n';
                } else {
                    result += '\t<span class="white"></span>\n';
                }
            } else {
                if (column % 2 !== 0) {
                    result += '\t<span class="black"></span>\n';
                } else {
                    result += '\t<span class="white"></span>\n';
                }
            }
        }

        result += ' </div>\n'
    }

    result += '</div>\n'
    console.log(result);

}

chessBoard(3);
console.log('---------------');
chessBoard(5);