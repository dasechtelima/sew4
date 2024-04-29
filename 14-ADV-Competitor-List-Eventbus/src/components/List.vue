<script setup>
import CompetitorEntry from './CompetitorEntry.vue'
import {useCompetitorStore} from "@/stores/competitor.js";
import {inject, onMounted, ref} from 'vue';
import CompetitorOverlay from "@/components/CompetitorOverlay.vue";

const competitorStore = useCompetitorStore();
const competitors = competitorStore.competitors;
const firstnameInput = ref('');
const lastnameInput = ref('');
const rankInput = ref('');
const showCompetitorOverlay = ref(false);
import useEventsBus from "@/eventbus.js";

function toggleCompetitorOverlay() {
  showCompetitorOverlay.value = !showCompetitorOverlay.value;
}

const {on} = useEventsBus();

onMounted(() => {
  on("callme", result => {
    console.log(result)
  });
})

function addCompetitor() {
  try {
    competitorStore.addCompetitor({
      firstname: firstnameInput.value,
      lastname: lastnameInput.value,
      rank: rankInput.value,
      newRank: null
    });
    toggleCompetitorOverlay()
  } catch (error) {
    console.error(error.message);
  }
  firstnameInput.value = '';
  lastnameInput.value = '';
  rankInput.value = '';
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
  <button @click="toggleCompetitorOverlay">Add competitor</button>
  <CompetitorOverlay :show="showCompetitorOverlay">
    <template #firstname>
      <input type="text" placeholder="firstname" v-model="firstnameInput">
    </template>
    <template #lastname>
      <input type="text" placeholder="lastname" v-model="lastnameInput">
    </template>
    <template #rank>
      <input type="number" placeholder="rank" v-model="rankInput">
    </template>
    <template #buttonAddCompetitor>
      <button @click="addCompetitor()">Add competitor</button>
    </template>
  </CompetitorOverlay>
  <div v-for="competitor in competitors" :key="competitor.id">
    <CompetitorEntry :competitor="competitor">
      <template #rank> {{ competitor.rank }}</template>
      <template #firstname>
        <RouterLink :to="'/comp/' + competitor.id">{{ competitor.firstname }}</RouterLink>
      </template>
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
  margin-bottom: 10px;
}
</style>