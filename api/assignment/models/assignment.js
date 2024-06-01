let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AssignmentSchema = Schema({
    id: String,
    name: String,
    deadLine: Date,
    rendered: Boolean,
    author: String,
    course: {
        name: String,
        coursePhoto: String,
        teacherPhoto: String
    },
    mark: Number,
    comment: String
});

module.exports = mongoose.model('Assignment', AssignmentSchema);
