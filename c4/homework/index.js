const fs = require('fs');

//PRVA VEZBA(fs.appendFile)
const fileAppend = (filename, data) => {
    return new Promise ((success, fail) => {
        fs.appendFile(filename, data, (err) => {
            if (err) {
                return fail(err)
            }
            return success()
        });
    });
};

fileAppend('newFile.txt', 'tekstot sto treba da go vnesam')
    .then(() => {
        console.log('tekstot e vnesen');
    }).catch(err => {
        console.log(err);
    });

(async() => {
    try {
        await fileAppend('newFileOne.txt', 'grug tekst sto treba da go vnesam');
        console.log('i ovoj tekst e vnesen')
    } catch(err) {
        console.log(err)
    }
}) ();

//VTORA VEZBA(fs.rename)
const renameFile = (oldPath, newPath) => {
    return new Promise ((success, fail) => {
        fs.rename(oldPath, newPath, (err) => {
            if(err) {
                return fail(err);
            }
            return success();
        });
    });
};

renameFile('changedFile.txt', 'changedFile2.txt')
    .then(() => {
        console.log('the file name has been changed');
    }).catch(err => {
        console.log(err);
    });

// (async() => {
//     try {
//         await renameFile('changedFile.txt', 'changedFile2.txt')
//         console.log('the file i have changed')
//     } catch(err) {
//         console.log(err)
//     };
// })();

// TRETA VEZBA(fs.access)
const fileAccess = (path, mode) => {
    return new Promise ((success, fail) => {
        fs.access(path, mode, (err) => {
            if(err) {
                return fail(err)
            }
            return success
        });
    });
};

fileAccess('Nodejs/c4/homework/newFile.txt', fs.access.R_OK | fs.access.W_OK)
    .then (() => {
        console.log('The caller is allowed to read and write');
    }) .catch(err => {
        console.log('The caller cannot read or write');
    });

(async() => {
    try {
        await fileAccess(Nodejs/c4/homework/newFile.txt, fs.access.R_OK | fs.access.W_OK);
        console.log('The file can be accessed (read&write)');
    } catch (err) {
        console.log('The file cannot be accessed');
    }
})();

//CETVRTA VEZBA (fs.open)
const openAFile = (path, flags) => {
    return new Promise((success, fail) => {
        fs.open('Nodejs/c4/homework/newFileOne.txt', 'r+', (err, fd) => {
            if(err) {
                return fail(err, fd)
            }
            return success
        });
    });
};

openAFile('Nodejs/c4/homework/newFileOne.txt', 'r+')
    .then(() => {
        console.log('I can open this file for reading and writing');
    }) .catch (err => {
        console.log('I cannot open this file')
    });

(async() => {
    try {
        await openAFile('Nodejs/c4/homework/newFileOne.txt', 'r+');
        console.log('read/write is acceptable');
    } catch (err) {
        console.log('read/write - not acceptable')
    };
})();

//PETTA VEZBA (fs.readdir)

const readADirectory = (path) => {
    return new Promise((success, fail) => {
        fs.readdir(path, (err, files) => {
            if (err) {
                return fail (err, files)
            }
            return success
        });
    });
};

readADirectory('Nodejs/c4/homework')
    .then(() => {
        console.log('can read the directory')
    }).catch(err => {
        console.log('cannot read the directory')
    });

(async () => {
    try {
        await readADirectory(Nodejs/c4/homework);
        console.log('readible directory');
    } catch (err) {
        console.log('not a readible directory');
    };
})();