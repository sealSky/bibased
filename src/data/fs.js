let fs = require('fs');
console.log(fs.readFile());

function test() {
    fs.readFile('./test.json', (err, data) => {
        console.log(data);
    })
}
test();
