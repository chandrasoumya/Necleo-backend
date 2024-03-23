const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true, 
    },
    Details: {
        type: String,
        required: true, 
    }
});

const Project = mongoose.model("projects",projectSchema);

module.exports = Project;
