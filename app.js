//import express and mongoose
const express = require('express');
const mongoose = require('mongoose');

//set the port for local app to 3000
const app = express();

app.listen(3000, () =>{
    console.log(`Server started at ${3000}`)
})



// //create a get request
// app.get('/', (req, res) => {
//     res.status(200);
//     res.send("Welcome to root URL of Server");
// });

// //setting up a get request on te hello path
// app.get('/hello', (req, res)=> {
//     res.set('Content-Type', 'text/html');
//     res.status(200).send("<h1>Hello!!</h1>")
// });

// //to send data to server
// /* the express.json() middleware is used to parse the incoming request object as a JSON obj, and the syntax app.use() use any middleware. */
// app.use(express.json());
// app.post('/', (req, res)=> {
//     const {name} = req.body;

//     res.send(`Welcome ${name}`);
// })

// //call the listen() function -> it gets executed either on the successtor start of the server or due to an error
// app.listen(PORT, (error) => {
//     if(!error)
//         console.log("Server is Successfully Running, and App is Listening on Port " + PORT)
//     else 
//         console.log("Error Occurred, Server can't start", error)
//     }
// );
