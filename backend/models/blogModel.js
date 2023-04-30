// signup form    
const {Schema, model, Types} = require('../connection');

const myschema = new Schema({
    title:String,
    description:String,
    category:String,
    text:String,
    createdAt:Date,
    image:String,
    data: String,
    user: {
        type: Types.ObjectId,
        ref: 'users'
    }
});

module.exports = model('blogs',myschema);