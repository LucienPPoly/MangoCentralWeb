const apiUrl = "http://api.weatherapi.com/v1/current.json?key=a96fc1cd005f41b9ad6125026251201&q=Mumbai&aqi=no";
const weatherIcon = document.getElementById('weather-icon');
const temperature = document.getElementById('temperature-value');
const locationp = document.getElementById('location');


fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data.current.condition.icon);

    weatherIcon.src = data.current.condition.icon;
    temperature.innerHTML = data.current.temp_c + "°C";
    locationp.innerHTML = data.location.name;
  })
  .catch(error => {
    console.error('Error:', error);
  });