<script setup>
import IdeaItem from './IdeaItem.vue'
import {useForumStore} from "@/stores/forum.js";
import IdeaOverlay from "@/components/IdeaOverlay.vue";
import CommentOverlay from "@/components/CommentOverlay.vue";
import {onMounted, onUnmounted, ref} from "vue";
import {formatDistanceToNow} from "date-fns";
import CommentItem from "@/components/CommentItem.vue";

const forumStore = useForumStore();
const showIdeaOverlay = ref(false);
const showCommentOverlay = ref(false);
const headingInput = ref('');
const textInput = ref('');
const commentInput = ref('');

function toggleIdeaOverlay() {
  showIdeaOverlay.value = !showIdeaOverlay.value;
}

function toggleCommentOverlay() {
  showCommentOverlay.value = !showCommentOverlay.value;
}

function addIdea() {
  try {
    const timestamp = new Date().toISOString();
    forumStore.addIdea({
      timestamp: timestamp,
      heading: headingInput.value,
      text: textInput.value,
      comments: []
    });
    toggleIdeaOverlay();
    headingInput.value = '';
    textInput.value = '';
  } catch (error) {
    console.error(error.message);
  }
}

function addComment(commentOn) {
  try {
    const timestamp = new Date().toISOString();
    forumStore.addComment({
      timestamp: timestamp,
      text: commentInput.value,
      commentOnID: commentOn.id
    });
    toggleCommentOverlay();
    commentInput.value = '';
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
    <button @click="toggleIdeaOverlay">Add Idea</button>
    <IdeaOverlay :show="showIdeaOverlay">
      <template #heading>
        <input type="text" placeholder="Title of your idea" v-model="headingInput">
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
        <template #buttonToComment>
          <button @click="toggleCommentOverlay">Comment</button>
          <CommentOverlay :show="showCommentOverlay">
            <template #text>
              <input type="text" @change="addComment(idea)" placeholder="Your comment" v-model="commentInput">
            </template>
          </CommentOverlay>
        </template>
      </IdeaItem>
      <CommentItem v-for="comment in idea.comments" :key="comment.id" :comment="comment">
        <template #timestamp> {{ formatTimestamp(comment.timestamp) }}</template>
        <template #text> {{ comment.text }}</template>
        <template #buttonToComment>
          <button @click="toggleCommentOverlay">Reply</button>
          <CommentOverlay :show="showCommentOverlay">
            <template #text>
              <input type="text" @change="addComment(comment)" placeholder="Your reply" v-model="commentInput">
            </template>
          </CommentOverlay>
        </template>
      </CommentItem>
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