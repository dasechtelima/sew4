<template>
  <div class="item">
    <div class="column">
      <h4>
        <slot name="text"></slot>
      </h4>
      <i>
        <slot name="timestamp"></slot>
      </i>
    </div>
    <slot name="buttonToComment"></slot>
    <div v-for="reply in comment.replies" :key="reply.id">
      <CommentItem :comment="reply">
        <template #timestamp> {{ formatTimestamp(reply.timestamp) }}</template>
        <template #text> {{ reply.text }}</template>
        <template #buttonToComment>
          <button @click="toggleCommentOverlay">Reply</button>
          <CommentOverlay :show="showCommentOverlay">
            <template #text>
              <input type="text" @change="addComment(reply)" placeholder="Your reply" v-model="commentInput">
            </template>
          </CommentOverlay>
        </template>
      </CommentItem>
    </div>
  </div>
</template>

<script>
import CommentOverlay from "@/components/CommentOverlay.vue";
import {useForumStore} from "@/stores/forum.js";
import {ref} from 'vue';
import {formatDistanceToNow} from "date-fns";

export default {
  name: 'CommentItem',
  components: {
    CommentItem: () => import('./CommentItem.vue'), // Recursive component
    CommentOverlay
  },
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  setup() {
    const forumStore = useForumStore();
    const showCommentOverlay = ref(false);
    const commentInput = ref('');

    function toggleCommentOverlay() {
      showCommentOverlay.value = !showCommentOverlay.value;
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

    function formatTimestamp(timestamp) {
      return formatDistanceToNow(new Date(timestamp), {addSuffix: true});
    }

    return {
      toggleCommentOverlay,
      addComment,
      formatTimestamp,
      showCommentOverlay,
      commentInput
    }
  }
}
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

i {
  margin: 0 20px 0 10px;
}
</style>
