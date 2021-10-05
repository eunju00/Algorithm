const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let a = 0;
rl.on('line',function(line) {
    a = Number(line);
    rl.close();
}).on('close',function () {
    for (let i = 1; i <= 9; i ++) {
        console.log(a ,"*", i ,"=", (a*i));
    }
    process.exit();
})

