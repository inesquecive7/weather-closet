let city = "Lisbon";
let apiKey = "877ddaa55b5e9c0d70a1933d85e50b02";
let apiEndPoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
let content = document.querySelector(".content");

axios.get(`${apiEndPoint}`).then(function(response) {
  let temperature = Math.round(response.data.main.temp);
  content.innerHTML = `It is now ${temperature} º in ${city}.`;
});
