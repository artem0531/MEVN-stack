const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
require('dotenv').config();

// Import Routes
const todoList = require('./routes/api/Todolist');

const { PORT, mongoUri } = require('./config');

const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

mongoose.connect(mongoUri)
    .then(() => console.log('MongoDB database Connected...'))
    .catch(err => console.log(err));

app.use('/api/todoList', todoList);

app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${ PORT }`);
})