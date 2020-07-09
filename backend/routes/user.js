const router = require('express').Router();
let User = require('../modals/user.modals');

router.route('/').get((req,res) => { //the end point where the data comes from mongodb and http request
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const newUser = new User({username});
    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;