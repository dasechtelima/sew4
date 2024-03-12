<script setup>
import axios from "axios";
import {ref} from "vue";

const hostname = ref('');
const ip = ref('');
const country = ref('');
const city = ref('');
const latitude = ref('');
const longitude = ref('');
const timeZone = ref('');
const timeZoneAbbr = ref('');
const localTime = ref('');
const sunrise = ref('');
const sunset = ref('');
const currentWeather = ref('');

async function search() {
  //Once the input exceeds three characters, the search functionality is triggered.
  if (hostname.value.length < 3) {
    return;
  }

  ip.value = '';
  country.value = '';
  city.value = '';
  latitude.value = '';
  longitude.value = '';
  timeZone.value = '';
  timeZoneAbbr.value = '';
  localTime.value = '';
  sunrise.value = '';
  sunset.value = '';
  currentWeather.value = '';

  try {
    const response = await axios.get(`http://www.dns-lg.com/us01/${hostname.value}/a`, {headers: {}});
    ip.value = response.data['answer'][0]['rdata'];
  } catch (error) {
    console.error(error);
  }

  if (ip.value !== '') {
    try {
      const response = await axios.get(`http://ip-api.com/json/${ip.value}`, {headers: {}});
      country.value = response.data['country'];
      city.value = response.data['city'];
      latitude.value = response.data['lat'];
      longitude.value = response.data['lon'];
    } catch (error) {
      console.error(error);
    }

    if (latitude.value !== '' && longitude.value !== '') {
      axios.get(`http://api.timezonedb.com/v2.1/get-time-zone?key=9L37J7JQ55W8&format=json&by=position&lat=${latitude.value}&lng=${longitude.value}`, {headers: {}})
          .then(response => {
            timeZone.value = response.data['zoneName'];
            timeZoneAbbr.value = response.data['abbreviation'];
            localTime.value = response.data['formatted'];
          }).catch(error => {
        console.error(error);
      });

      axios.get(`https://api.sunrise-sunset.org/json?lat=${latitude.value}&lng=${longitude.value}`, {headers: {}})
          .then(response => {
            sunrise.value = response.data['results']['sunrise'];
            sunset.value = response.data['results']['sunset'];
          }).catch(error => {
        console.error(error);
      });

      axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude.value}&longitude=${longitude.value}&current=temperature`, {headers: {}})
          .then(response => {
            currentWeather.value = response.data['current']['temperature'];
          }).catch(error => {
        console.error(error);
      });
    }
  }
}
</script>

<template>
  <form>
    <!-- An input field for entering the URL is available. -->
    <input v-on:input="search()" v-model="hostname" type="text" name="hostname" id="hostname"
           placeholder="put in an URL">
  </form>
  <div v-if="ip.length !== 0">
    <!-- the first ip address of that hostname-->
    <p><b>IP:</b> {{ ip }}</p>
    <!-- the country, city and geo-coordinates of the ip address-->
    <div v-if="country.length !== 0">
      <p><b>Country:</b> {{ country }}</p>
      <p><b>City:</b> {{ city }}</p>
      <p><b>Latitude:</b> {{ latitude }}</p>
      <p><b>Longitude:</b> {{ longitude }}</p>
    </div>
    <p id="errorMessage" v-else>No location found</p>
    <!-- the local time, timezone, sunrise, and sunset info for that place-->
    <div v-if="timeZone.length !== 0">
      <p><b>Time Zone:</b> {{ timeZone }} ({{ timeZoneAbbr }})</p>
      <p><b>Local Time:</b> {{ localTime }}</p>
    </div>
    <p id="errorMessage" v-else>No time found</p>
    <div v-if="sunrise.length !== 0">
      <p><b>Sunrise:</b> {{ sunrise }}</p>
      <p><b>Sunset:</b> {{ sunset }}</p>
    </div>
    <p id="errorMessage" v-else>No sunrise and sunset found</p>
    <!-- current weather information for that place-->
    <p v-if="currentWeather.length !== 0">
      <b>Current temperature:</b> {{ currentWeather }}°C</p>
    <p id="errorMessage" v-else>No temperature found</p>
  </div>
  <!-- Once the input exceeds three characters, the search functionality is triggered.-->
  <p v-else-if="hostname.length <= 3">Keep typing to search...</p>
  <p id="errorMessage" v-else>Invalid hostname</p>
</template>

<style scoped>

</style>