const {model ,Schema} = require('../connection');

const myschema = new Schema({
    title: String,
    description: String,
    data: String,
    thumbnail: String,
    createdby: {type : Types.ObjectId, ref : 'users'},
    createdAt: Date,
});

module.exports=model('users',myschema);
