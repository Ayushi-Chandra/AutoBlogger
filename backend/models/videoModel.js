const {model ,Schema} = require('../connection');

const myschema = new Schema({
    title: String,
    description: String,
    file: String,
    uploadedBy : Object,
    createdAt: Date,
    
});

module.exports=model('users',myschema);