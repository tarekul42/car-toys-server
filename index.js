const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// middlewere
app.use(cors());
app.use(express.json());

// local database(json)
const cars = require('./cars/cartoys.json')

app.get('/', async(req, res)=>{
    res.send('Car Toys server in running');
});

app.get('/cars', async(req, res) =>{
    res.send(cars);
});

app.listen(port, ()=>{
    console.log(`Car toys server is running on port: ${port}`);
})
