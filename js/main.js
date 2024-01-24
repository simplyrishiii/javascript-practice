      document.addEventListener("DOMContentLoaded", function () {
        const unitSelector = document.getElementById("unitSelector");
        const loader = document.getElementById("loader");
        const forecastContainer = document.querySelector(".forecast-container");
        const citySelector = document.getElementById("citySelector");

        const cities = [
          {
            city: "Amsterdam",
            country: "Netherlands",
            latitude: 52.367,
            longitude: 4.904,
          },
          {
            city: "Ankara",
            country: "Turkey",
            latitude: 39.933,
            longitude: 32.859,
          },
          {
            city: "Åstorp",
            country: "Sweden",
            latitude: 56.134,
            longitude: 12.945,
          },
          {
            city: "Athens",
            country: "Greece",
            latitude: 37.983,
            longitude: 23.727,
          },
          {
            city: "Belfast",
            country: "Northern Ireland",
            latitude: 54.597,
            longitude: -5.93,
          },
          {
            city: "Barcelona",
            country: "Spain",
            latitude: 41.387,
            longitude: 2.168,
          },
          {
            city: "Berlin",
            country: "Germany",
            latitude: 52.52,
            longitude: 13.405,
          },
          {
            city: "Bern",
            country: "Switzerland",
            latitude: 46.948,
            longitude: 7.447,
          },
          {
            city: "Bilbao",
            country: "Spain",
            latitude: 43.263,
            longitude: -2.935,
          },
          {
            city: "Brussels",
            country: "Belgium",
            latitude: 50.847,
            longitude: 4.357,
          },
          {
            city: "Bucharest",
            country: "Romania",
            latitude: 47.497,
            longitude: 19.04,
          },
          {
            city: "Budapest",
            country: "Hungary",
            latitude: 59.329,
            longitude: 18.068,
          },
          {
            city: "Cardiff",
            country: "Wales",
            latitude: 51.483,
            longitude: -3.168,
          },
          {
            city: "Cologne",
            country: "Germany",
            latitude: 50.937,
            longitude: 6.96,
          },
          {
            city: "Copenhagen",
            country: "Denmark",
            latitude: 55.676,
            longitude: 12.568,
          },
          {
            city: "Cork",
            country: "Ireland",
            latitude: 51.898,
            longitude: -8.475,
          },
          {
            city: "Dublin",
            country: "Ireland",
            latitude: 53.349,
            longitude: -6.26,
          },
          {
            city: "Edinburgh",
            country: "Scotland",
            latitude: 55.953,
            longitude: -3.188,
          },
          {
            city: "Florence",
            country: "Italy",
            latitude: 43.7696,
            longitude: 11.255,
          },
          {
            city: "Frankfurt",
            country: "Germany",
            latitude: 50.11,
            longitude: 8.682,
          },
          {
            city: "French Riviera",
            country: "France",
            latitude: 43.254,
            longitude: 6.637,
          },
          {
            city: "Funchal",
            country: "Portugal",
            latitude: 32.65,
            longitude: -16.908,
          },
          {
            city: "Gothenburg",
            country: "Sweden",
            latitude: 57.708,
            longitude: 11.974,
          },
          {
            city: "Hamburg",
            country: "Germany",
            latitude: 53.548,
            longitude: 9.987,
          },
          {
            city: "Helsinki",
            country: "Finland",
            latitude: 60.169,
            longitude: 24.938,
          },
          {
            city: "Ibiza",
            country: "Spain",
            latitude: 39.02,
            longitude: 1.482,
          },
          {
            city: "Kyiv",
            country: "Ukraine",
            latitude: 50.45,
            longitude: 30.523,
          },
          {
            city: "Lillehammer",
            country: "Norway",
            latitude: 61.115,
            longitude: 10.466,
          },
          {
            city: "Lisbon",
            country: "Portugal",
            latitude: 38.722,
            longitude: -9.139,
          },
          {
            city: "London",
            country: "England",
            latitude: 51.507,
            longitude: -0.127,
          },
          {
            city: "Madrid",
            country: "Spain",
            latitude: 40.416,
            longitude: -3.703,
          },
          {
            city: "Mallorca",
            country: "Spain",
            latitude: 39.695,
            longitude: 3.017,
          },
          {
            city: "Manchester",
            country: "England",
            latitude: 53.48,
            longitude: -2.242,
          },
          {
            city: "Marseille",
            country: "France",
            latitude: 43.296,
            longitude: 5.369,
          },
          {
            city: "Maspalomas",
            country: "Spain",
            latitude: 27.76,
            longitude: -15.586,
          },
          {
            city: "Milan",
            country: "Italy",
            latitude: 45.464,
            longitude: 9.19,
          },
          {
            city: "Munich",
            country: "Germany",
            latitude: 48.135,
            longitude: 11.582,
          },
          {
            city: "Naples",
            country: "Italy",
            latitude: 40.851,
            longitude: 14.268,
          },
          {
            city: "Oñati",
            country: "Spain",
            latitude: 43.034,
            longitude: -2.417,
          },
          {
            city: "Oslo",
            country: "Norway",
            latitude: 59.913,
            longitude: 10.752,
          },
          {
            city: "Paris",
            country: "France",
            latitude: 48.856,
            longitude: 2.352,
          },
          {
            city: "Prague",
            country: "Czech Republic",
            latitude: 50.075,
            longitude: 14.437,
          },
          {
            city: "Reykjavik",
            country: "Iceland",
            latitude: 64.146,
            longitude: -21.942,
          },
          {
            city: "Riga",
            country: "Latvia",
            latitude: 56.879,
            longitude: 24.603,
          },
          {
            city: "Rome",
            country: "Italy",
            latitude: 41.902,
            longitude: 12.496,
          },
          {
            city: "Santa Cruz das Flores",
            country: "Portugal",
            latitude: 39.453,
            longitude: -31.127,
          },
          {
            city: "Santa Cruz de Tenerife",
            country: "Spain",
            latitude: 28.463,
            longitude: -16.251,
          },
          {
            city: "Skye",
            country: "Scotland",
            latitude: 57.273,
            longitude: -6.215,
          },
          {
            city: "Sofia",
            country: "Bulgaria",
            latitude: 42.697,
            longitude: 23.321,
          },
          {
            city: "Stockholm",
            country: "Sweden",
            latitude: 59.329,
            longitude: 18.068,
          },
          {
            city: "Tallinn",
            country: "Estonia",
            latitude: 59.437,
            longitude: 24.753,
          },
          {
            city: "Vienna",
            country: "Austria",
            latitude: 18.208,
            longitude: 16.373,
          },
          {
            city: "Warsaw",
            country: "Poland",
            latitude: 52.229,
            longitude: 21.012,
          },
          {
            city: "York",
            country: "England",
            latitude: 53.961,
            longitude: -1.07,
          },
          {
            city: "Zurich",
            country: "Switzerland",
            latitude: 47.376,
            longitude: 8.541,
          },
        ];

        // Populate city options
        cities.forEach((cityData) => {
          const option = document.createElement("option");
          option.value = cityData.city;
          option.textContent = cityData.city;
          citySelector.appendChild(option);
        });

        // Function to fetch city name using reverse geocoding
        function getCityName(latitude, longitude) {
          const apiKey = "001ebdbe7e2d4928bb0fc485a3bdc6ca"; // Replace with your OpenCage Geocoding API key
          const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

          return fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
              const city = data.results[0].components.city;
              const country = data.results[0].components.country;
              return { city, country };
            })
            .catch((error) => {
              console.error("Error fetching city name:", error);
              return { city: "", country: "" };
            });
        }

        // Function to fetch weather data from OpenWeatherMap API
        function fetchWeather(city, country, unit) {
          const apiKey = "942b7e4076ae36f280ef908a3941ded7"; // Replace with your OpenWeatherMap API key
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=${unit}&appid=${apiKey}`;

          return fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
              return data;
            })
            .catch((error) => {
              console.error("Error fetching weather data:", error);
              return null;
            });
        }

        // Event listener for city selector
      citySelector.addEventListener("change", function () {
        // Trigger the unit change event to fetch weather for the new city
        const changeEvent = new Event("change");
        unitSelector.dispatchEvent(changeEvent);
      });

      //Event listener for unit selector
        unitSelector.addEventListener("change", function () {
          console.log("Unit changed");
          loader.style.display = "block";
          forecastContainer.style.display = "none";
          forecastContainer.innerHTML = "";

          const selectedUnit = unitSelector.value;
          const selectedCityIndex = citySelector.selectedIndex;
          const selectedCityData = cities[selectedCityIndex];

          fetchWeather(
            selectedCityData.city,
            selectedCityData.country,
            selectedUnit
          ).then((weatherData) => {
            if (weatherData) {
              const temperature = weatherData.main.temp;
              const description = weatherData.weather[0].description;
              const iconCode = weatherData.weather[0].icon;

              console.log("Selected City:", selectedCityData.city);
              console.log("Weather Description:", description);

              const weatherHTML = `
                                <div class="day-container font-extrabold p-4 rounded-lg shadow-lg">
                                    <p>${selectedCityData.city}, ${
                selectedCityData.country
              }</p>
                                    <p>Temperature ->      ${temperature} ${
                selectedUnit === "metric" ? "°C" : "°F"
              }</p>
                                    <p>Description ->      ${description}</p>
                                    <i class="fas fa-${iconCode} fa-3x"></i>
                                </div>
                            `;

              forecastContainer.innerHTML += weatherHTML;
              stopWeatherAudio();
              playWeatherAudio(description,0.6);
            }
          });

          // Simulate loading time
          setTimeout(() => {
            loader.style.display = "none";
            forecastContainer.style.display = "flex";
          }, 2000);
        });
      });

      loader.style.display = "none";

      function stopWeatherAudio() {
        const audioElement = document.getElementById("weatherAudio");
        audioElement.pause();
        audioElement.currentTime = 0;
    }
      
      function playWeatherAudio(condition,volume=1.0) {
        const audioElement = document.getElementById("weatherAudio");
    
        // Define audio sources for each condition
        const audioSources = {
            "Clear Sky": "audios/clearsky.mp3",
            "Cloudy": "audios/cloudy.mp3",
            "Showers": "audios/passingshower.mp3",
            "Rain": "audios/lightrain.mp3",
            "Heavy Rain": "audios/heavyrain.mp3",
            "Rain and Thunder": "audios/rain-and-thunder.mp3",
            "Thunderstorm": "audios/thunder.mp3",
            "Rain Snow": "audios/rainsnow.mp3",
            "Windy": "audios/windy.mp3",
            "Windstorm": "audios/windstorm.mp3",
            "Default": "audios/default.mp3",
        };

        const defaultAudio = "audios/windy.mp3";

        const audioSource = audioSources[condition] || defaultAudio;

        audioElement.src = audioSource;
        audioElement.volume = volume;
        // audioElement.autoplay = true;
        audioElement.play();

    
    
    }