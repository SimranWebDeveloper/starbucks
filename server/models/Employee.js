const mongoose = require('mongoose');

const STATUS_OPTIONS = ['admin', 'user'];

const employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    status: {
        type: String,
        enum: STATUS_OPTIONS,
        required: true,
        default: 'user'
    }
})

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee