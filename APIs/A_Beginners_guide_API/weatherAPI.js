const apiKey = '4439f2024346780c72bf26e4356469d3';

//Getting weather data for Islamabad, Pakistan
const latIslamabad = 31.5204;  // Islamabad latitude
const lonIslamabad = 74.3587;  // Islamabad longitude

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latIslamabad}&lon=${lonIslamabad}&appid=${apiKey}&units=metric`)
  .then(response => response.json())
  .then(data => {
    // console.log('Current Weather Data:', data); 
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
    console.log(`Temperature for Lahore: ${temperature}°C`);
    console.log(`Weather for Lahore: ${weatherDescription}`);
  })
  .catch(error => console.error('Error fetching weather data:', error));

  //Getting weather data for New York, USA
const latNewYork = 40.7128;  // New York latitude
const lonNewYork = -74.0060;  // New York longitude
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latNewYork}&lon=${lonNewYork}&appid=${apiKey}&units=metric`)
  .then(response => response.json())
  .then(data => { 
    // console.log('Current Weather Data:', data); 
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
    console.log(`Temperature for NYC: ${temperature}°C`);
    console.log(`Weather for NYC: ${weatherDescription}`);
  })
  .catch(error => console.error('Error fetching weather data:', error));