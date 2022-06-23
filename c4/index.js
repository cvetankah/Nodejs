const fs = require('fs');// file system module

fs.writeFile('iminja.txt', 'Janko, Stanko', (err) => {
    if(err) {
        console.log('ERROR:', err);
    }
});

// 1ST THING TO DO
// const fileWrite = () => {
//     return new Promise();
// };


//2ND THING TO DO
// const fileWrite = () => {
//     return new Promise(() => {

//     });
// };


//3RD THING TO DO (promis-ot dava (handla) dva stat-a i tie mu se kako dva parametri)
// const fileWrite = () => {
//     return new Promise((success, fail) => {
        
//     });
// };


//4TH THING TO DO - JA DODAVAM LOGIKATA OD GORE (KODOT STO GO IMAME GORE)
// const fileWrite = () => {
//     return new Promise((success, fail) => {
//         fs.writeFile('iminja.txt', 'Janko, Stanko', (err) => {
//             if(err) {
//                 return fail(err);
//             }
//             return success();
//         });
//     });
// };

// PRV DEL OD F-JA
// const fileWrite = (filename, data) => {
//     return new Promise((success, fail) => {
//         fs.writeFile(filename, data, (err) => {
//             if(err) {
//                 return fail(err);
//             }
//             return success();
//         });
//     });
// };

//VTOR DEL OD F-JA

// fileWrite('ocenki.txt', '4, 5, 3, 4, 4, 5, 3, 2, 1, 2')
//     .then(() => { // then == success funkcijata
//     console.log('SUCCESS!'); 
//     }).catch(err => { //catch == fail funkcijata
//     console.log(err);
// });

//NEKOJA SOSEM TRETA F-JA (TRET DEL)

// fileWrite('boi.txt', 'crvena, zolta, zelena')
//     .then(() => {
//     console.log('SUCCESS 2!');
//     }).catch(err => {
//     console.log(err);
// });


//PRV, VTOR I TRET DEL SPOENI VO EDNO / PRV NACIN KAKO MOZEME DA HENDLAME PROMISI

const fileWrite = (filename, data) => {
    return new Promise((success, fail) => {
        fs.writeFile(filename, data, (err) => {
            if(err) {
                return fail(err);
            }
            return success();
        });
    });
};

fileWrite('ocenki.txt', '4, 5, 3, 4, 4, 5, 3, 2, 1, 2')
    .then(() => { // then == success funkcijata
    console.log('SUCCESS!'); 
    return fileWrite('boi.txt', 'crvena, zolta, zelena')
    }).then(() => {
        console.log('SUCCESS 2!');
    return fileWrite('boi3.txt', 'crvena, crna, bela')
        }).then(() => {
            console.log('SUCCESS 3!')
        }).catch(err => {
        console.log(err);
    }).catch(err => { //catch == fail funkcijata
    console.log(err);
});

    
// VTOR NACIN KAKO MOZEME DA HENDLAME PROMISI (TOA E SO ASINHRONA F-JA)
const main = async () => {
    try {
        await fileWrite('file1.txt', "FILE ONE!");//
        await fileWrite('file2.txt', "FILE TWO!");//
        await fileWrite('file3.txt', "FILE THREE!");//
    } catch(err) {
        console.log(err);
    }
};

main();



const fileRead = (filename) => {
    return new Promise((success, fail) => {// resole, reject
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                return fail(err);
            }
            return success(data);
        });
    });
};

(async () => {
    try {
        let boi = await fileRead('boi.text');
        console.log('BOI:', boi);
    } catch(err) {
        console.log(err);
    }
})();

let imenik = [
    {ime: 'Pero Perovski', telefon: 4355768},
    {ime: 'Janko Jankovski', telefon: 12345678},
    {ime: 'Stanko Stankovski', telefon: 4355768},

];

(async () => {
    try {
        let imenikData = JSON.stringify(imenik); // convert object to string
        console.log(imenikData);
       await fileWrite('imenik.txt', imenikData);
       let dataString = await fileRead('imenik.txt');
       let data = JSON.parse(dataString); // convert string to object
       console.log(data);
    } catch(err) {
        console.log(err)
    }
})();

//self-executing function

// (() => {

// })();