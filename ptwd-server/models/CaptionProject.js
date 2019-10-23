const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const captionProjectSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    title: {
        type: String,
        required: true,
        minlength: 2
    },
    genre: {
        type: String,
        required: true,
        minlength: 2
    },
    description: {
        type: String,
        required: true,
        minlength: 2
    },
    createdBy: {
        type: String,
        required: true,
        minlength: 2
    },
},
    {
        timestamps: true
    });

// "Project" model --> "projects" collection
const ProjectCaption = mongoose.model("ProjectCaption", captionProjectSchema);
module.exports = ProjectCaption;


