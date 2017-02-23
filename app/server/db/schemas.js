var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;
var bcrypt = require('bcrypt-nodejs');

var taskSchema = new mongoose.Schema({
    title: String,
    startTime: {
        type: Date,
        default: Date.now,
        required: true
    },
    endTime: Date,
    duration: Number,
    project_id:{
        type: ObjectId,
        ref: "Project",
    },
    completed: {
        type: Boolean,
        default: false,
        required: true
    }
}, { timestamps: true });

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

var userSchema = new mongoose.Schema({
    twitter: {
        id: String,
        token: String,
        displayName: String,
        username: String
    }
});

userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
};

userSchema.methods.hashPassword = function (password) {
    var user = this;
    bcrypt.hash(password, null, null, function (err, hash) {
        if (err)
            return next(err);
        user.local.password = hash;
    });
};

//Exporting schemas
module.exports.user = mongoose.model('User', userSchema);
module.exports.task = mongoose.model('Task', taskSchema);
module.exports.project = mongoose.model('Project', projectSchema);