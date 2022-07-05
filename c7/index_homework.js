const http = require('http');

const url = require('url');

const pages = {
    '/': async (req, res) => {
        const qs = url.parse(req.url, true).query;
    
        console.log(qs);
    
        if (qs.op) console.log(qs.op);
        if (qs.a) console.log(qs.a);
        if (qs.b) console.log(qs.b);
    
        let content = await fileRead('./index.html');
        res.end(content);
    },      
        '/plus': (req, res) => {
            let queryParametars = url.parse(req.url, true).query;
            console.log(queryParametars);
            let first = queryParametars.one;
            let second = queryParametars.two;
            
            let result = parseInt(first) + parseInt(second);
            console.log('The result is:' + " " + (result));
            res.end(JSON.stringify(result));
        },
        '/users': (req, res) => {
            res.end('USERS!');
        }
};

const server = http.createServer(function (req, res) {
    const queryObject = url.parse(req.url, true).query;
    console.log(queryObject);
    let [path, _] = req.url.split('?');
    if(pages[path]) {
        pages[path](req, res);
        res.end('')
    } else {
        res.end('');
    };
});

server.listen(10000);