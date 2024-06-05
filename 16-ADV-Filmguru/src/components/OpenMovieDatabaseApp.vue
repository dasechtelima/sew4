<script setup>
import {ref, watch} from 'vue';
import axios from "axios";
import Pagination from './Pagination.vue'

const dataRequest = 'http://www.omdbapi.com/?apikey=2828b03e';
const input = ref('');
let output = ref('');
let page = ref('1');
const selectedType = ref('');
let error = false;
let searchTimeout = null;

async function search() {
  if (searchTimeout) {
    clearTimeout(searchTimeout);
  }
  searchTimeout = setTimeout(async () => {
    if (input.value.length < 3 || page.value < 1 || page.value === '') {
      return;
    }
    try {
      let newDataRequest = dataRequest;
      newDataRequest += `&page=${page.value}&s=${input.value}`;
      if (selectedType.value === 'all' || selectedType.value === '') {
        newDataRequest = newDataRequest.replace(`&type=${selectedType.value}`, '');
      } else {
        newDataRequest += `&type=${selectedType.value}`;
      }
      const response = await axios.get(`${newDataRequest}`, {headers: {}});
      output.value = response.data['Search'];
      console.log(response.data);
      error = response.data['Response'] === 'False';
    } catch (error) {
      console.error(error);
    }
  }, 2000);
}

function onPageChange(pageNew) {
  console.log(pageNew);
  return page.value = pageNew;
}

function lastPage() {
  if (page.value > 1) {
    page.value = (parseInt(page.value) - 1).toString();
  }
  search();
}

function nextPage() {
  page.value = (parseInt(page.value) + 1).toString();
  search();
}
</script>

<template>
  <div class="largeContainer">
    <div class="inputFields">
      <input v-on:change="search" type="text" v-model="input" placeholder="search for a movie"/>
      <p v-if="input.length < 3" class="red">Keep typing to search...</p>
      <div v-on:change="search" class="radioButtons">
        Select Type:
        <input checked type="radio" id="all" value="all" v-model="selectedType">
        <label for="all">All</label>
        <input type="radio" id="movie" value="movie" v-model="selectedType">
        <label for="movie">Movie</label>
        <input type="radio" id="series" value="series" v-model="selectedType">
        <label for="series">Series</label>
        <input type="radio" id="episode" value="episode" v-model="selectedType">
        <label for="episode">Episode</label>
      </div>
    </div>
    <div>
      <button @click="lastPage">Last Page</button>
      <button @click="nextPage">Next Page</button>
    </div>
    <div v-if="error">
      <p class="red">No results found</p>
    </div>
    <!--      <div id="app">-->
    <!--        <pagination-->
    <!--            :totalPages="10"-->
    <!--            :currentPage="Number(page)"-->
    <!--            @pagechanged="onPageChange"-->
    <!--        />-->
    <!--      </div>-->
    <div class="resultRow">
      <div v-for="result in output">
        <h1> {{ result['Title'] }}</h1>
        <br>
        <img :src="result['Poster']" alt="Poster">
        <h2>Description: {{ result['Description'] }}</h2>
        <h3>Type: {{ result['Type'] }}</h3>
        <p>Page: {{ page.toString() }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.inputFields {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

input {
  margin: 10px;
}

.red {
  color: red;
}

.resultRow {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
}

.largeContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
