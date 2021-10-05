const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let num1 = 0, num2 = 0;
let count = 2;
rl.on('line',function(line){
    if(count===2) num1 = Number(line);
    else if(count === 1) num2 = Number(line);
    count--;
    if(count === 0) {
        rl.close();
    }
}).on('close', function (){
    if (num1>0 && num2 >0){
        console.log('1');
    }
    else if (num1 < 0 && num2 > 0){
        console.log('2');
    }
    else if (num1 < 0 && num2 < 0){
        console.log('3');
    }
    else {
        console.log('4');
    }

    process.exit();
});