const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@cluster0.6ragu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const schema = mongoose.Schema;

const UserSchema = new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
});

var userData = mongoose.model('userData',UserSchema);

module.exports = userData;