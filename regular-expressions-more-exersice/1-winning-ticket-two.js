function winningTicket(text) {

    let tickets = text.split(',').map(ticket => ticket.trim());
    for (const ticket of tickets) {
        let ticketLength = ticket.length;
        if (ticketLength !== 20) {
            console.log('invalid ticket');
            continue;
        }

        let pattern = /([#$@^])\1{5,}.*?/g;
        let firstPartTicket = ticket.substring(0, ticketLength / 2);
        let secondPartTicket = ticket.substring(ticketLength / 2);
        let match1 = pattern.exec(firstPartTicket);
        pattern = /([#$@^])\1{5,}.*?/g;
        let match2 = pattern.exec(secondPartTicket);
        if (match1 === null || match2 === null) {
            console.log(`ticket "${ticket}" - no match`);
            continue;
        }

        let matchingSymbol;
        let matchingSymbolLength;
        if (match1[0].length <= match2[0].length) {
            matchingSymbol = match1[1].substring(0, 1);
            matchingSymbolLength = match1[0].length;
        } else {
            matchingSymbol = match2[1].substring(0, 1);
            matchingSymbolLength = match2[0].length;
        }

        if (matchingSymbolLength < 10) {
            console.log(`ticket "${ticket}" - ${matchingSymbolLength}${matchingSymbol}`);
        }

        if (matchingSymbolLength === 10) {
            console.log(`ticket "${ticket}" - ${matchingSymbolLength}${matchingSymbol} Jackpot!`);
        }
    }
}

winningTicket('Cash$$$$$$Ca$$$$$$sh');
console.log('+++++++++++++++++++++');
winningTicket('$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@@emo######ye');
console.log('+++++++++++++++++++++');
winningTicket('validticketnomatch:(');