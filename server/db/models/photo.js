'use strict';
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');



var schema = new mongoose.Schema({
    title: {
        type: String
    },
    src: {
        type: String
    },
    thumbSrc: {
        type: String
    },
    date: {
    	type: Date, 
    	default: Date.now
    }
});




schema.pre('save', function (next) {
    next();
  // ...
})


// schema.method('createThumbnail', function (photoId) {
//     console.log("in method", photoId);
//     this.photos.push(photoId)
//     return this.save();
// });


// personSchema.virtual('name.full').get(function () {
//   return this.name.first + ' ' + this.name.last;
// });


// schema.statics.upload = function search (photo) {
//   return this.where('name', new RegExp(name, 'i')).exec(cb);
// }


mongoose.model('Photo', schema);