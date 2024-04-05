<script setup>
import CompetitorEntry from './CompetitorEntry.vue'
import {useCompetitorStore} from "@/stores/competitor.js";
import {ref} from 'vue';

const competitorStore = useCompetitorStore();
const competitors = competitorStore.competitors;
const firstnameInput = ref('');
const lastnameInput = ref('');
const rankInput = ref('');

function addCompetitor() {
  try {
    competitorStore.addCompetitor({
      firstname: firstnameInput.value,
      lastname: lastnameInput.value,
      rank: rankInput.value,
      newRank: null
    });
    firstnameInput.value = '';
    lastnameInput.value = '';
    rankInput.value = '';
  } catch (error) {
    console.error(error.message);
  }
}

function updateRank(competitor) {
  try {
    competitorStore.updateRank(competitor);
  } catch (error) {
    console.error(error.message);
  }
}
</script>

<template>
  <input type="text" placeholder="firstname" v-model="firstnameInput">
  <input type="text" placeholder="lastname" v-model="lastnameInput">
  <input type="number" placeholder="rank" v-model="rankInput">
  <button @click="addCompetitor">Add competitor</button>
  <div v-for="competitor in competitors" :key="competitor.id">
    <CompetitorEntry :competitor="competitor">
      <template #rank> {{ competitor.rank }}</template>
      <template #firstname>{{ competitor.firstname }}</template>
      <template #lastname>{{ competitor.lastname }}</template>
      <template #inputToUpdateRank>
        <input type="number" @change="updateRank(competitor)" placeholder="new Rank" v-model="competitor.newRank">
      </template>
    </CompetitorEntry>
  </div>
</template>

<style scoped>
input {
  margin-right: 10px;
}
</style>