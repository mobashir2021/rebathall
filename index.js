const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/* app.use(bodyParser.urlencoded({limit: "5000mb", extended: true, parameterLimit:5000000}));
app.use(bodyParser.json({limit: "5000mb"})); */

app.use(cors({origin: '*'}));
app.options('*', cors());

//const url = 'mongodb://localhost:27017/rebath'

const url = 'mongodb://rebathmongo:x1DJEAZKfFjy1HD8jLVAJG2LwwhZ26kWysvzNvLVRaCMuHBtG1v2lderbsAOm1XYSINRaoLXUZMCZTA4zkDmNw%3D%3D@rebathmongo.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@rebathmongo@'




mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})
app.use(express.json())

const templateRouter = require('./routes/template')
app.use('/template',templateRouter)

const customerRouter = require('./routes/customer')
app.use('/customer',customerRouter)


const sendmailRouter = require('./routes/emailsend')
app.use('/emailsend',sendmailRouter)

app.listen(process.env.PORT || 9000, () => {
    console.log('Server started')
})

