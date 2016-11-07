'use strict';
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
let deepPopulate = require('mongoose-deep-populate')(mongoose);


var schema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    category: {
        type: String
    },
    summary: {
        type: String
    },
    content: {
        type: Array
    },
    coverPhoto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Photo'
    },
    photos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Photo'
    }]
});

schema.plugin(deepPopulate);

mongoose.model('Project', schema)