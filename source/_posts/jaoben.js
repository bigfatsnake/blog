const fs = require('fs');
const { resolve } = require('path');

const Path = resolve(__dirname, './辨析词汇.md');

let text = fs.readFileSync(Path, { encoding: 'utf-8' });

text = text.replace(/(\d+?)\./g, (a, b, c, d, e, f) => {
    if (b > 406) {

        return (b - 1) + '.';
    } else {
        return a
    }
});

fs.writeFileSync(Path, text);