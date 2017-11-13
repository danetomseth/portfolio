const router = require('express').Router();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

let Client = mongoose.model("Client");


router.get('/', (req, res, next) => {
	Client.find({})
	.then((clients, err) => {
		if (err) {
			console.log("Error fetching clients");
			next(err)
		} else {
			res.send(clients)
		}
	})
})



router.post('/', (req, res, next) => {
	console.log(req.body);
	Client.create(req.body)
	.then((client, err) => {
		if (err) {
			console.log("Error saving")
			next(err)
		} else {
			res.send(client)
		}
	})
})




module.exports = router;