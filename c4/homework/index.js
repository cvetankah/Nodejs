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
            return success()
        });
    });
};

fileAccess('newFile.txt', fs.access.R_OK | fs.access.W_OK)
    .then (() => {
        console.log('Vezba 3: The caller is allowed to read and write');
    }) .catch(err => {
        console.log('Vezba 3: The caller cannot read or write');
    });

(async() => {
    try {
        await fileAccess('newFile.txt', fs.access.R_OK | fs.access.W_OK);
        console.log('Vezba 3: The file can be accessed (read&write)');
    } catch (err) {
        console.log(err)
        console.log('Vezba 3: The file cannot be accessed');
    }
})();

//CETVRTA VEZBA (fs.open)
const openAFile = (path, flags) => {
    return new Promise((success, fail) => {
        fs.open('newFileOne.txt', 'r+', (err, fd) => {
            if(err) {
                return fail(err, fd)
            }
            return success()
        });
    });
};

openAFile('newFileOne.txt', 'r+')
    .then(() => {
        console.log('Vezba 4: I can open this file for reading and writing');
    }) .catch (err => {
        console.log('Vezba 4: I cannot open this file')
    });

(async() => {
    try {
        await openAFile('newFileOne.txt', 'r+');
        console.log('Vezba 4: read/write is acceptable');
    } catch (err) {
        console.log('Vezba 4: read/write - not acceptable')
    };
})();

//PETTA VEZBA (fs.readdir)

const readADirectory = (path) => {
    return new Promise((success, fail) => {
        fs.readdir(path, (err, files) => {
            if (err) {
                return fail (err, files)
            }
            return success()
        });
    });
};

readADirectory('../homework')
    .then(() => {
        console.log('vezba 5: can read the directory')
    }).catch(err => {
        console.log('vezba 5: cannot read the directory')
    });

(async () => {
    try {
        await readADirectory('../homework');
        console.log('Vezba 5: readible directory');
    } catch (err) {
        console.log('Vezba 5: not a readible directory');
    };
})();