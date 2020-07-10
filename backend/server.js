const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;  //how we create our express server

app.use(cors()); //middleware
app.use(express.json()); //parse JSON

const uri = process.env.ATLAS_URI;
 mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
 );
 const connection = mongoose.connection;
 connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
    console.log("connected");
    
 })

 const exerciseRouter = require('./routes/exercise'); //tell the server to use these files or schema
 const userRouter = require('./routes/user');

console.log("server established");
 app.use('/exercise',exerciseRouter);
 app.use('/user',userRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`); //starts listening the server on port 5000
});