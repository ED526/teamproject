const express = require('express');
const router = express.Router();
const Contact = require('./models/contact')

router.get('/', (req, res) =>{
    res.render('index');
})

router.get('/contact', (req, res) =>{
    res.render('contact');
})

router.get('/films', (req, res) =>{
    res.render('films');
})

router.get('/requestfilm', (req, res) =>{
    res.render('requestfilm');
})

router.get('/m1_AvgEndgame', (req, res) =>{
    res.render('m1_AvgEndgame');
})
router.get('/m2_MinionsRoG', (req, res) =>{
    res.render('m2_MinionsRoG');
})
router.get('/m3_1917', (req, res) =>{
    res.render('m3_1917');
})



router.post('/submitContact', (req, res) =>{
    const contact = new Contact({
        fname: req.body.fname,
        lname: req.body.lname,
        reason: req.body.reason,
        email: req.body.email,
        message: req.body.message
    });

    Contact.collection.insertOne(contact)
    .then(result =>{
        res.render('contact')
    })
    .catch(err => console.log(err));
})

module.exports = router;