const {model ,Schema,Types} = require('../connection');

const myschema = new Schema({
    title: String,
    // description: String,
    file: String,
    transcription: String,
    uploadedby: {type : Types.ObjectId, ref : 'users'},
    createdAt: Date,
    
});

module.exports=model('videos',myschema);