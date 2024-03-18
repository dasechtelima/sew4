<script setup>
import {computed} from 'vue';
import {usePicturesStore} from "../stores/pictures.js";

let picturesStore = usePicturesStore();

let reversedPictures = computed(() => [...picturesStore.pictures].reverse());
</script>

<template>
  <div class="contentarea">
    <h1 class="text-5xl m-2">Gallery</h1>
    <div class="content">
      <div v-for="picture in reversedPictures">
        <img :src='picture' alt="" class="picture w-[100%] m-2 p-2">
      </div>
    </div>
  </div>
</template>

<style scoped>
.contentarea {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.picture {
  margin: 10px;
}
</style>