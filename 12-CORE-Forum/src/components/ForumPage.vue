<script setup>
import IdeaItem from './IdeaItem.vue'
import {useForumStore} from "@/stores/forum.js";
import IdeaOverlay from "@/components/IdeaOverlay.vue";
import {onMounted, onUnmounted, ref} from "vue";
import {formatDistanceToNow} from "date-fns";

const forumStore = useForumStore();
const showOverlay = ref(false);
const headingInput = ref('');
const textInput = ref('');

function toggleOverlay() {
  showOverlay.value = !showOverlay.value;
}

function addIdea() {
  try {
    const timestamp = new Date().toISOString();
    forumStore.addIdea({
      timestamp: timestamp,
      heading: headingInput.value,
      text: textInput.value,
      formattedTimestamp: formatDistanceToNow(new Date(timestamp), {addSuffix: true})
    });
    toggleOverlay();
    headingInput.value = '';
    textInput.value = '';
  } catch (error) {
    console.error(error.message);
  }
}

let intervalId = null

onMounted(() => {
  intervalId = setInterval(() => {
    forumStore.ideas.forEach(idea => {
      idea.formattedTimestamp = formatDistanceToNow(new Date(idea.timestamp), {addSuffix: true})
    })
  }, 60000) // Update every minute
})

onUnmounted(() => {
  clearInterval(intervalId)
})

function formatTimestamp(timestamp) {
  return formatDistanceToNow(new Date(timestamp), {addSuffix: true});
}
</script>

<template>
  <div class="container">
    <button @click="toggleOverlay">Add Idea</button>
    <IdeaOverlay :show="showOverlay">
      <template #heading>
        <input type="text" autofocus placeholder="Title of your idea" v-model="headingInput">
      </template>
      <template #text>
        <input id="ideaInput" type="text" @change="addIdea" placeholder="describe your idea" v-model="textInput">
      </template>
    </IdeaOverlay>
    <div v-for="idea in forumStore.ideas" :key="idea.id">
      <IdeaItem :idea="idea">
        <template #timestamp> {{ formatTimestamp(idea.timestamp) }}</template>
        <template #heading> {{ idea.heading }}</template>
        <template #text> {{ idea.text }}</template>
      </IdeaItem>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  margin-bottom: 10px;
}

#ideaInput {
  width: 300px;
  height: 100px;
}
</style>
