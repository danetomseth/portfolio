'use strict';
let mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
let deepPopulate = require('mongoose-deep-populate')(mongoose);

var schema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    about: {
        type: String
    },
    testimonial: {
        type: String
    },
    // logo: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Photo'
    // },
    logo: {
        type: String,
        ref: 'Photo',
        default: "assets/img/self/coco-3.jpg"
    },
    photos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Photo'
    }]
});

schema.plugin(deepPopulate);

mongoose.model('Client', schema)