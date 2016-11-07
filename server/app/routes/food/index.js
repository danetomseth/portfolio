'use strict';
var router = require('express').Router();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

var Food = mongoose.model('Food');



router.get('/', (req, res, next) => {
    Food.find({})
    .then((foods, err) => {
            if (err) {
                console.log("Error fetching foods");
                next(err);
            } else {
                console.log("sending foods: ", foods);
                res.send(foods);
            }
        })
});

router.get('/:foodId', (req, res, next) => {
    Food.findById(req.params.foodId)
    .then(food => {
        console.log('single food', food);
        res.send(food);
    });
});






router.post('/', (req, res, next) => {
    Food.create(req.body)
        .then((food, err) => {
            if (err) {
                console.log("Error saving food");
                next(err);
            } else {
                console.log("food created: ", food);
                res.send(food);
            }
        })
});






module.exports = router;