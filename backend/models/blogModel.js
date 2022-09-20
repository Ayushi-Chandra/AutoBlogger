const {model ,Schema, Types} = require('../connection');

const myschema = new Schema({
    title: String,
    description: String,
    data: String,
    thumbnail: String,
    createdBy: {type : Types.ObjectId, ref : 'users'},
    createdAt: Date,
});

module.exports=model('blogs',myschema);
