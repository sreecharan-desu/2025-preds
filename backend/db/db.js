const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://srecharandesu:charan%402006@cluster0.a9berin.mongodb.net/CampusSchieldAPI');

const dataSchema = new mongoose.Schema({
    name : String,
    data : Object
})
   
const Data = mongoose.model('Data', dataSchema);


module.exports = {
    Data
};
