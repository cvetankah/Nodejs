const util = require('./util');

const DATA_SOURCE = './data.txt';

const addStudent = async (req, res) => {
    try { //vo try sakame da gi procitame site podatoci
        // ја вчитуваме содржината на фајлот како стринг
        let dataRaw = await util.fileRead(DATA_SOURCE);
        // проверуваме да не е празен фајлот
        let data = null;
        // претпоставуваме дека ако има нешто во фајлот, тоа е валиден JSON
        data = dataRaw.length > 0 ? JSON.parse(dataRaw) : [];
        // if(dataRaw.length > 0) { vo toj slucaj vikame:
        //     data = JSON.parse(dataRaw);
        // } else {
        //     data = [];
        // }
        // го додаваме новиот запис како нов член на низата
        data.push(req.body); //ke go zeme objektot sto bil ispraten preku postman, ke go dodade vo nizata 
        // ја запишуваме низата во фајлот
        await util.fileWrite(DATA_SOURCE, JSON.stringify(data)); //podatocite mora da bidata string
        // враќаме некаков output кон клиентот (postman)
        res.send('ok');
    } catch(err) {
        res.send(err);
    }
};

const getAllStudents = async (req, res) => {
    try {
        let dataRaw = await util.fileRead(DATA_SOURCE);
        let data = JSON.parse(dataRaw);
        res.send(data)
    }catch(err) {
        res.send(err)
    }
};

// const getOneStudent = async (req, res) => {
//     try {
//         let dataRaw = await util.fileRead(DATA_SOURCE);
//         let data = JSON.parse(dataRaw);
//         if(data[req.params.id]) {
//             return res.send(data[req.params.id]);
//         }
//         res.send('not found');
//     } catch (err) {
//         res.send(err);
//     }
// };

// const updateStudent = async (req, res) => {
//     res.send('ok');
// };

// const deleteStudent = async (req, res) => {
//     res.send('ok');
// };

module.exports = {
    addStudent,
    getAllStudents,
    // getOneStudent,
    // updateStudent,
    // deleteStudent
};