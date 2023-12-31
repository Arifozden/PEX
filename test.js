const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect to db
mongoose.connect('mongodb://localhost/test-db', {useNewUrlParser: true, useUnifiedTopology: true});

//create schema
const PhotoSchema = new Schema({
    title: String,
    description: String,
    price: Number
    });

const Photo = mongoose.model('Photo', PhotoSchema);

//create a photo
// Photo.create({
//     title: 'Photo 2',
//     description: 'Photo 2 description',
//     price: 150
// });


//delete a photo
const id = '6591b867e82f4b33a45d5579';

Photo.findOneAndDelete({ _id: id }, (err, data) => {
    if (err) {
        console.error('Hata:', err);
    } else if (!data) {
        console.log('Fotoğraf bulunamadı');
    } else {
        console.log('Fotoğraf silindi:', data);
    }

    // MongoDB bağlantısını kapat
    mongoose.connection.close();
});