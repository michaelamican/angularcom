var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'What is this thing?'], minlength: [3,'Product must have a complete name']},
    qty: {type: Number, required: [true, 'How many are there?'], min: [0, 'Less than 0 objects is inventory shrink!']},
    price: {type: Number, required: [true, "What's the cost?"], min: [0, 'You cannot pay people to buy from you.']},
    img: {type: String, required:[true, 'What does it look like?']}
}, {timestamps: true}
);
mongoose.model('Product', ProductSchema);

//for numerical ID blackbelt requirement, I would have included an extra field, 'numID', and in the controllers save function, I would have added a count that auto-increments once the function passes its first round of errors, then adds that info to the numID field.

// var ProductSchema = new mongoose.Schema({
//     name: {type: String, required: [true, 'What is this thing?'], minlength: [3,'Product must have a complete name']},
//     qty: {type: Number, required: [true, 'How many are there?'], min: [0, 'Less than 0 objects is inventory shrink!']},
//     price: {type: Number, required: [true, "What's the cost?"], min: [0, 'You cannot pay people to buy from you.']},
//     img: {type: String, required:[true, 'What does it look like?']},
//     numID:{type: Number, required:true, unique:true}
// }, {timestamps: true}
// );

//All calls throughout the application would call numID or :numID instead of _id or :id.