var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;

var userSchema = new mongoose.Schema({
    username: String,
    name: String,
    lastname: String
});

var taskSchema = new mongoose.Schema({
    title: String,
    startTime: {
        type: Date, 
        default: Date.now,
        required: true
    },
    endTime: Date,
    completed: {
		type: Boolean,
		default: false,
        required: true
    }    
}, {timestamps: true});

var projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    user_id: {
        type: ObjectId,
        ref: "User",        
    }
});

//Exporting schemas
module.exports.user = mongoose.model('User', userSchema);
module.exports.task = mongoose.model('Task', taskSchema);
module.exports.project = mongoose.model('Project', projectSchema);