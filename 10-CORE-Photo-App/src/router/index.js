import { createRouter, createWebHistory } from 'vue-router'
import CameraView from "@/views/CameraView.vue";
import GalleryView from "@/views/GalleryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'camera',
      component: CameraView
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView
    }
  ]
});

export default router
