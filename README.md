# Weather App

A Node.js web application that fetches real-time weather data from the OpenWeatherMap API for multiple cities and provides a user-friendly interface to access this information.

## Features

- **Real-time Weather**: Get current weather conditions for multiple cities.
- **User-Friendly UI**: An intuitive web interface for entering city names and viewing weather results.
- **Secure API Key Handling**: API keys are stored securely in a `.env` file.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- API key from OpenWeatherMap (sign up at [OpenWeatherMap](https://openweathermap.org/) to get your API key).

## Installation

1. Clone the repository to your local machine:
```bash
    git clone https://github.com/vivek-tripathi-9005/weather_forcast
    cd weather_forcast
 ```

2. Install project dependencies:
```bash
    npm install
```

3. Create a .env file in the project's root directory and add your OpenWeatherMap API key:
```env
    WEATHER_APP_ID = your_api_key_here
    WEATHER_API_URL = https://api.openweathermap.org/data/2.5/weather
    API_URL = /api/v1
```
## Usage

1. Start the node.js server
```bash
    node app.js
```

2. Open your web browser and navigate to `http://localhost:3000`

3. Enter the names of the cities you want to check the weather for (comma-separated).

4. Click the "Get Weather" button to retrieve and display the weather results.

## Customization

- You can customize the appearance of the input box and button by modifying the `style.css` file that is the  in the `public/css` directory.
- To use a different weather API, update the WEATHER_API_URL variable in `.env` file  and adjust the API call in the getWeather function at `routes/weather.js` to match your API's format.

## API Reference

- The API endpoint for retrieving weather data is /getWeather, which accepts a POST request with the following JSON format:
```json
    {
        "cities": ["toronto", "mumbai", "london"]
    }
```

- The response format will be:
```json
    {
        "weather": {
            "toronto": "24°C",
            "mumbai": "34°C",
            "london": "14°C"
        }
    }
```
Acknowledgments
- This project was created as a learning exercise.
- Thanks to [OpenWeatherMap](https://openweathermap.org/) for providing weather data.
- Special thanks to the [Express](https://expressjs.com/) and [axios](https://axios-http.com/) libraries for making this project possible.
