// const http = require('http');
// const fs = require('fs');
// const url = require('url');

// const fileRead = (filename) => {
//     return new Promise((success, fail) => { // resolve, reject
//         fs.readFile(filename, 'utf8', (err, data) => {
//             if (err) {
//                 return fail(err);
//             }
//             return success(data);
//         });
//     });
// };

// const pages = {
//     '/': async (req, res) => {
//         const qs = url.parse(req.url, true).query;
    
//         console.log(qs);
    
//         if (qs.op) console.log(qs.op);
//         if (qs.one) console.log(qs.one);
//         if (qs.two) console.log(qs.two);
    
//         let content = await fileRead('./index_homework.html');
//         res.end(content);
//     },      
//         '/plus': (req, res) => {
//             let queryParametars = url.parse(req.url, true).query;
//             console.log(queryParametars);
//             let first = queryParametars.one;
//             let second = queryParametars.two;
            
//             let result = parseInt(first) + parseInt(second);
//             console.log('The result is:' + " " + (result));
//             res.end(JSON.stringify(result));
//         },
//         '/users': (req, res) => {
//             res.end('USERS!');
//         }
// };

// const server = http.createServer(function (req, res) {
//     // const queryObject = url.parse(req.url, true).query;
//     // console.log(queryObject);
//     let [path, _] = req.url.split('?');
//     if(pages[path]) {
//         pages[path](req, res);
//         res.end('')
//     } else {
//         res.end('');
//     };
// });

// server.listen(10000);

// const http = require('http');
// const fs = require('fs');
// const url = require('url');

// const fileRead = (filename) => {
//     return new Promise((success, fail) => { // resolve, reject
//         fs.readFile(filename, 'utf8', (err, data) => {
//             if (err) {
//                 return fail(err);
//             }
//             return success(data);
//         });
//     });
// };

// const pages = {
//     '/': async (req, res) => {
//         const qs = url.parse(req.url, true).query;

//         console.log(qs);

//         if (qs.op) console.log(qs.op);
//         if (qs.a) console.log(qs.a);
//         if (qs.b) console.log(qs.b);

//         let content = await fileRead('./index.html');
//         res.end(content);
//     },
//     '/plus': (req, res) => {
//         let queryParametars = url.parse(req.url, true).query;
//         console.log(queryParametars);
//         let first = queryParametars.one;
//         let second = queryParametars.two;
                            
//         let result = parseInt(first) + parseInt(second);
//         console.log('The result is:' + " " + (result));
//         res.end(JSON.stringify(result));
//     },
//     '/minus': (req, res) => {
//         let queryParametars = url.parse(req.url, true).query;
//         console.log(queryParametars);
//         let first = queryParametars.one;
//         let second = queryParametars.two;
                            
//         let result2 = parseInt(first) - parseInt(second);
//         console.log('The result is:' + " " + (result2));
//         res.end(JSON.stringify(result2));
//     },
//     '/users': (req, res) => {
//         res.end('USERS!');
//     }
// };

// const server = http.createServer((req, res) => {
//     // query string parameters // GET parameters
//     // http://localhost:8080/users?a=10&b=5  
//     // /users?a=10&b=5
//     // /users   
//     const queryObject = url.parse(req.url, true).query;
//     console.log(queryObject);                                  
//     let [path, _] = req.url.split('?');
//     if (pages[path]) {
//         pages[path](req, res);
//     } else {
//         res.end('');
//     }
// });

// server.listen(10000);

// РЕШЕНИЕ ОД ЧАС!

const http = require('http');
const fs = require('fs');
const url = require('url');
const fileRead = (filename) => {
    return new Promise((success, fail) => { // resolve, reject
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                return fail(err);
            }
            return success(data);
        });
    });
};

const render = async (page, data) => {
    let content = await fileRead(`./${page}.html`); //zosto ne e ./index.html?
    return content.replace('{{res}}', data);
};

// const pages = {
//     '/': async (req, res) => {
//         // const qs = url.parse(req.url, true).query; // bidejki ovie podatoci trebaat vo sekoja mozna funkcija nadeole, se pravi slednovo: dole, vo if(pages[path]) go pisuvam slednovo: rq.query=qs (ova request tuka go zbogatuva so novo property sto se vika query i vo nego ja pustame taa vrenost )

const pages = {
    '/': async (req, res) => {
        // const qs = url.parse(req.url, true).query;

        console.log(qs.query);

        // if (qs.op) console.log(qs.op);
        // if (qs.a) console.log(qs.a);
        // if (qs.b) console.log(qs.b);

        if (req.query.op) console.log(req.query.op);
        if (req.query.a) console.log(req.query.a);
        if (req.query.b) console.log(req.query.b);
        // let content = await fileRead('./index.html');
        // res.end(content);
    },
    '/users': (req, res) => {
        res.end('USERS!');
    },
    '/home': (req, res) => {
        res.end('Home2!');
    },
    '/plus': async (req, res) => {
        let result = `${Number(req.query.a) + Number(req.query.b)}`;
        res.end(await render('index', result));
    },
    '/minus': async (req, res) => {
        let result = `${Number(req.query.a) - Number(req.query.b)}`;
        res.end(await render('index', result));
    },
    '/delenje': async (req, res) => {
        let result = `${Number(req.query.a) / Number(req.query.b)}`;
        res.end(await render('index', result));
    },
    '/mnozenje': async (req, res) => {
        let result = `${Number(req.query.a) * Number(req.query.b)}`;
        res.end(await render('index', result));
    },
};

const server = http.createServer((req, res) => {  
                                 
        let [path, _] = req.url.split('?');
        if (pages[path]) {
            const qs = url.parse(req.url, true).query;
            req.query = qs;
            pages[path](req, res);
        } else {
            res.end('');
        }
    });
    
    server.listen(8080);