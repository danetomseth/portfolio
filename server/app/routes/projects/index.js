'use strict';
var router = require('express').Router();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

var Project = mongoose.model('Project');



router.get('/', (req, res, next) => {
    Project.find({})
    .then((projects, err) => {
            if (err) {
                console.log("Error fetching projects");
                next(err);
            } else {
                console.log("sending projects: ", projects);
                res.send(projects);
            }
        })
});

router.get('/:projectId', (req, res, next) => {
    Project.findById(req.params.projectId)
      .populate('photos cover')

    .then(project => {
        console.log('single project', project);
        res.send(project);
    });
});






router.post('/', (req, res, next) => {
    Project.create(req.body)
        .then((project, err) => {
            if (err) {
                console.log("Error saving project");
                next(err);
            } else {
                console.log("project created: ", project);
                res.send(project);
            }
        })
});






module.exports = router;