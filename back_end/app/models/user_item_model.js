const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function getPrice(num) {
    console.log('hit?')
    return (num / 100).toFixed(2);
};
  
// Setter
function setPrice (num){
    return num * 100;
};

function getDateToString(date){
    console.log('date is hit')
    return date.toDateString();
}

var userPostSchema = new Schema({
    userID: String,
    postID: String,
    title: String,
    location: String,
    price: { type: Number, set: setPrice},
    time: { type: Date},
    body: String,
    contactInfo: String,
    isFulfilled: Boolean,
});

userPostSchema.set('toObject', { setters: true });
userPostSchema.set('toJSON', { setters: true });

module.exports = mongoose.model('user_item', userPostSchema);