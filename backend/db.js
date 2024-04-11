const mongosse = require('mongoose');

//connect mongosse with database

mongosse.connect('mongodb+srv://username : password@cluster0.unkxrel.mongodb.net/todo');

//create the schema
const todoSchema = mongosse.Schema({
    title : String,
    descrption : String,
    isComplate : {
        type : Boolean,
        default : false
    }
});

//create model
const todo = mongosse.model('todo' , todoSchema);

module.exports = {
    todo
}

