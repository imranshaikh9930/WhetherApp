
#Whether App

Deploy Link :- https://imranshaikh9930whetherapp.netlify.app/
-------------------------------------------------
![whether123](https://github.com/imranshaikh9930/WhetherApp/assets/87297004/24fd672b-7c4b-4745-be0f-1e20619766e2)



The weather dashboard you are tasked with creating is an interactive web application designed to provide real-time weather information for various cities. The application features an input field and an "Add" button, allowing users to add cities dynamically to a weather card list. Each card displays specific weather details, including an image corresponding to the weather condition, creating an engaging and responsive user experience.

To achieve this, the OpenWeatherMap API is utilized with the endpoint https://api.openweathermap.org/data/2.5/weather?q={CITY_NAME}&appid={API_KEY}&units=metric. You need to sign up at OpenWeatherMap to generate your API key for authentication.

The API response includes a rich set of weather-related properties, but the focus is on extracting key information:

City Name (name): Displays the name of the city.
Weather Conditions (weather): An array containing weather conditions, such as "Rain," "Clear," etc.
Temperature and Weather Data (main): An object providing temperature, humidity, and pressure details.
Wind Information (wind): An object indicating wind speed and direction.
Cloudiness (clouds): An object specifying the cloudiness percentage.
Sunrise, Sunset, and Country Code (sys): An object containing the country code, sunrise, and sunset times.
The application employs the concept of debouncing to enhance user experience. Debouncing is a practice of introducing a delay in response to a user action, such as typing in the input field. In this case, the debounce timer is set to prevent excessive API requests while the user is typing. The input value is trimmed, and if it is not empty, a new API request is initiated only after a specified delay (e.g., 500 milliseconds) since the last user input. This helps reduce unnecessary API calls and enhances the overall performance of the application.

The dynamic weather cards are generated based on the retrieved data, including the corresponding weather image based on the weather condition. The cards are then sorted by temperature to provide a visually appealing and informative display of weather information for each city.

In case of API errors or unsuccessful requests, the application includes a try-catch block to handle and log errors, ensuring a robust and user-friendly experience.
