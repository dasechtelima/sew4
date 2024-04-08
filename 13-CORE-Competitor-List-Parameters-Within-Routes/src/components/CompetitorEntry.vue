<script setup lang="ts">
</script>

<template>
  <div class="item">
    <slot name="rank"></slot>
    <div class="details">
      <h3>
        <slot name="firstname"></slot>
      </h3>
      <h3>
        <slot name="lastname"></slot>
      </h3>
    </div>
    <slot name="inputToUpdateRank"></slot>
  </div>
</template>

<style>
.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
</style>