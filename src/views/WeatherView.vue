<template>
  <div class="container">
    <div class="header">
      <h1>WEATHER APP</h1>
      <div class="search-bar">
        <input
          type="text"
          v-model="city"
          placeholder="Enter city name"
          class="search-input"
        />
        <button @click="searchByCity" class="search-button">Search</button>
      </div>
        <div v-if="weatherData" class="weather-info">
        <h2>{{ weatherData.name }}, {{ weatherData.sys.country }}</h2>
        <div class="weather-details">
          <img :src="iconUrl" alt="Weather Icon" />
          <p>{{ temperature }} °C</p>
          <p>{{ weatherData.weather[0].description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const apikey = "6958f340ca78ffb563d42efc558611a6";
export default {
  name: "App",
  data() {
    return {
      city: "",
      weatherData: null,
    };
  },
  computed: {
    temperature() {
      return this.weatherData
        ? Math.floor(this.weatherData.main.temp - 273)
        : null;
    },
    iconUrl() {
      return this.weatherData
        ? `https://api.openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`
        : null;
    },
  },
  methods: {
    async searchByCity() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apikey}`);
        this.weatherData = response.data;
      } catch (error) {
        console.error('Error fetching weather data:', error);
        this.weatherData = null;
      }
    }
  }
}
</script>

<style>
.main-container {
  padding: 20px; 
  width: 100%; 
  align-items: center;
}

.search-bar {
  margin-bottom: 20px; 
}
</style>


