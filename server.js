const mongo = require('./mongo');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const route = require('./route/pages');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', route);

mongoose.connect(mongo, {useNewURLParser: true, useUnifiedTopology: true})
.then(() => {
    app.listen(process.env.PORT||3000, ()=> {
        console.log("Server is running on 3000")
    })
})

