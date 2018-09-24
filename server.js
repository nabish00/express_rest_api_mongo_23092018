import express from 'express';
import bodyParser from 'body-parser';


import AdminRoute from './src/Routes/AdminRoutes/AdminRoutes';
var app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use('/Admin', AdminRoute);


app.listen(port, () => {
    console.log("Server Listening on Port : " + port);
})