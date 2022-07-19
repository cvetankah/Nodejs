const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://cvetankah:cvetanka1992@cluster0.qj0lf6h.mongodb.net/baza1?retryWrites=true&w=majority';

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
        prosek: Number
    },
    'studenti' // collection name
);

connect(connectionString)
    .then(() => {
    return Studenti.find({});
})
    .then(res => {
        console.log(res);
        let s = new Studenti({
            ime: "Ivan",
            prezime: "Ivanovski",
            prosek: 7.3
        });
        return s.save()
        .then(res => {
            console.log('SAVED!', res);
            return Studenti.updateOne({_id: '62d7317e3af668760fb89700'}, {prezime: 'Petrovski'})
            .then(res => {
                console.log('UPDATE FINISHED');
                return Studenti.deleteOne({_id: '62d733c43af668760fb89702'});
            })
            .then(res => { // ova e za koga pravime kolekcija na podatoci
                console.log('DELETED RECORD', res);
                return Studenti.find({ime: 'Ivan'}, {prezime: 1});
            })
            .then(res => {
                console.log('FILTERED RESULTS:', res);
                return Studenti.find({prosek: {'$gte': 9} }, { prezime: 1, prosek: 1});
            })
            .then(res => {
                console.log('FILTERED RESULTS 2', res);
                return Studenti.deleteMany({ime: 'Ivann'});
            })
            .then(res => {
                console.log('FILTERED RESULTS 3', res);
            })
    })
    })
    .catch(err => {
        console.log(err);
    });