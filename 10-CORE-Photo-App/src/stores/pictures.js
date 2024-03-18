import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePicturesStore = defineStore('pictures', () => {
  const pictures = ref([])

  function addPicture(url) {
    this.pictures.push(url)
  }

  return {pictures, addPicture}
});
