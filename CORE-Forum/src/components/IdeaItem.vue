<script setup lang="ts">
</script>

<template>
  <div class="item">
    <div class="column">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <h4>
        <slot name="text"></slot>
      </h4>
      <i>
        <slot name="timestamp"></slot>
      </i>
    </div>
    <slot name="buttonToComment"></slot>
  </div>
</template>

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