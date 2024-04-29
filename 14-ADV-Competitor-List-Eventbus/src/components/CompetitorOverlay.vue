<template>
  <div class="overlay" v-if="show">
    <div class="overlay-content">
      <h3>Enter a competitor!</h3>
      <slot name="firstname"></slot>
      <slot name="lastname"></slot>
      <slot name="rank"></slot>
      <slot name="buttonAddCompetitor"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    required: true
  }
});
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
  z-index: 1000; /* Ensure it's above other content */
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h3 {
  margin-bottom: 20px;
}
</style>