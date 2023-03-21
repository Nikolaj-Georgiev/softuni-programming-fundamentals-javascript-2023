function browserHistory(browserObject, commandsArray) {

    for (let i = 0; i < commandsArray.length; i++) {
        let holder = commandsArray[i];
        let currentCommand = holder.split(' ');
        let command = currentCommand.shift();
        let info = currentCommand.join(' ');


        switch (command) {
            case 'Open':
                browserObject['Browser Logs'].push(holder);
                browserObject['Open Tabs'].push(info);
                break;
            case 'Close':
                if (browserObject['Open Tabs'].includes(info)) {
                    browserObject['Browser Logs'].push(holder);
                    let index = browserObject['Open Tabs'].indexOf(info);
                    browserObject['Open Tabs'].splice(index, 1);
                    browserObject['Recently Closed'].push(info);
                }
                break;
            case 'Clear':
                browserObject['Open Tabs'] = [];
                browserObject['Recently Closed'] = [];
                browserObject['Browser Logs'] = [];
                break;
        }

    }

    let result = `${browserObject['Browser Name']}
Open Tabs: ${browserObject['Open Tabs'].join(', ')}
Recently Closed: ${browserObject['Recently Closed'].join(', ')}
Browser Logs: ${browserObject['Browser Logs'].join(', ')}`;
    // console.log(browserObject['Browser Name']);
    // console.log(`Open Tabs: ${browserObject['Open Tabs'].join(', ')}`);
    // console.log(`Recently Closed: ${browserObject['Recently Closed'].join(', ')}`);
    // console.log(`Browser Logs: ${browserObject['Browser Logs'].join(', ')}`);
    return result;
}

console.log(browserHistory({
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
}, ["Close Facebook", "Open StackOverFlow", "Open Google"]));
console.log('++++++++++++++');
console.log(browserHistory({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
}, ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]));