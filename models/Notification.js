const mongoose = require('mongoose');

module.exports = function() {
    const schema = mongoose.Schema({
        user: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Usuario',
            required: true
        },
        message: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: new Date()
        }
    });

    return mongoose.model('Notification', schema, 'notofications');

}