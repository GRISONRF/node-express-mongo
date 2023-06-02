//import the contents of .env file
require('dotenv').config();


const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const routes = require('./routes/routes');


//connect the database to our serving using Mongoose
mongoose.connect(mongoString);
const database = mongoose.connection;

//throw success or error message depending on whether the db connection is successful or fails
/* database.on means it will connect to the database and throw an error if connection fails */
database.on('error', (error) => {
    console.log(error);
});

/* database.once means it will run only one time */
database.once('connected', () => {
    console.log('Database Connected');
});


const app = express();
app.use(express.json());
app.use('/api', routes);


app.listen(3000, () => {
    console.log(`Server Started at ${3000}`);
})