const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://******:******@*********.net/baza1?retryWrites=true&w=majority';

const connect = (connectionString) => {
    return new Promise((success, fail) => {
        mongoose.connect(connectionString, err => {
            if (err) return fail(err);
            console.log('Connected successfully to DB!');
            return success();
        });
    });
};

const Studenti = mongoose.model(
    'studenti', // model name
    {
        ime: String,
        prezime: String,
        prosek: Number,
        lokacija: {
            grad: String,
            drzava: String
        }
    },
    'studenti' // collection name
);

connect(connectionString)
    .then(() => {
    return Studenti.find({prosek: {'$gt': 9.0,}}, {ime: 1, prezime: 1, prosek: 1,}).sort({prosek: -1}).limit(5);
})
.then( res => {
    console.log('Топ 5 најдобри студенти по просек, почнувајќи од најдобриот:', res);
    return Studenti.find({prosek: {'$lte': 8.5}, 'lokacija.grad': "Skopje"}, {ime: 1, prezime: 1, prosek: 1, 'lokacija.grad': 1}).sort({prosek: 1}).limit(3); 
})
.then(res => {
    console.log('Топ 3 најлоши студенти од Скопје', res);
    return Studenti.find({prosek: {'$lte': 10.0}, 'lokacija.grad': "Skopje"}, {ime:1, prezime:1, prosek: 1, 'lokacija.grad': 1}).sort({prosek: -1}).limit(10);
})
.then(res => {
    console.log('Најдобри 10 студенти во Скопје:',res);
    return Studenti.find({prosek: {'$lte': 10.0}, 'lokacija.drzava': "Makedonija"}, {ime:1, prezime:1, 'lokacija.grad': 1}).sort({prosek: -1}).limit(3);
})
.then(res => {
    console.log('Најдобри 3 студенти во Македонија', res);
    return Studenti.find({'$lte': 10.0, 'lokacija.grad': "Bitola"}, {prezime: 1, prosek: 1}).sort({prosek: -1}).limit(5);
})
.then(res => {
    console.log('Најдобри 5 студенти од Битола', res);
    return Studenti.find({'lokacija.grad': "Bitola"}, {prezime: 1, 'lokacija.grad': 1}).sort({prezime: 1});
})
.then(res => {
    console.log('Приказ на студенти од Битола подредени по презиме', res);
    return Studenti.find({'lokacija.grad': "Kumanovo"}, {ime: 1, 'lokacija.grad': 1}).sort({ime: 1});
})
.then(res => {
    console.log('Приказ на студенти од Куманово подредени по име', res);
    return Studenti.find({'$lte': 10.0, 'lokacija.drzava': 'Makedonija'}, {ime: 1, prezime: 1, prosek: 1, lokacija: 1}).sort({prosek: -1}).limit(1);
})
.then(res => {
    console.log('Најдобар студент во Македонија', res);
})
    .catch(err => {
         console.log(err);
});
