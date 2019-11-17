



// process.stdin.resume();
// process.stdin.setEncoding("utf-8");
// var stdin_input = "";

// process.stdin.on("data", function (input) {
//     console.log('You just entered - ' + input);
//     stdin_input += input;                               // Reading input from STDIN
// });

// process.stdin.on("SIGINT", function () {
//     main(stdin_input);
// });

// function main(input) {
//     process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
// }


// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// readline.question(`What's your name?`, (name) => {
//     console.log(`Hi ${name}!`)
//     readline.close()
// });

// ===========  Reading 3 lines of input data from command line:-

const rl = require('readline').createInterface({
    input: process.stdin, // readable Stream: stdin,
    output: process.stdout
});

let count = 0;
rl.on('line', (line) => {
    count++;
    console.log('Got this line - ' + line);
    if (count == 3) {
        rl.close();
    }

});