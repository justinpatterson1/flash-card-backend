const mongoose = require( 'mongoose');
const { Schema } = mongoose;

const flashCardSchema = new Schema({
    question:
    {
        type:String,
        require:true
    },

    answer:
    {
        type:String,
        require:true
    },

    dateCreated:
    {
        type:Date,
        default:Date.now()
    }

  
});

const flashCard = mongoose.model(`Q&A`,flashCardSchema)
module.exports = flashCard;