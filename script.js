const inputValue = document.querySelector(".input");
const addBtn = document.querySelector(".addBtn");
const displayCard = document.querySelector(".display-cards-container");

addBtn.addEventListener("click", addCity);
let API_key = "6d83156e4e40ca97d0c6924b832fe00c";

let debounceTimer;

let cities = [];
async function addCity() {
  // Clear the previous debounce timer
  clearTimeout(debounceTimer);

  // Set a new debounce timer 
  debounceTimer = setTimeout(async () => {
    let getData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${API_key}&units=metric`
    );

    let resp = await getData.json();

    const newCity = {
      name: resp.name,
      temperature: resp.main.temp,
      conditions: resp.weather[0].main,
      max: resp.main.temp_max,
      min: resp.main.temp_min,
      country: resp.sys.country,
    };
 
    cities.push(newCity);

    const weatherImages = {
      Clouds: "Assets/Moon cloud fast wind.png",
      Smoke: "Assets/Moon cloud fast wind.png",
      Snow: "Assets/Moon cloud fast wind.png",
      Rain: "Assets/Moon cloud mid rain.png",
      drizzle: "Assets/Moon cloud mid rain.png",
      Haze: "Assets/Sun cloud angled rain.png",
      Clear: "Assets/Sun cloud angled rain.png",
      Thunderstorm: "Assets/Tornado.png",
    };

    cities.sort((a, b) => a.temperature - b.temperature);

    const weatherCardsContainer = document.querySelector(
      ".display-cards-container"
    );
    weatherCardsContainer.innerHTML = "";

    cities.forEach((city) => {
      const weatherCondition = city.conditions;
      const weatherImageUrl =
        weatherImages[weatherCondition] || "Assets/download.jpeg";

      const image = document.createElement("img");
      image.src = weatherImageUrl;

      const card = document.createElement("div");
      card.className = "card-subcontainer";

      const svgCode = `
    <svg xmlns="http://www.w3.org/2000/svg" width="280" height="250" viewBox="0 0 342 175" fill="none">
      <path d="M0 66.4396C0 31.6455 0 14.2484 11.326 5.24044C22.6519 -3.76754 39.6026 0.147978 73.5041 7.97901L307.903 62.1238C324.259 65.9018 332.436 67.7909 337.218 73.8031C342 79.8154 342 88.2086 342 104.995V131C342 151.742 342 162.113 335.556 168.556C329.113 175 318.742 175 298 175H44C23.2582 175 12.8873 175 6.44365 168.556C0 162.113 0 151.742 0 131V66.4396Z" fill="url(#paint0_linear_1808_26)"/>
      <defs>
        <linearGradient id="paint0_linear_1808_26" x1="0" y1="128" x2="354.142" y2="128" gradientUnits="userSpaceOnUse">
          <stop stop-color="#5936B4"/>
          <stop offset="1" stop-color="#362A84"/>
        </linearGradient>
      </defs>
  
      <foreignObject x="20" y="20" width="280" height="300">
        <div xmlns="http://www.w3.org/1999/xhtml">
          <div class="temp">
            <h2>${city.temperature}°</h2>
            ${image.outerHTML}
          </div>
  
          <div class="units">
            <sub>H:${city.max}°</sub>
            <sub>L:${city.min}°</sub>
          </div>
  
          <div class="location">
            <div class="city">${city.name} ,${city.country}</div>
            <div class="status">${city.conditions}</div>
          </div>
        </div>
      </foreignObject>
    </svg>
  `;

      // Set the innerHTML of the card with the SVG code
      card.innerHTML = svgCode;

      // Append the card to the weatherCardsContainer
      weatherCardsContainer.appendChild(card);

      inputValue.value ="";
    });
  }, 500);
}
