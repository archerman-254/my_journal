import mongoose  from "mongoose";

//1st step: Create a schema
//2nd step: Create a model based on the schema

const notechema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    
    content: {
        type: String,
        required: true,
    },


}, { timestamps: true } //createdAt and updatedAt
);

const Note = mongoose.model("Note", notechema);

export default Note;