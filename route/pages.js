const express = require('express');
const router = express.Router();
const Contact = require('./models/contact')

router.get('/', (req, res) =>{
    res.render('index')
})

router.get('/about', (req, res) =>{
    res.render('about')
})

router.get('/films', (req, res) =>{
    res.render('films')
})

router.get('/requestafilm', (req, res) =>{
    res.render('requestafilm')
})

router.get('/m1', (req, res) =>{
    res.render('m1')
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