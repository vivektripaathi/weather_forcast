const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

async function getWeather(city){
    try{
        const appID = process.env.WEATHER_APP_ID
        const weatherApiURL = process.env.WEATHER_API_URL
        const unit = "metric"
        const apiURL = `${weatherApiURL}?units=${unit}&q=${city}&appid=${appID}`
        const response = await axios.get(apiURL)
        return response.data.main.temp
    }
    catch (error) {
        console.error(`Error fetching weather for ${city}: ${error.message}`);
        return 'N/A';
    }
}

router.post("/", async (req, res)=>{
    const { cities }  = req.body;
    const weatherData = {};
    for (const city of cities) {
        weatherData[city] = await getWeather(city);
    }
    res.json({ weather: weatherData });
})

module.exports =router