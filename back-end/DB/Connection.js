const mongoose = require('mongoose');

const URI =
'mongodb+srv://onepapi:taraji19@cluster0.eosir.mongodb.net/onepapi?retryWrites=true&w=majority'
{/*'mongodb+srv://onepapi:taraji19@cluster0.eosir.mongodb.net/onepapi?retryWrites=true&w=majority';*/}
const connectDB = async ()=> {
    mongoose.connect (URI , {

        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });
    

    
    console.log('db connected..!')

};

module.exports = connectDB
