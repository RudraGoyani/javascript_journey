document.getElementById("search-btn").addEventListener("click", function () {
    console.log("pressed the button")
    let city = document.getElementById("city-input");
    if (city.value.trim() !== "") {
        getWeather(city.value);
    }
})
async function getWeather(cityName) {
    try {
        const response = await fetch(`https://wttr.in/${cityName}?format=j1`);
        if (!response.ok) throw new Error(`response status ${response.status}`);
        const data = await response.json();
        console.log(data.current_condition[0]);
        const current_condition = data.current_condition[0];
        document.getElementById("city-name").textContent = cityName;
        document.getElementById("temperature").textContent = current_condition.temp_C;
        document.getElementById("condition").textContent = `${current_condition.weatherDesc[0].value}`
    }
    catch (error) {
        document.getElementById("city-name").textContent =
            "City not found";
    }
}