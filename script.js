function showWeather(event) {
  event.preventDefault();
  let city = document.querySelector("#exampleInputCity1");
  let apiKey = "877ddaa55b5e9c0d70a1933d85e50b02";
  let apiEndPoint = `https://api.openweathermap.org/data/2.5/weather?q=${
    city.value
  }&appid=${apiKey}&units=metric`;
  let content = document.querySelector(".content");

  axios.get(`${apiEndPoint}`).then(showTemperature);
  function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    content.innerHTML = `It is now ${temperature} º in ${city.value}.`;
    let cardHeader = document.querySelector("h5.title");
    cardHeader.innerHTML = `Current weather in ${city.value}`;
  }
}
let newCity = document.querySelector("#cityForm");
newCity.addEventListener("submit", showWeather);
