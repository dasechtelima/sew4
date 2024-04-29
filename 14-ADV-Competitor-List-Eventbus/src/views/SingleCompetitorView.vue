<script setup>

import CompetitorEntry from "@/components/CompetitorEntry.vue";
import {useCompetitorStore} from "@/stores/competitor.js";
import {useRoute} from "vue-router";

const competitorStore = useCompetitorStore();
const route = useRoute();
const competitor = competitorStore.getCompetitorById(route.params.uuid);

function updateRank(competitor) {
  try {
    competitorStore.updateRank(competitor);
  } catch (error) {
    console.error(error.message);
  }
}
</script>

<template>
  <h1>Single Competitor View</h1>
  <CompetitorEntry :competitor="competitor">
    <template #firstname> {{ competitor.firstname }}</template>
    <template #lastname> {{ competitor.lastname }}</template>
    <template #rank> {{ competitor.rank }}</template>
    <template #inputToUpdateRank>
      <input type="number" @change="updateRank(competitor)" placeholder="new Rank" v-model="competitor.newRank">
    </template>
  </CompetitorEntry>
</template>

<style scoped>
</style>