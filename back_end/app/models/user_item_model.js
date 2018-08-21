const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function getPrice(num) {
    return (num / 100).toFixed(2);
};
  
// Setter
function setPrice (num){
    return num * 100;
};

var userPostSchema = new Schema({
    userID: String,
    title: String,
    location: String,
    price: { type: Number, get: getPrice, set: setPrice},
    time: Date,
    body: String,
    isFulfilled: Boolean,
});

userPostSchema.set('toObject', { getters: true, setters: true });
userPostSchema.set('toJSON', { getters: true, setters: true });

module.exports = mongoose.model('user_item', userPostSchema);