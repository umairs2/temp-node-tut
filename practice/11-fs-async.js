const { readFile, writeFile } = require('fs');

console.log('start');
readFile('./content/first.txt', 'utf8', (err, firstResult) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = firstResult;
    readFile('./content/second.txt', 'utf8', (err, secondResult) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = secondResult;
        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            'utf8',
            (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('done with this task');
            }
        );
    });
});
console.log('starting next task');
