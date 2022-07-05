const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Server test');
    console.log(req.url);
    let urlParams = req.url;
    let parted = urlParams.split('/');
    console.log(parted);
    let operation = parted[1];
    let firstOperand = parted[2];
    let secondOperand = parted[3];
    switch(operation) {
        case "sobiranje":
            let result1 = parseInt(firstOperand) + parseInt(secondOperand);
            console.log(result1);
            res.end(JSON.stringify(result1));
            break;
        case "odzemanje":
            let result2 = parseInt(firstOperand) - parseInt(secondOperand);
            console.log(result2);
            res.end(JSON.stringify(result2));
            break;
        case "mnozenje":
            let result3 = parseInt(firstOperand) * parseInt(secondOperand);
            console.log(result3);
            res.end(JSON.stringify(result3))
            break;
        case "delenje":
            let result4 = parseInt(firstOperand) / parseInt(secondOperand);
            console.log(result4);
            res.end(JSON.stringify(result4));
            break;
        default: 
    }
    console.log(req.url);
    console.log(req.method);
});

server.listen(10000);