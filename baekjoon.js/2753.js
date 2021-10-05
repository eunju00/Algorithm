const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let a = 0;

rl.on('line',function (line) {

    a = Number(line);

    if (a % 4 === 0){
        if ( a % 100 === 0){
            if(a % 400 === 0) {
                console.log(1);
            } else {
                console.log(0);
            }
        } else {
            console.log(1);
        }
    }
    else {
        console.log(0);
    }

    rl.close();
}).on('close',function () {
    process.exit();
});