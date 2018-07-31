var feedbackSchema = new Schema({
    contactInfo: String,
    feedback: String
})

module.exports = mongoose.model('Feedback', feedbackSchema);