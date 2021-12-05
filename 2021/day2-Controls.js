const fs = require('fs');

function getTestData() {
    let data = new Array(
        'forward 5'
        ,'down 5'
        ,'forward 8'
        ,'up 3'
        ,'down 8'
        ,'forward 2'
    );
    return data;
};

function getData() { 

    let data = new Array();
    try {
        // read contents of the file
        const data = fs.readFileSync('day2-data.txt', 'UTF-8');

        // split the contents by new line
        const lines = data.split(/\r?\n/);
        return lines;
    } catch (err) {
        console.error(err);
    }
    
};

let data = getData();
let xPos = 0;
let yPos = 0;
let aim = 0;

data.forEach(element => {
    let commands = element.split(' ');
    switch(commands[0]) {
        case 'forward':
            xPos += parseInt(commands[1]);
            yPos += (parseInt(commands[1]) * aim);
            break;
        case 'up':
            aim -= parseInt(commands[1]);
            break;
        case 'down':
            aim += parseInt(commands[1]);
            break;
        default:
            break;
    }
});

console.log(xPos * yPos);