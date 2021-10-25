const mongoose = require("mongoose")

const ContactSchema = new mongoose.Schema({
    email_address: {
        type: String,
        required: [true, 'Please enter a valid email address.'],
        unique: true,
        trim: true,
        maxlength: [200, "Email cannot exceed 200 characters."] 
    },
    first_name: {
        type: String,
        required: [true, 'Please enter your first name.'],
        unique: false,
        trim: true,
        maxlength: [40, "Name cannot exceed 40 characters."] 
    },
    last_name: {
        type: String,
        required: [true, 'Please enter your last name.'],
        unique: false,
        trim: true,
        maxlength: [40, "Name cannot exceed 40 characters."] 
    },
    message_body: {
        type: String,
        required: [true, 'Please enter a message body.'],
        unique: false,
        trim: true,
        maxlength: [40, "Name cannot exceed 5000 characters."] 
    },
    date_submitted: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);