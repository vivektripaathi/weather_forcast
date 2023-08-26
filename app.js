const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')
const ejs = require("ejs");
const app = express()
const axios = require('axios');
require('dotenv').config();
const apiEndpoint = process.env.API_URL

// middleware
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());


//Routes
const getWeather = require('./routes/weather');
const { log } = require('console');
app.use(`${apiEndpoint}/getWeather`, getWeather)

// Client Routes
app.get("/", (req, res)=>{
    res.render('home')
})

app.post('/', async (req, res)=>{
    const cities = {}
    const  input   = req.body.input
    const city_names = input.split(', ')
    cities['cities'] = city_names
    const response = await axios({
        method: 'post',
        url: `http://localhost:${PORT}${apiEndpoint}/getWeather`,
        data: cities
    });
    const { weather } = response.data
    let cityName = Object.keys(weather)
    res.setHeader('Content-Type', 'text/html');
    for (const city of cityName){
        res.write(`<h1>Its ${weather[city]}&#8451; in ${city}</h1>`)
    }
    res.send()
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})