function extractEmails(text) {

    let pattern = /[-._]*[A-Za-z0-9]+\.?-?_?\w*@\w+\.?-?\w*\.?\w*\.+\w+/g;
    let eMails = text.matchAll(pattern);
    if (eMails !== null) {
        for (const kurMail of eMails) {
            if (kurMail[0].startsWith('-')) {
                continue;
            } else if (kurMail[0].startsWith('.')) {
                continue;
            } else if (kurMail[0].startsWith('_')) {
                continue;
            }
            console.log(kurMail[0]);
        }
    }
}

extractEmails('Please contact us at: support@github.com.');
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');
extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. -- steve.parker@softuni.de.');
extractEmails(': --123@gmail.com, …@mail.bg, .info@info.info, _steve@yahoo.cn, mike@helloworld, mike@.unknown.soft., s.johnson@invalid-.');