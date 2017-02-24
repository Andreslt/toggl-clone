var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;
var bcrypt = require('bcrypt-nodejs');

var taskSchema = new mongoose.Schema({
    title: String,    
    duration: Number,
    project_id:{
        type: ObjectId,
        ref: "Project",
    },
    user_id: {
        type: ObjectId,
        ref: "User",
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
        required: true
    },
    finishedAt: Date
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

var projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    user_id: {
        type: ObjectId,
        ref: "User",
        required: true
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