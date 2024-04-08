<script setup>
import HelloWorld from './components/HelloWorld.vue'
import List from './components/List.vue'
</script>

<template>
  <div class="flex-column">
    <div class="header">
      <img alt="Track and Field illustration" class="logo" src="./assets/undraw_track_and_field_-33-qn.svg"
           width="125"
           height="125"/>

      <div class="wrapper">
        <HelloWorld msg="Welcome to the competitor view"/>
      </div>
    </div>
    <main>
      <List/>
    </main>
  </div>
</template>

<style scoped>
.header {
  line-height: 1.5;
  text-align: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.wrapper {
  text-align: center;
}

@media (min-width: 1024px) {
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  .header .wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>

