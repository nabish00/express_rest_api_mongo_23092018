import express from 'express';
import bodyParser from 'body-parser';
import Config from './Config/Config';
import mongoose from 'mongoose';
import 'dotenv';


import AdminRoute from './src/Routes/AdminRoutes/AdminRoutes';
// console.log(process.env);
// console.log(Config.db.connectionString);
// const cn = process.env.CONNECTION_STRING;
// console.log(Config.db.connectionString);
mongoose.connect(Config.db.connectionString, { useNewUrlParser: true });
let db = mongoose.connection;

// Check connection
db.once('open', function(){
  console.log('Connected to MongoDB');
});

// Check for DB errors
db.on('error', function(err){
  console.log(err);
});
var app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use('/Admin', AdminRoute);


app.listen(port, () => {
    console.log("Server Listening on Port : " + port);
})