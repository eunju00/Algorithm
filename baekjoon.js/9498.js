const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let num = 0;

rl.on('line', function (line) {

    num = Number(line);

    if (num >= 90 && num <= 100){
        console.log('A');
    } else if (num >= 80 && num <= 89){
        console.log('B');
    } else if (num >= 70 && num <= 79){
        console.log('C');
    } else if (num >= 60 && num <= 69){
        console.log('D');
    } else {
        console.log('F');
    }
    rl.close();
}).on('close',function () {
    process.exit();
});